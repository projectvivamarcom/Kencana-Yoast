<script setup lang="ts">
import { ref } from 'vue'
import { ChevronDown, ChevronUp, Image as ImageIcon, Trash2, Upload } from 'lucide-vue-next'

const props = defineProps<{
  imageUrl?: string
}>()

const emit = defineEmits<{
  (e: 'update:imageUrl', val: string): void
}>()

const isOpen = ref(true)
const showInputUrl = ref(false)
const manualUrl = ref(props.imageUrl || '')

const presetImages = [
  { label: 'Kencana Hills Luxury', url: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200&auto=format&fit=crop' },
  { label: 'Baja Ringan Truss', url: 'https://images.unsplash.com/photo-1541888946425-d0fbb186f5f7?q=80&w=1200&auto=format&fit=crop' },
  { label: 'Interior Minimalis', url: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=1200&auto=format&fit=crop' },
  { label: 'Genteng Metal', url: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=1200&auto=format&fit=crop' }
]

const selectPreset = (url: string) => {
  emit('update:imageUrl', url)
  showInputUrl.value = false
}

const applyManualUrl = () => {
  if (manualUrl.value.trim()) {
    emit('update:imageUrl', manualUrl.value.trim())
    showInputUrl.value = false
  }
}

const removeImage = () => {
  emit('update:imageUrl', '')
  manualUrl.value = ''
}
</script>

<template>
  <div class="wp-postbox bg-white border border-wp-border rounded shadow-xs mb-4">
    <div 
      @click="isOpen = !isOpen"
      class="wp-postbox-header flex items-center justify-between px-3.5 py-2.5 bg-gray-50 border-b border-wp-border cursor-pointer select-none"
    >
      <span class="font-semibold text-xs text-gray-800">Featured Image</span>
      <button type="button" class="text-gray-500 hover:text-gray-800">
        <ChevronUp v-if="isOpen" class="w-3.5 h-3.5" />
        <ChevronDown v-else class="w-3.5 h-3.5" />
      </button>
    </div>

    <div v-show="isOpen" class="p-3 text-xs space-y-3">
      <!-- Thumbnail Preview if image is set -->
      <div v-if="imageUrl" class="space-y-2">
        <div class="relative aspect-video rounded border border-gray-200 overflow-hidden bg-gray-100 group">
          <img 
            :src="imageUrl" 
            alt="Featured Image Preview" 
            class="w-full h-full object-cover"
          />
        </div>

        <div class="flex items-center justify-between pt-1">
          <button 
            type="button" 
            @click="showInputUrl = !showInputUrl"
            class="text-[#2271b1] hover:underline text-xs"
          >
            Click the image to edit or update
          </button>
          <button 
            type="button" 
            @click="removeImage"
            class="text-rose-600 hover:text-rose-800 hover:underline flex items-center space-x-1"
          >
            <Trash2 class="w-3 h-3" />
            <span>Remove featured image</span>
          </button>
        </div>
      </div>

      <!-- If no image set -->
      <div v-else class="space-y-2.5 text-center py-4 border-2 border-dashed border-gray-200 rounded-md">
        <ImageIcon class="w-8 h-8 text-gray-300 mx-auto" />
        <div>
          <button 
            type="button" 
            @click="showInputUrl = true"
            class="text-[#2271b1] font-medium hover:underline text-xs"
          >
            Set featured image
          </button>
          <p class="text-[11px] text-gray-400 mt-0.5">Choose from presets or provide an image link</p>
        </div>
      </div>

      <!-- Modal / Popover to Choose Image or Enter URL -->
      <div v-if="showInputUrl" class="p-2.5 bg-gray-50 border border-gray-200 rounded space-y-2 text-xs">
        <span class="font-semibold text-gray-700 block">Select Sample Image:</span>
        <div class="grid grid-cols-2 gap-1.5">
          <button
            v-for="(item, idx) in presetImages"
            :key="idx"
            type="button"
            @click="selectPreset(item.url)"
            class="p-1 border border-gray-200 bg-white rounded text-left hover:border-wp-blue truncate text-[11px]"
          >
            {{ item.label }}
          </button>
        </div>

        <div class="pt-1">
          <span class="text-[11px] text-gray-500 block mb-1">Or paste image URL:</span>
          <div class="flex space-x-1">
            <input 
              type="text" 
              v-model="manualUrl" 
              placeholder="https://images.unsplash.com/..."
              class="wp-input text-xs py-1"
            />
            <button 
              type="button" 
              @click="applyManualUrl"
              class="wp-btn-primary text-xs py-1 px-2.5 shrink-0"
            >
              Set
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
