import re
from bs4 import BeautifulSoup
from app.schemas import AnalysisResultItem


def check_keyphrase_distribution(
    content: str, focus_keyphrase: str
) -> AnalysisResultItem:
    cleaned_keyphrase = focus_keyphrase.strip().lower() if focus_keyphrase else ""

    soup = BeautifulSoup(content or "", "html.parser")
    text = soup.get_text(separator=" ", strip=True)
    words = text.split()
    total_words = len(words)

    if not cleaned_keyphrase or total_words == 0:
        return AnalysisResultItem(
            name="Keyphrase distribution",
            status="problem",
            message="The focus keyphrase is not evenly distributed throughout the content.",
            details={
                "total_occurrences": 0,
                "segments_with_keyphrase": 0,
                "total_segments": 4,
                "segment_counts": [0, 0, 0, 0],
            },
        )

    segment_counts = []
    pattern = r"\b" + re.escape(cleaned_keyphrase) + r"\b"

    for i in range(4):
        start_idx = i * total_words // 4
        end_idx = (i + 1) * total_words // 4 if i < 3 else total_words
        segment_words = words[start_idx:end_idx]
        segment_text = " ".join(segment_words)
        count = len(re.findall(pattern, segment_text, flags=re.IGNORECASE))
        segment_counts.append(count)

    total_occurrences = sum(segment_counts)
    segments_with_keyphrase = sum(1 for c in segment_counts if c > 0)

    if segments_with_keyphrase >= 3:
        status = "good"
        message = "The focus keyphrase is well distributed throughout the content."
    elif segments_with_keyphrase == 2:
        status = "improvement"
        message = "The focus keyphrase is not evenly distributed throughout the content."
    else:
        status = "problem"
        message = "The focus keyphrase is not evenly distributed throughout the content."

    return AnalysisResultItem(
        name="Keyphrase distribution",
        status=status,
        message=message,
        details={
            "total_occurrences": total_occurrences,
            "segments_with_keyphrase": segments_with_keyphrase,
            "total_segments": 4,
            "segment_counts": segment_counts,
        },
    )

