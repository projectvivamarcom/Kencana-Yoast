<script setup lang="ts">
import { ref, computed } from 'vue'
import { ArrowRight, Layers } from 'lucide-vue-next'
import SectionTitle from './SectionTitle.vue'
import ProductCard, { type ProductItem } from './ProductCard.vue'

const activeCategory = ref('semua')

const categories = [
  { id: 'semua', label: 'Semua Produk' },
  { id: 'atap', label: 'Atap Baja Ringan' },
  { id: 'genteng', label: 'Genteng Metal' },
  { id: 'rangka-atap', label: 'Rangka Atap (Truss)' },
  { id: 'plafon', label: 'Rangka Plafon' },
  { id: 'decking', label: 'Floor Decking' },
  { id: 'pendukung', label: 'Produk Pendukung' }
]

const products: ProductItem[] = [
  {
    id: '1',
    name: 'Atap Spandek Kencana KR-5',
    category: 'atap',
    image: '/images/products/atap-landingpage.webp',
    badge: 'Best Seller',
    specs: ['Baja G550', 'AZ100 Lapisan Anti Karat', 'SNI 4096:2019'],
    description: 'Atap gelombang 5 gelombang dengan alur talang presisi, anti tampias, dan memiliki daya tampung air tinggi.',
    link: '/products/atap-spandek-kr5'
  },
  {
    id: '2',
    name: 'Genteng Metal Pasir Kencana',
    category: 'genteng',
    image: '/images/products/genteng-landingpage.webp',
    badge: 'Anti Bising',
    specs: ['Baja Zincalume', 'Lapisan Batuan Alami', 'SNI Resmi'],
    description: 'Genteng metal bertekstur pasir alami yang meredam suara hujan secara efektif serta tahan api dan benturan.',
    link: '/products/genteng-metal-pasir'
  },
  {
    id: '3',
    name: 'Kanal C Kencana Truss C75',
    category: 'rangka-atap',
    image: '/images/products/rangkaatap-landingpage.webp',
    badge: 'SNI 8399:2017',
    specs: ['Profil C75', 'Tebal 0.75mm Full', 'High-Tensile G550'],
    description: 'Profil utama rangka kuda-kuda atap baja ringan dengan rib pengaku ganda yang menjamin kekuatan beban maksimal.',
    link: '/products/kanal-c-truss-c75'
  },
  {
    id: '4',
    name: 'Hollow Plafon Kencana 2x4 & 4x4',
    category: 'plafon',
    image: '/images/products/rangkaplafon-landingpage.webp',
    badge: 'Presisi',
    specs: ['Galvalume Anti Karat', 'Ketebalan Konsisten', 'Tahan Rayap'],
    description: 'Rangka plafon presisi tinggi untuk pemasangan papan gypsum, GRC, maupun PVC dengan hasil akhir rata sempurna.',
    link: '/products/hollow-plafon'
  },
  {
    id: '5',
    name: 'Floor Decking Kencana (Bondek)',
    category: 'decking',
    image: '/images/products/strukturaldecking-landingpage.webp',
    badge: 'Struktural',
    specs: ['Tebal 0.75mm - 1.0mm', 'Embossed Surface', 'Hemat Perancah'],
    description: 'Plat baja struktural bergelombang untuk cor dak lantai beton bertulang yang mempercepat waktu konstruksi hingga 30%.',
    link: '/products/floor-decking'
  },
  {
    id: '6',
    name: 'Baut Roofing & Aksesoris Kencana',
    category: 'pendukung',
    image: '/images/products/produkpendukung-landingpage.webp',
    badge: 'Kuat & Rapat',
    specs: ['Self Drilling Screw', 'EPDM Washer Karet', 'Anti Karat'],
    description: 'Baut khusus pemasangan atap dan rangka baja ringan dengan karet EPDM kedap air yang mencegah kebocoran sekrup.',
    link: '/products/baut-roofing'
  }
]

const filteredProducts = computed(() => {
  if (activeCategory.value === 'semua') return products
  return products.filter(p => p.category === activeCategory.value)
})
</script>

<template>
  <section class="py-20 bg-slate-50 border-t border-slate-200/60" id="produk">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
      <!-- Section Title -->
      <SectionTitle 
        badge="Katalog Produk SNI"
        title="Produk Unggulan"
        highlight="KENCANA"
        subtitle="Rangkaian produk baja ringan berkualitas tinggi dengan bahan baku berstandar SNI murni dan sertifikasi TKDN resmi untuk ketahanan bangunan jangka panjang."
        align="center"
      />

      <!-- Category Filter Pills -->
      <div class="flex flex-wrap items-center justify-center gap-2">
        <button
          v-for="cat in categories"
          :key="cat.id"
          type="button"
          @click="activeCategory = cat.id"
          :class="[
            'px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all',
            activeCategory === cat.id
              ? 'bg-kencana-red text-white shadow-md shadow-red-600/20'
              : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
          ]"
        >
          {{ cat.label }}
        </button>
      </div>

      <!-- Products Grid -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        <ProductCard 
          v-for="product in filteredProducts" 
          :key="product.id"
          :product="product"
        />
      </div>

      <!-- Bottom Explore CTA -->
      <div class="pt-6 text-center">
        <NuxtLink 
          to="/products"
          class="inline-flex items-center space-x-2 px-8 py-3.5 rounded-xl bg-slate-900 hover:bg-kencana-red text-white font-bold text-sm shadow-md hover:shadow-lg transition-all"
        >
          <span>Lihat Seluruh Katalog Produk Kencana</span>
          <ArrowRight class="w-4 h-4" />
        </NuxtLink>
      </div>
    </div>
  </section>
</template>
