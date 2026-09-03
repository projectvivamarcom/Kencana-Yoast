<script setup lang="ts">
import { ref, watch } from 'vue'
import { X, Sparkles } from 'lucide-vue-next'
import type { QuickEditData } from '../../types/seo'

const props = defineProps<{
  postData: QuickEditData | null
}>()

const emit = defineEmits<{
  (e: 'save', updated: QuickEditData): void
  (e: 'close'): void
}>()

const form = ref<QuickEditData>({
  id: 0,
  title: '',
  slug: '',
  seoTitle: '',
  metaDescription: '',
  focusKeyword: '',
  canonicalUrl: '',
  robotsMeta: 'index, follow',
  status: 'Published'
})

watch(
  () => props.postData,
  (val) => {
    if (val) {
      form.value = { ...val }
    }
  },
  { immediate: true }
)

const handleSave = () => {
  emit('save', form.value)
}
</script>

<template>
  <div 
    v-if="postData"
    class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-xs animate-fadeIn select-none"
  >
    <!-- Modal Card -->
    <div 
      class="bg-white rounded-md border border-gray-300 shadow-2xl w-full max-w-2xl overflow-hidden animate-scaleIn"
      @click.stop
    >
      <!-- Modal Header -->
      <div class="px-5 py-3.5 bg-gray-50 border-b border-gray-200 flex items-center justify-between">
        <div class="flex items-center space-x-2">
          <span class="font-bold text-sm text-gray-800">Quick Edit</span>
          <span class="text-xs text-gray-500 font-mono">#{{ form.id }}</span>
        </div>
        <button 
          @click="emit('close')" 
          class="text-gray-400 hover:text-gray-700 p-1 rounded hover:bg-gray-200 transition-colors"
        >
          <X class="w-4 h-4" />
        </button>
      </div>

      <!-- Modal Body -->
      <div class="p-5 space-y-4 max-h-[80vh] overflow-y-auto text-xs text-gray-700">
        <!-- Post Information Column 1 -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <!-- Title -->
          <div class="space-y-1">
            <label class="font-semibold text-gray-800">Title</label>
            <input 
              type="text" 
              v-model="form.title" 
              class="wp-input text-xs" 
              placeholder="Post title"
            />
          </div>

          <!-- Slug -->
          <div class="space-y-1">
            <label class="font-semibold text-gray-800">Slug (Permalink)</label>
            <input 
              type="text" 
              v-model="form.slug" 
              class="wp-input text-xs font-mono" 
              placeholder="post-slug"
            />
          </div>
        </div>

        <!-- SEO Metadata Section -->
        <div class="p-3.5 bg-blue-50/50 border border-blue-100 rounded-md space-y-3">
          <div class="flex items-center space-x-1.5 text-[#2271b1] font-semibold text-xs">
            <Sparkles class="w-3.5 h-3.5" />
            <span>Kencana SEO Settings</span>
          </div>

          <!-- Focus Keyword & SEO Title -->
          <div class="grid grid-cols-1 md:grid-cols-2 gap-3">
            <div class="space-y-1">
              <label class="font-semibold text-gray-800">Focus Keyword</label>
              <input 
                type="text" 
                v-model="form.focusKeyword" 
                class="wp-input text-xs" 
                placeholder="e.g. kencana hills"
              />
            </div>

            <div class="space-y-1">
              <label class="font-semibold text-gray-800">SEO Title</label>
              <input 
                type="text" 
                v-model="form.seoTitle" 
                class="wp-input text-xs" 
                placeholder="Title as shown on Google"
              />
            </div>
          </div>

          <!-- Meta Description -->
          <div class="space-y-1">
            <label class="font-semibold text-gray-800">Meta Description</label>
            <textarea 
              v-model="form.metaDescription" 
              rows="2" 
              class="wp-input text-xs" 
              placeholder="Meta description snippet for search engines..."
            ></textarea>
          </div>

          <!-- Canonical URL & Robots Meta -->
          <div class="grid grid-cols-1 md:grid-cols-2 gap-3">
            <div class="space-y-1">
              <label class="font-semibold text-gray-800">Canonical URL</label>
              <input 
                type="text" 
                v-model="form.canonicalUrl" 
                class="wp-input text-xs font-mono" 
                placeholder="https://kencana.id/posts/..."
              />
            </div>

            <div class="space-y-1">
              <label class="font-semibold text-gray-800">Robots Meta</label>
              <select v-model="form.robotsMeta" class="wp-select w-full text-xs">
                <option value="index, follow">index, follow (Default)</option>
                <option value="noindex, follow">noindex, follow</option>
                <option value="index, nofollow">index, nofollow</option>
                <option value="noindex, nofollow">noindex, nofollow</option>
              </select>
            </div>
          </div>
        </div>

        <!-- Status Column -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div class="space-y-1">
            <label class="font-semibold text-gray-800">Status</label>
            <select v-model="form.status" class="wp-select w-full text-xs">
              <option value="Published">Published</option>
              <option value="Draft">Draft</option>
              <option value="Pending Review">Pending Review</option>
            </select>
          </div>
        </div>
      </div>

      <!-- Modal Footer -->
      <div class="px-5 py-3 bg-gray-50 border-t border-gray-200 flex items-center justify-end space-x-2">
        <button 
          type="button" 
          @click="emit('close')"
          class="wp-btn text-xs py-1.5 px-3"
        >
          Cancel
        </button>
        <button 
          type="button" 
          @click="handleSave"
          class="wp-btn-primary text-xs py-1.5 px-4 shadow-xs"
        >
          Update
        </button>
      </div>
    </div>
  </div>
</template>
