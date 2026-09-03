import type { JobOpening } from '~/types'

export const useCareers = () => {
  const jobs: JobOpening[] = [
    {
      id: 1,
      title: 'Senior Civil Engineer (Structural Steel)',
      department: 'Engineering & R&D',
      location: 'Surabaya Head Office',
      type: 'Full-Time',
      description: 'Bertanggung jawab melakukan kalkulasi struktur rangka atap baja ringan (truss software), perancangan detail sambungan (connection details), serta supervisi uji beban standar SNI.',
      requirements: [
        'S1 Teknik Sipil dari universitas terakreditasi',
        'Pengalaman minimal 3 tahun di bidang perancangan struktur baja / cold-formed steel',
        'Mahir software SAP2000, ETABS, AutoCAD, dan Truss Design Software',
        'Memahami standarisasi SNI 4096 dan SNI 7971'
      ]
    },
    {
      id: 2,
      title: 'Area Sales Manager (B2B Construction Project)',
      department: 'Sales & Marketing',
      location: 'Jakarta Branch',
      type: 'Full-Time',
      description: 'Mengembangkan jaringan kemitraan dengan kontraktor BUMN/Swasta, konsultan arsitek, dan pengembang properti besar di wilayah Jabodetabek & Jawa Barat.',
      requirements: [
        'S1 Manajemen / Teknik / Semua Jurusan',
        'Pengalaman minimal 4 tahun di bidang sales material konstruksi atau properti B2B',
        'Memiliki relasi kuat dengan kontraktor gedung dan infrastruktur',
        'Orientasi target tinggi dan kemampuan negosiasi prima'
      ]
    },
    {
      id: 3,
      title: 'Quality Assurance & ISO Supervisor',
      department: 'Manufacturing Plant',
      location: 'Pabrik Kencana Mojokerto / Surabaya',
      type: 'Full-Time',
      description: 'Memastikan seluruh rollforming produk baja ringan memenuhi toleransi ketebalan, lapisan coating seng-aluminium, dan kesesuaian sertifikasi ISO 9001:2015.',
      requirements: [
        'D3/S1 Teknik Mesin / Teknik Metalurgi / Teknik Industri',
        'Pengalaman 2 tahun sebagai QA/QC di industri manufaktur baja lembaran / rollforming',
        'Paham penggunaan alat ukur presisi (Micrometer, Coating Thickness Gauge, Tensile Test)',
        'Teliti, disiplin, dan memiliki jiwa kepemimpinan'
      ]
    }
  ]

  return { jobs }
}
