<script setup lang="ts">
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
    image: '/images/products/pintu-ruangan.png',
    link: '/products?cat=pintu'
  },
  {
    id: '2',
    title: 'Pintu',
    subtitle: 'Kamar Mandi',
    image: '/images/products/pintu-kamar-mandi.png',
    link: '/products?cat=pintu'
  },
  {
    id: '3',
    title: 'Ceiling',
    subtitle: '',
    image: '/images/products/ceiling.png',
    link: '/products?cat=ceiling'
  },
  {
    id: '4',
    title: 'Atap',
    subtitle: 'uPVC',
    image: '/images/products/atap-upvc.png',
    link: '/products?cat=atap'
  },
  {
    id: '5',
    title: 'Atap',
    subtitle: 'Baja Ringan',
    image: '/images/products/atap-landingpage.webp',
    link: '/products?cat=atap'
  },
  {
    id: '6',
    title: 'Genteng',
    subtitle: '',
    image: '/images/products/genteng-landingpage.webp',
    link: '/products?cat=genteng'
  },
  {
    id: '7',
    title: 'Rangka Atap',
    subtitle: 'Baja Ringan',
    image: '/images/products/rangkaatap-landingpage.webp',
    link: '/products?cat=rangka-baja-ringan'
  },
  {
    id: '8',
    title: 'Rangka',
    subtitle: 'Plafon',
    image: '/images/products/rangkaplafon-landingpage.webp',
    link: '/products?cat=rangka-plafon'
  },
  {
    id: '9',
    title: 'Struktural',
    subtitle: 'Decking',
    image: '/images/products/strukturaldecking-landingpage.webp',
    link: '/products?cat=struktural-decking'
  },
  {
    id: '10',
    title: 'Rangka',
    subtitle: 'Baja Berat',
    image: '/images/products/rangka-baja-berat.svg',
    link: '/products?cat=rangka-baja-berat'
  },
  {
    id: '11',
    title: 'Produk',
    subtitle: 'Pendukung',
    image: '/images/products/produkpendukung-landingpage.webp',
    link: '/products?cat=pendukung'
  }
]
</script>

<template>
  <section class="py-20 bg-white border-b border-slate-100" id="produk">
    <div class="max-w-[1300px] mx-auto px-6 sm:px-10 lg:px-16 space-y-12">
      <!-- Section Header -->
      <div class="flex items-center justify-between border-b border-slate-200 pb-4">
        <h2 class="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
          Produk unggulan kami
        </h2>
        <img 
          src="/images/logo/logo-kencana-icon.png" 
          alt="Kencana" 
          class="h-7 w-auto object-contain"
        />
      </div>

      <!-- 11 Featured Products Grid -->
      <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 items-stretch">
        <NuxtLink 
          v-for="p in products" 
          :key="p.id"
          :to="p.link"
          class="group flex flex-col items-center text-center p-4 rounded-2xl bg-white hover:bg-slate-50 border border-slate-100 hover:border-slate-300 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
        >
          <!-- Product Image Wrapper -->
          <div class="w-full aspect-[3/4] flex items-center justify-center overflow-hidden mb-3">
            <img 
              :src="p.image" 
              :alt="`${p.title} ${p.subtitle}`"
              loading="lazy"
              class="max-h-full max-w-full object-contain transform group-hover:scale-110 transition-transform duration-300"
            />
          </div>

          <!-- Product Title & Subtitle -->
          <div class="space-y-0.5">
            <h3 class="text-sm sm:text-base font-extrabold text-slate-900 group-hover:text-red-600 transition-colors">
              {{ p.title }}
            </h3>
            <p v-if="p.subtitle" class="text-xs text-slate-500 font-medium">
              {{ p.subtitle }}
            </p>
          </div>
        </NuxtLink>
      </div>
    </div>
  </section>
</template>
