# Kencana Indonesia - Full Website System

Repositori ini memuat ekosistem sistem digital **PT Kencana Maju Bersama**:
1. **Kencana Public Website** (`frontend/website`): Website korporat & katalog produk baja ringan SNI berbasis Nuxt 3.
2. **Kencana Admin CMS** (`frontend/admin`): Sistem manajemen konten & analisis SEO internal berbasis Vue 3 + PrimeVue.
3. **Kencana SEO Engine** (`services/seo-engine`): Engine analisis konten SEO & Readability berbasis FastAPI (Python).
4. **Kencana Main Backend** (`backend/laravel`): Laravel REST API & PostgreSQL.

---

## 📁 Struktur Folder Proyek

```
kencana/
│
├── frontend/
│   ├── website/              # Nuxt 3 + Vue 3 + TailwindCSS (Public Website)
│   └── admin/                # Vue 3 + Vite + PrimeVue + Pinia (Admin CMS)
│
├── backend/
│   └── laravel/              # Laravel REST API application
│
├── services/
│   └── seo-engine/           # FastAPI Python SEO Engine
│       ├── app/
│       │   ├── analyzer/     # 16 modul analisis SEO & Readability
│       │   ├── schemas/      # Pydantic data schemas
│       │   ├── services/     # Engine business logic
│       │   ├── utils/        # Text processing utilities
│       │   └── config/       # Environment settings
│       ├── main.py
│       └── requirements.txt
│
├── database/                 # Skema DDL & dokumentasi PostgreSQL
├── docs/                     # Dokumentasi arsitektur & API specs
├── docker/                   # Dockerfile tiap service
├── docker-compose.yml        # Multi-service local deployment
├── .gitignore
└── README.md
```

---

## 🚀 Panduan Menjalankan Sistem

### ⚡ Jalankan Semua Service Sekaligus (Rekomendasi)

Cukup jalankan salah satu script dari folder root `d:\kencana`:
```bash
# Via Command Prompt / Double Click:
.\run_all.bat

# Atau via PowerShell:
.\run_all.ps1
```
Script ini akan otomatis membuka 3 jendela terminal terpisah untuk:
1. **SEO Engine** di `http://127.0.0.1:8000`
2. **Admin CMS** di `http://localhost:5173`
3. **Public Website** di `http://localhost:3000`

---

### 1. Kencana SEO Engine (FastAPI / Python)

**Cara Termudah (Script Otomatis dari Root):**
```bash
# Dari root d:\kencana, cukup jalankan salah satu:
.\run_seo_engine.bat
# atau di PowerShell:
.\run_seo_engine.ps1
```

**Atau Jalankan Manual via Virtual Environment:**
```bash
# Pindah ke direktori SEO engine
cd services/seo-engine

# Jalankan via python venv:
..\..\venv\Scripts\python main.py

# Atau jalankan via uvicorn venv:
..\..\venv\Scripts\uvicorn main:app --reload --port 8000
```
- **Service Endpoint:** `http://127.0.0.1:8000`
- **Swagger Documentation:** `http://127.0.0.1:8000/docs`
- **Metode Utama:** `POST /analyze`

---

### 2. Kencana Admin CMS (Vue 3 + Vite)
```bash
# Pindah ke direktori admin
cd frontend/admin

# Install dependencies (jika belum)
npm install

# Jalankan development server
npm run dev
```
- **Admin URL:** `http://localhost:5173`
- Terhubung otomatis ke SEO Engine via `VITE_API_BASE_URL=http://127.0.0.1:8000`

---

### 3. Kencana Public Website (Nuxt 3)
```bash
# Pindah ke direktori website
cd frontend/website

# Install dependencies (jika belum)
npm install

# Jalankan development server
npm run dev
```
- **Website URL:** `http://localhost:3000`
- **Halaman Utama:**
  - `/` (Beranda)
  - `/about` (Profil Perusahaan)
  - `/products` & `/products/[slug]` (Katalog Produk SNI)
  - `/articles` & `/articles/[slug]` (Artikel & Edukasi)
  - `/careers` (Karir)
  - `/branches` (Cabang & Depo)
  - `/contact` (Kontak & Konsultasi)

---

### 4. Menjalankan Semua Service via Docker Compose
```bash
docker-compose up --build
```
Semua service (Website, Admin, SEO Engine, PostgreSQL) akan berjalan secara terkoordinasi di container masing-masing.

---

## 📦 Dependencies Utama

| Modul | Runtime | Framework & Library Utama |
| :--- | :--- | :--- |
| **SEO Engine** | Python 3.11+ | `fastapi`, `uvicorn`, `pydantic`, `beautifulsoup4` |
| **Admin CMS** | Node.js 20+ | `vue 3`, `vite`, `pinia`, `vue-router`, `primevue`, `tailwindcss`, `axios` |
| **Public Website** | Node.js 20+ | `nuxt 3`, `vue 3`, `@nuxtjs/tailwindcss`, `lucide-vue-next` |
| **Main Backend** | PHP 8.3+ | `laravel 11`, `sanctum`, `postgresql` |
