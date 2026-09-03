# Kencana SEO Engine Starter
Write-Host "===================================================" -ForegroundColor Cyan
Write-Host "Starting Kencana SEO Engine on http://127.0.0.1:8000" -ForegroundColor Green
Write-Host "===================================================" -ForegroundColor Cyan

Set-Location -Path "$PSScriptRoot\services\seo-engine"

$VenvPython = "$PSScriptRoot\venv\Scripts\python.exe"
if (Test-Path $VenvPython) {
    & $VenvPython main.py
} else {
    python main.py
}
