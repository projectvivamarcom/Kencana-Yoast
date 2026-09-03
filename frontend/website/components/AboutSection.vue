<script setup lang="ts">
const pillars = [
  {
    title: 'SNI',
    icon: '/images/general/icon-sni.png',
    desc: 'SNI Profil Rangka Baja Ringan No. 8399: 2017 & SNI Baja Lembaran dan Gulungan Lapis Paduan Aluminium - Seng (BjLAS) No. 4096: 2007/ 2019'
  },
  {
    title: 'TKDN',
    icon: '/images/general/icon-tkdn.png',
    desc: 'Sebagai bentuk komitmen perusahaan dalam ekonomi Indonesia serta membangun kepercayaan dengan pemangku kepentingan dan konsumen.'
  },
  {
    title: 'MaxiCAD',
    icon: '/images/general/icon-maxicad.png',
    desc: 'Program khusus yang dirancang untuk kuda kuda Baja Ringan KENCANA, guna menjamin keamanan dan efisiensi struktur.'
  },
  {
    title: 'GARANSI',
    icon: '/images/general/icon-garansi.png',
    desc: 'KENCANA menghadirkan produk berkualitas yang dijamin dengan GARANSI hingga *20 tahun.'
  }
]
</script>

<template>
  <div class="w-full space-y-0 overflow-hidden font-sans">
    <!-- 1. Banner "Ahli dalam Produk Baja Ringan Sejak 1991" -->
    <section 
      class="relative py-16 sm:py-24 bg-cover bg-center"
      style="background-image: url('/images/banners/about-bg.png');"
    >
      <div class="max-w-[1300px] mx-auto px-6 sm:px-10 lg:px-16 flex flex-col md:flex-row items-center justify-between gap-8">
        <div class="space-y-2 text-center md:text-left">
          <h2 class="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 leading-tight">
            Ahli dalam Produk
            <br />
            <span class="text-red-600">Baja Ringan</span>
            <br />
            <span class="text-slate-800">Sejak 1991</span>
          </h2>
        </div>

        <div class="w-44 sm:w-56 shrink-0">
          <img 
            src="/images/general/ttt-1.svg" 
            alt="Tidak Tipu-Tipu" 
            class="w-full h-auto object-contain drop-shadow-md"
          />
        </div>
      </div>
    </section>

    <!-- 2. "Kelebihan produk" with 4 Cards -->
    <section class="py-20 bg-white border-b border-slate-100">
      <div class="max-w-[1300px] mx-auto px-6 sm:px-10 lg:px-16 space-y-12">
        <div class="flex items-center justify-between border-b border-slate-200 pb-4">
          <h2 class="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            Kelebihan produk
          </h2>
          <img 
            src="/images/logo/logo-kencana-icon.png" 
            alt="Kencana" 
            class="h-7 w-auto object-contain"
          />
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div 
            v-for="p in pillars" 
            :key="p.title"
            class="bg-white rounded-2xl p-6 border border-slate-200/90 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col items-center text-center space-y-4 group hover:-translate-y-1"
          >
            <div class="w-20 h-20 flex items-center justify-center transition-transform group-hover:scale-110">
              <img :src="p.icon" :alt="p.title" class="w-full h-full object-contain" />
            </div>
            <h3 class="text-xl font-extrabold text-slate-900 group-hover:text-red-600 transition-colors">
              {{ p.title }}
            </h3>
            <p class="text-xs sm:text-sm text-slate-600 leading-relaxed">
              {{ p.desc }}
            </p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
