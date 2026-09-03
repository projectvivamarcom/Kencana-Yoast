import re
from typing import List
from app.schemas import AnalysisResultItem


def extract_subheadings(content: str) -> List[str]:
    matches = re.findall(
        r"<h([2-6])[^>]*>(.*?)</h\1>", content, flags=re.IGNORECASE | re.DOTALL
    )
    return [re.sub(r"<[^>]+>", " ", m[1]).strip() for m in matches]


def check_keyphrase_in_subheadings(
    content: str, focus_keyphrase: str
) -> AnalysisResultItem:
    cleaned_keyphrase = focus_keyphrase.strip().lower()
    subheadings = extract_subheadings(content)
    subheading_count = len(subheadings)

    if not cleaned_keyphrase:
        return AnalysisResultItem(
            name="Keyphrase in subheadings",
            status="problem",
            message="No focus keyphrase was set.",
            details={
                "subheading_count": subheading_count,
                "matching_subheadings": 0,
            },
        )

    if subheading_count == 0:
        return AnalysisResultItem(
            name="Keyphrase in subheadings",
            status="problem",
            message="No subheadings found in the content.",
            details={
                "subheading_count": 0,
                "matching_subheadings": 0,
            },
        )

    matching_subheadings = sum(
        1 for sub in subheadings if cleaned_keyphrase in sub.lower()
    )

    if matching_subheadings > 0:
        status = "good"
        message = f"Focus keyphrase found in {matching_subheadings} of {subheading_count} subheadings."
    else:
        status = "problem"
        message = "Focus keyphrase does not appear in any subheading."

    return AnalysisResultItem(
        name="Keyphrase in subheadings",
        status=status,
        message=message,
        details={
            "subheading_count": subheading_count,
            "matching_subheadings": matching_subheadings,
        },
    )
