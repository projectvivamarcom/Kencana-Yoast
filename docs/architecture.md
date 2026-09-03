# Kencana Full Website System Architecture

Dokumen ini menjelaskan arsitektur teknis menyeluruh ekosistem Kencana.

---

## 1. Diagram Aliran Sistem

```
[ Kencana Public Website ]               [ Kencana Admin CMS ]
    (Nuxt 3 / SSR)                         (Vue 3 + PrimeVue)
           |                                       |
           | HTTP JSON API                         | HTTP JSON API (Sanctum Auth)
           v                                       v
    +-----------------------------------------------------+
    |                 Laravel REST API                    |
    |         (Controllers, Policies, Eloquent)           |
    +-----------------------------------------------------+
           |                                       |
           v                                       v
    +--------------+                    +---------------------+
    |  PostgreSQL  |                    | Kencana SEO Engine  |
    |   Database   |                    |  (FastAPI / Python) |
    +--------------+                    +---------------------+
                                                   |
                                                   v
                                        [ Real-time Content ]
                                        [ SEO & Readability ]
```

---

## 2. Tanggung Jawab Modul

### A. Kencana Public Website (`frontend/website`)
- **Teknologi:** Nuxt 3, Vue 3, TailwindCSS, TypeScript.
- **Tujuan:** Antarmuka publik yang ramah mesin pencari (SEO SSR), cepat, dan mobile-friendly.
- **Halaman:** Beranda, Tentang Kami, Katalog Produk, Detail Produk, Artikel/Blog, Detail Artikel, Karir, Kontak, dan Jaringan Cabang.

### B. Kencana Admin CMS (`frontend/admin`)
- **Teknologi:** Vue 3, Vite, PrimeVue, Pinia, TailwindCSS.
- **Tujuan:** Pusat manajemen operasional konten Kencana (Posts, Products, Articles, Careers, Categories, Media).
- **Fitur Kunci:** Integrasi real-time panel **Kencana SEO** dengan feedback instan skor SEO dan Readability.

### C. Kencana SEO Engine (`services/seo-engine`)
- **Teknologi:** Python 3.11+, FastAPI, BeautifulSoup4, Pydantic.
- **Tujuan:** Stateless high-performance analysis engine yang membedah teks artikel berdasarkan kaidah SEO & Readability (Transition Words, Passive Voice, Flesch Reading Ease, Keyphrase Density, Heading Hierarchy, Alt Text, Canonical, Robots Meta).

### D. Main Backend (`backend/laravel`)
- **Teknologi:** Laravel 11, PostgreSQL, Laravel Sanctum.
- **Tujuan:** Single source of truth untuk persistensi data relasional dan otentikasi admin.
