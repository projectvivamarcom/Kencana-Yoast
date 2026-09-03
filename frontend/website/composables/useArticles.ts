import type { Article } from '~/types'

export const useArticles = () => {
  const articles: Article[] = [
    {
      id: 1,
      slug: 'review-rumah-mewah-kencana-hills-surabaya-barat',
      title: 'Review Kawasan Hunian Kencana Hills: Investasi Properti Unggulan di Surabaya Barat',
      category: 'Properti & Investasi',
      excerpt: 'Kencana Hills memadukan arsitektur tropis modern dengan material konstruksi baja ringan berstandar SNI. Menghadirkan kenyamanan hunian sekaligus potensi capital gain tinggi.',
      content: `Kencana Hills merupakan salah satu kawasan hunian eksklusif yang berlokasi strategis di Surabaya Barat. Hunian ini menawarkan konsep modern tropis dengan lanskap hijau asri serta fasilitas club house mewah.\n\nMemilih hunian di Kencana Hills memberikan keuntungan ganda: kenyamanan hidup dan nilai investasi yang konsisten tumbuh. Selain itu, aksesibilitas menuju jalan tol utama dan pusat perbelanjaan hanya memakan waktu 10 menit.\n\nFasilitas Unggulan Kencana Hills\nSetiap unit dirancang dengan ventilasi silang optimal dan smart home system terintegrasi. Lingkungan perumahan didukung oleh keamanan 24 jam dengan sistem one-gate dan CCTV canggih di setiap sudut. Rangka atap menggunakan Kencana Truss bergaransi SNI, menjamin ketenangan keluarga dari bahaya rayap maupun kebocoran atap.`,
      author: 'Redaksi Kencana',
      date: '28 Februari 2026',
      readTime: '4 min read',
      image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=800&auto=format&fit=crop'
    },
    {
      id: 2,
      slug: 'panduan-memilih-baja-ringan-kencana-truss',
      title: 'Panduan Lengkap Memilih Rangka Atap Baja Ringan Berkualitas SNI',
      category: 'Tips Konstruksi',
      excerpt: 'Kenali perbedaan spesifikasi Galvalume berstandar SNI 4096:2007 dengan baja ringan non-standar agar bangunan Anda kokoh dan aman dalam jangka panjang.',
      content: `Rangka atap merupakan salah satu elemen paling krusial dalam konstruksi bangunan. Penggunaan Kencana Truss berbahan baja ringan telah terbukti memberikan ketahanan maksimal terhadap cuaca ekstrem dan gempa.\n\nKeunggulan Kencana Truss Berstandar SNI\nMaterial baja lapis seng dan aluminium (zinc-aluminium) menjamin anti rayap dan tahan karat seumur hidup. Oleh karena itu, Kencana Truss menjadi standar emas bagi kontraktor di seluruh Indonesia.\n\nTips Memeriksa Keaslian Produk:\n1. Pastikan terdapat cap/embos tulisan KENCANA SNI di sepanjang profil kanal C.\n2. Cek ketebalan aktual menggunakan mikrometer sekrup.\n3. Gunakan sekrup roofing anti-karat yang direkomendasikan.`,
      author: 'Budi Santoso (Engineer Kencana)',
      date: '25 Februari 2026',
      readTime: '5 min read',
      image: 'https://images.unsplash.com/photo-1541888946425-d0fbb186f5f7?q=80&w=800&auto=format&fit=crop'
    },
    {
      id: 3,
      slug: 'tren-desain-interior-minimalis-modern-2026',
      title: 'Tren Desain Plafon Minimalis Modern Menggunakan Hollow Kencana 2026',
      category: 'Arsitektur & Desain',
      excerpt: 'Inspirasi desain plafon drop ceiling dan indirect lighting yang rapi serta presisi menggunakan hollow baja ringan anti melengkung.',
      content: `Gaya minimalis terus berevolusi mengikuti kebutuhan masyarakat urban masa kini. Penggunaan warna netral berpadu aksen kayu alami menciptakan suasana hangat dan menenangkan.\n\nRuang Terbuka Tanpa Sekat\nKonsep open space memaksimalkan aliran cahaya alami dan sirkulasi udara di dalam rumah, sehingga ruangan compact terasa jauh lebih lapang. Penggunaan hollow Kencana menjamin garis plafon tetap lurus rata tanpa retak rambut di sambungan gypsum.`,
      author: 'Siti Aminah (Desainer Arsitektur)',
      date: '20 Februari 2026',
      readTime: '3 min read',
      image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=800&auto=format&fit=crop'
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
