# Kencana Main Backend (Laravel REST API)

Service ini merupakan **Main Backend** untuk ekosistem Kencana:
- Melayani data ke **Kencana Public Website** (Nuxt 3)
- Melayani manajemen konten, otentikasi admin, dan sinkronisasi ke **Kencana Admin CMS** (Vue 3)
- Berkomunikasi secara internal dengan **Kencana SEO Engine** (FastAPI) untuk analisis SEO real-time sebelum artikel disimpan.

---

## Tech Stack
- **Framework:** Laravel 11.x
- **Database:** PostgreSQL (atau MySQL)
- **Authentication:** Laravel Sanctum (Token-based SPA / Mobile API)
- **API Standard:** RESTful JSON API Specification

---

## Target API Roadmap

### 1. Authentication (`/api/v1/auth`)
- `POST /login`: Otentikasi Admin Kencana
- `POST /logout`: Revoke access token
- `GET /me`: Data profil admin login

### 2. Posts & Articles Management (`/api/v1/posts`, `/api/v1/articles`)
- `GET /posts`: Daftar postingan CMS dengan pagination, filter status, dan kategori
- `POST /posts`: Simpan artikel baru beserta metadata Kencana SEO
- `GET /posts/{id}`: Detail artikel
- `PUT /posts/{id}`: Update artikel & metadata SEO
- `DELETE /posts/{id}`: Hapus artikel

### 3. Products Catalog (`/api/v1/products`)
- `GET /products`: Katalog produk baja ringan SNI untuk website publik & admin
- `POST /products`: Tambah produk baru (Admin)
- `PUT /products/{id}`: Update spesifikasi teknis
- `DELETE /products/{id}`: Hapus produk

### 4. Careers & Job Applicants (`/api/v1/careers`)
- `GET /careers`: Daftar lowongan kerja publik
- `POST /careers`: Tambah lowongan kerja (Admin)
- `POST /careers/{id}/apply`: Pengiriman CV dan form lamaran kerja

### 5. SEO Engine Bridge (`/api/v1/seo/analyze`)
- Meneruskan payload artikel ke FastAPI (`http://seo-engine:8000/analyze`) dan mengembalikan skor ke Admin.

---

## Setup & Running Guide (Saat Mulai Diimplementasikan)
```bash
composer install
cp .env.example .env
php artisan key:generate
php artisan migrate --seed
php artisan serve --port=8080
```
