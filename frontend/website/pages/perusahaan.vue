<script setup lang="ts">
import { Download } from 'lucide-vue-next'

useHead({
  title: 'Profil Perusahaan | PT Kencana Maju Bersama - Ahlinya Baja Ringan',
  meta: [
    {
      name: 'description',
      content: 'PT Kencana Maju Bersama adalah distributor produk-produk bahan bangunan terutama baja ringan berkualitas merek KENCANA® berstandar SNI di Indonesia.'
    },
    { property: 'og:title', content: 'Profil Perusahaan | PT Kencana Maju Bersama' },
    { property: 'og:description', content: 'Distributor bahan bangunan baja ringan terpercaya di Indonesia dengan jaringan cabang luas.' },
    { property: 'og:image', content: '/assets/img/Group-48096996.png' }
  ],
  link: [
    { rel: 'canonical', href: 'https://kencanaindonesia.co.id/perusahaan/' }
  ]
})

useSeoMeta({
  title: 'Profil Perusahaan | PT Kencana Maju Bersama - Ahlinya Baja Ringan',
  ogTitle: 'PT Kencana Maju Bersama | Profil Perusahaan',
  ogDescription: 'Perusahaan distributor bahan bangunan baja ringan terpercaya dengan merek KENCANA® Ahlinya Baja Ringan, TIDAK TIPU-TIPU.',
  ogUrl: 'https://kencanaindonesia.co.id/perusahaan/',
  ogImage: '/assets/img/Group-48096996.png'
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
    img: '/assets/img/integritas.webp',
    deskripsi: [
      'Perusahaan harus mampu melahirkan dan mempertahankan produk sesuai regulasi dan membentuk sumber daya manusia (SDM) yang kredibel.',
      'Produk atau pelayanan harus diberikan bukan sekedar memenuhi yang dikampanyekan, tapi juga dilakukan dengan penuh suka cita, komitmen, dan konsisten.',
      'Menjunjung tinggi kepercayaan pelanggan yang sudah diberikan dengan melalui pelayanan yang bertanggung jawab dan berkesinambungan.'
    ]
  },
  {
    judul: 'KUALITAS',
    img: '/assets/img/kualitas.webp',
    deskripsi: [
      'Perusahaan harus mampu melahirkan dan mempertahankan produk bernilai tinggi di sepanjang waktu yang dihasilkan oleh SDM bermutu.',
      'Memberikan produk dan layanan kepada pelanggan dalam rangka memenuhi atau melampaui harapan yang diinginkan.',
      'Senantiasa memberikan pelatihan pelatihan bagi pengembangan Sumber Daya Manusia di semua posisi untuk hasil kerja terbaik.'
    ]
  },
  {
    judul: 'HARMONI',
    img: '/assets/img/harmoni.webp',
    deskripsi: [
      'Menjadikan keselarasan pola pikir dan tindakan sebagai peran penting bagi setiap anak usaha dan departemen dalam mencapai cita harapan perusahaan secara holistik.',
      'Membuka saluran komunikasi yang efektif dan terbuka antara manajemen dan karyawan dalam rangka menjaga kondusifitas dan mendukung peningkatan produktifitas.',
      'Kepercayaan dibangun dengan rasa memiliki yang tinggi dengan tetap menjaga profesionalitas dalam setiap penyelesaian persoalan.'
    ]
  },
  {
    judul: 'DINAMIS',
    img: '/assets/img/dinamis.webp',
    deskripsi: [
      'Perusahaan berkemampuan dengan cepat menghadapi segala perubahan terjadi, baik perubahan regulasi, perubahan lingkungan, serta perubahan pasar.',
      'Seluruh sumber daya yang ada harus bisa diintegrasikan untuk mencapai tujuan pengembangan produk maupun bisnis baru.',
      'Setiap kompetensi individu bersiap sedia untuk dikonfigurasi ulang sesuai kebutuhan dalam organisasi.'
    ]
  },
  {
    judul: 'INOVATIF',
    img: '/assets/img/inovatif.webp',
    deskripsi: [
      'Perusahaan berproses terus menerus untuk menghasilkan ide ide baru, baik untuk produk, layanan, maupun model bisnis yang membawa perubahan dalam operasional maupun industri secara keseluruhan.',
      'Seluruh elemen perusahaan berfokus pada penciptaan nilai tambah dan keunggulan kompetitif produk yang dihasilkan dengan cara cara baru yang efektif dan efisien.',
      'Menyadari sepenuhnya bahwa untuk mencapai kesuksesan jangka Panjang, menjadi kreatif adalah salah satu kunci keberhasilan.'
    ]
  }
]

const keunggulanPillars = [
  {
    title: 'STANDARISASI SNI',
    desc: 'Semua produk KENCANA® telah lulus uji dan bersertifikasi SNI Profil Rangka Baja Ringan No. 8399:2017 serta SNI BJLAS No. 4096:2007/2019 demi keselamatan bangunan Anda.'
  },
  {
    title: 'KOMITMEN TKDN',
    desc: 'Tingkat Komponen Dalam Negeri (TKDN) tinggi membuktikan dedikasi penuh KENCANA® dalam memajukan industri manufaktur baja ringan serta perekonomian nasional.'
  },
  {
    title: 'SOFTWARE MAXICAD',
    desc: 'Sistem software MaxiCAD dirancang khusus untuk perhitungan kuda-kuda baja ringan KENCANA® secara presisi, akurat, hemat waktu, dan terjamin keamanannya.'
  },
  {
    title: 'GARANSI HINGGA 20 TAHUN',
    desc: 'KENCANA® memberikan jaminan perlindungan garansi resmi hingga 20 tahun terhadap ketahanan karat dan integritas struktural produk untuk ketenangan jangka panjang.'
  }
]
</script>

<template>
  <div class="font-sans bg-white overflow-hidden">

    <!-- ========== HERO SECTION ========== -->
    <section class="relative bg-neutral-900 overflow-hidden">
      <div class="relative w-full min-h-[440px] sm:min-h-[520px] lg:min-h-[580px] flex items-center">
        <!-- Hero Background Image -->
        <img
          src="/assets/img/Group-48096996.png"
          alt="Profil Perusahaan PT Kencana Maju Bersama"
          class="absolute inset-0 w-full h-full object-cover object-[center_35%]"
        />
        <!-- Subtle gradient overlay on the left for contrast -->
        <div class="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent"></div>

        <!-- Hero Content Overlay -->
        <div class="relative z-10 w-full max-w-[1340px] mx-auto px-6 sm:px-10 lg:px-16 pt-12 pb-24">
          <div class="max-w-xl text-white">
            <h1 class="text-4xl sm:text-5xl lg:text-[54px] font-extrabold text-white leading-[1.08] tracking-tight mb-3 drop-shadow-md">
              Profil<br />Perusahaan
            </h1>
            <p class="text-xs sm:text-sm lg:text-base font-bold text-white uppercase tracking-[0.2em] drop-shadow">
              PT KENCANA MAJU BERSAMA
            </p>
          </div>
        </div>

        <!-- Layered Bottom Angled Chevron -->
        <div class="absolute -bottom-1 left-0 right-0 w-full pointer-events-none z-20 overflow-hidden">
          <svg viewBox="0 0 1440 80" fill="none" preserveAspectRatio="none" class="w-full h-10 sm:h-14 lg:h-16 block">
            <path d="M0,80 L0,25 L720,65 L1440,25 L1440,80 Z" fill="rgba(255,255,255,0.45)" />
            <path d="M0,80 L0,45 L720,80 L1440,45 L1440,80 Z" fill="#FFFFFF" />
          </svg>
        </div>
      </div>
    </section>


    <!-- ========== BREADCRUMB ========== -->
    <div class="bg-white px-6 sm:px-10 lg:px-16 pt-8 pb-3">
      <div class="max-w-[1340px] mx-auto flex items-center gap-2 text-xs sm:text-sm text-gray-500">
        <NuxtLink to="/" class="hover:text-kencana-red transition-colors font-medium">Home Page</NuxtLink>
        <span class="text-gray-400">/</span>
        <span class="text-gray-900 font-bold">Perusahaan</span>
      </div>
    </div>


    <!-- ========== SEJARAH SINGKAT ========== -->
    <section id="sejarah" class="pt-6 pb-12 sm:pb-16 bg-white">
      <div class="max-w-[1340px] mx-auto px-6 sm:px-10 lg:px-16">
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">

          <!-- Left Column: Title -->
          <div class="lg:col-span-3">
            <h2 class="text-3xl sm:text-4xl lg:text-[2.6rem] font-bold text-gray-800 leading-[1.12] tracking-tight">
              Sejarah<br />Singkat
            </h2>
          </div>

          <!-- Middle Column: Description + Download PDF Button + Certification Badges -->
          <div class="lg:col-span-5 space-y-4 text-[14px] sm:text-[15px] text-gray-700 leading-relaxed">
            <p class="text-justify">
              PT Kencana Maju Bersama merupakan perusahaan distributor produk-produk bahan bangunan,
              terutama produk baja ringan dengan merek dagang KENCANA® yang diproduksi oleh PT Kepuh Kencana Arum.
            </p>
            <p class="text-justify">
              Didirikan pada tahun <span class="text-kencana-red font-bold">1991</span>,
              perusahaan ini memiliki komitmen untuk terus menyediakan produk berkualitas dengan merek
              <strong class="text-gray-900 font-bold">KENCANA®</strong> yang diproduksi oleh PT Kepuh Kencana Arum,
              produsen baja ringan terkemuka yang telah memiliki pengalaman dalam industri selama puluhan tahun.
            </p>
            <p class="text-justify">
              PT Kencana Maju Bersama telah hadir di berbagai kota besar di Indonesia, untuk memberikan kemudahan
              bagi masyarakat dalam mendapatkan produk-produk
              <strong class="text-gray-900 font-bold">KENCANA® Ahlinya Baja Ringan, TIDAK TIPU-TIPU</strong>.
            </p>

            <!-- Download Company Profile PDF Button -->
            <div class="pt-2">
              <a
                href="/docs/Company-Profile.pdf"
                download="Company-Profile-PT-Kencana-Maju-Bersama.pdf"
                target="_blank"
                class="inline-flex items-center gap-2.5 bg-[#E3000F] hover:bg-red-700 text-white font-bold text-xs sm:text-sm px-6 py-2.5 rounded-full transition-all duration-200 shadow-md hover:shadow-lg active:scale-95"
              >
                <Download class="w-4 h-4 shrink-0" />
                <span>DOWNLOAD PDF</span>
              </a>
            </div>

            <!-- Certification Badges (SNI, LRQA, KAN, TOP BRAND, etc.) -->
            <div class="pt-4">
              <img
                src="/images/general/sni-dkk.png"
                alt="Sertifikasi Mutu SNI, LRQA, KAN, TOP BRAND Kencana"
                class="h-9 sm:h-11 w-auto object-contain"
              />
            </div>
          </div>

          <!-- Right Column: Video Player Embed -->
          <div class="lg:col-span-4 w-full">
            <div class="relative w-full overflow-hidden rounded-2xl shadow-xl border border-gray-100 bg-slate-900 aspect-video">
              <iframe
                src="https://www.youtube.com/embed/lyIFEuSWm8E"
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


   <!-- ========== VISI & MISI (PROFESSIONAL VERSION) ========== -->
<section id="visi-misi" class="py-14 sm:py-20 bg-gray-50">
  <div class="max-w-[1340px] mx-auto px-6 sm:px-10 lg:px-16">

    <!-- Section heading -->
    <div class="text-center mb-10 sm:mb-14">
      <span class="inline-block w-10 h-[3px] bg-red-600 mb-3"></span>
      <h2 class="text-2xl sm:text-3xl lg:text-4xl font-semibold text-gray-900">
        Visi &amp; Misi Perusahaan
      </h2>
      <p class="text-gray-500 text-sm sm:text-base mt-2">
        Komitmen kami dalam membangun industri baja ringan Indonesia
      </p>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">

      <!-- Card 1: VISI -->
      <div class="relative rounded-2xl overflow-hidden shadow-lg bg-white border border-gray-100 group">
        <!-- Image area (fixed proportion, tidak full selayar) -->
        <div class="relative h-52 sm:h-60 lg:h-64 overflow-hidden">
          <img
            src="/assets/img/visi.png"
            alt="Visi PT Kencana Maju Bersama"
            class="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
          />
          <div class="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
          <span class="absolute top-4 left-4 flex items-center gap-2 bg-red-600 text-white text-xs sm:text-sm font-semibold tracking-wide px-3 py-1.5 rounded-full">
            VISI
          </span>
        </div>

        <!-- Text area (di bawah, background putih, rapi) -->
        <div class="p-6 sm:p-8">
          <p class="text-gray-700 text-sm sm:text-base leading-relaxed">
            Menjadi perusahaan distribusi bahan bangunan terbesar di Indonesia.
          </p>
        </div>
      </div>

      <!-- Card 2: MISI -->
      <div class="relative rounded-2xl overflow-hidden shadow-lg bg-white border border-gray-100 group">
        <div class="relative h-52 sm:h-60 lg:h-64 overflow-hidden">
          <img
            src="/assets/img/misi.png"
            alt="Misi PT Kencana Maju Bersama"
            class="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
          />
          <div class="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
          <span class="absolute top-4 left-4 flex items-center gap-2 bg-red-600 text-white text-xs sm:text-sm font-semibold tracking-wide px-3 py-1.5 rounded-full">
            MISI
          </span>
        </div>

        <div class="p-6 sm:p-8">
          <ol class="space-y-3 text-gray-700 text-sm sm:text-base leading-relaxed">
            <li v-for="(misi, i) in misiList" :key="i" class="flex gap-3">
              <span class="flex-shrink-0 w-6 h-6 rounded-full bg-red-50 text-red-600 text-xs font-semibold flex items-center justify-center mt-0.5">
                {{ i + 1 }}
              </span>
              <span>{{ misi }}</span>
            </li>
          </ol>
        </div>
      </div>

    </div>
  </div>
</section>


    <!-- ========== TRANSITION DIVIDER: WHITE TO RED (V-SHAPED WEDGE) ========== -->
    <div class="w-full overflow-hidden leading-none -mb-1">
      <svg viewBox="0 0 1440 70" fill="none" preserveAspectRatio="none" class="w-full h-10 sm:h-16 lg:h-20 block">
        <path d="M0,0 L720,70 L1440,0 L1440,70 L0,70 Z" fill="#E3000F" />
      </svg>
    </div>


    <!-- ========== NILAI-NILAI PERUSAHAAN (RED BACKGROUND) ========== -->
    <section id="nilai" class="bg-[#E3000F] text-white pt-4 pb-16 sm:pb-24">
      <div class="max-w-[1340px] mx-auto px-6 sm:px-10 lg:px-16">

        <!-- Heading -->
        <div class="mb-10 sm:mb-14">
          <h2 class="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight tracking-tight">
            Nilai - nilai<br />Perusahaan
          </h2>
        </div>

        <!-- 5 Value Cards with Outline Borders -->
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5 sm:gap-6">
          <div
            v-for="nilai in nilaiPerusahaan"
            :key="nilai.judul"
            class="border border-amber-400/80 hover:border-white rounded-xl p-4 sm:p-5 flex flex-col justify-between h-full bg-red-600/20 backdrop-blur-xs transition-colors duration-300 shadow-sm"
          >
            <!-- Trapezoid Header Badge Image -->
            <div class="mb-5 flex justify-center">
              <img
                :src="nilai.img"
                :alt="nilai.judul"
                class="w-full max-w-[210px] h-auto object-contain hover:scale-105 transition-transform duration-300"
              />
            </div>

            <!-- Bullet Descriptions -->
            <div class="space-y-3 text-left w-full">
              <p
                v-for="(desc, di) in nilai.deskripsi"
                :key="di"
                class="text-white/95 text-xs leading-relaxed font-normal"
              >
                {{ desc }}
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>


    <!-- ========== KEUNGGULAN PRODUK (RED BACKGROUND) ========== -->
    <section id="keunggulan" class="bg-[#E3000F] text-white pt-6 pb-16 sm:pb-24 border-t border-white/10">
      <div class="max-w-[1340px] mx-auto px-6 sm:px-10 lg:px-16">

        <!-- Left Subtitle -->
        <div class="mb-2">
          <h3 class="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            Keunggulan<br />Produk
          </h3>
        </div>

        <!-- Center Big Heading -->
        <div class="text-center my-6 sm:my-8">
          <h2 class="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-wider uppercase drop-shadow-md">
            KEUNGGULAN PRODUK
          </h2>
        </div>

        <!-- Center Product Hero Graphic (3 Stacked Corrugated Sheets + 20-Year Guarantee Badge) -->
        <div class="flex justify-center items-center my-6 sm:my-10">
          <div class="relative max-w-[680px] w-full px-4">
            <img
              src="/assets/img/ceiling.webp"
              alt="Keunggulan Produk Atap Baja Ringan Kencana Bergaransi 20 Tahun"
              class="w-full h-auto object-contain mx-auto drop-shadow-[0_20px_35px_rgba(0,0,0,0.35)] hover:scale-105 transition-transform duration-500"
            />
          </div>
        </div>

        <!-- 4 Feature Columns -->
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 pt-8 sm:pt-12 text-left">
          <div
            v-for="(item, idx) in keunggulanPillars"
            :key="idx"
            class="space-y-2 border-t border-white/20 pt-4"
          >
            <h4 class="text-sm sm:text-base font-extrabold text-white tracking-wide uppercase">
              {{ item.title }}
            </h4>
            <p class="text-white/90 text-xs sm:text-[13px] leading-relaxed">
              {{ item.desc }}
            </p>
          </div>
        </div>

      </div>
    </section>


    <!-- ========== SERTIFIKAT (RED BACKGROUND, TWO FRAMED CERTIFICATES) ========== -->
    <section id="sertifikat" class="bg-[#E3000F] text-white py-16 sm:py-24 border-t border-white/10">
      <div class="max-w-[1100px] mx-auto px-6 sm:px-10 lg:px-16">

        <div class="grid grid-cols-1 md:grid-cols-2 gap-12 sm:gap-16 items-start">

          <!-- Certificate 1: SNI -->
          <div class="flex flex-col items-center text-center space-y-4">
            <div>
              <h3 class="text-lg sm:text-xl font-extrabold text-white tracking-widest uppercase">
                SERTIFIKAT
              </h3>
              <p class="text-xs sm:text-sm font-semibold text-white/90 uppercase tracking-wide mt-0.5">
                SNI (STANDAR NASIONAL INDONESIA)
              </p>
            </div>

            <!-- Framed Certificate Image -->
            <div class="w-full max-w-[340px] transition-transform duration-300 hover:scale-[1.02]">
              <img
                src="/assets/img/sertif1.webp"
                alt="Sertifikat Standar Nasional Indonesia Kencana"
                class="w-full h-auto object-contain mx-auto drop-shadow-2xl"
              />
            </div>

            <!-- Download Button -->
            <div class="pt-2">
              <a
                href="/docs/SERTIFIKAT-SNI-1.pdf"
                download="Sertifikat-SNI-Kencana.pdf"
                target="_blank"
                class="inline-flex items-center gap-2 bg-[#E3000F] hover:bg-white hover:text-[#E3000F] text-white border-2 border-white font-extrabold text-xs sm:text-sm px-8 py-2 rounded-full transition-all duration-200 shadow-lg active:scale-95"
              >
                <Download class="w-4 h-4" />
                <span>DOWNLOAD</span>
              </a>
            </div>

            <p class="text-white/85 text-xs max-w-xs leading-relaxed">
              Sertifikat resmi Standar Nasional Indonesia menjamin ketahanan, presisi dimensi, dan kualitas baja ringan Kencana.
            </p>
          </div>

          <!-- Certificate 2: ISO 9001:2015 -->
          <div class="flex flex-col items-center text-center space-y-4">
            <div>
              <h3 class="text-lg sm:text-xl font-extrabold text-white tracking-widest uppercase">
                SERTIFIKAT
              </h3>
              <p class="text-xs sm:text-sm font-semibold text-white/90 uppercase tracking-wide mt-0.5">
                ISO 9001:2015
              </p>
            </div>

            <!-- Framed Certificate Image -->
            <div class="w-full max-w-[340px] transition-transform duration-300 hover:scale-[1.02]">
              <img
                src="/assets/img/sertif2.webp"
                alt="Sertifikat ISO 9001:2015 LRQA Kencana"
                class="w-full h-auto object-contain mx-auto drop-shadow-2xl"
              />
            </div>

            <!-- Download Button -->
            <div class="pt-2">
              <a
                href="/docs/SERTIFIKAT-ISO.pdf"
                download="Sertifikat-ISO-Kencana.pdf"
                target="_blank"
                class="inline-flex items-center gap-2 bg-[#E3000F] hover:bg-white hover:text-[#E3000F] text-white border-2 border-white font-extrabold text-xs sm:text-sm px-8 py-2 rounded-full transition-all duration-200 shadow-lg active:scale-95"
              >
                <Download class="w-4 h-4" />
                <span>DOWNLOAD</span>
              </a>
            </div>

            <p class="text-white/85 text-xs max-w-xs leading-relaxed">
              Sertifikasi sistem manajemen mutu internasional Lloyd's Register (LRQA) menjamin kepuasan dan konsistensi pasokan produk.
            </p>
          </div>

        </div>

      </div>
    </section>


    <!-- ========== PRE-FOOTER BANNER: MEMBANGUN NEGERI BERSAMA KENCANA ========== -->
    <section class="relative w-full overflow-hidden bg-red-950">
      <div class="relative w-full h-36 sm:h-48 lg:h-60 flex items-center justify-center">
        <img
          src="/assets/img/bangunkencana.png"
          alt="Membangun Negeri Bersama KENCANA"
          class="absolute inset-0 w-full h-full object-cover object-center"
        />
      </div>
    </section>

  </div>
</template>
