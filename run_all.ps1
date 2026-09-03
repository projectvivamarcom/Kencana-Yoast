# Kencana Ecosystem Multi-Service Launcher (PowerShell)
Write-Host "===================================================" -ForegroundColor Cyan
Write-Host "Menjalankan Seluruh Ekosistem Service Kencana..." -ForegroundColor Yellow
Write-Host "===================================================" -ForegroundColor Cyan

$rootDir = $PSScriptRoot

# 1. Start Laravel Backend (Port 8080)
Start-Process powershell -ArgumentList "-NoExit", "-Command", "Set-Location '$rootDir\backend\laravel'; Write-Host '🚀 Running Kencana Laravel Backend on http://127.0.0.1:8080' -ForegroundColor Green; php artisan serve --port=8080"

# 2. Start SEO Engine (Port 8000)
Start-Process powershell -ArgumentList "-NoExit", "-Command", "Set-Location '$rootDir\services\seo-engine'; Write-Host '🚀 Running Kencana SEO Engine on http://127.0.0.1:8000' -ForegroundColor Green; if (Test-Path '..\..\venv\Scripts\python.exe') { ..\..\venv\Scripts\python.exe main.py } else { python main.py }"

# 3. Start Admin CMS (Port 5173)
Start-Process powershell -ArgumentList "-NoExit", "-Command", "Set-Location '$rootDir\frontend\admin'; Write-Host '🚀 Running Kencana Admin CMS on http://localhost:5173' -ForegroundColor Green; npm run dev"

# 4. Start Public Website (Port 3000)
Start-Process powershell -ArgumentList "-NoExit", "-Command", "Set-Location '$rootDir\frontend\website'; Write-Host '🚀 Running Kencana Public Website on http://localhost:3000' -ForegroundColor Green; npm run dev"

Write-Host "Semua 4 service telah dijalankan di jendela terminal terpisah:" -ForegroundColor Green
Write-Host " - Laravel Backend : http://127.0.0.1:8080" -ForegroundColor White
Write-Host " - SEO Engine      : http://127.0.0.1:8000" -ForegroundColor White
Write-Host " - Admin CMS       : http://localhost:5173" -ForegroundColor White
Write-Host " - Public Website  : http://localhost:3000" -ForegroundColor White
Write-Host "===================================================" -ForegroundColor Cyan
