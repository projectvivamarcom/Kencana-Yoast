<script setup lang="ts">
import { ref } from 'vue'
import { Calendar, Eye, FileText, ChevronDown, ChevronUp } from 'lucide-vue-next'

const props = defineProps<{
  status: 'Published' | 'Draft' | 'Pending Review'
  visibility?: 'Public' | 'Private' | 'Password protected'
  publishDate: string
  isEditMode?: boolean
  isSaving?: boolean
}>()

const emit = defineEmits<{
  (e: 'update:status', val: 'Published' | 'Draft' | 'Pending Review'): void
  (e: 'update:visibility', val: 'Public' | 'Private' | 'Password protected'): void
  (e: 'saveDraft'): void
  (e: 'publish'): void
  (e: 'preview'): void
  (e: 'delete'): void
}>()

const isOpen = ref(true)
const isEditingStatus = ref(false)
const isEditingVisibility = ref(false)
const selectedVisibility = ref(props.visibility || 'Public')
</script>

<template>
  <div class="wp-postbox bg-white border border-wp-border rounded shadow-xs mb-4">
    <!-- Postbox Header -->
    <div 
      @click="isOpen = !isOpen"
      class="wp-postbox-header flex items-center justify-between px-3.5 py-2.5 bg-gray-50 border-b border-wp-border cursor-pointer select-none"
    >
      <span class="font-semibold text-xs text-gray-800">Publish</span>
      <button type="button" class="text-gray-500 hover:text-gray-800">
        <ChevronUp v-if="isOpen" class="w-3.5 h-3.5" />
        <ChevronDown v-else class="w-3.5 h-3.5" />
      </button>
    </div>

    <!-- Postbox Body -->
    <div v-show="isOpen" class="p-3 text-xs text-wp-text space-y-3">
      <!-- Top Action: Save Draft & Preview -->
      <div class="flex items-center justify-between pb-2 border-b border-gray-200">
        <button 
          type="button" 
          @click="emit('saveDraft')"
          :disabled="isSaving"
          class="wp-btn text-xs py-1"
        >
          Save Draft
        </button>
        <button 
          type="button" 
          @click="emit('preview')"
          class="wp-btn text-xs py-1 flex items-center space-x-1"
        >
          <Eye class="w-3.5 h-3.5 text-gray-500" />
          <span>Preview</span>
        </button>
      </div>

      <!-- Publishing Details -->
      <div class="space-y-2.5 text-gray-600">
        <!-- Status -->
        <div class="flex items-start justify-between">
          <div class="flex items-center space-x-1.5">
            <FileText class="w-3.5 h-3.5 text-gray-400 shrink-0" />
            <span>Status:</span>
            <strong class="text-gray-800 font-semibold">{{ status }}</strong>
          </div>
          <button 
            type="button" 
            @click="isEditingStatus = !isEditingStatus"
            class="text-[#2271b1] hover:underline"
          >
            {{ isEditingStatus ? 'Cancel' : 'Edit' }}
          </button>
        </div>

        <!-- Status selector dropdown when editing -->
        <div v-if="isEditingStatus" class="p-2 bg-gray-50 border border-gray-200 rounded space-y-2">
          <select 
            :value="status"
            @change="emit('update:status', ($event.target as HTMLSelectElement).value as any); isEditingStatus = false"
            class="wp-select w-full"
          >
            <option value="Published">Published</option>
            <option value="Pending Review">Pending Review</option>
            <option value="Draft">Draft</option>
          </select>
        </div>

        <!-- Visibility -->
        <div class="flex items-start justify-between">
          <div class="flex items-center space-x-1.5">
            <Eye class="w-3.5 h-3.5 text-gray-400 shrink-0" />
            <span>Visibility:</span>
            <strong class="text-gray-800 font-semibold">{{ selectedVisibility }}</strong>
          </div>
          <button 
            type="button" 
            @click="isEditingVisibility = !isEditingVisibility"
            class="text-[#2271b1] hover:underline"
          >
            {{ isEditingVisibility ? 'Cancel' : 'Edit' }}
          </button>
        </div>

        <!-- Visibility options -->
        <div v-if="isEditingVisibility" class="p-2 bg-gray-50 border border-gray-200 rounded space-y-1">
          <label class="flex items-center space-x-2 text-[11px] cursor-pointer">
            <input type="radio" v-model="selectedVisibility" value="Public" @change="emit('update:visibility', 'Public')" />
            <span>Public</span>
          </label>
          <label class="flex items-center space-x-2 text-[11px] cursor-pointer">
            <input type="radio" v-model="selectedVisibility" value="Private" @change="emit('update:visibility', 'Private')" />
            <span>Private</span>
          </label>
          <label class="flex items-center space-x-2 text-[11px] cursor-pointer">
            <input type="radio" v-model="selectedVisibility" value="Password protected" @change="emit('update:visibility', 'Password protected')" />
            <span>Password protected</span>
          </label>
        </div>

        <!-- Publish Date -->
        <div class="flex items-center space-x-1.5">
          <Calendar class="w-3.5 h-3.5 text-gray-400 shrink-0" />
          <span>Publish:</span>
          <strong class="text-gray-800 font-semibold">{{ publishDate || 'immediately' }}</strong>
        </div>
      </div>

      <!-- Bottom Actions: Move to Trash & Publish button -->
      <div class="pt-3 border-t border-gray-200 flex items-center justify-between">
        <button 
          type="button" 
          @click="emit('delete')"
          class="text-rose-600 hover:text-rose-800 hover:underline text-xs"
        >
          Move to trash
        </button>

        <button 
          type="button" 
          @click="emit('publish')"
          :disabled="isSaving"
          class="wp-btn-primary px-4 py-1.5 text-xs shadow-xs"
        >
          {{ isSaving ? 'Saving...' : (isEditMode ? 'Update' : 'Publish') }}
        </button>
      </div>
    </div>
  </div>
</template>
