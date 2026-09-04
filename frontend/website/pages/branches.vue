<script setup lang="ts">
import { MapPin, Phone, Mail, Building2, ExternalLink } from 'lucide-vue-next'

const { branches } = useBranches()

useHead({
  title: 'Cabang & Jaringan Depo Distribusi Kencana Indonesia',
  meta: [
    { name: 'description', content: 'Daftar alamat kantor cabang, pabrik, dan depo distribusi resmi produk baja ringan Kencana di seluruh Indonesia.' }
  ]
})
</script>

<template>
  <div class="space-y-12 pb-20">
    <!-- Header Banner -->
    <section class="bg-slate-900 text-white py-12 sm:py-16">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-3">
        <span class="text-xs uppercase tracking-wider font-bold text-red-400">Jangkauan Nasional</span>
        <h1 class="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight">Cabang &amp; Jaringan Depo Kencana</h1>
        <p class="text-sm sm:text-base text-slate-300 max-w-xl mx-auto">
          Lebih dari 45 depo dan distributor siap memasok kebutuhan baja ringan dan genteng metal proyek Anda.
        </p>
      </div>
    </section>

    <!-- Branches List -->
    <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div 
          v-for="branch in branches" 
          :key="branch.id"
          class="bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 shadow-sm hover:shadow-lg transition-all space-y-4 flex flex-col justify-between"
        >
          <div class="space-y-3">
            <div class="flex items-center justify-between">
              <span class="text-[10px] uppercase tracking-wider font-semibold px-2.5 py-0.5 rounded-full bg-red-50 text-red-700 border border-red-100">
                {{ branch.type }}
              </span>
              <Building2 class="w-4 h-4 text-red-600" />
            </div>

            <h3 class="text-base font-bold text-slate-900 leading-snug">
              {{ branch.name }}
            </h3>

            <div class="space-y-2 text-xs text-slate-600 pt-1">
              <div class="flex items-start space-x-2">
                <MapPin class="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
                <span class="leading-relaxed">{{ branch.address }}</span>
              </div>
              <div class="flex items-center space-x-2">
                <Phone class="w-4 h-4 text-emerald-600 shrink-0" />
                <span class="font-medium">{{ branch.phone }}</span>
              </div>
              <div class="flex items-center space-x-2">
                <Mail class="w-4 h-4 text-amber-600 shrink-0" />
                <span class="font-mono text-slate-500 break-all">{{ branch.email }}</span>
              </div>
            </div>
          </div>

          <div class="pt-3 border-t border-slate-100 flex items-center justify-between">
            <a 
              :href="`tel:${branch.phone.replace(/[^0-9]/g, '')}`"
              class="text-xs font-semibold text-red-600 hover:text-red-700 flex items-center space-x-1 py-1 px-2 rounded hover:bg-red-50 transition-colors"
            >
              <span>Hubungi Kantor</span>
            </a>
            <a 
              :href="`https://maps.google.com/?q=${encodeURIComponent(branch.address)}`" 
              target="_blank" 
              class="text-xs text-slate-400 hover:text-red-600 flex items-center space-x-1 py-1 px-2 rounded hover:bg-slate-50 transition-colors"
            >
              <span>Buka Peta</span>
              <ExternalLink class="w-3 h-3" />
            </a>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
