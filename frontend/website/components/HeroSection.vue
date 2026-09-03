<script setup lang="ts">
import { ArrowRight, ShieldCheck, Award, MessageCircle, PlayCircle } from 'lucide-vue-next'

const stats = [
  { value: '30+ Tahun', label: 'Pengalaman Manufaktur (Sejak 1991)' },
  { value: '50+ Cabang', label: 'Distribusi di Seluruh Indonesia' },
  { value: '100% SNI', label: 'SNI 8399:2017 & ISO 9001:2015' },
  { value: 'Hingga 20 Thn', label: 'Garansi Resmi Kualitas Produk' }
]
</script>

<template>
  <div class="relative bg-gradient-to-br from-slate-950 via-slate-900 to-red-950 text-white overflow-hidden">
    <!-- Geometric Background Pattern & Glow -->
    <div class="absolute inset-0 opacity-20 pointer-events-none">
      <div class="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-red-600 blur-3xl"></div>
      <div class="absolute bottom-10 -left-20 w-80 h-80 rounded-full bg-red-800 blur-3xl"></div>
      <div class="absolute inset-0 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:24px_24px] opacity-10"></div>
    </div>

    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-24 lg:pt-24 lg:pb-32 relative z-10">
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <!-- Left Column: Copy & CTAs -->
        <div class="lg:col-span-7 space-y-6 text-center lg:text-left">
          <!-- Top Tag / Pill -->
          <div class="inline-flex items-center space-x-2 bg-white/10 border border-white/20 backdrop-blur-md px-3.5 py-1.5 rounded-full text-xs font-semibold text-slate-200">
            <span class="w-2 h-2 rounded-full bg-kencana-red animate-pulse"></span>
            <span>Ahlinya Baja Ringan | Tidak Tipu-Tipu</span>
          </div>

          <!-- Main Title -->
          <h1 class="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight sm:leading-none">
            Membangun Negeri dengan
            <span class="block text-kencana-red mt-2">Produk KENCANA</span>
          </h1>

          <!-- Description -->
          <p class="text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed mx-auto lg:mx-0">
            Produsen dan distributor rangka baja ringan, genteng metal, hollow plafon, dan spandek berstandar SNI murni dari <strong>PT Kencana Maju Bersama</strong>. Presisi, anti rayap, tahan karat, dan bergaransi resmi untuk konstruksi Indonesia.
          </p>

          <!-- Action Buttons -->
          <div class="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2">
            <NuxtLink 
              to="/products"
              class="px-7 py-3.5 rounded-xl bg-kencana-red hover:bg-kencana-redDark text-white font-bold text-sm shadow-xl shadow-red-900/40 flex items-center space-x-2 transition-all transform hover:-translate-y-0.5 active:translate-y-0"
            >
              <span>Jelajahi Produk SNI</span>
              <ArrowRight class="w-4 h-4" />
            </NuxtLink>

            <a 
              href="https://wa.me/6281131158000?text=Halo%20Kencana,%20saya%20ingin%20konsultasi%20katalog%20produk%20dan%20harga"
              target="_blank" 
              rel="noopener noreferrer"
              class="px-6 py-3.5 rounded-xl bg-white/10 hover:bg-white/20 border border-white/20 backdrop-blur-md text-white font-bold text-sm flex items-center space-x-2 transition-all"
            >
              <MessageCircle class="w-4 h-4 text-emerald-400" />
              <span>Konsultasi Proyek</span>
            </a>
          </div>

          <!-- Badges Bar -->
          <div class="pt-4 flex flex-wrap items-center justify-center lg:justify-start gap-6 border-t border-white/10">
            <div class="flex items-center space-x-2">
              <img 
                src="/images/logo/logo-tidak-tipu-tipu.png" 
                alt="Logo Tidak Tipu Tipu" 
                class="h-9 w-auto object-contain brightness-110"
              />
              <span class="text-xs text-slate-300 font-medium">Bahan Baku Asli Tanpa Banci</span>
            </div>
            <div class="flex items-center space-x-2">
              <img 
                src="/images/logo/logo-gpa-2024.png" 
                alt="Green Product Award" 
                class="h-9 w-auto object-contain brightness-110"
              />
              <span class="text-xs text-slate-300 font-medium">Green Product Award 2024</span>
            </div>
          </div>
        </div>

        <!-- Right Column: Visual Card Showcase -->
        <div class="lg:col-span-5">
          <div class="relative mx-auto max-w-md lg:max-w-none">
            <!-- Glassmorphism Container -->
            <div class="relative bg-gradient-to-b from-white/15 to-white/5 backdrop-blur-xl p-6 sm:p-8 rounded-3xl border border-white/20 shadow-2xl space-y-6">
              <div class="flex items-center justify-between border-b border-white/10 pb-4">
                <div class="space-y-0.5">
                  <span class="text-xs font-bold uppercase tracking-wider text-red-400">Mutu Terpercaya</span>
                  <div class="text-base font-extrabold text-white">Standar Konstruksi Nasional</div>
                </div>
                <div class="w-10 h-10 rounded-xl bg-kencana-red/30 border border-kencana-red/50 flex items-center justify-center text-white">
                  <ShieldCheck class="w-5 h-5 text-white" />
                </div>
              </div>

              <!-- Visual Image -->
              <div class="relative rounded-2xl overflow-hidden shadow-lg aspect-video bg-slate-800">
                <img 
                  src="/images/banners/piala-landingpage.png" 
                  alt="Penghargaan Kencana Ahlinya Baja Ringan" 
                  class="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
                />
                <div class="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent flex items-end p-4">
                  <div class="text-xs font-medium text-slate-200">
                    🏆 Terbukti Pilihan Arsitek, Kontraktor &amp; Masyarakat Indonesia
                  </div>
                </div>
              </div>

              <!-- Key Advantages Bullet List -->
              <div class="space-y-2.5 text-xs text-slate-300">
                <div class="flex items-center space-x-2">
                  <span class="w-1.5 h-1.5 rounded-full bg-red-400"></span>
                  <span><strong>SNI 8399:2017:</strong> Profil baja ringan teruji standar nasional.</span>
                </div>
                <div class="flex items-center space-x-2">
                  <span class="w-1.5 h-1.5 rounded-full bg-red-400"></span>
                  <span><strong>MaxiCAD Technology:</strong> Analisa struktur rangka atap presisi tinggi.</span>
                </div>
                <div class="flex items-center space-x-2">
                  <span class="w-1.5 h-1.5 rounded-full bg-red-400"></span>
                  <span><strong>Baja High-Tensile G550:</strong> Ketahanan tarik prima &amp; anti roboh.</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Bottom Stats Grid Bar -->
      <div class="mt-16 pt-8 border-t border-white/10 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
        <div 
          v-for="stat in stats" 
          :key="stat.value"
          class="p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm"
        >
          <div class="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">{{ stat.value }}</div>
          <div class="text-xs text-slate-400 font-medium mt-1">{{ stat.label }}</div>
        </div>
      </div>
    </div>
  </div>
</template>
