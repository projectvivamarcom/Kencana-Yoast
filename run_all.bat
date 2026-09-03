@echo off
title Kencana Ecosystem Starter
echo ===================================================
echo Menjalankan Seluruh Ekosistem Service Kencana...
echo ===================================================

:: 1. Kencana Main Backend (Laravel 11 REST API)
start "Kencana Laravel Backend (Port 8080)" cmd /k "cd /d %~dp0backend\laravel && php artisan serve --port=8080"

:: 2. Kencana SEO Engine (FastAPI)
start "Kencana SEO Engine (Port 8000)" cmd /k "cd /d %~dp0services\seo-engine && (if exist ..\..\venv\Scripts\python.exe (..\..\venv\Scripts\python.exe main.py) else (python main.py))"

:: 3. Kencana Admin CMS (Vue 3 + PrimeVue)
start "Kencana Admin CMS (Port 5173)" cmd /k "cd /d %~dp0frontend\admin && npm run dev"

:: 4. Kencana Public Website (Nuxt 3)
start "Kencana Public Website (Port 3000)" cmd /k "cd /d %~dp0frontend\website && npm run dev"

echo Semua service telah dibuka di jendela terminal masing-masing:
echo - Laravel Backend  : http://127.0.0.1:8080
echo - SEO Engine       : http://127.0.0.1:8000
echo - Admin CMS        : http://localhost:5173
echo - Public Website   : http://localhost:3000
echo ===================================================
pause
