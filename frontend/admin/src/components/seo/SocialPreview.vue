<script setup lang="ts">
import { computed } from 'vue'
import { Share2, Image as ImageIcon } from 'lucide-vue-next'

const props = withDefaults(
  defineProps<{
    title: string
    description: string
    ogImage?: string
    domain?: string
    platform?: 'facebook' | 'linkedin'
  }>(),
  {
    ogImage: '',
    domain: 'kencana.id',
    platform: 'facebook'
  }
)

const displayImage = computed(() => {
  return props.ogImage || 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=800&auto=format&fit=crop'
})
</script>

<template>
  <div class="bg-white border border-gray-200 rounded p-4 shadow-sm">
    <!-- Header -->
    <div class="flex items-center justify-between pb-3 border-b border-gray-100 mb-4">
      <div class="flex items-center space-x-2">
        <Share2 class="w-4 h-4 text-blue-600" />
        <span class="text-xs font-semibold text-gray-700 tracking-wider uppercase">Social Preview</span>
      </div>
      <span class="text-[10px] bg-indigo-100 text-indigo-700 font-medium px-2 py-0.5 rounded">
        Facebook &amp; LinkedIn
      </span>
    </div>

    <!-- Social Card Mockup -->
    <div class="max-w-xl mx-auto border border-gray-200 rounded-md overflow-hidden bg-gray-50 shadow-sm">
      <!-- Image Area -->
      <div class="relative aspect-video w-full bg-gray-200 overflow-hidden">
        <img 
          :src="displayImage" 
          alt="Social Share Thumbnail" 
          class="w-full h-full object-cover"
        />
        <div class="absolute bottom-2 right-2 bg-black/60 text-white text-[10px] px-2 py-0.5 rounded backdrop-blur-xs flex items-center space-x-1">
          <ImageIcon class="w-3 h-3" />
          <span>OG Image (1200x630)</span>
        </div>
      </div>

      <!-- Content Area -->
      <div class="p-3 bg-white border-t border-gray-100 space-y-1">
        <span class="text-[11px] font-semibold text-gray-500 uppercase tracking-wider block">
          {{ domain }}
        </span>
        <h4 class="font-bold text-sm text-gray-900 leading-snug line-clamp-2 hover:underline cursor-pointer">
          {{ title || 'Judul Konten untuk Pratinjau Media Sosial' }}
        </h4>
        <p class="text-xs text-gray-600 line-clamp-2 leading-relaxed">
          {{ description || 'Deskripsi singkat konten yang akan ditampilkan saat tautan artikel Kencana dibagikan ke Facebook, LinkedIn, atau Twitter.' }}
        </p>
      </div>
    </div>
  </div>
</template>
