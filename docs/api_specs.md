# Kencana API Specification

## Kencana SEO Engine API (FastAPI)

- **Base URL:** `http://127.0.0.1:8000`
- **Interactive Swagger Docs:** `http://127.0.0.1:8000/docs`

### 1. Health Check
- **Endpoint:** `GET /`
- **Response:**
  ```json
  {
    "status": "online",
    "service": "Kencana SEO Engine",
    "version": "2.4.1",
    "message": "Kencana SEO Engine is running"
  }
  ```

### 2. Analyze Content
- **Endpoint:** `POST /analyze`
- **Request Body:**
  ```json
  {
    "title": "Review Rumah Mewah Kencana Hills Surabaya Barat",
    "slug": "review-rumah-mewah-kencana-hills-surabaya-barat",
    "meta_description": "Temukan ulasan lengkap Kencana Hills Surabaya Barat berstandar SNI.",
    "focus_keyphrase": "kencana hills",
    "content": "Kencana Hills menghadirkan hunian asri dengan material atap baja ringan terbaik..."
  }
  ```
- **Response:**
  ```json
  {
    "seo": {
      "results": [
        {
          "name": "Keyphrase in title",
          "status": "good",
          "message": "Focus keyphrase found in SEO title."
        },
        {
          "name": "Keyphrase density",
          "status": "good",
          "message": "The focus keyphrase was found 4 times. This is great.",
          "details": {
            "keyword_count": 4,
            "word_count": 320,
            "density": 1.25
          }
        },
        {
          "name": "Keyphrase in introduction",
          "status": "good",
          "message": "Your keyphrase appears in the first paragraph."
        },
        {
          "name": "SEO title length",
          "status": "good",
          "message": "The SEO title has an optimal length (52 characters)."
        },
        {
          "name": "Meta description length",
          "status": "good",
          "message": "The meta description length is optimal."
        }
      ]
    },
    "content": {
      "word_count": 320
    }
  }
  ```
