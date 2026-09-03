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
  <div class="space-y-16 pb-20">
    <!-- Hero Banner -->
    <section class="bg-slate-900 text-white py-16 lg:py-20">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
        <span class="text-xs uppercase tracking-wider font-bold text-blue-400">Profil Perusahaan</span>
        <h1 class="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">
          Membangun Negeri dengan Baja Berkualitas Tinggi
        </h1>
        <p class="text-sm sm:text-base text-slate-300 max-w-2xl mx-auto">
          PT Kencana Maju Bersama berdiri dengan komitmen menjadi pelopor dan penyedia solusi konstruksi baja ringan terpercaya bagi industri bangunan di Indonesia.
        </p>
      </div>
    </section>

    <!-- Company Overview -->
    <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
        <div class="lg:col-span-6 space-y-4 text-sm text-slate-600 leading-relaxed">
          <h2 class="text-2xl font-bold text-slate-900">Dedikasi Terhadap Mutu dan Keselamatan</h2>
          <p>
            Selama lebih dari tiga dekade, Kencana telah berkembang dari produsen baja lokal menjadi salah satu pemain industri terdepan di Indonesia dengan kapasitas produksi ratusan ribu ton per tahun.
          </p>
          <p>
            Kami menggunakan bahan baku berkualitas tinggi berstandar internasional serta teknologi mesin rollforming canggih untuk menghasilkan produk kanal C, reng, genteng metal, hollow, dan spandek dengan presisi milimeter.
          </p>
          <div class="pt-2 grid grid-cols-2 gap-4">
            <div class="p-3.5 bg-blue-50/60 rounded-xl border border-blue-100">
              <div class="text-xl font-bold text-blue-800">SNI 4096:2007</div>
              <div class="text-xs text-slate-600 mt-1">Standarisasi Ketebalan &amp; Lapisan Seng-Aluminium</div>
            </div>
            <div class="p-3.5 bg-emerald-50/60 rounded-xl border border-emerald-100">
              <div class="text-xl font-bold text-emerald-800">ISO 9001:2015</div>
              <div class="text-xs text-slate-600 mt-1">Sistem Manajemen Mutu Manufaktur</div>
            </div>
          </div>
        </div>

        <div class="lg:col-span-6">
          <div class="rounded-2xl overflow-hidden shadow-xl border border-slate-200">
            <img 
              src="https://images.unsplash.com/photo-1541888946425-d0fbb186f5f7?q=80&w=1000&auto=format&fit=crop" 
              alt="Pabrik Kencana" 
              class="w-full h-80 object-cover"
            />
          </div>
        </div>
      </div>
    </section>

    <!-- Vision & Mission -->
    <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div class="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm space-y-3">
          <div class="w-10 h-10 rounded-xl bg-blue-100 text-blue-700 flex items-center justify-center">
            <Target class="w-5 h-5" />
          </div>
          <h3 class="text-xl font-bold text-slate-900">Visi Kami</h3>
          <p class="text-sm text-slate-600 leading-relaxed">
            Menjadi produsen material konstruksi baja ringan nomor satu di Indonesia yang dikenal karena keandalan mutu, integritas produk berstandar SNI, serta kontribusi berkelanjutan terhadap pembangunan nasional.
          </p>
        </div>

        <div class="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm space-y-3">
          <div class="w-10 h-10 rounded-xl bg-indigo-100 text-indigo-700 flex items-center justify-center">
            <Users class="w-5 h-5" />
          </div>
          <h3 class="text-xl font-bold text-slate-900">Misi Kami</h3>
          <ul class="text-sm text-slate-600 space-y-2">
            <li class="flex items-start space-x-2">
              <CheckCircle2 class="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
              <span>Memproduksi produk konstruksi bermutu tinggi yang presisi, kuat, dan aman bagi pengguna.</span>
            </li>
            <li class="flex items-start space-x-2">
              <CheckCircle2 class="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
              <span>Memperluas jaringan distribusi agar material Kencana mudah didapatkan di seluruh pelosok Indonesia.</span>
            </li>
            <li class="flex items-start space-x-2">
              <CheckCircle2 class="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
              <span>Memberikan edukasi dan pelatihan teknis pemasangan rangka atap yang aman bagi aplikator dan kontraktor.</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  </div>
</template>
