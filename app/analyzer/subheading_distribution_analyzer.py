import re
from bs4 import BeautifulSoup
from app.schemas import AnalysisResultItem
from app.analyzer.keyphrase_analyzer import count_words


def check_subheading_distribution(
    content: str, word_count: int = None
) -> AnalysisResultItem:
    if word_count is None:
        word_count = count_words(content)

    soup = BeautifulSoup(content or "", "html.parser")
    subheadings = soup.find_all(["h2", "h3", "h4"])
    total_subheadings = len(subheadings)

    if word_count == 0:
        return AnalysisResultItem(
            name="Subheading distribution",
            status="problem",
            message="The content is long but does not contain enough subheadings.",
            details={
                "total_words": 0,
                "total_subheadings": 0,
                "max_words_between_subheadings": 0,
                "sections_over_limit": 0,
            },
        )

    # Pisahkan konten menjadi section di antara tag heading h2, h3, h4
    raw_sections = re.split(
        r"<h[2-4][^>]*>.*?</h[2-4]>", content or "", flags=re.IGNORECASE | re.DOTALL
    )
    section_word_counts = [count_words(sec) for sec in raw_sections]

    max_words_between_subheadings = (
        max(section_word_counts) if section_word_counts else word_count
    )
    sections_over_limit = sum(1 for count in section_word_counts if count > 300)

    if total_subheadings == 0 and word_count > 600:
        status = "problem"
        message = "The content is long but does not contain enough subheadings."
    elif sections_over_limit > 0:
        status = "improvement"
        message = "Some sections are too long without a subheading."
    else:
        status = "good"
        message = "Subheadings are well distributed throughout the content."

    return AnalysisResultItem(
        name="Subheading distribution",
        status=status,
        message=message,
        details={
            "total_words": word_count,
            "total_subheadings": total_subheadings,
            "max_words_between_subheadings": max_words_between_subheadings,
            "sections_over_limit": sections_over_limit,
        },
    )

