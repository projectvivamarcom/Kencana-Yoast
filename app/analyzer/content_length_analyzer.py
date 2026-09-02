from app.schemas import AnalysisResultItem
from app.analyzer.keyphrase_analyzer import count_words


def check_content_length(content: str, word_count: int = None) -> AnalysisResultItem:
    if word_count is None:
        word_count = count_words(content)

    if word_count == 0:
        status = "problem"
        message = "Content is empty."
    elif word_count < 300:
        status = "problem"
        message = f"Content contains {word_count} words. The content is too short."
    elif 300 <= word_count <= 599:
        status = "improvement"
        message = f"Content contains {word_count} words."
    else:  # >= 600
        status = "good"
        message = f"Content contains {word_count} words."

    return AnalysisResultItem(
        name="Content length",
        status=status,
        message=message,
        details={"word_count": word_count},
    )

