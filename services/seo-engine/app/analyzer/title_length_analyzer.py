from app.schemas import AnalysisResultItem


def check_seo_title_length(title: str) -> AnalysisResultItem:
    character_count = len(title.strip())

    if 50 <= character_count <= 60:
        status = "good"
        message = f"SEO title length is {character_count} characters."
    elif 40 <= character_count <= 49:
        status = "improvement"
        message = f"The SEO title is too short ({character_count} characters). Optimal length is 50-60 characters."
    elif character_count < 40:
        status = "problem"
        message = f"The SEO title is too short ({character_count} characters). Optimal length is 50-60 characters."
    elif 61 <= character_count <= 70:
        status = "improvement"
        message = f"The SEO title is too long ({character_count} characters). Optimal length is 50-60 characters."
    else:  # character_count > 70
        status = "problem"
        message = f"The SEO title is too long ({character_count} characters). Optimal length is 50-60 characters."

    return AnalysisResultItem(
        name="SEO title length",
        status=status,
        message=message,
        details={"character_count": character_count},
    )
