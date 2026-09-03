# pyrefly: ignore [missing-import]
from fastapi import FastAPI
# pyrefly: ignore [missing-import]
from fastapi.middleware.cors import CORSMiddleware
from app.schemas import AnalyzeRequest, AnalyzeResponse
from app.analyzer.title_analyzer import run_seo_analysis


app = FastAPI(title="Kencana SEO Analyzer")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/")
def root():
    return {"message": "Kencana SEO Analyzer is running"}


@app.post("/analyze", response_model=AnalyzeResponse, response_model_exclude_none=True)
def analyze_content(payload: AnalyzeRequest):
    return run_seo_analysis(payload)
