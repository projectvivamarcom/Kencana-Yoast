<script setup lang="ts">
import { ArrowRight, CheckCircle2, Factory, ShieldAlert, Cpu, Award } from 'lucide-vue-next'
import SectionTitle from './SectionTitle.vue'

const pillars = [
  {
    title: 'SNI',
    subtitle: 'Standar Nasional Indonesia',
    icon: '/images/general/icon-sni.png',
    desc: 'SNI Profil Rangka Baja Ringan No. 8399:2017 & SNI Baja Lembaran Lapis Paduan Aluminium-Seng (BjLAS) No. 4096:2007/2019.'
  },
  {
    title: 'TKDN',
    subtitle: 'Tingkat Komponen Dalam Negeri',
    icon: '/images/general/icon-tkdn.png',
    desc: 'Bentuk nyata komitmen Kencana dalam menggerakkan perekonomian nasional dan membangun kepercayaan bersama pemangku kepentingan.'
  },
  {
    title: 'MaxiCAD',
    subtitle: 'Software Analisa Struktur Presisi',
    icon: '/images/general/icon-maxicad.png',
    desc: 'Program khusus yang dirancang untuk analisa struktur kuda-kuda baja ringan KENCANA guna menjamin keamanan dan efisiensi struktur atap.'
  },
  {
    title: 'GARANSI',
    subtitle: 'Hingga 20 Tahun Garansi Resmi',
    icon: '/images/general/icon-garansi.png',
    desc: 'KENCANA menghadirkan produk dengan ketahanan prima yang dilindungi sertifikat garansi resmi hingga *20 tahun (S&K Berlaku).'
  }
]
</script>

<template>
  <section class="py-24 bg-white overflow-hidden" id="tentang">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
      <!-- 1. Sejak 1991 Profile Highlight -->
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <!-- Left: Text Content -->
        <div class="lg:col-span-6 space-y-6">
          <SectionTitle 
            badge="Dedikasi Lebih Dari 3 Dekade"
            title="Ahli dalam Produk Baja Ringan"
            highlight="Sejak 1991"
            subtitle="PT Kencana Maju Bersama telah memproduksi dan mendistribusikan material konstruksi baja ringan berstandar internasional ke seluruh penjuru Nusantara."
            align="left"
          />

          <p class="text-sm sm:text-base text-slate-600 leading-relaxed">
            Berawal dari komitmen memberikan material bangunan yang aman, terpercaya, dan bebas tipu-tipu ketebalan, KENCANA terus berinovasi menghasilkan produk rangka atap, genteng metal, hollow, dan spandek berkualitas tinggi dengan teknologi mutakhir.
          </p>

          <div class="grid grid-cols-2 gap-4 pt-2">
            <div class="p-4 rounded-xl bg-slate-50 border border-slate-200">
              <div class="text-2xl sm:text-3xl font-extrabold text-kencana-red">50+ Cabang</div>
              <div class="text-xs text-slate-500 mt-1 font-medium">Jaringan distribusi &amp; depo di Indonesia</div>
            </div>
            <div class="p-4 rounded-xl bg-slate-50 border border-slate-200">
              <div class="text-2xl sm:text-3xl font-extrabold text-kencana-red">100% Asli</div>
              <div class="text-xs text-slate-500 mt-1 font-medium">Bahan baku Zincalume bergaransi SNI</div>
            </div>
          </div>

          <div class="pt-2">
            <NuxtLink 
              to="/about"
              class="inline-flex items-center space-x-2 text-sm font-bold text-kencana-red hover:text-kencana-redDark transition-colors group"
            >
              <span>Pelajari Profil &amp; Sejarah Kencana Lebih Lanjut</span>
              <ArrowRight class="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
            </NuxtLink>
          </div>
        </div>

        <!-- Right: Ambassador & Awards Showcase -->
        <div class="lg:col-span-6">
          <div class="relative bg-gradient-to-br from-slate-900 via-slate-800 to-red-950 p-6 sm:p-8 rounded-3xl text-white shadow-2xl overflow-hidden">
            <!-- Glow effect -->
            <div class="absolute -right-20 -bottom-20 w-64 h-64 rounded-full bg-red-600/30 blur-3xl pointer-events-none"></div>

            <div class="relative z-10 space-y-6">
              <div class="flex items-center justify-between border-b border-white/10 pb-4">
                <span class="text-xs font-bold uppercase tracking-wider text-red-400">Apa Kata #SobatKENCANA</span>
                <span class="text-xs text-slate-400">Tokoh Publik &amp; Pengguna</span>
              </div>

              <!-- Quote Block -->
              <blockquote class="text-base sm:text-lg italic text-slate-200 font-medium leading-relaxed">
                "Saya sangat puas dengan kualitas baja ringan Kencana. Bahannya kuat, presisi, dan tahan lama. Tidak ada rasa khawatir soal mutu untuk bangunan keluarga!"
              </blockquote>

              <!-- Profile & Ambassador photo -->
              <div class="flex items-center space-x-4 pt-2">
                <div class="relative w-16 h-16 rounded-full overflow-hidden border-2 border-kencana-red shrink-0 bg-slate-800">
                  <img 
                    src="/images/general/ambassador-arie.png" 
                    alt="Arie Dwi Andhika - Artis Indonesia" 
                    class="w-full h-full object-cover object-top"
                  />
                </div>
                <div>
                  <div class="font-extrabold text-white text-base">Arie Dwi Andhika</div>
                  <div class="text-xs text-slate-400">Artis Indonesia &amp; Pengguna Kencana</div>
                </div>
              </div>

              <!-- Badges certification image -->
              <div class="pt-4 border-t border-white/10">
                <img 
                  src="/images/general/sni-dkk.png" 
                  alt="Sertifikasi SNI dan Standar Mutu Kencana" 
                  class="h-10 w-auto object-contain brightness-110"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- 2. The 4 Key Pillars of Kencana -->
      <div class="space-y-10 pt-8 border-t border-slate-100">
        <SectionTitle 
          badge="Komitmen Mutu"
          title="4 Kelebihan Produk"
          highlight="KENCANA"
          subtitle="Mengapa ribuan kontraktor, arsitek, dan pemilik rumah di Indonesia mempercayakan konstruksi mereka kepada Kencana."
          align="center"
        />

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div 
            v-for="pillar in pillars" 
            :key="pillar.title"
            class="bg-slate-50 hover:bg-white rounded-2xl p-6 border border-slate-200/80 shadow-sm hover:shadow-xl transition-all duration-300 space-y-4 flex flex-col justify-between group hover:-translate-y-1"
          >
            <div class="space-y-4">
              <!-- Icon Container -->
              <div class="w-16 h-16 rounded-2xl bg-white p-2.5 border border-slate-200 shadow-sm group-hover:scale-105 transition-transform flex items-center justify-center">
                <img 
                  :src="pillar.icon" 
                  :alt="pillar.title" 
                  class="w-full h-full object-contain"
                />
              </div>

              <div class="space-y-1">
                <h3 class="text-xl font-extrabold text-slate-900 group-hover:text-kencana-red transition-colors">
                  {{ pillar.title }}
                </h3>
                <div class="text-xs font-semibold text-slate-500">
                  {{ pillar.subtitle }}
                </div>
              </div>

              <p class="text-xs text-slate-600 leading-relaxed">
                {{ pillar.desc }}
              </p>
            </div>
          </div>
        </div>
      </div>

      <!-- 3. Roll On Site Innovation Showcase -->
      <div 
        class="relative bg-gradient-to-br from-slate-900 to-slate-950 rounded-3xl p-8 sm:p-12 text-white overflow-hidden shadow-xl"
        id="roll-on-site"
      >
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
          <div class="lg:col-span-8 space-y-4">
            <div class="inline-flex items-center space-x-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-red-500/20 text-red-400 border border-red-500/30">
              <span>Layanan Inovasi Khusus Proyek</span>
            </div>
            <h2 class="text-2xl sm:text-4xl font-extrabold tracking-tight">
              Proyek <span class="text-kencana-red">Roll On Site</span>
            </h2>
            <p class="text-sm sm:text-base text-slate-300 leading-relaxed max-w-2xl">
              Solusi pencetakan lembaran atap baja ringan secara langsung di lokasi proyek tanpa sambungan panjang. Mengeliminasi risiko kebocoran sambungan, menghemat biaya logistik, dan mempercepat waktu pemasangan proyek skala besar, pabrik, maupun pergudangan.
            </p>
            <div class="flex flex-wrap gap-4 pt-2">
              <a 
                href="https://wa.me/6281131158000?text=Halo%20Kencana,%20saya%20tertarik%20dengan%20layanan%20Roll%20On%20Site%20untuk%20proyek%20saya"
                target="_blank"
                rel="noopener noreferrer"
                class="px-6 py-3 rounded-xl bg-kencana-red hover:bg-kencana-redDark text-white font-bold text-sm shadow-lg transition-all"
              >
                Konsultasi Roll On Site
              </a>
              <NuxtLink 
                to="/about#roll-on-site"
                class="px-6 py-3 rounded-xl bg-white/10 hover:bg-white/20 border border-white/20 text-white font-bold text-sm transition-all"
              >
                Pelajari Mekanisme
              </NuxtLink>
            </div>
          </div>

          <div class="lg:col-span-4 flex justify-center">
            <div class="relative p-3 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20">
              <img 
                src="/images/banners/banner-testimoni.png" 
                alt="Proyek Roll On Site Kencana" 
                class="rounded-xl w-full max-w-xs object-cover shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
