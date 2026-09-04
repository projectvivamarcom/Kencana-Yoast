<script setup lang="ts">
import { useRoute } from 'vue-router'
import { ArrowLeft, ShieldCheck, CheckCircle2, PhoneCall, Download } from 'lucide-vue-next'

const route = useRoute()
const { getProductBySlug } = useProducts()

const product = computed(() => {
  return getProductBySlug(route.params.slug as string)
})

useHead({
  title: computed(() => product.value ? `${product.value.name} | Kencana Ahlinya Baja Ringan` : 'Produk Kencana'),
  meta: [
    { name: 'description', content: computed(() => product.value ? product.value.description : '') }
  ]
})

const handleDownloadBrochure = () => {
  if (import.meta.client) {
    alert('Brosur spesifikasi teknis sedang diunduh.')
  }
}
</script>

<template>
  <div class="py-10 pb-24 font-sans">
    <div class="max-w-[1300px] mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
      <!-- Breadcrumb / Back Link -->
      <div>
        <NuxtLink to="/products" class="inline-flex items-center space-x-1.5 text-xs font-bold text-red-600 hover:text-red-700 hover:underline">
          <ArrowLeft class="w-3.5 h-3.5" />
          <span>Kembali ke Katalog Produk</span>
        </NuxtLink>
      </div>

      <div v-if="product" class="space-y-12">
        <!-- Main Product Section -->
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          <!-- Image -->
          <div class="lg:col-span-6">
            <div class="rounded-2xl overflow-hidden border border-slate-200 shadow-sm bg-[#fafafa] p-6 sm:p-10 flex items-center justify-center">
              <img :src="product.image" :alt="product.name" class="max-h-80 sm:max-h-96 w-auto object-contain drop-shadow" />
            </div>
          </div>

          <!-- Overview & Action -->
          <div class="lg:col-span-6 space-y-6">
            <div class="space-y-2">
              <span class="inline-block bg-red-50 text-red-700 border border-red-200 text-[11px] font-extrabold px-3 py-1 rounded-full uppercase tracking-wider">
                {{ product.category }}
              </span>
              <h1 class="text-2xl sm:text-3xl font-extrabold text-slate-900 leading-tight">
                {{ product.name }}
              </h1>
              <p class="text-xs sm:text-sm font-semibold text-red-600">
                {{ product.tagline }}
              </p>
            </div>

            <p class="text-xs sm:text-sm text-slate-600 leading-relaxed">
              {{ product.description }}
            </p>

            <!-- Features Checklist -->
            <div class="space-y-2.5 pt-2">
              <h3 class="text-xs font-bold uppercase tracking-wider text-slate-900">Keunggulan Utama:</h3>
              <ul class="space-y-2 text-xs sm:text-[13px] text-slate-700">
                <li v-for="(feat, idx) in product.features" :key="idx" class="flex items-start space-x-2">
                  <CheckCircle2 class="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>{{ feat }}</span>
                </li>
              </ul>
            </div>

            <!-- Actions (Touch-friendly) -->
            <div class="pt-4 flex flex-wrap gap-3">
              <a 
                :href="`https://wa.me/6281131158000?text=Halo%20Kencana,%20saya%20ingin%20tanya%20spesifikasi%20dan%20harga%20produk%20${encodeURIComponent(product.name)}`" 
                target="_blank"
                rel="noopener noreferrer"
                class="px-6 py-3 rounded-xl bg-red-600 hover:bg-red-700 text-white font-bold text-xs shadow-md flex items-center space-x-2 transition-all cursor-pointer"
              >
                <PhoneCall class="w-4 h-4" />
                <span>Minta Penawaran Harga</span>
              </a>
              <button 
                type="button"
                @click="handleDownloadBrochure" 
                class="px-5 py-3 rounded-xl bg-white hover:bg-slate-50 border border-slate-300 text-slate-700 font-bold text-xs flex items-center space-x-2 transition-colors cursor-pointer"
              >
                <Download class="w-4 h-4" />
                <span>Unduh Brosur Teknis</span>
              </button>
            </div>
          </div>
        </div>

        <!-- Specifications Table (Separated Text in Clean Semantic HTML) -->
        <div class="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 space-y-4 shadow-sm">
          <h2 class="text-lg sm:text-xl font-bold text-slate-900">Spesifikasi Teknis Produk</h2>
          <div class="overflow-x-auto">
            <table class="w-full text-left text-xs sm:text-sm border-collapse">
              <tbody class="divide-y divide-slate-100">
                <tr v-for="(val, key) in product.specifications" :key="key" class="hover:bg-slate-50/60">
                  <td class="py-3 px-4 font-bold text-slate-800 w-1/3">{{ key }}</td>
                  <td class="py-3 px-4 text-slate-600 font-medium">{{ val }}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <div v-else class="text-center py-20">
        <h2 class="text-xl font-bold text-slate-800">Produk Tidak Ditemukan</h2>
        <NuxtLink to="/products" class="text-red-600 underline text-sm mt-2 inline-block">
          Kembali ke Katalog Produk
        </NuxtLink>
      </div>
    </div>
  </div>
</template>
