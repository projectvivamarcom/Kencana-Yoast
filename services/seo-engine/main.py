# pyrefly: ignore [missing-import]
from fastapi import FastAPI
# pyrefly: ignore [missing-import]
from fastapi.middleware.cors import CORSMiddleware
from app.schemas import AnalyzeRequest, AnalyzeResponse
from app.services import SeoAnalysisService
from app.config import settings

app = FastAPI(
    title="Kencana SEO Engine",
    version=settings.VERSION,
    description="Kencana Real-Time Content SEO & Readability Analysis Engine"
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=settings.CORS_ORIGINS,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/")
def root():
    return {
        "status": "online",
        "service": "Kencana SEO Engine",
        "version": settings.VERSION,
        "message": "Kencana SEO Engine is running"
    }


@app.post("/analyze", response_model=AnalyzeResponse, response_model_exclude_none=True)
def analyze_content(payload: AnalyzeRequest):
    return SeoAnalysisService.analyze(payload)


if __name__ == "__main__":
    import uvicorn
    uvicorn.run("main:app", host="127.0.0.1", port=settings.PORT, reload=True)
