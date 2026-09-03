<script setup lang="ts">
import { ref } from 'vue'
import { ChevronDown, ChevronUp, X } from 'lucide-vue-next'
import { usePostStore } from '../../stores/postStore'

const props = defineProps<{
  selectedTags: string[]
}>()

const emit = defineEmits<{
  (e: 'update:selectedTags', val: string[]): void
}>()

const postStore = usePostStore()
const isOpen = ref(true)
const inputTag = ref('')

const addTag = (tagName?: string) => {
  const name = (tagName || inputTag.value).trim()
  if (!name) return

  const current = [...props.selectedTags]
  if (!current.includes(name)) {
    current.push(name)
    emit('update:selectedTags', current)
  }

  // Register in store if not present
  if (!postStore.tags.some(t => t.name.toLowerCase() === name.toLowerCase())) {
    postStore.tags.push({
      id: Date.now(),
      name,
      slug: name.toLowerCase().replace(/\s+/g, '-'),
      count: 1
    })
  }

  inputTag.value = ''
}

const removeTag = (name: string) => {
  emit('update:selectedTags', props.selectedTags.filter(t => t !== name))
}
</script>

<template>
  <div class="wp-postbox bg-white border border-wp-border rounded shadow-xs mb-4">
    <div 
      @click="isOpen = !isOpen"
      class="wp-postbox-header flex items-center justify-between px-3.5 py-2.5 bg-gray-50 border-b border-wp-border cursor-pointer select-none"
    >
      <span class="font-semibold text-xs text-gray-800">Tags</span>
      <button type="button" class="text-gray-500 hover:text-gray-800">
        <ChevronUp v-if="isOpen" class="w-3.5 h-3.5" />
        <ChevronDown v-else class="w-3.5 h-3.5" />
      </button>
    </div>

    <div v-show="isOpen" class="p-3 text-xs space-y-3">
      <!-- Tag Input & Add Button -->
      <div class="flex items-center space-x-1.5">
        <input 
          type="text" 
          v-model="inputTag" 
          @keyup.enter="addTag()"
          placeholder="Add new tag"
          class="wp-input text-xs py-1"
        />
        <button 
          type="button" 
          @click="addTag()"
          class="wp-btn text-xs py-1 px-3"
        >
          Add
        </button>
      </div>
      <p class="text-[11px] text-gray-400 italic">Separate tags with commas</p>

      <!-- Selected Tags Chips -->
      <div v-if="selectedTags.length > 0" class="flex flex-wrap gap-1.5 pt-1">
        <span 
          v-for="tag in selectedTags" 
          :key="tag"
          class="inline-flex items-center space-x-1 bg-gray-100 hover:bg-gray-200 text-gray-700 px-2 py-0.5 rounded text-[11px] border border-gray-200 transition-colors"
        >
          <span>{{ tag }}</span>
          <button 
            type="button" 
            @click="removeTag(tag)"
            class="text-gray-400 hover:text-rose-600 ml-0.5"
            title="Remove tag"
          >
            <X class="w-3 h-3" />
          </button>
        </span>
      </div>

      <!-- Most Used Tags Suggestion -->
      <div class="pt-2 border-t border-gray-100">
        <span class="text-[11px] text-gray-500 block mb-1">Most used tags:</span>
        <div class="flex flex-wrap gap-1">
          <button
            v-for="t in postStore.tags.slice(0, 5)"
            :key="t.id"
            type="button"
            @click="addTag(t.name)"
            class="text-[11px] text-[#2271b1] hover:underline cursor-pointer"
          >
            {{ t.name }}
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
