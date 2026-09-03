import type { JobOpening } from '~/types'

export const useCareers = () => {
  const jobs: JobOpening[] = [
    {
      id: 1,
      title: 'Branch Manager Area Ngawi',
      department: 'Branch Operations & Sales',
      location: 'Ngawi, Jawa Timur',
      type: 'Full-Time',
      description: 'Memimpin operasional cabang Kencana Ngawi, mengelola tim sales dan distribusi, serta mencapai target penjualan produk baja ringan di wilayah Ngawi dan sekitarnya.',
      requirements: [
        'Pendidikan minimal S1 Semua Jurusan',
        'Pengalaman minimal 3 tahun sebagai Branch Manager / Sales Supervisor di industri bahan bangunan',
        'Memiliki jiwa kepemimpinan, integritas tinggi, dan orientasi pada target',
        'Memahami pasar konstruksi dan jaringan toko bangunan area Jawa Timur bagian barat'
      ]
    },
    {
      id: 2,
      title: 'Branch Manager Area Gorontalo',
      department: 'Branch Operations & Sales',
      location: 'Gorontalo, Sulawesi',
      type: 'Full-Time',
      description: 'Bertanggung jawab atas manajemen operasional, pergudangan, dan ekspansi pasar baja ringan Kencana di wilayah Gorontalo dan sekitarnya.',
      requirements: [
        'Pendidikan minimal S1 Semua Jurusan',
        'Pengalaman minimal 3 tahun memimpin cabang operasional distributor material bangunan',
        'Kemampuan komunikasi, negosiasi, dan manajemen tim yang unggul',
        'Bersedia ditempatkan di Gorontalo'
      ]
    },
    {
      id: 3,
      title: 'Branch Manager Area Palangkaraya',
      department: 'Branch Operations & Sales',
      location: 'Palangkaraya, Kalimantan Tengah',
      type: 'Full-Time',
      description: 'Mengelola operasional cabang, menjaga ketersediaan rantai pasok produk baja ringan, serta menjalin kemitraan erat dengan kontraktor dan toko rekanan.',
      requirements: [
        'Pendidikan minimal S1 Semua Jurusan',
        'Pengalaman terbukti di bidang sales & operasional material bangunan/baja ringan di Kalimantan',
        'Memiliki kemampuan analisa pasar dan strategi penjualan yang kuat',
        'Bersedia ditempatkan di Palangkaraya'
      ]
    },
    {
      id: 4,
      title: 'National Sales Project Manager',
      department: 'Sales & Marketing',
      location: 'Surabaya Head Office',
      type: 'Full-Time',
      description: 'Mengembangkan dan memenangkan proyek-proyek strategis skala nasional (BUMN, pemerintah, swasta) untuk solusi rangka atap, genteng metal, dan baja ringan Kencana.',
      requirements: [
        'S1 Teknik Sipil / Arsitektur / Manajemen Bisnis',
        'Pengalaman minimal 5 tahun di bidang project sales B2B konstruksi skala nasional',
        'Memiliki jaringan luas dengan konsultan arsitek, perencana, dan kontraktor utama',
        'Mobilitas tinggi dan siap melakukan perjalanan dinas ke seluruh cabang Kencana'
      ]
    },
    {
      id: 5,
      title: 'Branch Manager Area Sukabumi',
      department: 'Branch Operations & Sales',
      location: 'Sukabumi, Jawa Barat',
      type: 'Full-Time',
      description: 'Memimpin penetrasi pasar dan ekspansi jaringan distribusi baja ringan Kencana di wilayah Sukabumi, Cianjur, dan sekitarnya.',
      requirements: [
        'Pendidikan S1 Semua Jurusan',
        'Pengalaman minimal 3 tahun di bidang distribusi bahan bangunan',
        'Mampu menyusun rencana kerja strategis dan mengelola tim lapangan secara efektif'
      ]
    },
    {
      id: 6,
      title: 'Branch Manager Area Majalengka',
      department: 'Branch Operations & Sales',
      location: 'Majalengka, Jawa Barat',
      type: 'Full-Time',
      description: 'Mengoptimalkan performa penjualan dan operasional logistik cabang Kencana di area Majalengka dan kawasan Ciayumajakuning.',
      requirements: [
        'Pendidikan S1 Semua Jurusan',
        'Pengalaman memimpin unit bisnis atau cabang distributor',
        'Memiliki relasi yang baik dengan pelaku industri konstruksi setempat'
      ]
    },
    {
      id: 7,
      title: 'Branch Manager Area Magelang',
      department: 'Branch Operations & Sales',
      location: 'Magelang, Jawa Tengah',
      type: 'Full-Time',
      description: 'Memimpin pertumbuhan pangsa pasar Kencana di wilayah Magelang, Kedu, dan sekitarnya melalui strategi pemasaran retail dan proyek.',
      requirements: [
        'Pendidikan S1 Semua Jurusan',
        'Pengalaman minimal 3 tahun di level manajerial industri bahan bangunan',
        'Memiliki kemampuan kepemimpinan dan manajerial yang tangguh'
      ]
    },
    {
      id: 8,
      title: 'Branch Manager Area Kupang',
      department: 'Branch Operations & Sales',
      location: 'Kupang, Nusa Tenggara Timur',
      type: 'Full-Time',
      description: 'Mengelola operasional kantor cabang, pergudangan, dan distribusi produk baja ringan Kencana di seluruh kepulauan NTT.',
      requirements: [
        'Pendidikan S1 Semua Jurusan',
        'Pengalaman minimal 3 tahun mengelola cabang distribusi di wilayah Indonesia Timur',
        'Mampu bekerja mandiri dengan integritas dan etos kerja tinggi'
      ]
    },
    {
      id: 9,
      title: 'Senior Civil Engineer (Structural Steel)',
      department: 'Engineering & R&D',
      location: 'Surabaya Head Office',
      type: 'Full-Time',
      description: 'Bertanggung jawab melakukan kalkulasi struktur rangka atap baja ringan (truss software MaxiCAD), perancangan detail sambungan, serta supervisi uji beban standar SNI.',
      requirements: [
        'S1 Teknik Sipil dari universitas terakreditasi',
        'Pengalaman minimal 3 tahun di bidang perancangan struktur baja / cold-formed steel',
        'Mahir software SAP2000, ETABS, AutoCAD, dan MaxiCAD Design Software',
        'Memahami standarisasi SNI 8399 dan SNI 4096'
      ]
    },
    {
      id: 10,
      title: 'Quality Assurance & ISO Supervisor',
      department: 'Manufacturing Plant',
      location: 'Pabrik Kencana Mojokerto',
      type: 'Full-Time',
      description: 'Memastikan seluruh rollforming produk baja ringan memenuhi toleransi ketebalan, lapisan coating seng-aluminium AZ100, dan kesesuaian sertifikasi ISO 9001:2015.',
      requirements: [
        'D3/S1 Teknik Mesin / Teknik Metalurgi / Teknik Industri',
        'Pengalaman 2 tahun sebagai QA/QC di industri manufaktur baja lembaran / rollforming',
        'Paham penggunaan alat ukur presisi (Micrometer, Coating Thickness Gauge, Tensile Test)',
        'Teliti, disiplin, dan memahami sistem manajemen mutu ISO'
      ]
    }
  ]

  return { jobs }
}
