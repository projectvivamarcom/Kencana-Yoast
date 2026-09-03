@echo off
title Kencana SEO Engine
echo ===================================================
echo Starting Kencana SEO Engine on http://127.0.0.1:8000
echo ===================================================
cd /d "%~dp0services\seo-engine"
if exist "%~dp0venv\Scripts\python.exe" (
    "%~dp0venv\Scripts\python.exe" main.py
) else (
    python main.py
)
pause
