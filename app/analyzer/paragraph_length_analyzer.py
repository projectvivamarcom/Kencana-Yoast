from bs4 import BeautifulSoup
from app.schemas import AnalysisResultItem


def check_paragraph_length(content: str) -> AnalysisResultItem:
    soup = BeautifulSoup(content or "", "html.parser")
    p_tags = soup.find_all("p")

    paragraphs = []
    for p in p_tags:
        text = p.get_text(separator=" ", strip=True)
        if text:
            paragraphs.append(text)

    total_paragraphs = len(paragraphs)

    if total_paragraphs == 0:
        return AnalysisResultItem(
            name="Paragraph length",
            status="problem",
            message="Several paragraphs are too long and may be difficult to read.",
            details={
                "total_paragraphs": 0,
                "average_words_per_paragraph": 0.0,
                "long_paragraphs": 0,
                "max_words_in_paragraph": 0,
            },
        )

    paragraph_word_counts = [len(p.split()) for p in paragraphs]
    total_words = sum(paragraph_word_counts)
    long_paragraphs = sum(1 for count in paragraph_word_counts if count > 80)
    max_words_in_paragraph = max(paragraph_word_counts)
    average_words_per_paragraph = round(total_words / total_paragraphs, 2)

    long_ratio = long_paragraphs / total_paragraphs

    if long_paragraphs == 0:
        status = "good"
        message = "The paragraphs have a good length."
    elif long_ratio <= 0.30:
        status = "improvement"
        message = "Some paragraphs may be too long and could be easier to read."
    else:
        status = "problem"
        message = "Several paragraphs are too long and may be difficult to read."

    return AnalysisResultItem(
        name="Paragraph length",
        status=status,
        message=message,
        details={
            "total_paragraphs": total_paragraphs,
            "average_words_per_paragraph": average_words_per_paragraph,
            "long_paragraphs": long_paragraphs,
            "max_words_in_paragraph": max_words_in_paragraph,
        },
    )

