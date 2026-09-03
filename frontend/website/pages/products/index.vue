<script setup lang="ts">
import { ref, computed } from 'vue'
import { ChevronRight, ShieldCheck } from 'lucide-vue-next'

const { products } = useProducts()

const selectedCategory = ref('Semua')
const categories = ['Semua', 'Baja Ringan', 'Genteng Metal', 'Hollow Plafon', 'Atap & Spandek', 'Floor Deck']

const filteredProducts = computed(() => {
  if (selectedCategory.value === 'Semua') return products
  return products.filter(p => p.category === selectedCategory.value)
})

useHead({
  title: 'Katalog Produk Baja Ringan & Genteng Metal SNI | Kencana',
  meta: [
    { name: 'description', content: 'Katalog lengkap baja ringan Kencana Truss, genteng metal pasir, hollow gypsum, dan spandek berstandar SNI 4096:2007.' }
  ]
})
</script>

<template>
  <div class="space-y-12 pb-20">
    <!-- Header Banner -->
    <section class="bg-slate-900 text-white py-14">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-3">
        <span class="text-xs uppercase tracking-wider font-bold text-blue-400">Solusi Konstruksi Bangunan</span>
        <h1 class="text-3xl sm:text-4xl font-extrabold tracking-tight">Katalog Produk Kencana SNI</h1>
        <p class="text-sm text-slate-300 max-w-xl mx-auto">
          Daftar material konstruksi baja lapis seng-aluminium dengan presisi tinggi dan mutu terjamin.
        </p>
      </div>
    </section>

    <!-- Filter Buttons & Catalog Grid -->
    <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
      <!-- Category Tabs -->
      <div class="flex items-center justify-center flex-wrap gap-2">
        <button
          v-for="cat in categories"
          :key="cat"
          @click="selectedCategory = cat"
          class="px-4 py-2 rounded-full text-xs font-semibold transition-all"
          :class="selectedCategory === cat 
            ? 'bg-blue-700 text-white shadow-sm' 
            : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-50'"
        >
          {{ cat }}
        </button>
      </div>

      <!-- Products Grid -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <div 
          v-for="product in filteredProducts" 
          :key="product.id"
          class="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
        >
          <div class="aspect-video bg-slate-100 overflow-hidden relative">
            <img 
              :src="product.image" 
              :alt="product.name" 
              class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <span class="absolute top-3 left-3 bg-blue-900/80 backdrop-blur-sm text-white text-[10px] font-semibold px-2.5 py-1 rounded-full uppercase tracking-wider">
              {{ product.category }}
            </span>
          </div>

          <div class="p-6 flex-1 flex flex-col justify-between space-y-4">
            <div class="space-y-2">
              <h3 class="text-lg font-bold text-slate-900 group-hover:text-blue-700 transition-colors">
                {{ product.name }}
              </h3>
              <p class="text-xs text-slate-500 line-clamp-2">
                {{ product.tagline }}
              </p>
            </div>

            <div class="pt-4 border-t border-slate-100 flex items-center justify-between">
              <span class="text-[11px] font-medium text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded flex items-center space-x-1">
                <ShieldCheck class="w-3.5 h-3.5" />
                <span>SNI Certified</span>
              </span>
              <NuxtLink 
                :to="`/products/${product.slug}`"
                class="text-xs font-semibold text-blue-700 hover:underline flex items-center space-x-0.5"
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
