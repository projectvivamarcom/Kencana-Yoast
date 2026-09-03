<script setup lang="ts">
import { ref } from 'vue'

const activeCard = ref<number>(0)

const cards = [
  {
    id: 0,
    title: 'CSR',
    subtitle: 'Kencana Peduli YPAC Surabaya',
    image: '/images/articles/csr-ypac.jpg',
    link: '/articles/kencana-peduli-ypac-surabaya'
  },
  {
    id: 1,
    title: 'Arch ID',
    subtitle: 'Inovasi Dunia Konstruksi',
    image: '/images/articles/arch-id.jpg',
    link: '/articles/kencana-arch-id-inovasi-konstruksi'
  },
  {
    id: 2,
    title: 'Surabaya Vaganza',
    subtitle: 'Pawai Budaya Nusantara',
    image: '/images/articles/surabaya-vaganza.jpg',
    link: '/articles/kencana-surabaya-vaganza'
  },
  {
    id: 3,
    title: 'IMPACT+',
    subtitle: 'Inovasi Konstruksi Yogyakarta',
    image: '/images/articles/impact-jogja.jpg',
    link: '/articles/kencana-impact-yogyakarta'
  }
]
</script>

<template>
  <section class="py-20 bg-white border-b border-slate-100" id="berita">
    <div class="max-w-[1300px] mx-auto px-6 sm:px-10 lg:px-16 space-y-8">
      <!-- Section Title -->
      <div class="space-y-3">
        <h2 class="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
          Simak Berita Terkini
        </h2>
        <p class="text-sm sm:text-base text-slate-600 max-w-4xl leading-relaxed">
          KENCANA menyajikan konten yang relevan dan terpercaya untuk mendukung wawasan Anda di dunia konstruksi. Temukan kabar terkini seputar kegiatan-kegiatan penting perusahaan, Corporate Social Responsibility (CSR), pameran, info produk, hingga artikel teknis baja ringan.
        </p>
      </div>

      <!-- Expanding Content Cards (Exact Elementor Accordion Layout) -->
      <div class="flex flex-col md:flex-row h-[500px] sm:h-[550px] w-full gap-3 overflow-hidden rounded-3xl">
        <div
          v-for="(card, idx) in cards"
          :key="card.id"
          @mouseenter="activeCard = idx"
          class="relative h-full transition-all duration-500 ease-out cursor-pointer overflow-hidden rounded-2xl bg-cover bg-center flex flex-col justify-end p-6"
          :class="[
            activeCard === idx 
              ? 'md:flex-[3] shadow-2xl' 
              : 'md:flex-[1] opacity-90 hover:opacity-100'
          ]"
          :style="{ backgroundImage: `url(${card.image})` }"
        >
          <!-- Gradient Shadow Overlay -->
          <div class="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent"></div>

          <!-- Card Content -->
          <div class="relative z-10 space-y-2 text-white">
            <h3 class="text-xl sm:text-2xl font-extrabold tracking-wide drop-shadow-md">
              {{ card.title }}
            </h3>

            <div 
              v-show="activeCard === idx" 
              class="space-y-3 transition-opacity duration-300 animate-fadeIn"
            >
              <p class="text-xs sm:text-sm text-slate-200">
                {{ card.subtitle }}
              </p>
              <div>
                <NuxtLink 
                  :to="card.link"
                  class="inline-block px-5 py-2 rounded-[5px] text-xs font-bold text-white tracking-wide shadow-md hover:!bg-white hover:!bg-none hover:!text-black transition-all"
                  style="background: linear-gradient(180deg, #FF3535 0%, #C60505 100%);"
                >
                  Selengkapnya
                </NuxtLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
