import re
from app.schemas import AnalysisResultItem


def count_words(content: str) -> int:
    text_without_html = re.sub(r"<[^>]+>", " ", content)
    words = text_without_html.split()
    return len(words)


def count_keyphrase_occurrences(content: str, focus_keyphrase: str) -> int:
    cleaned_keyphrase = focus_keyphrase.strip().lower()
    if not cleaned_keyphrase:
        return 0

    text_without_html = re.sub(r"<[^>]+>", " ", content)
    pattern = r"\b" + re.escape(cleaned_keyphrase) + r"\b"
    matches = re.findall(pattern, text_without_html, flags=re.IGNORECASE)
    return len(matches)


def check_keyphrase_density(content: str, focus_keyphrase: str) -> AnalysisResultItem:
    cleaned_keyphrase = focus_keyphrase.strip().lower()
    word_count = count_words(content)

    if not cleaned_keyphrase or word_count == 0:
        keyword_count = 0
        density = 0.0
        status = "problem"
    else:
        keyword_count = count_keyphrase_occurrences(content, cleaned_keyphrase)
        density = round((keyword_count / word_count) * 100, 2)

        if 0.5 <= density <= 3.0:
            status = "good"
        elif 3.0 < density <= 5.0:
            status = "improvement"
        else:
            status = "problem"

    return AnalysisResultItem(
        name="Keyphrase density",
        status=status,
        message=f"Focus keyphrase density is {density:.2f}%.",
        details={
            "keyword_count": keyword_count,
            "word_count": word_count,
            "density": density,
        },
    )
