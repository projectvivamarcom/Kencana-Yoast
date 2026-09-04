<script setup lang="ts">
import { ArrowRight } from 'lucide-vue-next'

export interface FeaturedProduct {
  id: string
  title: string
  subtitle: string
  image: string
  link: string
}

const products: FeaturedProduct[] = [
  {
    id: '1',
    title: 'Pintu',
    subtitle: 'Ruangan',
    image: '/assets/img/pintu-ruangan-transparent.png',
    link: '/products?cat=pintu'
  },
  {
    id: '2',
    title: 'Pintu',
    subtitle: 'Kamar Mandi',
    image: '/assets/img/pintu-kamar-mandi-transparent.png',
    link: '/products?cat=pintu'
  },
  {
    id: '3',
    title: 'Ceiling',
    subtitle: 'Dekoratif',
    image: '/assets/img/ceiling-transparent.png',
    link: '/products?cat=ceiling'
  },
  {
    id: '4',
    title: 'Atap',
    subtitle: 'uPVC',
    image: '/assets/img/atap-upvc-transparent.png',
    link: '/products?cat=atap'
  },
  {
    id: '5',
    title: 'Atap',
    subtitle: 'Baja Ringan',
    image: '/assets/img/atap-transparent.png',
    link: '/products?cat=atap'
  },
  {
    id: '6',
    title: 'Genteng',
    subtitle: 'Metal Pasir & Polos',
    image: '/assets/img/genteng-transparent.png',
    link: '/products?cat=genteng'
  },
  {
    id: '7',
    title: 'Rangka Atap',
    subtitle: 'Baja Ringan',
    image: '/assets/img/rangka-atap-transparent.png',
    link: '/products?cat=rangka-baja-ringan'
  },
  {
    id: '8',
    title: 'Rangka',
    subtitle: 'Plafon & Partisi',
    image: '/assets/img/rangka-transparent.png',
    link: '/products?cat=rangka-plafon'
  },
  {
    id: '9',
    title: 'Struktural',
    subtitle: 'Decking',
    image: '/assets/img/decking-transparent.png',
    link: '/products?cat=struktural-decking'
  },
  {
    id: '10',
    title: 'Rangka',
    subtitle: 'Baja Berat Kanalum',
    image: '/assets/img/Kanalum-baru-1.png',
    link: '/products?cat=rangka-baja-berat'
  },
  {
    id: '11',
    title: 'Produk',
    subtitle: 'Pendukung & Insulasi',
    image: '/assets/img/produk-pendukung-transparent.png',
    link: '/products?cat=pendukung'
  }
]
</script>

<template>
  <section class="py-16 sm:py-24 bg-white" id="produk">
    <div class="max-w-[1300px] mx-auto px-6 sm:px-10 lg:px-16">
      <!-- Centered Section Title -->
      <div class="text-center mb-12 sm:mb-16">
        <h2 class="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
          Produk unggulan kami
        </h2>
      </div>

      <!-- 4 Columns Corporate Product Grid -->
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 xl:gap-8 items-stretch">
        <NuxtLink 
          v-for="p in products" 
          :key="p.id"
          :to="p.link"
          class="group flex flex-col bg-white border border-slate-200 hover:border-red-600 hover:shadow-lg transition-all duration-300 rounded-sm"
        >
          <!-- Product Image: Seamless Transparent PNG directly on White Card -->
          <div class="w-full aspect-[4/5] flex items-center justify-center p-6 sm:p-8 bg-white overflow-hidden">
            <img 
              :src="p.image" 
              :alt="`${p.title} ${p.subtitle}`"
              loading="lazy"
              class="max-h-full max-w-full object-contain transform group-hover:scale-105 transition-transform duration-300"
            />
          </div>

          <!-- Product Text Container with Arrow Right -->
          <div class="p-5 border-t border-slate-100 flex items-center justify-between text-left mt-auto bg-white">
            <div>
              <h3 class="text-base sm:text-lg font-bold text-slate-900 group-hover:text-red-600 transition-colors">
                {{ p.title }}
              </h3>
              <p v-if="p.subtitle" class="text-xs sm:text-sm text-slate-500 font-medium mt-0.5">
                {{ p.subtitle }}
              </p>
            </div>
            <div class="text-slate-300 group-hover:text-red-600 group-hover:translate-x-1 transition-all duration-300 pl-2 shrink-0">
              <ArrowRight class="w-5 h-5" />
            </div>
          </div>
        </NuxtLink>
      </div>
    </div>
  </section>
</template>
