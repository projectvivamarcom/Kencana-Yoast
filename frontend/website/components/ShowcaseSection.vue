<script setup lang="ts">
import { Play } from 'lucide-vue-next'
</script>

<template>
  <div class="w-full space-y-0 overflow-hidden font-sans">
    <!-- 1. "Proyek Roll On Site" Section -->
    <section 
      id="roll-on-site"
      class="relative py-20 bg-slate-950 text-white overflow-hidden"
    >
      <div class="absolute inset-0 bg-black/60 z-0"></div>
      <div class="relative z-10 max-w-[1300px] mx-auto px-6 sm:px-10 lg:px-16 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <div class="lg:col-span-7 space-y-6 text-center lg:text-left">
          <h2 class="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Proyek Roll On Site
          </h2>
          <p class="text-sm sm:text-base text-slate-300 leading-relaxed max-w-xl mx-auto lg:mx-0">
            Atap yang digunakan untuk Roll On Site diproduksi secara langsung di lokasi proyek, sehingga memberikan efisiensi bagi customer, baik dari segi biaya maupun waktu dalam pemasangan atap.
          </p>
          <div class="pt-2">
            <a 
              href="https://www.youtube.com/watch?v=JKPQ9NDGy8Q"
              target="_blank"
              rel="noopener noreferrer"
              class="inline-flex items-center space-x-2 px-7 py-3 rounded-[5px] text-white font-bold text-sm tracking-wide shadow-lg hover:!bg-white hover:!bg-none hover:!text-black transition-all"
              style="background: linear-gradient(180deg, #FF3535 0%, #C60505 100%);"
            >
              <Play class="w-4 h-4 fill-current" />
              <span>Selengkapnya</span>
            </a>
          </div>
        </div>

        <div class="lg:col-span-5 flex justify-center">
          <img 
            src="/images/general/mask-roll-on-site.png" 
            alt="Proyek Roll On Site" 
            class="max-w-xs sm:max-w-sm w-full h-auto object-contain drop-shadow-2xl"
          />
        </div>
      </div>
    </section>

    <!-- 2. "Penghargaan Produk" Section -->
    <section class="py-20 bg-slate-50 border-b border-slate-100">
      <div class="max-w-[1300px] mx-auto px-6 sm:px-10 lg:px-16 space-y-12">
        <div class="flex items-center justify-between border-b border-slate-200 pb-4">
          <h2 class="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            Penghargaan produk
          </h2>
          <img 
            src="/images/logo/logo-kencana-icon.png" 
            alt="Kencana" 
            class="h-7 w-auto object-contain"
          />
        </div>

        <div 
          class="relative bg-white rounded-3xl p-8 sm:p-12 border border-slate-200/80 shadow-md bg-contain bg-center bg-no-repeat flex flex-col md:flex-row items-center justify-center gap-10"
          style="background-image: url('/images/banners/piala-landingpage.png'); min-height: 480px;"
        >
          <div class="max-w-md bg-white/90 backdrop-blur-md p-6 rounded-2xl border border-slate-200 shadow-lg text-center space-y-4">
            <img 
              src="/images/general/award-kencana.jpg" 
              alt="Penghargaan Kencana" 
              class="w-full h-auto rounded-xl shadow-sm"
            />
            <p class="text-xs sm:text-sm font-semibold text-slate-700">
              Bukti pengakuan industri atas inovasi, kualitas, dan konsistensi mutu baja ringan berstandar nasional Kencana.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- 3. "Apa Kata #SobatKENCANA" Testimonial Banner -->
    <section 
      class="relative py-24 sm:py-32 bg-cover bg-center"
      style="background-image: url('/images/banners/apa-kata-landing-page.png');"
    >
      <div class="max-w-[1300px] mx-auto px-6 sm:px-10 lg:px-16 flex flex-col items-center text-center">
        <div class="max-w-2xl bg-black/40 backdrop-blur-md p-8 sm:p-12 rounded-3xl border border-white/20 text-white space-y-6 shadow-2xl">
          <h2 class="text-2xl sm:text-4xl font-normal leading-tight">
            Apa Kata
            <br />
            <strong class="font-extrabold text-white">#SobatKENCANA</strong>
          </h2>

          <blockquote class="text-sm sm:text-base italic text-slate-200 leading-relaxed font-light">
            "Saya sangat puas dengan kualitas baja ringan Kencana. Bahannya kuat, presisi, dan tahan lama."
          </blockquote>

          <div class="pt-2">
            <div class="font-bold text-base text-white">Arie Dwi Andhika</div>
            <div class="text-xs text-slate-300">Artis Indonesia</div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
