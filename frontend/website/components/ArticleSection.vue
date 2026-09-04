<script setup lang="ts">
import { ref } from 'vue'

// Default active card is index 3 (IMPACT+) as seen in live site Screenshot 2
const activeCard = ref<number>(3)

const cards = [
  {
    id: 0,
    title: 'CSR',
    image: '/assets/img/csr-2026.jpg',
    link: '/articles/kencana-peduli-ypac-surabaya'
  },
  {
    id: 1,
    title: 'Arch.ID',
    image: '/assets/img/DJI_0680.JPG.webp',
    link: '/articles/kencana-arch-id-inovasi-konstruksi'
  },
  {
    id: 2,
    title: 'Surabaya Vaganza',
    image: '/assets/img/IMG_0876-1.jpg',
    link: '/articles/kencana-surabaya-vaganza'
  },
  {
    id: 3,
    title: 'IMPACT+',
    image: '/assets/img/interior-1.webp',
    link: '/articles/kencana-impact-yogyakarta'
  }
]
</script>

<template>
  <section class="py-16 sm:py-24 bg-white" id="berita">
    <div class="max-w-[1300px] mx-auto px-6 sm:px-10 lg:px-16 space-y-8">
      <!-- Section Title & Description (Screenshot 2) -->
      <div class="space-y-3 text-left">
        <h2 class="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
          Simak Berita Terkini
        </h2>
        <p class="text-xs sm:text-sm text-slate-600 max-w-4xl leading-relaxed font-normal">
          KENCANA menyajikan konten yang relevan dan terpercaya untuk mendukung wawasan Anda di dunia konstruksi. Temukan kabar terkini seputar kegiatan-kegiatan penting perusahaan, Corporate Social Responsibility (CSR), pameran, info produk, hingga artikel teknis baja ringan.
        </p>
      </div>

      <!-- Expanding Content Cards (Exact Match to Screenshot 2) -->
      <div class="flex flex-col md:flex-row h-[480px] sm:h-[540px] w-full gap-3 select-none">
        <NuxtLink
          v-for="(card, idx) in cards"
          :key="card.id"
          :to="card.link"
          @mouseenter="activeCard = idx"
          class="relative h-full transition-all duration-500 ease-out cursor-pointer overflow-hidden rounded-[26px] bg-cover bg-center flex flex-col"
          :class="[
            activeCard === idx 
              ? 'md:flex-[4] shadow-xl justify-center items-start pl-8 lg:pl-12' 
              : 'md:flex-[1] opacity-95 hover:opacity-100 justify-end pb-8'
          ]"
          :style="{ backgroundImage: `url(${card.image})` }"
        >
          <!-- Soft Contrast Gradient Overlay -->
          <div 
            class="absolute inset-0 transition-opacity duration-300"
            :class="activeCard === idx ? 'bg-black/15' : 'bg-black/40 hover:bg-black/25'"
          ></div>

          <!-- Collapsed Card: Vertical Title at Bottom (Screenshot 2) -->
          <div 
            v-if="activeCard !== idx"
            class="relative z-10 w-full flex justify-center"
          >
            <span 
              class="text-white font-bold text-base sm:text-lg tracking-wider whitespace-nowrap drop-shadow-md"
              style="writing-mode: vertical-rl; transform: rotate(180deg);"
            >
              {{ card.title }}
            </span>
          </div>

          <!-- Expanded Card: Horizontal Bold Title in the middle of photo (Screenshot 2) -->
          <div 
            v-else 
            class="relative z-10 text-white animate-fadeIn"
          >
            <h3 class="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-wide drop-shadow-2xl">
              {{ card.title }}
            </h3>
          </div>
        </NuxtLink>
      </div>
    </div>
  </section>
</template>
