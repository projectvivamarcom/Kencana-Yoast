import re
import math
from app.schemas import AnalysisResultItem


def extract_introduction(content: str) -> str:
    # Bersihkan HTML tags
    text_clean = re.sub(r"<[^>]+>", " ", content).strip()
    if not text_clean:
        return ""

    # Ambil kalimat pertama (pemisah tanda titik, tanda seru, tanda tanya)
    sentences = re.split(r"(?<=[.!?])\s+", text_clean)
    first_sentence = sentences[0] if sentences else text_clean

    # Ambil 10% kata pertama
    words = text_clean.split()
    ten_percent_count = max(1, math.ceil(len(words) * 0.10))
    first_ten_percent_words = " ".join(words[:ten_percent_count])

    # Gunakan teks yang mencakup minimal kalimat pertama atau 10% kata pertama
    if len(first_sentence.split()) >= len(first_ten_percent_words.split()):
        return first_sentence
    return first_ten_percent_words


def check_keyphrase_in_introduction(
    content: str, focus_keyphrase: str
) -> AnalysisResultItem:
    cleaned_keyphrase = focus_keyphrase.strip().lower()
    intro_text = extract_introduction(content).lower()

    if not cleaned_keyphrase or not intro_text:
        return AnalysisResultItem(
            name="Keyphrase in introduction",
            status="problem",
            message="Focus keyphrase was not found in the introduction.",
        )

    # Cek kemunculan focus keyphrase di dalam intro text secara case-insensitive
    if cleaned_keyphrase in intro_text:
        return AnalysisResultItem(
            name="Keyphrase in introduction",
            status="good",
            message="Focus keyphrase found in the introduction.",
        )

    return AnalysisResultItem(
        name="Keyphrase in introduction",
        status="problem",
        message="Focus keyphrase was not found in the introduction.",
    )
