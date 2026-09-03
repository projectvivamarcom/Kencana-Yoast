from typing import List, Literal, Optional, Dict, Any
from pydantic import BaseModel


class AnalyzeRequest(BaseModel):
    title: str
    slug: str
    meta_description: str
    focus_keyphrase: str
    content: str


class KeyphraseDensityDetails(BaseModel):
    keyword_count: int
    word_count: int
    density: float


class AnalysisResultItem(BaseModel):
    name: str
    status: Literal["good", "improvement", "problem"]
    message: str
    details: Optional[Dict[str, Any]] = None


class SEOResults(BaseModel):
    results: List[AnalysisResultItem]


class ContentResult(BaseModel):
    word_count: int


class AnalyzeResponse(BaseModel):
    seo: SEOResults
    content: ContentResult
