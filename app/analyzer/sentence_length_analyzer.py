import re
from bs4 import BeautifulSoup
from app.schemas import AnalysisResultItem


def check_sentence_length(content: str) -> AnalysisResultItem:
    soup = BeautifulSoup(content or "", "html.parser")
    text = soup.get_text(separator=" ", strip=True)

    # Pecah menjadi kalimat berdasarkan tanda baca (. ! ?)
    raw_sentences = re.split(r"[.!?]+", text)
    sentences = [s.strip() for s in raw_sentences if s.strip()]
    total_sentences = len(sentences)

    if total_sentences == 0:
        return AnalysisResultItem(
            name="Sentence length",
            status="problem",
            message="The sentences are too long and may be difficult to read.",
            details={
                "total_sentences": 0,
                "total_words": 0,
                "average_words_per_sentence": 0.0,
                "long_sentences": 0,
            },
        )

    sentence_word_counts = [len(s.split()) for s in sentences]
    total_words = sum(sentence_word_counts)
    long_sentences = sum(1 for count in sentence_word_counts if count > 20)
    average_words_per_sentence = round(total_words / total_sentences, 2)

    if average_words_per_sentence <= 20:
        status = "good"
        message = "The sentences have a good average length."
    elif 20 < average_words_per_sentence <= 25:
        status = "improvement"
        message = "Some sentences may be too long and could be easier to read."
    else:
        status = "problem"
        message = "The sentences are too long and may be difficult to read."

    return AnalysisResultItem(
        name="Sentence length",
        status=status,
        message=message,
        details={
            "total_sentences": total_sentences,
            "total_words": total_words,
            "average_words_per_sentence": average_words_per_sentence,
            "long_sentences": long_sentences,
        },
    )

