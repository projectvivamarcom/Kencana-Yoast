@echo off
title Kencana Ecosystem Starter
echo ===================================================
echo Menjalankan Seluruh Service Kencana...
echo ===================================================

:: 1. Kencana SEO Engine
start "Kencana SEO Engine (Port 8000)" cmd /k "cd /d %~dp0services\seo-engine && (if exist ..\..\venv\Scripts\python.exe (..\..\venv\Scripts\python.exe main.py) else (python main.py))"

:: 2. Kencana Admin CMS
start "Kencana Admin CMS (Port 5173)" cmd /k "cd /d %~dp0frontend\admin && npm run dev"

:: 3. Kencana Public Website
start "Kencana Public Website (Port 3000)" cmd /k "cd /d %~dp0frontend\website && npm run dev"

echo Semua service telah dibuka di jendela terminal masing-masing:
echo - SEO Engine      : http://127.0.0.1:8000
echo - Admin CMS       : http://localhost:5173
echo - Public Website  : http://localhost:3000
echo ===================================================
pause
