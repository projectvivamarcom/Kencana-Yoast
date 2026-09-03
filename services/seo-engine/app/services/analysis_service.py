from app.schemas import AnalyzeRequest, AnalyzeResponse
from app.analyzer.title_analyzer import run_seo_analysis


class SeoAnalysisService:
    @staticmethod
    def analyze(payload: AnalyzeRequest) -> AnalyzeResponse:
        return run_seo_analysis(payload)
