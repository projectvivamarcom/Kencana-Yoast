<script setup lang="ts">
import { ref } from 'vue'
import { Calculator, ShieldCheck, MessageCircle, Info } from 'lucide-vue-next'

const isLoaded = ref(false)

useHead({
  title: 'Kalkulator Baja Ringan KENCANA Membantu Menghemat Biaya',
  meta: [
    {
      name: 'description',
      content: 'Hitung estimasi kebutuhan baja ringan dengan mudah menggunakan Kalkulator Baja Ringan KENCANA. Dengan estimasi jumlah material dan biaya.'
    }
  ],
  link: [
    { rel: 'canonical', href: 'https://kencanaindonesia.co.id/kalkulator-kencana' }
  ]
})

useSeoMeta({
  title: 'Kalkulator Baja Ringan KENCANA Membantu Menghemat Biaya',
  ogTitle: 'Kalkulator Baja Ringan KENCANA Membantu Menghemat Biaya',
  ogDescription: 'Hitung estimasi kebutuhan baja ringan dengan mudah menggunakan Kalkulator Baja Ringan KENCANA. Dengan estimasi jumlah material dan biaya.',
  ogUrl: 'https://kencanaindonesia.co.id/kalkulator-kencana',
  ogImage: '/images/logo/logo-kencana.webp'
})
</script>

<template>
  <div class="min-h-screen bg-slate-50 font-sans pb-20">
    <!-- Top Header Banner -->
    <section class="bg-gradient-to-r from-slate-900 via-slate-800 to-red-950 text-white py-12 sm:py-16">
      <div class="max-w-[1300px] mx-auto px-6 sm:px-10 lg:px-16 text-center space-y-4">
        <div class="inline-flex items-center space-x-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-white/10 text-red-400 border border-white/10">
          <Calculator class="w-3.5 h-3.5" />
          <span>Alat Bantu Estimasi Konstruksi</span>
        </div>

        <h1 class="text-2xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">
          Kalkulator Baja Ringan <span class="text-red-500">KENCANA</span>
        </h1>

        <p class="text-xs sm:text-base text-slate-300 max-w-2xl mx-auto leading-relaxed">
          Hitung estimasi kebutuhan baja ringan, genteng metal, dan aksesoris atap secara instan, presisi, dan hemat biaya untuk bangunan Anda.
        </p>
      </div>
    </section>

    <!-- Calculator Container -->
    <main class="max-w-[1300px] mx-auto px-4 sm:px-6 lg:px-8 -mt-6">
      <div class="bg-white rounded-2xl sm:rounded-3xl shadow-xl border border-slate-200/80 overflow-hidden">
        <!-- Info Banner -->
        <div class="bg-red-50 border-b border-red-100 p-4 sm:px-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs sm:text-sm text-slate-700">
          <div class="flex items-center space-x-2.5">
            <Info class="w-4 h-4 text-kencana-red shrink-0" />
            <span>Kalkulator ini memberikan estimasi jumlah kebutuhan material. Untuk analisis struktur kuda-kuda presisi, konsultasikan ke tim MaxiCAD Kencana.</span>
          </div>
          <a 
            href="https://wa.me/6281131158000?text=Halo%20Kencana,%20saya%20ingin%20konsultasi%20perhitungan%20rangka%20atap%20MaxiCAD" 
            target="_blank"
            class="font-bold text-kencana-red hover:underline shrink-0 flex items-center space-x-1"
          >
            <MessageCircle class="w-3.5 h-3.5" />
            <span>Bantuan Teknis Halo KENCANA</span>
          </a>
        </div>

        <!-- Loading Skeleton -->
        <div v-if="!isLoaded" class="py-24 text-center space-y-4">
          <div class="w-10 h-10 border-4 border-red-600 border-t-transparent rounded-full animate-spin mx-auto"></div>
          <p class="text-sm text-slate-500 font-medium">Memuat Kalkulator Baja Ringan Kencana...</p>
        </div>

        <!-- Embedded Vercel Web Application -->
        <div class="w-full overflow-hidden min-h-[900px]">
          <iframe 
            src="https://kalkulator-baja-ringan-kencana-4iu2.vercel.app/?logged_in=false&parent_url=https%3A%2F%2Fkencanaindonesia.co.id%2Fkalkulator-baja-ringan-kencana%2F"
            title="Kalkulator Baja Ringan Kencana"
            allow="clipboard-write"
            @load="isLoaded = true"
            class="w-full min-h-[1400px] sm:min-h-[2200px] border-0"
            style="width: 100%; border: none;"
          ></iframe>
        </div>
      </div>
    </main>
  </div>
</template>
