<script setup lang="ts">
import { ref, computed } from 'vue'
import { Smartphone, Monitor } from 'lucide-vue-next'

const props = withDefaults(
  defineProps<{
    seoTitle: string
    metaDescription: string
    slug: string
    domain?: string
  }>(),
  {
    domain: 'https://kencana.id'
  }
)

const viewMode = ref<'mobile' | 'desktop'>('desktop')

// Computed lengths and color progress
const titleLength = computed(() => props.seoTitle.length)
const metaLength = computed(() => props.metaDescription.length)

// Ideal title: 40-60 chars (max 70)
const titleStatus = computed(() => {
  if (titleLength.value === 0) return { color: 'bg-gray-300', text: 'Empty' }
  if (titleLength.value < 35) return { color: 'bg-amber-400', text: 'Too short' }
  if (titleLength.value <= 60) return { color: 'bg-emerald-500', text: 'Optimal' }
  return { color: 'bg-rose-500', text: 'Too long (may be truncated)' }
})

// Ideal meta: 120-155 chars (max 160)
const metaStatus = computed(() => {
  if (metaLength.value === 0) return { color: 'bg-gray-300', text: 'Empty' }
  if (metaLength.value < 110) return { color: 'bg-amber-400', text: 'Too short' }
  if (metaLength.value <= 156) return { color: 'bg-emerald-500', text: 'Optimal' }
  return { color: 'bg-rose-500', text: 'Too long (may be truncated)' }
})

const fullUrl = computed(() => {
  const cleanSlug = props.slug.trim().toLowerCase().replace(/\s+/g, '-') || 'sample-post'
  return `${props.domain}/posts/${cleanSlug}`
})

const breadcrumb = computed(() => {
  const cleanSlug = props.slug.trim().toLowerCase().replace(/\s+/g, '-') || 'sample-post'
  return `kencana.id › posts › ${cleanSlug}`
})
</script>

<template>
  <div class="bg-white border border-gray-200 rounded p-4 shadow-sm">
    <!-- Header with Toggle Controls -->
    <div class="flex items-center justify-between pb-3 border-b border-gray-100 mb-4">
      <div class="flex items-center space-x-2">
        <span class="text-xs font-semibold text-gray-700 tracking-wider uppercase">Google Search Preview</span>
        <span class="text-[10px] bg-blue-100 text-blue-800 px-1.5 py-0.5 rounded font-mono">SERP</span>
      </div>

      <!-- Desktop / Mobile Switcher -->
      <div class="flex items-center space-x-1 bg-gray-100 p-0.5 rounded border border-gray-200 text-xs">
        <button 
          @click="viewMode = 'desktop'"
          class="flex items-center space-x-1 px-2 py-1 rounded transition-all"
          :class="viewMode === 'desktop' ? 'bg-white text-blue-600 shadow-xs font-medium' : 'text-gray-500 hover:text-gray-900'"
        >
          <Monitor class="w-3.5 h-3.5" />
          <span>Desktop</span>
        </button>
        <button 
          @click="viewMode = 'mobile'"
          class="flex items-center space-x-1 px-2 py-1 rounded transition-all"
          :class="viewMode === 'mobile' ? 'bg-white text-blue-600 shadow-xs font-medium' : 'text-gray-500 hover:text-gray-900'"
        >
          <Smartphone class="w-3.5 h-3.5" />
          <span>Mobile</span>
        </button>
      </div>
    </div>

    <!-- Live Google Preview Box -->
    <div 
      class="p-4 rounded-lg border transition-all"
      :class="viewMode === 'mobile' ? 'max-w-md mx-auto bg-gray-50/50 border-gray-200 shadow-inner' : 'w-full bg-white border-gray-100'"
    >
      <!-- Favicon & URL Breadcrumb -->
      <div class="flex items-center space-x-2 text-xs mb-1">
        <div class="w-4 h-4 rounded-full bg-[#2271b1] text-white flex items-center justify-center font-bold text-[9px]">
          K
        </div>
        <div class="flex flex-col">
          <span class="text-gray-800 font-medium text-[11px] leading-tight">Kencana Official</span>
          <span class="text-[#202124] text-[12px] opacity-80 leading-tight font-sans break-all">{{ breadcrumb }}</span>
        </div>
      </div>

      <!-- Google SERP Title -->
      <h3 class="text-base sm:text-lg font-medium text-[#1a0dab] hover:underline cursor-pointer leading-snug break-words my-1 font-sans">
        {{ seoTitle || 'Judul Halaman Web Kencana - Solusi Properti & Baja Ringan' }}
      </h3>

      <!-- Google SERP Meta Description -->
      <p class="text-xs sm:text-sm text-[#4d5156] leading-relaxed font-sans line-clamp-2">
        {{ metaDescription || 'Tambahkan meta deskripsi untuk halaman ini agar calon pengunjung memahami isi konten sebelum membuka tautan dari hasil pencarian Google.' }}
      </p>
    </div>

    <!-- Real-time Length Progress Indicators -->
    <div class="mt-4 pt-3 border-t border-gray-100 grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
      <!-- Title Meter -->
      <div class="space-y-1">
        <div class="flex justify-between text-[11px]">
          <span class="text-gray-600 font-medium">SEO Title Length:</span>
          <span class="font-mono text-gray-500">
            <strong>{{ titleLength }}</strong> / 60 chars 
            <span class="text-[10px] ml-1">({{ titleStatus.text }})</span>
          </span>
        </div>
        <div class="w-full bg-gray-100 h-1.5 rounded-full overflow-hidden">
          <div 
            class="h-full transition-all duration-300 rounded-full"
            :class="titleStatus.color"
            :style="{ width: `${Math.min(100, (titleLength / 60) * 100)}%` }"
          ></div>
        </div>
      </div>

      <!-- Meta Description Meter -->
      <div class="space-y-1">
        <div class="flex justify-between text-[11px]">
          <span class="text-gray-600 font-medium">Meta Description:</span>
          <span class="font-mono text-gray-500">
            <strong>{{ metaLength }}</strong> / 155 chars
            <span class="text-[10px] ml-1">({{ metaStatus.text }})</span>
          </span>
        </div>
        <div class="w-full bg-gray-100 h-1.5 rounded-full overflow-hidden">
          <div 
            class="h-full transition-all duration-300 rounded-full"
            :class="metaStatus.color"
            :style="{ width: `${Math.min(100, (metaLength / 155) * 100)}%` }"
          ></div>
        </div>
      </div>
    </div>
  </div>
</template>
