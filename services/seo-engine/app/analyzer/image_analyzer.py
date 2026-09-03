from bs4 import BeautifulSoup
from app.schemas import AnalysisResultItem


def check_image_alt_attributes(
    content: str, focus_keyphrase: str
) -> AnalysisResultItem:
    cleaned_keyphrase = focus_keyphrase.strip().lower() if focus_keyphrase else ""
    soup = BeautifulSoup(content or "", "html.parser")
    images = soup.find_all("img")
    total_images = len(images)

    if total_images == 0:
        return AnalysisResultItem(
            name="Image alt attributes",
            status="improvement",
            message="No images found in the content.",
            details={
                "total_images": 0,
                "images_with_alt": 0,
                "images_without_alt": 0,
                "images_with_keyphrase": 0,
            },
        )

    images_with_alt = 0
    images_without_alt = 0
    images_with_keyphrase = 0

    for img in images:
        alt_text = img.get("alt")
        if alt_text is None or not alt_text.strip():
            images_without_alt += 1
        else:
            images_with_alt += 1
            if cleaned_keyphrase and cleaned_keyphrase in alt_text.lower():
                images_with_keyphrase += 1

    if images_without_alt > 0:
        status = "problem"
        message = f"Some images ({images_without_alt} of {total_images}) do not have alt attributes."
    elif images_with_keyphrase > 0:
        status = "good"
        message = "All images have alt attributes and the focus keyphrase was found in an image alt."
    else:
        status = "improvement"
        message = "All images have alt attributes, but the focus keyphrase was not found in any image alt."

    return AnalysisResultItem(
        name="Image alt attributes",
        status=status,
        message=message,
        details={
            "total_images": total_images,
            "images_with_alt": images_with_alt,
            "images_without_alt": images_without_alt,
            "images_with_keyphrase": images_with_keyphrase,
        },
    )

