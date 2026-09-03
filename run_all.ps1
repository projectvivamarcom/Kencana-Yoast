# Kencana All Services Starter (PowerShell)
Write-Host "===================================================" -ForegroundColor Cyan
Write-Host "Memulai Seluruh Service Kencana Ecosystem..." -ForegroundColor Green
Write-Host "===================================================" -ForegroundColor Cyan

# 1. Kencana SEO Engine
Start-Process powershell -ArgumentList "-NoExit", "-Command", "Set-Location '$PSScriptRoot\services\seo-engine'; if (Test-Path '$PSScriptRoot\venv\Scripts\python.exe') { & '$PSScriptRoot\venv\Scripts\python.exe' main.py } else { python main.py }"

# 2. Kencana Admin CMS
Start-Process powershell -ArgumentList "-NoExit", "-Command", "Set-Location '$PSScriptRoot\frontend\admin'; npm run dev"

# 3. Kencana Public Website
Start-Process powershell -ArgumentList "-NoExit", "-Command", "Set-Location '$PSScriptRoot\frontend\website'; npm run dev"

Write-Host "Semua service telah dijalankan:" -ForegroundColor Green
Write-Host "  1. SEO Engine     -> http://127.0.0.1:8000" -ForegroundColor Yellow
Write-Host "  2. Admin CMS      -> http://localhost:5173" -ForegroundColor Yellow
Write-Host "  3. Public Website -> http://localhost:3000" -ForegroundColor Yellow
Write-Host "===================================================" -ForegroundColor Cyan
