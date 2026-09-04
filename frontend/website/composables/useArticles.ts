import type { Article } from '~/types'

export const useArticles = () => {
  const articles: Article[] = [
    {
      id: 1,
      slug: 'review-proyek-konstruksi-baja-ringan-kencana',
      title: 'Review Proyek Konstruksi Nasional Menggunakan Baja Ringan Kencana',
      category: 'Properti & Proyek',
      excerpt: 'Kencana dipercaya dalam berbagai proyek strategis nasional berkat mutu baja lapis Galvalume berstandar SNI yang terbukti kokoh dan tahan gempa.',
      content: `Kencana telah berkontribusi nyata dalam berbagai proyek pembangunan perumahan, pergudangan, hingga gedung komersial di seluruh penjuru Nusantara.\n\nMemilih produk Kencana memberikan jaminan keamanan struktural dan efisiensi jangka panjang. Seluruh profil diproduksi dengan presisi milimeter menggunakan mesin rollforming otomatis.\n\nFasilitas & Layanan Unggulan Kencana:\nDidukung lebih dari 50 cabang depo di seluruh Indonesia serta software analisis struktur MaxiCAD, Kencana memastikan setiap rancang bangun atap teruji keamanannya sebelum dipasang di lapangan.`,
      author: 'Redaksi Kencana',
      date: '28 Februari 2026',
      readTime: '4 min read',
      image: '/assets/img/DJI_0680.JPG.webp'
    },
    {
      id: 2,
      slug: 'panduan-memilih-baja-ringan-kencana-truss',
      title: 'Panduan Lengkap Memilih Rangka Atap Baja Ringan Berkualitas SNI',
      category: 'Tips Konstruksi',
      excerpt: 'Kenali perbedaan spesifikasi Galvalume berstandar SNI 8399:2017 dengan baja ringan non-standar agar bangunan Anda kokoh dan aman dalam jangka panjang.',
      content: `Rangka atap merupakan salah satu elemen paling krusial dalam konstruksi bangunan. Penggunaan Kencana Truss berbahan baja ringan telah terbukti memberikan ketahanan maksimal terhadap cuaca ekstrem dan gempa.\n\nKeunggulan Kencana Truss Berstandar SNI:\nMaterial baja lapis seng dan aluminium (zinc-aluminium) menjamin anti rayap dan tahan karat seumur hidup. Oleh karena itu, Kencana Truss menjadi standar emas bagi kontraktor di seluruh Indonesia.\n\nTips Memeriksa Keaslian Produk:\n1. Pastikan terdapat cap/embos tulisan KENCANA SNI di sepanjang profil kanal C.\n2. Cek ketebalan aktual menggunakan mikrometer sekrup.\n3. Gunakan sekrup roofing anti-karat yang direkomendasikan.`,
      author: 'Budi Santoso (Engineer Kencana)',
      date: '25 Februari 2026',
      readTime: '5 min read',
      image: '/assets/img/IMG_0876-1.jpg'
    },
    {
      id: 3,
      slug: 'tren-desain-interior-minimalis-modern-2026',
      title: 'Tren Desain Plafon Minimalis Modern Menggunakan Hollow Kencana 2026',
      category: 'Arsitektur & Desain',
      excerpt: 'Inspirasi desain plafon drop ceiling dan indirect lighting yang rapi serta presisi menggunakan hollow baja ringan anti melengkung.',
      content: `Gaya minimalis terus berevolusi mengikuti kebutuhan masyarakat urban masa kini. Penggunaan warna netral berpadu aksen kayu alami menciptakan suasana hangat dan menenangkan.\n\nRuang Terbuka Tanpa Sekat:\nKonsep open space memaksimalkan aliran cahaya alami dan sirkulasi udara di dalam rumah, sehingga ruangan compact terasa jauh lebih lapang. Penggunaan hollow Kencana menjamin garis plafon tetap lurus rata tanpa retak rambut di sambungan gypsum.`,
      author: 'Siti Aminah (Desainer Arsitektur)',
      date: '20 Februari 2026',
      readTime: '3 min read',
      image: '/assets/img/interior-1.webp'
    }
  ]

  const getArticleBySlug = (slug: string) => {
    return articles.find(a => a.slug === slug)
  }

  return {
    articles,
    getArticleBySlug
  }
}
