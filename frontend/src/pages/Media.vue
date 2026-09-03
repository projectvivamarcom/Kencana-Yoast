<script setup lang="ts">
import { ref } from 'vue'
import { Plus, Image as ImageIcon, Trash2 } from 'lucide-vue-next'

const mediaItems = ref([
  { id: 1, title: 'Kencana Hills Exterior', url: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=600&auto=format&fit=crop', date: 'Feb 28, 2026', size: '240 KB' },
  { id: 2, title: 'Konstruksi Baja Ringan Truss', url: 'https://images.unsplash.com/photo-1541888946425-d0fbb186f5f7?q=80&w=600&auto=format&fit=crop', date: 'Feb 25, 2026', size: '180 KB' },
  { id: 3, title: 'Desain Ruang Tamu Modern', url: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=600&auto=format&fit=crop', date: 'Feb 20, 2026', size: '310 KB' },
  { id: 4, title: 'Atap Genteng Metal Kencana', url: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=600&auto=format&fit=crop', date: 'Feb 15, 2026', size: '195 KB' },
  { id: 5, title: 'Plafon Gypsum Hollow', url: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=600&auto=format&fit=crop', date: 'Feb 10, 2026', size: '280 KB' },
  { id: 6, title: 'Cluster Signature Architecture', url: 'https://images.unsplash.com/photo-1590381105924-c72589b9ef3f?q=80&w=600&auto=format&fit=crop', date: 'Feb 05, 2026', size: '320 KB' }
])

const removeMedia = (id: number) => {
  mediaItems.value = mediaItems.value.filter(m => m.id !== id)
}
</script>

<template>
  <div class="space-y-4">
    <div class="flex items-center justify-between pb-1 border-b border-gray-200">
      <div class="flex items-center space-x-3">
        <h1 class="text-2xl font-normal text-wp-text">Media Library</h1>
        <button class="wp-btn-primary text-xs py-1 px-2.5 flex items-center space-x-1">
          <Plus class="w-3.5 h-3.5" />
          <span>Add New Media File</span>
        </button>
      </div>
    </div>

    <!-- Media Grid -->
    <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
      <div 
        v-for="item in mediaItems" 
        :key="item.id"
        class="bg-white border border-wp-border rounded shadow-xs overflow-hidden group hover:border-wp-blue transition-all"
      >
        <div class="aspect-square bg-gray-100 overflow-hidden relative">
          <img :src="item.url" :alt="item.title" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
          <button 
            @click="removeMedia(item.id)"
            class="absolute top-1.5 right-1.5 bg-black/60 hover:bg-rose-600 text-white p-1 rounded opacity-0 group-hover:opacity-100 transition-opacity"
            title="Delete media"
          >
            <Trash2 class="w-3.5 h-3.5" />
          </button>
        </div>
        <div class="p-2 text-xs">
          <p class="font-medium text-gray-800 truncate" :title="item.title">{{ item.title }}</p>
          <div class="flex justify-between text-[10px] text-gray-400 mt-1">
            <span>{{ item.date }}</span>
            <span>{{ item.size }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
