<script setup lang="ts">
import { ref, computed } from 'vue'
import { ChevronRight, ShieldCheck } from 'lucide-vue-next'

const { products } = useProducts()

const selectedCategory = ref('Semua')
const categories = ['Semua', 'Baja Ringan', 'Genteng Metal', 'Hollow Plafon', 'Atap & Spandek', 'Floor Deck', 'Dekoratif', 'Pendukung']

const filteredProducts = computed(() => {
  if (selectedCategory.value === 'Semua') return products
  return products.filter(p => p.category === selectedCategory.value)
})

useHead({
  title: 'Katalog Produk Baja Ringan & Genteng Metal SNI | Kencana',
  meta: [
    { name: 'description', content: 'Katalog lengkap baja ringan Kencana Truss, genteng metal pasir, hollow gypsum, dan spandek berstandar SNI 8399:2017 & 4096:2007.' }
  ]
})
</script>

<template>
  <div class="space-y-12 pb-24 font-sans">
    <!-- Header Banner with Fluid Typography -->
    <section class="bg-gradient-to-r from-slate-950 via-slate-900 to-red-950 text-white py-14 sm:py-20">
      <div class="max-w-[1300px] mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-3">
        <span class="text-xs uppercase tracking-widest font-extrabold text-red-500">Solusi Konstruksi Baja Ringan</span>
        <h1 class="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">Katalog Produk <span class="text-red-500">KENCANA</span></h1>
        <p class="text-xs sm:text-base text-slate-300 max-w-xl mx-auto leading-relaxed">
          Material konstruksi baja lapis seng-aluminium berstandar SNI dengan presisi milimeter dan jaminan kualitas tidak tipu-tipu.
        </p>
      </div>
    </section>

    <!-- Filter Buttons & Catalog Grid -->
    <section class="max-w-[1300px] mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
      <!-- Category Tabs (Touch-friendly & wrap) -->
      <div class="flex items-center justify-center flex-wrap gap-2 sm:gap-2.5">
        <button
          v-for="cat in categories"
          :key="cat"
          @click="selectedCategory = cat"
          class="px-4 py-2 sm:px-5 sm:py-2.5 rounded-full text-xs sm:text-[13px] font-bold transition-all cursor-pointer select-none"
          :class="selectedCategory === cat 
            ? 'bg-red-600 text-white shadow-md' 
            : 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-50 hover:border-slate-300'"
        >
          {{ cat }}
        </button>
      </div>

      <!-- Fluid Products Grid (1 col mobile, 2 col tablet, 3-4 col desktop) -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 items-stretch">
        <div 
          v-for="product in filteredProducts" 
          :key="product.id"
          class="bg-white rounded-xl border border-slate-200/90 overflow-hidden shadow-sm hover:shadow-xl hover:border-red-400 transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1"
        >
          <!-- Product Image Container -->
          <div class="aspect-[4/3] bg-[#fafafa] overflow-hidden relative flex items-center justify-center p-4">
            <img 
              :src="product.image" 
              :alt="product.name" 
              loading="lazy"
              class="max-h-full max-w-full object-contain group-hover:scale-105 transition-transform duration-500"
            />
            <span class="absolute top-3 left-3 bg-red-600 text-white text-[10px] font-bold px-2.5 py-0.5 rounded-md uppercase tracking-wider shadow-sm">
              {{ product.category }}
            </span>
          </div>

          <!-- Product Details Body (Separated Text) -->
          <div class="p-5 flex-1 flex flex-col justify-between space-y-4">
            <div class="space-y-1.5">
              <h3 class="text-base sm:text-lg font-bold text-slate-900 group-hover:text-red-600 transition-colors line-clamp-1">
                {{ product.name }}
              </h3>
              <p class="text-xs text-slate-600 line-clamp-2 leading-relaxed">
                {{ product.tagline }}
              </p>
            </div>

            <div class="pt-3 border-t border-slate-100 flex items-center justify-between">
              <span class="text-[11px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded flex items-center space-x-1 border border-emerald-200/60">
                <ShieldCheck class="w-3.5 h-3.5 text-emerald-600" />
                <span>SNI</span>
              </span>
              <NuxtLink 
                :to="`/products/${product.slug}`"
                class="text-xs font-bold text-red-600 hover:text-red-700 hover:underline flex items-center space-x-0.5 py-1"
              >
                <span>Lihat Spesifikasi</span>
                <ChevronRight class="w-3.5 h-3.5" />
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
