import type { Product } from '~/types'

export const useProducts = () => {
  const products: Product[] = [
    {
      id: 1,
      slug: 'kencana-truss',
      name: 'Kencana Truss (Rangka Baja Ringan)',
      category: 'Baja Ringan',
      tagline: 'Standar Emas Rangka Atap Rumah & Gedung Modern SNI 8399:2017',
      description: 'Kencana Truss diproduksi dari baja lapis seng dan aluminium (Galvalume) berkekuatan tarik tinggi G550 (5500 kg/cm2). Anti rayap, tahan korosi, dan memiliki profil presisi dengan rusuk pengaku ganda yang menjamin kestabilan struktur atap rumah dan gedung bertingkat.',
      image: '/assets/img/detil-produk-kanal-c.webp',
      specifications: {
        'Bahan Dasar': 'Baja High Tensile G550',
        'Lapisan Pelindung': 'Zinc-Aluminium (Galvalume/Zincalume)',
        'Standar Uji': 'SNI 8399:2017 & SNI 4096:2007/2019',
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
      name: 'Genteng Metal Kencana Klasik & Cakra',
      category: 'Genteng Metal',
      tagline: 'Perlindungan Estetis Maksimal Anti Bocor dan Peredam Bising',
      description: 'Genteng metal Kencana menggabungkan kekuatan baja Galvalume dengan lapisan batuan alam vulkanik (stone coated) untuk meredam suara hujan dan panas matahari tropis secara optimal.',
      image: '/assets/img/detil-produk-genteng-klasik.webp',
      specifications: {
        'Tipe Pola': 'Klasik 2x4 (8 daun) & Cakra Modern',
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
      image: '/assets/img/detil-produk-hollow.webp',
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
      name: 'Atap Spandek Gelombang Kencana KR3 / KR5',
      category: 'Atap & Spandek',
      tagline: 'Atap Kanopi & Pergudangan Modern Praktis Bebas Sambungan',
      description: 'Atap spandek Kencana memiliki profil gelombang trapesium yang dirancang untuk mengalirkan air hujan dengan debit tinggi tanpa risiko meluap atau rembes.',
      image: '/assets/img/detil-produk-kr3.webp',
      specifications: {
        'Lebar Efektif': '760 mm - 1000 mm',
        'Tinggi Gelombang': '25 mm - 35 mm',
        'Panjang': 'Bisa dipesan custom sesuai panjang atap proyek (Roll On Site)',
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
      name: 'Floor Deck Bondek Kencana KF-620',
      category: 'Floor Deck',
      tagline: 'Bekisting Dak Beton Cepat Hemat Perancah & Tulangan Bawah',
      description: 'Bondek Kencana menggantikan peran bekisting kayu dan besi tulangan bawah pada pengecoran pelat lantai komposit. Mempercepat proses pengecoran hingga 50%.',
      image: '/assets/img/8-KF-620.webp',
      specifications: {
        'Lebar Efektif': '620 mm - 1000 mm',
        'Tinggi Gelombang': '50 mm dengan Embos Penjepit Beton',
        'Ketebalan': '0.75 mm & 1.00 mm',
        'Baja': 'Galvanis High Tensile Z220 / Z275'
      },
      features: [
        'Menghemat Volume Beton Cor Hingga 15%',
        'Mengurangi Kebutuhan Tiang Penyangga / Scaffolding',
        'Pengerjaan Multi-Lantai Bisa Dilakukan Bersamaan'
      ]
    },
    {
      id: 6,
      slug: 'pintu-ruangan-kencana',
      name: 'Pintu Ruangan Baja Ringan Kencana',
      category: 'Dekoratif',
      tagline: 'Pintu Baja Modern Tahan Cuaca, Anti Rayap, dan Kedap Suara',
      description: 'Pintu ruangan Kencana dirancang dengan estetika minimalis modern, material baja kuat anti karat, dan sistem kunci presisi tinggi untuk kenyamanan hunian.',
      image: '/assets/img/Detail-Produk-Pintu-Ruangan.webp',
      specifications: {
        'Bahan': 'Baja Lapis Zincalume',
        'Finishing': 'Powder Coating Premium',
        'Dimensi': 'Standar 80x200 cm & 90x210 cm',
        'Fitur': 'Handle Stainless Steel & Karet Peredam'
      },
      features: [
        'Anti Rayap dan Tidak Menyusut/Memuai',
        'Tahan Benturan dan Kedap Suara',
        'Pemasangan Praktis dan Mudah Dirawat'
      ]
    },
    {
      id: 7,
      slug: 'ceiling-3d-kencana',
      name: 'Ceiling 3D & Plafon Dekoratif Kencana',
      category: 'Dekoratif',
      tagline: 'Panel Plafon Dekoratif Motif Kayu Estetis Tahan Api',
      description: 'Panel ceiling 3D Kencana menghadirkan nuansa mewah alami motif kayu tanpa khawatir lapuk atau dimakan rayap. Pilihan ideal untuk interior rumah, hotel, dan kantor.',
      image: '/assets/img/Detail-Produk-Ceiling-3D.webp',
      specifications: {
        'Material': 'Baja Galvalume Berkualitas Tinggi',
        'Tekstur': 'Embos Kayu Alami 3D',
        'Dimensi Lebar': '150 mm & 200 mm',
        'Aplikasi': 'Interior Plafon & Dinding Akses'
      },
      features: [
        'Tidak Merambatkan Api (Non-Combustible)',
        'Tahan Air dan Kelembapan Tinggi',
        'Warna Tahan Puluhan Tahun'
      ]
    },
    {
      id: 8,
      slug: 'baut-sds-pendukung',
      name: 'Baut SDS & Aksesoris Pendukung Kencana',
      category: 'Pendukung',
      tagline: 'Sekrup Roofing Self-Drilling Anti Karat Standar Internasional',
      description: 'Baut SDS (Self Drilling Screw) Kencana dilengkapi lapisan anti-karat ruspert dan cincin karet EPDM kedap air untuk memastikan pemasangan atap bebas bocor.',
      image: '/assets/img/baut-sds.jpg',
      specifications: {
        'Lapisan': 'Ruspert Coating Tahan Karat 1000 Jam SST',
        'Tipe': 'Hex Head with EPDM Washer',
        'Ukuran': '10x19, 12x25, 12x50, 12x65 mm',
        'Aplikasi': 'Pemasangan Atap Spandek & Genteng Metal'
      },
      features: [
        'Ujung Bor Tajam Menembus Baja dengan Cepat',
        'Ring EPDM Tidak Getas Kena Sinar Matahari',
        'Daya Cengkeram Ekstra Kuat'
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
