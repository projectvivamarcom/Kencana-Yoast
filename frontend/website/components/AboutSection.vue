<script setup lang="ts">
const pillars = [
  {
    title: 'SNI',
    icon: '/images/general/icon-maxicad.png', // Certificate line icon
    descriptions: [
      'SNI Profil Rangka Baja Ringan No. 8399: 2017',
      'SNI Baja Lembaran dan Gulungan Lapis Paduan Aluminium - Seng (BJLAS) No. 4096: 2007/2019'
    ]
  },
  {
    title: 'TKDN',
    icon: '/images/general/icon-sni.png', // Gear line icon
    descriptions: [
      'Sebagai bentuk komitmen perusahaan dalam ekonomi Indonesia serta membangun kepercayaan dengan pemangku kepentingan dan konsumen.'
    ]
  },
  {
    title: 'MaxiCAD',
    icon: '/images/general/icon-tkdn.png', // Computer monitor with ruler line icon
    descriptions: [
      'Program khusus yang dirancang untuk kuda kuda Baja Ringan KENCANA, guna menjamin keamanan dan efisiensi struktur.'
    ]
  },
  {
    title: 'GARANSI',
    icon: '/images/general/icon-garansi.png', // Rosette with ribbon & checkmark line icon
    descriptions: [
      'KENCANA menghadirkan produk berkualitas yang dijamin dengan GARANSI hingga *20 tahun.'
    ]
  }
]
</script>

<template>
  <div class="w-full space-y-0 overflow-hidden font-sans">
    <!-- 1. Banner "Ahli dalam Produk Baja Ringan Sejak 1991" (Center aligned as per Screenshot 2) -->
    <section 
      class="relative py-16 sm:py-24 lg:py-28 bg-cover bg-center bg-no-repeat"
      style="background-image: url('/images/banners/about-bg.png');"
    >
      <div class="max-w-[1300px] mx-auto px-6 sm:px-10 lg:px-16 flex flex-col items-center justify-center text-center">
        <div class="space-y-4 flex flex-col items-center">
          <h2 class="text-2xl sm:text-4xl lg:text-[44px] font-semibold text-slate-900 leading-tight">
            <span>Ahli dalam Produk</span>
            <br />
            <span class="text-red-600 font-extrabold">Baja Ringan</span> <span>Sejak 1991</span>
          </h2>

          <div class="w-28 sm:w-36 pt-1">
            <img 
              src="/images/general/ttt-1.svg" 
              alt="#tidak TIPU TIPU" 
              class="w-full h-auto object-contain drop-shadow-sm"
            />
          </div>
        </div>
      </div>
    </section>

    <!-- 2. "Kelebihan produk KENCANA®" (Minimalist 4 columns as per Screenshot 2 & 3) -->
    <section class="py-16 sm:py-24 bg-white">
      <div class="max-w-[1300px] mx-auto px-6 sm:px-10 lg:px-16">
        <!-- Red Title on Top Left -->
        <div class="mb-12 sm:mb-16">
          <h3 class="text-xl sm:text-2xl font-bold text-red-600">
            Kelebihan produk
          </h3>
          <h2 class="text-4xl sm:text-5xl lg:text-6xl font-black text-red-600 tracking-tight mt-1">
            KENCANA<sup class="text-2xl sm:text-3xl font-bold">®</sup>
          </h2>
        </div>

        <!-- 4 Minimalist Left-Aligned Pillars -->
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
          <div 
            v-for="p in pillars" 
            :key="p.title"
            class="flex flex-col items-start text-left space-y-4"
          >
            <!-- Line Art Icon -->
            <div class="w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-start">
              <img 
                :src="p.icon" 
                :alt="p.title" 
                class="w-full h-full object-contain"
              />
            </div>

            <!-- Title -->
            <h3 class="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-wider">
              {{ p.title }}
            </h3>

            <!-- Description -->
            <div class="space-y-3 text-xs sm:text-[13.5px] text-slate-600 leading-relaxed">
              <p v-for="(desc, dIdx) in p.descriptions" :key="dIdx">
                {{ desc }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
