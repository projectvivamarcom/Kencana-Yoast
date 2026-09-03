# Kencana Database Architecture (PostgreSQL)

Direktori ini mendokumentasikan skema database relasional PostgreSQL untuk ekosistem Kencana (Public Website & Admin CMS).

---

## Entity Relationship Overview

```
[users] (Admins & Editors)
   │
   ├──< [posts] >──< [post_categories] >── [categories]
   │       │
   │       └──< [post_tags] >── [tags]
   │
   └──< [articles]

[products] >──< [product_categories]

[careers] >──< [job_applications]

[branches] (Distribution network)
```

File skema DDL relasional tersedia di [schema.sql](./schema.sql).
