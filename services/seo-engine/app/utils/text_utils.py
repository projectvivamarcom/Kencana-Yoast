import re


def clean_slug(text: str) -> str:
    slug = text.lower().strip()
    slug = re.sub(r"[^\w\s-]", "", slug)
    slug = re.sub(r"[\s_-]+", "-", slug)
    return slug.strip("-")


def count_words(text: str) -> int:
    words = re.findall(r"\b\w+\b", text)
    return len(words)
