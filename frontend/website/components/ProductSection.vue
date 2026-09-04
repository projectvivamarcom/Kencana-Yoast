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
    image: '/assets/img/Detail-Produk-Pintu-Ruangan.webp',
    link: '/products?cat=pintu'
  },
  {
    id: '2',
    title: 'Pintu',
    subtitle: 'Kamar Mandi',
    image: '/assets/img/Detail-Produk-Pintu-Kamar-Mandi.webp',
    link: '/products?cat=pintu'
  },
  {
    id: '3',
    title: 'Ceiling',
    subtitle: '',
    image: '/assets/img/Detail-Produk-Ceiling-3D.webp',
    link: '/products?cat=ceiling'
  },
  {
    id: '4',
    title: 'Atap',
    subtitle: 'uPVC',
    image: '/assets/img/detil-produk-upvc.webp',
    link: '/products?cat=atap'
  },
  {
    id: '5',
    title: 'Atap',
    subtitle: 'Baja Ringan',
    image: '/assets/img/atap-landingpage.webp',
    link: '/products?cat=atap'
  },
  {
    id: '6',
    title: 'Genteng',
    subtitle: 'Metal',
    image: '/assets/img/genteng-landingpage.webp',
    link: '/products?cat=genteng'
  },
  {
    id: '7',
    title: 'Rangka Atap',
    subtitle: 'Baja Ringan',
    image: '/assets/img/rangkaatap-landingpage.webp',
    link: '/products?cat=rangka-baja-ringan'
  },
  {
    id: '8',
    title: 'Rangka Plafon',
    subtitle: 'Hollow',
    image: '/assets/img/rangkaplafon-landingpage.webp',
    link: '/products?cat=rangka-plafon'
  },
  {
    id: '9',
    title: 'Struktural',
    subtitle: 'Decking',
    image: '/assets/img/strukturaldecking-landingpage.webp',
    link: '/products?cat=struktural-decking'
  },
  {
    id: '10',
    title: 'Rangka',
    subtitle: 'Baja Berat',
    image: '/assets/img/CNP-Baja.webp',
    link: '/products?cat=rangka-baja-berat'
  },
  {
    id: '11',
    title: 'Produk',
    subtitle: 'Pendukung',
    image: '/assets/img/produkpendukung-landingpage.webp',
    link: '/products?cat=pendukung'
  }
]
</script>

<template>
  <section class="py-16 sm:py-24 bg-white" id="produk">
    <div class="max-w-[1300px] mx-auto px-6 sm:px-10 lg:px-16">
      <!-- Centered Section Title (Screenshot 4) -->
      <div class="text-center mb-12 sm:mb-16">
        <h2 class="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
          Produk unggulan kami
        </h2>
      </div>

      <!-- 4 Columns Product Grid (Screenshots 4 & 5) -->
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 xl:gap-8 items-stretch">
        <NuxtLink 
          v-for="p in products" 
          :key="p.id"
          :to="p.link"
          class="group flex flex-col bg-white border border-slate-200/90 hover:border-red-500/60 shadow-sm hover:shadow-md transition-all duration-300"
        >
          <!-- Product Image Container with Light Clean Background -->
          <div class="w-full aspect-[4/5] flex items-center justify-center p-6 bg-[#fcfcfc] overflow-hidden">
            <img 
              :src="p.image" 
              :alt="`${p.title} ${p.subtitle}`"
              loading="lazy"
              class="max-h-full max-w-full object-contain transform group-hover:scale-105 transition-transform duration-300"
            />
          </div>

          <!-- Product Text Container (Left-aligned as per Screenshot 4 & 5) -->
          <div class="p-5 border-t border-slate-100 flex flex-col items-start text-left">
            <h3 class="text-lg font-bold text-red-600 transition-colors">
              {{ p.title }}
            </h3>
            <p v-if="p.subtitle" class="text-sm text-slate-700 font-normal mt-0.5">
              {{ p.subtitle }}
            </p>
          </div>
        </NuxtLink>
      </div>
    </div>
  </section>
</template>
