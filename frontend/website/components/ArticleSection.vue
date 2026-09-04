<script setup lang="ts">
import { ref } from 'vue'

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
    image: '/assets/img/section2.jpg',
    link: '/articles/kencana-arch-id-inovasi-konstruksi'
  },
  {
    id: 2,
    title: 'Surabaya Vaganza',
    image: '/assets/img/vaganza.jpeg',
    link: '/articles/kencana-surabaya-vaganza'
  },
  {
    id: 3,
    title: 'IMPACT+',
    image: '/assets/img/section3.jpg',
    link: '/articles/kencana-impact-yogyakarta'
  }
]
</script>

<template>
  <section id="berita" class="bg-white py-14 sm:py-18 lg:py-20">
    <div class="mx-auto max-w-[1180px] px-5 sm:px-8 lg:px-10">

      <!-- Section Heading -->
      <div class="mb-7 sm:mb-9 lg:mb-10">
        <h2
          class="text-2xl font-extrabold tracking-tight text-slate-900 sm:text-3xl lg:text-[34px]"
        >
          Simak Berita Terkini
        </h2>

        <p
          class="mt-3 max-w-[1080px] text-[13px] leading-6 text-slate-600 sm:text-sm lg:text-[15px]"
        >
          KENCANA menyajikan konten yang relevan dan terpercaya untuk mendukung wawasan
          Anda di dunia konstruksi. Temukan kabar terkini seputar kegiatan-kegiatan
          penting perusahaan, Corporate Social Responsibility (CSR), pameran, info
          produk, hingga artikel teknis baja ringan.
        </p>
      </div>

      <!-- =====================================================
           DESKTOP / TABLET
           ===================================================== -->
      <div
        class="hidden h-[390px] w-full gap-3 md:flex lg:h-[420px] lg:gap-3.5"
      >
        <NuxtLink
          v-for="(card, idx) in cards"
          :key="card.id"
          :to="card.link"
          @mouseenter="activeCard = idx"
          class="group relative h-full overflow-hidden rounded-[22px] bg-slate-200 transition-[flex] duration-500 ease-out"
          :class="
            activeCard === idx
              ? 'flex-[3.4]'
              : 'flex-[0.82]'
          "
        >
          <!-- Background Image -->
          <div
            class="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-out group-hover:scale-[1.02]"
            :style="{ backgroundImage: `url(${card.image})` }"
          ></div>

          <!-- Overlay -->
          <div
            class="absolute inset-0 transition-colors duration-500"
            :class="
              activeCard === idx
                ? 'bg-black/20'
                : 'bg-black/40 group-hover:bg-black/25'
            "
          ></div>

          <!-- ACTIVE CARD -->
          <div
            v-if="activeCard === idx"
            class="absolute inset-0 z-10 flex items-center justify-center px-5 text-center sm:px-8"
          >
          <h3
            class="text-[16px] font-semibold leading-tight tracking-tight text-white
                  drop-shadow-[0_2px_6px_rgba(0,0,0,0.6)]
                  sm:text-[17px]
                  lg:text-[18px]"
          >
            {{ card.title }}
          </h3>
          </div>

          <!-- COLLAPSED CARD -->
          <div
            v-else
            class="absolute inset-x-0 bottom-0 z-10 flex justify-center pb-7"
          >
            <span
              class="text-[14px] font-bold tracking-wide text-white drop-shadow-[0_2px_6px_rgba(0,0,0,0.6)] sm:text-[15px]"
              style="
                writing-mode: vertical-rl;
                transform: rotate(180deg);
              "
            >
              {{ card.title }}
            </span>
          </div>
        </NuxtLink>
      </div>

      <!-- =====================================================
           MOBILE
           ===================================================== -->
      <div class="flex flex-col gap-3 md:hidden">

        <!-- Active Card -->
        <NuxtLink
          :to="cards[activeCard].link"
          class="group relative h-[270px] overflow-hidden rounded-[20px] bg-slate-200"
        >
          <div
            class="absolute inset-0 bg-cover bg-center"
            :style="{ backgroundImage: `url(${cards[activeCard].image})` }"
          ></div>

          <div class="absolute inset-0 bg-black/25"></div>

          <div
            class="absolute inset-0 z-10 flex items-center justify-center px-6 text-center"
          >
            <h3
              class="text-xl font-extrabold tracking-wide text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.6)]"
            >
              {{ cards[activeCard].title }}
            </h3>
          </div>
        </NuxtLink>

        <!-- Other News -->
        <div class="grid grid-cols-3 gap-2.5">
          <NuxtLink
            v-for="card in cards.filter(c => c.id !== activeCard)"
            :key="card.id"
            :to="card.link"
            @click="activeCard = card.id"
            class="group relative h-[145px] overflow-hidden rounded-[16px]"
          >
            <div
              class="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
              :style="{ backgroundImage: `url(${card.image})` }"
            ></div>

            <div class="absolute inset-0 bg-black/40"></div>

            <div
              class="absolute inset-0 z-10 flex items-end justify-center p-2.5 text-center"
            >
              <span
                class="text-[11px] font-bold leading-tight text-white drop-shadow-md"
              >
                {{ card.title }}
              </span>
            </div>
          </NuxtLink>
        </div>

      </div>
    </div>
  </section>
</template>