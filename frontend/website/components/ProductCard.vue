<script setup lang="ts">
import { ChevronRight, ShieldCheck } from 'lucide-vue-next'

export interface ProductItem {
  id: string
  name: string
  category: string
  image: string
  badge?: string
  specs: string[]
  description: string
  link: string
}

defineProps<{
  product: ProductItem
}>()
</script>

<template>
  <div class="group bg-white rounded-2xl border border-slate-200/80 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col overflow-hidden hover:-translate-y-1">
    <!-- Image Header with Tag -->
    <div class="relative aspect-[4/3] bg-slate-100 overflow-hidden flex items-center justify-center p-4">
      <img 
        :src="product.image" 
        :alt="product.name"
        loading="lazy"
        class="w-full h-full object-contain transform group-hover:scale-105 transition-transform duration-500"
      />
      <div 
        v-if="product.badge"
        class="absolute top-3 left-3 px-2.5 py-1 rounded-md text-[11px] font-bold bg-kencana-red text-white uppercase tracking-wider shadow-sm"
      >
        {{ product.badge }}
      </div>
      <div class="absolute top-3 right-3 bg-white/90 backdrop-blur-sm px-2 py-0.5 rounded text-[10px] font-bold text-slate-700 border border-slate-200 flex items-center space-x-1">
        <ShieldCheck class="w-3 h-3 text-kencana-red" />
        <span>SNI</span>
      </div>
    </div>

    <!-- Body Content -->
    <div class="p-5 flex-1 flex flex-col justify-between space-y-4">
      <div class="space-y-2">
        <div class="text-xs font-semibold text-kencana-red uppercase tracking-wider">
          {{ product.category }}
        </div>
        <h3 class="text-lg font-bold text-slate-900 group-hover:text-kencana-red transition-colors line-clamp-1">
          {{ product.name }}
        </h3>
        <p class="text-xs text-slate-600 line-clamp-2 leading-relaxed">
          {{ product.description }}
        </p>
      </div>

      <!-- Specs Pills -->
      <div class="flex flex-wrap gap-1.5 pt-1">
        <span 
          v-for="spec in product.specs" 
          :key="spec"
          class="px-2 py-0.5 rounded bg-slate-100 text-slate-700 text-[11px] font-medium"
        >
          {{ spec }}
        </span>
      </div>

      <!-- Action Button -->
      <div class="pt-3 border-t border-slate-100 flex items-center justify-between">
        <NuxtLink 
          :to="product.link" 
          class="text-xs font-bold text-slate-900 group-hover:text-kencana-red inline-flex items-center space-x-1 transition-colors"
        >
          <span>Detail Produk</span>
          <ChevronRight class="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform" />
        </NuxtLink>

        <a 
          :href="`https://wa.me/6281131158000?text=Halo%20Kencana,%20saya%20ingin%20info%20spesifikasi%20dan%20harga%20produk%20${encodeURIComponent(product.name)}`"
          target="_blank"
          rel="noopener noreferrer"
          class="text-xs font-semibold text-emerald-600 hover:text-emerald-700 transition-colors"
        >
          Tanya Harga
        </a>
      </div>
    </div>
  </div>
</template>
