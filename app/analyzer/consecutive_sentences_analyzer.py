import re
from bs4 import BeautifulSoup
from app.schemas import AnalysisResultItem


def check_consecutive_sentences(content: str) -> AnalysisResultItem:
    soup = BeautifulSoup(content or "", "html.parser")
    text = soup.get_text(separator=" ", strip=True)

    raw_sentences = re.split(r"[.!?]+", text)
    sentences = [s.strip() for s in raw_sentences if s.strip()]
    total_sentences = len(sentences)

    if total_sentences == 0:
        return AnalysisResultItem(
            name="Consecutive sentences",
            status="problem",
            message="Several consecutive sentences start with the same word.",
            details={
                "total_sentences": 0,
                "repeated_start_groups": 0,
                "longest_repeated_start": 0,
                "sentences_in_repeated_groups": 0,
            },
        )

    first_words = []
    for s in sentences:
        words = s.split()
        if words:
            cleaned_word = re.sub(r"^[^\w]+|[^\w]+$", "", words[0]).lower()
            first_words.append(cleaned_word if cleaned_word else words[0].lower())

    # Run-length encoding kata pertama kalimat yang berurutan
    run_lengths = []
    if first_words:
        current_word = first_words[0]
        current_count = 1
        for w in first_words[1:]:
            if w == current_word:
                current_count += 1
            else:
                run_lengths.append(current_count)
                current_word = w
                current_count = 1
        run_lengths.append(current_count)

    longest_repeated_start = max(run_lengths) if run_lengths else 1
    repeated_groups = [r for r in run_lengths if r >= 3]
    repeated_start_groups = len(repeated_groups)
    sentences_in_repeated_groups = sum(repeated_groups)

    if longest_repeated_start >= 4:
        status = "problem"
        message = "Several consecutive sentences start with the same word."
    elif longest_repeated_start == 3:
        status = "improvement"
        message = "Some consecutive sentences start with the same word."
    else:
        status = "good"
        message = "The sentences have varied beginnings."

    return AnalysisResultItem(
        name="Consecutive sentences",
        status=status,
        message=message,
        details={
            "total_sentences": total_sentences,
            "repeated_start_groups": repeated_start_groups,
            "longest_repeated_start": longest_repeated_start,
            "sentences_in_repeated_groups": sentences_in_repeated_groups,
        },
    )

