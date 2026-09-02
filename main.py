from fastapi import FastAPI
from app.schemas import AnalyzeRequest, AnalyzeResponse
from app.analyzer.title_analyzer import run_seo_analysis


app = FastAPI(title="Kencana SEO Analyzer")


@app.get("/")
def root():
    return {"message": "Kencana SEO Analyzer is running"}


@app.post("/analyze", response_model=AnalyzeResponse, response_model_exclude_none=True)
def analyze_content(payload: AnalyzeRequest):
    return run_seo_analysis(payload)
