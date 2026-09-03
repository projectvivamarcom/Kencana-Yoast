import os

class Settings:
    PROJECT_NAME: str = "Kencana SEO Engine"
    VERSION: str = "2.4.1"
    HOST: str = os.getenv("HOST", "0.0.0.0")
    PORT: int = int(os.getenv("PORT", 8000))
    CORS_ORIGINS: list = ["*"]

settings = Settings()
