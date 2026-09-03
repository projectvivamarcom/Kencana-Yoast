<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { ChevronLeft, ChevronRight } from 'lucide-vue-next'

const currentSlide = ref(0)
let timer: ReturnType<typeof setInterval> | null = null

const slides = [
  {
    image: '/images/banners/hero-slide1.png',
    title: 'Membangun Negeri dengan',
    highlight: 'Produk KENCANA',
    buttonText: 'Proyek Kami',
    buttonLink: '/about#proyek'
  },
  {
    image: '/images/banners/hero-slide2.webp',
    title: 'Membangun Negeri dengan',
    highlight: 'Produk KENCANA',
    buttonText: 'Proyek Kami',
    buttonLink: '/about#proyek'
  },
  {
    image: '/images/banners/hero-slide3.webp',
    title: 'Membangun Negeri dengan',
    highlight: 'Produk KENCANA',
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
  timer = setInterval(nextSlide, 4500)
})

onUnmounted(() => {
  if (timer) clearInterval(timer)
})
</script>

<template>
  <div class="relative w-full h-[600px] sm:h-[700px] lg:h-[780px] overflow-hidden bg-slate-950 group select-none">
    <!-- Slides Container -->
    <div 
      v-for="(slide, idx) in slides" 
      :key="idx"
      class="absolute inset-0 transition-opacity duration-1000 ease-in-out"
      :class="currentSlide === idx ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'"
    >
      <!-- Background Image with Overlay -->
      <div 
        class="absolute inset-0 bg-cover bg-center bg-no-repeat"
        :style="{ backgroundImage: `url(${slide.image})` }"
      ></div>
      <div class="absolute inset-0 bg-black/40 mix-blend-multiply"></div>

      <!-- Slide Content Container (Padded for transparent overlap navbar) -->
      <div class="relative z-20 max-w-[1300px] mx-auto h-full px-6 sm:px-10 lg:px-16 flex flex-col justify-center items-start pt-20 sm:pt-28">
        <div class="max-w-3xl space-y-6">
          <h1 class="text-3xl sm:text-5xl lg:text-6xl font-normal text-white tracking-tight leading-tight drop-shadow-xl" style="text-shadow: 0px 0px 14px rgba(0,0,0,0.4);">
            {{ slide.title }}
            <br />
            Produk <strong class="font-extrabold text-white">{{ ' ' }}KENCANA</strong>
          </h1>

          <div class="pt-3">
            <NuxtLink 
              :to="slide.buttonLink"
              class="inline-block px-8 py-3.5 rounded-[5px] text-white font-bold text-sm sm:text-base tracking-wide shadow-xl transition-all duration-300 hover:!bg-white hover:!bg-none hover:!text-black"
              style="background: linear-gradient(180deg, #FF3535 0%, #C60505 100%);"
            >
              {{ slide.buttonText }}
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>

    <!-- Navigation Arrows -->
    <button 
      type="button"
      @click="prevSlide"
      class="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 z-30 w-11 h-11 rounded-full bg-white/20 hover:bg-white text-white hover:text-black flex items-center justify-center transition-all opacity-0 group-hover:opacity-100 shadow-lg"
      aria-label="Previous Slide"
    >
      <ChevronLeft class="w-6 h-6" />
    </button>
    <button 
      type="button"
      @click="nextSlide"
      class="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 z-30 w-11 h-11 rounded-full bg-white/20 hover:bg-white text-white hover:text-black flex items-center justify-center transition-all opacity-0 group-hover:opacity-100 shadow-lg"
      aria-label="Next Slide"
    >
      <ChevronRight class="w-6 h-6" />
    </button>

    <!-- Pagination Bullets -->
    <div class="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 flex items-center space-x-3">
      <button 
        v-for="(_, idx) in slides" 
        :key="idx"
        type="button"
        @click="setSlide(idx)"
        class="h-2.5 rounded-full transition-all duration-300"
        :class="currentSlide === idx ? 'w-8 bg-white' : 'w-2.5 bg-white/50 hover:bg-white/80'"
        :aria-label="`Slide ${idx + 1}`"
      ></button>
    </div>
  </div>
</template>
