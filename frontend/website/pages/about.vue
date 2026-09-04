<script setup lang="ts">
import { ShieldCheck, Award, Target, Users, History, CheckCircle2 } from 'lucide-vue-next'

useHead({
  title: 'Tentang Kami | PT Kencana Maju Bersama',
  meta: [
    { name: 'description', content: 'Profil PT Kencana Maju Bersama, produsen terkemuka baja ringan, genteng metal, dan material konstruksi berstandar SNI di Indonesia.' }
  ]
})
</script>

<template>
  <div class="space-y-16 pb-24 font-sans">
    <!-- Hero Banner with Fluid Typography -->
    <section class="bg-gradient-to-r from-slate-950 via-slate-900 to-red-950 text-white py-16 sm:py-20 lg:py-24">
      <div class="max-w-[1300px] mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
        <span class="text-xs uppercase tracking-widest font-extrabold text-red-500">Profil Perusahaan</span>
        <h1 class="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">
          Membangun Negeri dengan <span class="text-red-500">Produk KENCANA</span>
        </h1>
        <p class="text-xs sm:text-base text-slate-300 max-w-2xl mx-auto leading-relaxed">
          PT Kencana Maju Bersama berdiri sejak 1991 dengan komitmen menjadi pelopor dan produsen material konstruksi baja ringan berstandar SNI terpercaya di Indonesia.
        </p>
      </div>
    </section>

    <!-- Company Overview -->
    <section class="max-w-[1300px] mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
        <div class="lg:col-span-6 space-y-4 text-xs sm:text-sm text-slate-600 leading-relaxed">
          <div class="space-y-2">
            <span class="text-xs font-bold uppercase tracking-wider text-red-600">Dedikasi Mutu</span>
            <h2 class="text-2xl sm:text-3xl font-extrabold text-slate-900">
              Pelopor Baja Ringan Tidak Tipu-Tipu
            </h2>
          </div>
          <p>
            Selama lebih dari tiga dekade, Kencana telah berkembang dari produsen baja lokal menjadi salah satu industri manufaktur terdepan di Indonesia dengan kapasitas produksi ratusan ribu ton per tahun.
          </p>
          <p>
            Kami menggunakan bahan baku berkualitas tinggi berstandar internasional serta teknologi mesin rollforming otomatis terkomputerisasi untuk menghasilkan profil kanal C, reng, genteng metal, hollow, dan spandek dengan presisi milimeter.
          </p>
          <div class="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div class="p-4 bg-red-50/70 rounded-xl border border-red-100">
              <div class="text-lg font-extrabold text-red-700">SNI 8399:2017</div>
              <div class="text-xs text-slate-600 mt-1">Standarisasi Profil Rangka Baja Ringan Nasional</div>
            </div>
            <div class="p-4 bg-slate-100 rounded-xl border border-slate-200">
              <div class="text-lg font-extrabold text-slate-900">TKDN Certified</div>
              <div class="text-xs text-slate-600 mt-1">Komitmen Tinggi Terhadap Industri &amp; Ekonomi Indonesia</div>
            </div>
          </div>
        </div>

        <!-- Local Image Asset: Headquarters Drone Photo -->
        <div class="lg:col-span-6">
          <div class="rounded-2xl overflow-hidden shadow-xl border border-slate-200">
            <img 
              src="/assets/img/DJI_0680.JPG.webp" 
              alt="Gedung & Pabrik PT Kencana Maju Bersama" 
              class="w-full h-80 sm:h-96 object-cover"
            />
          </div>
        </div>
      </div>
    </section>

    <!-- Vision & Mission -->
    <section class="max-w-[1300px] mx-auto px-4 sm:px-6 lg:px-8" id="visi-misi">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div class="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm space-y-4">
          <div class="w-12 h-12 rounded-xl bg-red-50 text-red-600 flex items-center justify-center">
            <Target class="w-6 h-6" />
          </div>
          <h3 class="text-xl font-extrabold text-slate-900">Visi Perusahaan</h3>
          <p class="text-xs sm:text-sm text-slate-600 leading-relaxed">
            Menjadi produsen material konstruksi baja ringan nomor satu di Indonesia yang dikenal karena keandalan mutu, integritas produk berstandar SNI (#tidakTIPUTIPU), serta kontribusi berkelanjutan terhadap pembangunan infrastruktur nasional.
          </p>
        </div>

        <div class="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm space-y-4">
          <div class="w-12 h-12 rounded-xl bg-slate-100 text-slate-900 flex items-center justify-center">
            <Users class="w-6 h-6" />
          </div>
          <h3 class="text-xl font-extrabold text-slate-900">Misi Perusahaan</h3>
          <ul class="text-xs sm:text-sm text-slate-600 space-y-2.5">
            <li class="flex items-start space-x-2">
              <CheckCircle2 class="w-4 h-4 text-red-600 shrink-0 mt-0.5" />
              <span>Memproduksi produk konstruksi bermutu tinggi yang presisi, kuat, dan bergaransi aman bagi pengguna.</span>
            </li>
            <li class="flex items-start space-x-2">
              <CheckCircle2 class="w-4 h-4 text-red-600 shrink-0 mt-0.5" />
              <span>Memperluas jaringan distribusi agar produk Kencana mudah didapatkan di lebih dari 50 depo di seluruh pelosok Indonesia.</span>
            </li>
            <li class="flex items-start space-x-2">
              <CheckCircle2 class="w-4 h-4 text-red-600 shrink-0 mt-0.5" />
              <span>Memberikan edukasi dan sertifikasi teknis pemasangan rangka atap yang aman bagi aplikator dan kontraktor Indonesia.</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  </div>
</template>
