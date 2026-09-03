from urllib.parse import urlparse
from bs4 import BeautifulSoup
from app.schemas import AnalysisResultItem


def check_external_links(
    content: str, domain: str = "kencanaindonesia.co.id"
) -> AnalysisResultItem:
    soup = BeautifulSoup(content or "", "html.parser")
    links = soup.find_all("a", href=True)

    total_links = 0
    external_links = 0

    target_domain = domain.lower()

    for a in links:
        href = a["href"].strip()

        # Abaikan href kosong, anchor/fragment, mailto, tel, dan javascript
        if not href or href.startswith("#"):
            continue

        href_lower = href.lower()
        if (
            href_lower.startswith("mailto:")
            or href_lower.startswith("tel:")
            or href_lower.startswith("javascript:")
        ):
            continue

        parsed = urlparse(href)
        netloc = parsed.netloc.lower()

        # Link valid dihitung ke total_links
        total_links += 1

        # Cek apakah external link (memiliki netloc dan bukan kencanaindonesia.co.id atau subdomainnya)
        if netloc and netloc != target_domain and not netloc.endswith("." + target_domain):
            external_links += 1

    if external_links > 0:
        status = "good"
        message = "The content contains external links."
    else:
        status = "improvement"
        message = "No external links were found in the content."

    return AnalysisResultItem(
        name="External links",
        status=status,
        message=message,
        details={
            "total_links": total_links,
            "external_links": external_links,
        },
    )

