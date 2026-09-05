<script setup lang="ts">
import { ChevronRight } from 'lucide-vue-next'

useHead({
  title: 'Perusahaan | PT Kencana Maju Bersama - Distributor Baja Ringan Terbesar',
  meta: [
    {
      name: 'description',
      content: 'PT Kencana Maju Bersama adalah perusahaan distributor bahan bangunan terkemuka di Indonesia. Berdiri 2019, mendistribusikan produk KENCANA ke seluruh Indonesia melalui lebih dari 50 cabang.'
    },
    { property: 'og:title', content: 'Perusahaan | PT Kencana Maju Bersama' },
    { property: 'og:description', content: 'Distributor bahan bangunan baja ringan terpercaya di Indonesia dengan 50+ cabang.' }
  ],
  link: [
    { rel: 'canonical', href: 'https://kencanaindonesia.co.id/perusahaan/' }
  ]
})

useSeoMeta({
  title: 'Perusahaan | PT Kencana Maju Bersama - Distributor Baja Ringan Terbesar',
  ogTitle: 'PT Kencana Maju Bersama | Distributor Baja Ringan Indonesia',
  ogDescription: 'Perusahaan distributor bahan bangunan baja ringan terpercaya, berdiri 2019, dengan 50+ cabang di seluruh Indonesia.',
  ogUrl: 'https://kencanaindonesia.co.id/perusahaan/',
  ogImage: '/images/banners/hero-slide2.webp'
})

const misiList = [
  'Mendistribusikan produk - produk bahan bangunan berkualitas',
  'Mendistribusikan produk secara merata di seluruh wilayah Indonesia',
  'Menjaga kontinuitas pasokan',
  'Menjaga kepuasan pelanggan'
]

const nilaiPerusahaan = [
  {
    judul: 'INTEGRITAS',
    img: '/assets/img/Group-48097049.png',
    deskripsi: [
      'Perusahaan harus mampu melahirkan dan mempertahankan produk sesuai regulasi dan membentuk sumber daya manusia (SDM) yang kredibel.',
      'Produk atau pelayanan harus diberikan bukan sekedar memenuhi yang dikampanyekan, tapi juga dilakukan dengan penuh suka cita, komitment, dan konsisten.',
      'Menjunjung tinggi kepercayaan pelanggan yang sudah diberikan dengan melalui pelayanan yang bertanggung jawab dan berkesinambungan.'
    ]
  },
  {
    judul: 'KUALITAS',
    img: '/assets/img/Group-48097050.png',
    deskripsi: [
      'Perusahaan harus mampu melahirkan dan mempertahankan produk bernilai tinggi di sepanjang waktu yang dihasilkan oleh SDM bermutu.',
      'Memberikan produk dan layanan kepada pelanggan dalam rangka memenuhi atau melampaui harapan yang diinginkan.',
      'Senantiasa memberikan pelatihan pelatihan bagi pengembangan Sumber Daya Manusia di semua posisi untuk hasil kerja terbaik.'
    ]
  },
  {
    judul: 'HARMONI',
    img: '/assets/img/Group-48097051.png',
    deskripsi: [
      'Menjadikan keselarasan pola pikir dan tindakan sebagai peran penting bagi setiap anak usaha dan departemen dalam mencapai cita harapan perusahaan secara holistik.',
      'Membuka saluran komunikasi yang efektif dan terbuka antara manajemen dan karyawan dalam rangka menjaga kondusifitas dan mendukung peningkatan produktifitas.',
      'Kepercayaan dibangun dengan rasa memiliki yang tinggi dengan tetap menjaga profesionalitas dalam setiap penyelesaian persoalan.'
    ]
  },
  {
    judul: 'DINAMIS',
    img: '/assets/img/Group-48097052.png',
    deskripsi: [
      'Perusahaan berkemampuan dengan cepat menghadapi segala perubahan terjadi, baik perubahan regulasi, perubahan lingkungan, serta perubahan pasar.',
      'Seluruh sumber daya yang ada harus bisa diintegrasikan untuk mencapai tujuan pengembangan produk maupun bisnis baru.',
      'Setiap kompetensi individu bersiap sedia untuk dikonfirgurasi ulang sesuai kebutuhan dalam organisasi.'
    ]
  },
  {
    judul: 'INOVATIF',
    img: '/assets/img/Group-48097053.png',
    deskripsi: [
      'Perusahaan berproses terus menerus untuk menghasilkan ide ide baru, baik untuk produk, layanan, maupun model bisnis yang membawa perubahan dalam operasional maupun industri secara keseluruhan.',
      'Seluruh elemen perusahaan berfokus pada penciptaan nilai tambah dan keunggulan kompetitif produk yang dihasilkan dengan cara cara baru yang efektif dan efisien.',
      'Menyadari sepenuhnya bahwa untuk mencapai kesuksesan jangka Panjang, menjadi kreatif adalah salah satu kunci keberhasilan.'
    ]
  }
]
</script>

<template>
  <div class="font-sans bg-white">

    <!-- ========== HERO SECTION ========== -->
    <section class="relative min-h-[70vh] flex items-center overflow-hidden">
      <div class="absolute inset-0">
        <img
          src="/assets/img/DSC005321-1.jpg"
          alt="Tim PT Kencana Maju Bersama"
          class="w-full h-full object-cover object-center"
        />
        <div class="absolute inset-0 bg-black/55"></div>
      </div>

      <div class="relative z-10 w-full px-6 sm:px-10 lg:px-20 py-24 sm:py-32">
        <div class="max-w-xl">
          <h1 class="text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-[1.05] tracking-tight mb-5">
            Profil<br />Perusahaan
          </h1>
          <p class="text-base sm:text-lg font-semibold text-white/80 uppercase tracking-widest">
            PT KENCANA MAJU BERSAMA
          </p>
        </div>
      </div>

      <!-- White wave bottom-right -->
      <div class="absolute bottom-0 right-0 w-72 h-40 pointer-events-none">
        <svg viewBox="0 0 300 160" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-full h-full">
          <path d="M300 160 L0 160 Q200 140 300 0 Z" fill="white"/>
        </svg>
      </div>
    </section>


    <!-- ========== BREADCRUMB ========== -->
    <div class="bg-white border-b border-gray-100 px-6 sm:px-10 lg:px-20 py-3">
      <div class="flex items-center gap-1.5 text-sm text-gray-500">
        <NuxtLink to="/" class="hover:text-kencana-red transition-colors">Home Page</NuxtLink>
        <span class="text-gray-400">/</span>
        <span class="text-gray-800 font-medium">Perusahaan</span>
      </div>
    </div>


    <!-- ========== SEJARAH SINGKAT ========== -->
    <section id="sejarah" class="py-16 sm:py-20 bg-white">
      <div class="px-6 sm:px-10 lg:px-20">
        <div class="grid grid-cols-1 lg:grid-cols-[200px_1fr_400px] gap-10 lg:gap-14 items-start">

          <!-- Left: Large heading -->
          <div>
            <h2 class="text-3xl sm:text-4xl lg:text-[2.75rem] font-bold text-gray-800 leading-tight">
              Sejarah<br />Singkat
            </h2>
          </div>

          <!-- Center: Body text -->
          <div class="space-y-4 text-[15px] text-gray-700 leading-relaxed text-justify">
            <p>
              PT Kencana Maju Bersama merupakan perusahaan distributor produk-produk bahan bangunan,
              terutama baja ringan beserta komponen pendukungnya.
            </p>
            <p>
              Didirikan pada tahun <span class="text-kencana-red font-semibold">2019</span>,
              perseroan ini mendistribusikan produk dengan merek
              <strong class="text-gray-900">KENCANA</strong> yang diproduksi oleh PT Kepuh Kencana Arum,
              ke kota-kota di seluruh Indonesia melalui lebih dari
              <span class="text-kencana-red font-semibold">50 cabang</span>.
            </p>
            <p>
              Pasokan yang kontinu ini menciptakan
              <span class="text-kencana-red font-medium">distribusi</span> yang merata di pasar,
              sehingga memudahkan masyarakat untuk memperoleh produk
              <strong class="text-gray-900">KENCANA</strong>.
            </p>

            <!-- Download Profile -->
            <div class="pt-3">
              <a
                href="https://kencanaindonesia.co.id/wp-content/uploads/2025/08/Company-Profile-Update-Oktober-2024.pdf?download=1"
                target="_blank"
                rel="noopener noreferrer"
                class="inline-flex items-center gap-2 bg-kencana-red hover:bg-kencana-redDark text-white font-semibold text-sm px-6 py-3 rounded-full transition-colors duration-200"
              >
                Download Profile
                <svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/>
                </svg>
              </a>
            </div>

            <!-- Certification badges -->
            <div class="pt-3">
              <img
                src="/images/general/sni-dkk.png"
                alt="Sertifikasi SNI, LR, KAN, MAXi"
                class="h-11 w-auto object-contain"
              />
            </div>
          </div>

          <!-- Right: YouTube embed -->
          <div class="w-full">
            <div class="relative w-full overflow-hidden rounded-lg shadow-md" style="aspect-ratio: 16/9;">
              <iframe
                src="https://www.youtube.com/embed/lyIFEuSWm8E?controls=1&rel=0"
                title="KENCANA Ahlinya Baja Ringan, TIDAK TIPU-TIPU!"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
                class="absolute inset-0 w-full h-full border-0"
              ></iframe>
            </div>
          </div>

        </div>
      </div>
    </section>


    <!-- ========== VISI & MISI ========== -->
    <section id="visi-misi" class="relative">
      <div class="grid grid-cols-1 md:grid-cols-2">

        <!-- Visi -->
        <div class="relative min-h-[440px] flex items-end overflow-hidden">
          <img
            src="/assets/img/header-photo1-1.webp"
            alt="Visi PT Kencana Maju Bersama - perusahaan distribusi bahan bangunan terbesar"
            class="absolute inset-0 w-full h-full object-cover object-center"
          />
          <div class="absolute inset-0 bg-black/45"></div>
          <div class="relative z-10 p-10 sm:p-14 w-full">
            <h2 class="text-4xl sm:text-5xl font-bold text-white mb-6">Visi</h2>
            <p class="text-white/90 text-base leading-relaxed">
              Menjadi perusahaan distribusi bahan bangunan terbesar di Indonesia
            </p>
          </div>
        </div>

        <!-- Misi -->
        <div class="relative min-h-[440px] flex items-end overflow-hidden">
          <img
            src="/assets/img/DSC007111-1.jpg"
            alt="Misi PT Kencana Maju Bersama - tim profesional"
            class="absolute inset-0 w-full h-full object-cover object-center"
          />
          <div class="absolute inset-0 bg-black/50"></div>
          <div class="relative z-10 p-10 sm:p-14 w-full">
            <h2 class="text-4xl sm:text-5xl font-bold text-white mb-6">Misi</h2>
            <ol class="space-y-2">
              <li
                v-for="(misi, i) in misiList"
                :key="i"
                class="flex items-start gap-2 text-white/90 text-sm leading-relaxed"
              >
                <span class="font-bold shrink-0">{{ i + 1 }}.</span>
                <span>{{ misi }}</span>
              </li>
            </ol>
          </div>
        </div>

      </div>

      <!-- Red V-shape / wave separator -->
      <div class="h-16 relative overflow-hidden">
        <svg viewBox="0 0 1440 64" preserveAspectRatio="none" class="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 0 L720 64 L1440 0 L1440 64 L0 64 Z" fill="#E3000F"/>
        </svg>
      </div>
    </section>


    <!-- ========== NILAI-NILAI PERUSAHAAN ========== -->
    <section id="nilai" class="bg-kencana-red pt-4 pb-20 sm:pb-28">
      <div class="px-6 sm:px-10 lg:px-20">

        <!-- Heading -->
        <div class="mb-14">
          <h2 class="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
            Nilai - nilai<br />Perusahaan
          </h2>
        </div>

        <!-- 5 Values -->
        <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8 lg:gap-6">
          <div
            v-for="nilai in nilaiPerusahaan"
            :key="nilai.judul"
            class="flex flex-col items-center text-center"
          >
            <!-- Value icon image -->
            <div class="mb-3 w-full">
              <img
                :src="nilai.img"
                :alt="nilai.judul"
                class="w-full h-auto object-contain"
              />
            </div>

            <!-- Descriptions -->
            <div class="space-y-3 text-left">
              <p
                v-for="(desc, di) in nilai.deskripsi"
                :key="di"
                class="text-white/85 text-[11px] sm:text-xs leading-relaxed"
              >
                {{ desc }}
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>

  </div>
</template>
