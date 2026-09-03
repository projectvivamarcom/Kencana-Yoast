from urllib.parse import urlparse
from bs4 import BeautifulSoup
from app.schemas import AnalysisResultItem


def check_internal_links(
    content: str, domain: str = "kencanaindonesia.co.id"
) -> AnalysisResultItem:
    soup = BeautifulSoup(content or "", "html.parser")
    links = soup.find_all("a", href=True)

    total_links = 0
    internal_links = 0

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

        # Cek apakah relative URL atau mengarah ke domain kencanaindonesia.co.id
        if not netloc:
            # Relative link (contoh: /produk/kencana-ceiling atau produk/kencana-ceiling)
            internal_links += 1
        elif netloc == target_domain or netloc.endswith("." + target_domain):
            # Absolute URL dengan domain kencana (misal https://kencanaindonesia.co.id atau www.kencanaindonesia.co.id)
            internal_links += 1

    if internal_links > 0:
        status = "good"
        message = "The content contains internal links."
    else:
        status = "improvement"
        message = "No internal links were found in the content."

    return AnalysisResultItem(
        name="Internal links",
        status=status,
        message=message,
        details={
            "total_links": total_links,
            "internal_links": internal_links,
        },
    )

