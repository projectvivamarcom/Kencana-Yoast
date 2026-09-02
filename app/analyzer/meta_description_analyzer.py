from app.schemas import AnalysisResultItem


def check_meta_description_length(meta_description: str) -> AnalysisResultItem:
    cleaned_meta = meta_description.strip() if meta_description else ""
    character_count = len(cleaned_meta)

    if 120 <= character_count <= 160:
        status = "good"
    elif (100 <= character_count <= 119) or (161 <= character_count <= 170):
        status = "improvement"
    else:
        # kurang dari 100 (termasuk kosong 0) atau lebih dari 170 karakter
        status = "problem"

    return AnalysisResultItem(
        name="Meta description length",
        status=status,
        message=f"Meta description length is {character_count} characters.",
        details={"character_count": character_count},
    )

