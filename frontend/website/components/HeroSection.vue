<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { ChevronLeft, ChevronRight } from 'lucide-vue-next'

const currentSlide = ref(0)
let timer: ReturnType<typeof setInterval> | null = null

const slides = [
  {
    image: '/assets/img/hero-section-1.webp',
    title: 'Membangun Negeri dengan',
    highlight: 'KENCANA',
    buttonText: 'Proyek Kami',
    buttonLink: '/about#proyek'
  },
  {
    image: '/assets/img/header-photo1-1.webp',
    title: 'Solusi Baja Ringan Terbaik',
    highlight: 'KENCANA',
    buttonText: 'Proyek Kami',
    buttonLink: '/about#proyek'
  },
  {
    image: '/assets/img/header-photo2.webp',
    title: 'Membangun Negeri dengan',
    highlight: 'KENCANA',
    buttonText: 'Proyek Kami',
    buttonLink: '/about#proyek'
  },
  {
    image: '/assets/img/proyek-kanalum.webp',
    title: 'Kualitas Kuat Teruji Sejak 1991',
    highlight: 'KENCANA',
    buttonText: 'Proyek Kami',
    buttonLink: '/about#proyek'
  }
]

const nextSlide = () => {
  currentSlide.value = (currentSlide.value + 1) % slides.length
}

const prevSlide = () => {
  currentSlide.value = (currentSlide.value - 1 + slides.length) % slides.length
}

const setSlide = (idx: number) => {
  currentSlide.value = idx
}

onMounted(() => {
  timer = setInterval(nextSlide, 5000)
})

onUnmounted(() => {
  if (timer) clearInterval(timer)
})
</script>

<template>
  <div class="relative w-full h-[580px] sm:h-[660px] lg:h-[750px] overflow-hidden bg-slate-950 group select-none">
    <!-- Slides Container -->
    <div 
      v-for="(slide, idx) in slides" 
      :key="idx"
      class="absolute inset-0 transition-opacity duration-1000 ease-in-out"
      :class="currentSlide === idx ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'"
    >
      <!-- Background Image with Soft Contrast Overlay -->
      <div 
        class="absolute inset-0 bg-cover bg-center bg-no-repeat"
        :style="{ backgroundImage: `url(${slide.image})` }"
      ></div>
      <div class="absolute inset-0 bg-black/30"></div>

      <!-- Slide Content Container (Center Aligned as per live site) -->
      <div class="relative z-20 max-w-[1300px] mx-auto h-full px-6 sm:px-10 lg:px-16 flex flex-col justify-center items-center text-center pt-16 sm:pt-20">
        <div class="max-w-3xl space-y-6 flex flex-col items-center">
          <h1 class="text-3xl sm:text-5xl lg:text-6xl font-normal text-white tracking-tight leading-tight" style="text-shadow: 0px 2px 12px rgba(0,0,0,0.5);">
            {{ slide.title }}
            <br />
            Produk <strong class="font-extrabold text-white">{{ slide.highlight }}</strong>
          </h1>

          <div class="pt-2">
            <NuxtLink 
              :to="slide.buttonLink"
              class="inline-block px-7 sm:px-9 py-2.5 sm:py-3 rounded-[6px] text-white font-bold text-sm sm:text-base tracking-wide shadow-lg transition-all duration-300 hover:brightness-110 active:scale-95"
              style="background: linear-gradient(180deg, #E62020 0%, #C80808 100%);"
            >
              {{ slide.buttonText }}
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>

    <!-- Navigation Arrows (Always visible on left and right edges) -->
    <button 
      type="button"
      @click="prevSlide"
      class="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 z-30 p-2 text-white/70 hover:text-white transition-colors"
      aria-label="Previous Slide"
    >
      <ChevronLeft class="w-8 h-8 sm:w-10 sm:h-10 drop-shadow-md" />
    </button>
    <button 
      type="button"
      @click="nextSlide"
      class="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 z-30 p-2 text-white/70 hover:text-white transition-colors"
      aria-label="Next Slide"
    >
      <ChevronRight class="w-8 h-8 sm:w-10 sm:h-10 drop-shadow-md" />
    </button>

    <!-- Pagination Bullets (4 circular dots as per live site) -->
    <div class="absolute bottom-6 left-1/2 -translate-x-1/2 z-30 flex items-center space-x-2.5">
      <button 
        v-for="(_, idx) in slides" 
        :key="idx"
        type="button"
        @click="setSlide(idx)"
        class="rounded-full transition-all duration-300"
        :class="currentSlide === idx ? 'w-3 h-3 bg-white shadow-sm ring-2 ring-white/50' : 'w-2.5 h-2.5 bg-white/50 hover:bg-white/80'"
        :aria-label="`Slide ${idx + 1}`"
      ></button>
    </div>
  </div>
</template>
