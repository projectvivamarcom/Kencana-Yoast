import re
from app.schemas import (
    AnalyzeRequest,
    AnalyzeResponse,
    AnalysisResultItem,
    SEOResults,
    ContentResult,
)
from app.analyzer.keyphrase_analyzer import check_keyphrase_density, count_words
from app.analyzer.introduction_analyzer import check_keyphrase_in_introduction
from app.analyzer.subheading_analyzer import check_keyphrase_in_subheadings
from app.analyzer.title_length_analyzer import check_seo_title_length
from app.analyzer.meta_description_analyzer import check_meta_description_length
from app.analyzer.image_analyzer import check_image_alt_attributes
from app.analyzer.internal_link_analyzer import check_internal_links
from app.analyzer.external_link_analyzer import check_external_links
from app.analyzer.content_length_analyzer import check_content_length
from app.analyzer.keyphrase_distribution_analyzer import (
    check_keyphrase_distribution,
)
from app.analyzer.sentence_length_analyzer import check_sentence_length
from app.analyzer.paragraph_length_analyzer import check_paragraph_length
from app.analyzer.subheading_distribution_analyzer import (
    check_subheading_distribution,
)
from app.analyzer.consecutive_sentences_analyzer import check_consecutive_sentences


def check_keyphrase_in_title(title: str, focus_keyphrase: str) -> AnalysisResultItem:
    cleaned_keyphrase = focus_keyphrase.strip().lower()
    cleaned_title = title.strip().lower()

    if not cleaned_keyphrase:
        return AnalysisResultItem(
            name="Keyphrase in title",
            status="problem",
            message="No focus keyphrase was set.",
        )

    if cleaned_keyphrase in cleaned_title:
        return AnalysisResultItem(
            name="Keyphrase in title",
            status="good",
            message="Focus keyphrase found in SEO title.",
        )

    return AnalysisResultItem(
        name="Keyphrase in title",
        status="problem",
        message="Focus keyphrase does not appear in the SEO title.",
    )


def check_keyphrase_in_slug(slug: str, focus_keyphrase: str) -> AnalysisResultItem:
    cleaned_keyphrase = focus_keyphrase.strip().lower()
    cleaned_slug = slug.strip().lower()

    if not cleaned_keyphrase:
        return AnalysisResultItem(
            name="Keyphrase in slug",
            status="problem",
            message="No focus keyphrase was set.",
        )

    # Normalisasi keyphrase menjadi format slug (kata-kata dipisah strip)
    normalized_keyphrase = "-".join(re.findall(r"\w+", cleaned_keyphrase))

    if normalized_keyphrase and (
        normalized_keyphrase in cleaned_slug or cleaned_keyphrase in cleaned_slug
    ):
        return AnalysisResultItem(
            name="Keyphrase in slug",
            status="good",
            message="Focus keyphrase found in URL slug.",
        )

    return AnalysisResultItem(
        name="Keyphrase in slug",
        status="problem",
        message="Focus keyphrase does not appear in the URL slug.",
    )


def check_keyphrase_in_meta_description(
    meta_description: str, focus_keyphrase: str
) -> AnalysisResultItem:
    cleaned_keyphrase = focus_keyphrase.strip().lower()
    cleaned_meta = meta_description.strip().lower()

    if not cleaned_keyphrase:
        return AnalysisResultItem(
            name="Keyphrase in meta description",
            status="problem",
            message="No focus keyphrase was set.",
        )

    if cleaned_keyphrase in cleaned_meta:
        return AnalysisResultItem(
            name="Keyphrase in meta description",
            status="good",
            message="Focus keyphrase found in meta description.",
        )

    return AnalysisResultItem(
        name="Keyphrase in meta description",
        status="problem",
        message="Focus keyphrase does not appear in the meta description.",
    )


def run_seo_analysis(data: AnalyzeRequest) -> AnalyzeResponse:
    title_result = check_keyphrase_in_title(data.title, data.focus_keyphrase)
    slug_result = check_keyphrase_in_slug(data.slug, data.focus_keyphrase)
    meta_result = check_keyphrase_in_meta_description(
        data.meta_description, data.focus_keyphrase
    )
    intro_result = check_keyphrase_in_introduction(
        data.content, data.focus_keyphrase
    )
    subheading_result = check_keyphrase_in_subheadings(
        data.content, data.focus_keyphrase
    )
    density_result = check_keyphrase_density(data.content, data.focus_keyphrase)
    title_length_result = check_seo_title_length(data.title)
    meta_length_result = check_meta_description_length(data.meta_description)
    image_alt_result = check_image_alt_attributes(
        data.content, data.focus_keyphrase
    )
    internal_link_result = check_internal_links(data.content)
    external_link_result = check_external_links(data.content)
    word_count = count_words(data.content)
    content_length_result = check_content_length(data.content, word_count=word_count)
    keyphrase_distribution_result = check_keyphrase_distribution(
        data.content, data.focus_keyphrase
    )
    sentence_length_result = check_sentence_length(data.content)
    paragraph_length_result = check_paragraph_length(data.content)
    subheading_distribution_result = check_subheading_distribution(
        data.content, word_count=word_count
    )

    return AnalyzeResponse(
        seo=SEOResults(
            results=[
                title_result,
                slug_result,
                meta_result,
                intro_result,
                subheading_result,
                density_result,
                title_length_result,
                meta_length_result,
                image_alt_result,
                internal_link_result,
                external_link_result,
                content_length_result,
                keyphrase_distribution_result,
                sentence_length_result,
                paragraph_length_result,
                subheading_distribution_result,
            ]
        ),
        content=ContentResult(word_count=word_count),
    )
