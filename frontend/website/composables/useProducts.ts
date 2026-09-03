import type { Product } from '~/types'

export const useProducts = () => {
  const products: Product[] = [
    {
      id: 1,
      slug: 'kencana-truss',
      name: 'Kencana Truss (Rangka Baja Ringan)',
      category: 'Baja Ringan',
      tagline: 'Standar Emas Rangka Atap Rumah & Gedung Modern SNI 4096:2007',
      description: 'Kencana Truss diproduksi dari baja lapis seng dan aluminium (Galvalume) berkekuatan tarik tinggi G550 (5500 kg/cm2). Anti rayap, tahan korosi, dan memiliki profil presisi dengan rusuk pengaku ganda yang menjamin kestabilan struktur atap rumah dan gedung bertingkat.',
      image: 'https://images.unsplash.com/photo-1541888946425-d0fbb186f5f7?q=80&w=800&auto=format&fit=crop',
      specifications: {
        'Bahan Dasar': 'Baja High Tensile G550',
        'Lapisan Pelindung': 'Zinc-Aluminium (Galvalume/Zincalume)',
        'Standar Uji': 'SNI 4096:2007',
        'Profil': 'Kanal C (C75.75, C75.100) & Reng U (U32.45)',
        'Ketebalan': '0.75 mm s/d 1.00 mm (TCT)'
      },
      features: [
        'Anti Rayap & Anti Karat Seumur Hidup',
        'Tahan Gempa dan Beban Angin Kencang',
        'Presisi Tinggi Menggunakan Mesin Rollforming Terkomputerisasi',
        'Pemasangan Cepat, Menghemat Biaya Tenaga Kerja Hingga 35%'
      ]
    },
    {
      id: 2,
      slug: 'genteng-metal-kencana',
      name: 'Genteng Metal Kencana Pasir & Color',
      category: 'Genteng Metal',
      tagline: 'Perlindungan Estetis Maksimal Anti Bocor dan Peredam Bising',
      description: 'Genteng metal Kencana menggabungkan kekuatan baja Galvalume dengan lapisan batuan alam vulkanik (stone coated) untuk meredam suara hujan dan panas matahari tropis secara optimal.',
      image: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=800&auto=format&fit=crop',
      specifications: {
        'Tipe Pola': 'Klasik 2x4 (8 daun)',
        'Lapisan Atas': 'Natural Stone Granules + Acrylic Resin',
        'Bobot': 'Hanya 1/6 dari genteng beton atau keramik',
        'Pilihan Warna': 'Merah Merapi, Hitam Karang, Cokelat Toraja, Hijau Lumut'
      },
      features: [
        'Tidak Mudah Lepas Diterpa Badai Berkat Sistem Interlocking',
        'Lapisan Pasir Menahan Suara Hujan & Meredam Panas',
        'Warna Tahan Pudar terhadap Sinar UV Ekstrem',
        'Beban Struktur Fondasi Jauh Lebih Ringan'
      ]
    },
    {
      id: 3,
      slug: 'hollow-kencana',
      name: 'Hollow Kencana Plafon & Partisi Gypsum',
      category: 'Hollow Plafon',
      tagline: 'Rangka Plafon Lurus Presisi Tanpa Gelombang dan Lendutan',
      description: 'Hollow Kencana dirancang khusus sebagai rangka penggantung plafon gypsum, PVC, dan partisi dinding. Dibuat dengan motif embos khas Kencana yang menjamin cengkeraman sekrup lebih kokoh.',
      image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=800&auto=format&fit=crop',
      specifications: {
        'Dimensi Profil': '20x40 mm & 40x40 mm',
        'Panjang Standar': '4.00 meter',
        'Embossing': 'Full Emboss Logo Kencana Original',
        'Aplikasi': 'Plafon Gypsum, Akustik Tile, Partisi Dinding'
      },
      features: [
        'Tidak Melengkung atau Berkerut',
        'Tahan Api dan Tahan Kelembapan Tinggi',
        'Drat Sekrup Mengunci Kuat Tanpa Selip',
        'Finishing Rapi dan Rata Sempurna'
      ]
    },
    {
      id: 4,
      slug: 'atap-spandek-kencana',
      name: 'Atap Spandek Gelombang Kencana Eco',
      category: 'Atap & Spandek',
      tagline: 'Atap Kanopi & Pergudangan Modern Praktis Bebas Sambungan',
      description: 'Atap spandek Kencana memiliki profil gelombang trapesium yang dirancang untuk mengalirkan air hujan dengan debit tinggi tanpa risiko meluap atau rembes.',
      image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=800&auto=format&fit=crop',
      specifications: {
        'Lebar Efektif': '1000 mm (1 meter)',
        'Tinggi Gelombang': '25 mm',
        'Panjang': 'Bisa dipesan custom sesuai panjang atap proyek',
        'Ketebalan': '0.30 mm s/d 0.50 mm'
      },
      features: [
        'Bisa Custom Panjang Tanpa Sambungan (Mengurangi Kebocoran)',
        'Pilihan Zincalume Mengkilap atau Warna Colorbond',
        'Cocok untuk Pabrik, Gudang, Ruko, dan Kanopi Rumah'
      ]
    },
    {
      id: 5,
      slug: 'floor-deck-bondek',
      name: 'Floor Deck Bondek Kencana W-1000',
      category: 'Floor Deck',
      tagline: 'Bekisting Dak Beton Cepat Hemat Perancah & Tulangan Bawah',
      description: 'Bondek Kencana menggantikan peran bekisting kayu dan besi tulangan bawah pada pengecoran pelat lantai komposit. Mempercepat proses pengecoran hingga 50%.',
      image: 'https://images.unsplash.com/photo-1590381105924-c72589b9ef3f?q=80&w=800&auto=format&fit=crop',
      specifications: {
        'Lebar Efektif': '1000 mm',
        'Tinggi Gelombang': '50 mm dengan Embos Penjepit Beton',
        'Ketebalan': '0.75 mm & 1.00 mm',
        'Baja': 'Galvanis Z220 / Z275'
      },
      features: [
        'Menghemat Volume Beton Cor Hingga 15%',
        'Mengurangi Kebutuhan Tiang Penyangga / Scaffolding',
        'Pengerjaan Multi-Lantai Bisa Dilakukan Bersamaan'
      ]
    }
  ]

  const getProductBySlug = (slug: string) => {
    return products.find(p => p.slug === slug)
  }

  return {
    products,
    getProductBySlug
  }
}
