<script setup lang="ts">
import { ref } from 'vue'
import { Save, CheckCircle2 } from 'lucide-vue-next'

const siteTitle = ref('Kencana Properti & Baja Ringan')
const tagline = ref('Solusi Konstruksi Kokoh & Hunian Mewah Berstandar SNI')
const adminEmail = ref('admin@kencana.id')
const apiBaseUrl = ref(import.meta.env.VITE_API_BASE_URL || 'http://127.0.0.1:8000')
const defaultRobotsMeta = ref('index, follow')
const enableAutoAnalysis = ref(true)

const savedNotice = ref(false)

const saveSettings = () => {
  savedNotice.value = true
  setTimeout(() => {
    savedNotice.value = false
  }, 3000)
}
</script>

<template>
  <div class="space-y-4">
    <div class="flex items-center justify-between pb-1 border-b border-gray-200">
      <h1 class="text-2xl font-normal text-wp-text">General &amp; SEO Settings</h1>
    </div>

    <div v-if="savedNotice" class="wp-notice wp-notice-success flex items-center space-x-2">
      <CheckCircle2 class="w-4 h-4 text-emerald-600" />
      <span>Settings saved successfully.</span>
    </div>

    <div class="bg-white border border-wp-border rounded shadow-xs p-6 space-y-5 max-w-3xl text-xs text-gray-700">
      <!-- Site Title -->
      <div class="grid grid-cols-1 sm:grid-cols-3 gap-2 items-center">
        <label class="font-semibold text-gray-800">Site Title</label>
        <div class="sm:col-span-2">
          <input type="text" v-model="siteTitle" class="wp-input text-xs" />
        </div>
      </div>

      <!-- Tagline -->
      <div class="grid grid-cols-1 sm:grid-cols-3 gap-2 items-center">
        <label class="font-semibold text-gray-800">Tagline</label>
        <div class="sm:col-span-2">
          <input type="text" v-model="tagline" class="wp-input text-xs" />
          <p class="text-[11px] text-gray-400 mt-1">In a few words, explain what this site is about.</p>
        </div>
      </div>

      <!-- Administration Email -->
      <div class="grid grid-cols-1 sm:grid-cols-3 gap-2 items-center">
        <label class="font-semibold text-gray-800">Administration Email</label>
        <div class="sm:col-span-2">
          <input type="email" v-model="adminEmail" class="wp-input text-xs" />
        </div>
      </div>

      <!-- Divider -->
      <div class="border-t border-gray-200 my-4"></div>

      <h3 class="font-bold text-sm text-gray-900">Kencana SEO Engine Integration</h3>

      <!-- API Base URL -->
      <div class="grid grid-cols-1 sm:grid-cols-3 gap-2 items-center">
        <label class="font-semibold text-gray-800">FastAPI Base URL</label>
        <div class="sm:col-span-2">
          <input type="text" v-model="apiBaseUrl" class="wp-input text-xs font-mono" />
          <p class="text-[11px] text-gray-400 mt-1">Default: <code>http://127.0.0.1:8000</code></p>
        </div>
      </div>

      <!-- Default Robots Meta -->
      <div class="grid grid-cols-1 sm:grid-cols-3 gap-2 items-center">
        <label class="font-semibold text-gray-800">Default Robots Meta</label>
        <div class="sm:col-span-2">
          <select v-model="defaultRobotsMeta" class="wp-select w-full text-xs">
            <option value="index, follow">index, follow (Recommended)</option>
            <option value="noindex, follow">noindex, follow</option>
            <option value="noindex, nofollow">noindex, nofollow</option>
          </select>
        </div>
      </div>

      <!-- Auto Analysis Checkbox -->
      <div class="grid grid-cols-1 sm:grid-cols-3 gap-2 items-center">
        <label class="font-semibold text-gray-800">Auto SEO Analysis</label>
        <div class="sm:col-span-2 flex items-center space-x-2">
          <input type="checkbox" id="auto-analyze" v-model="enableAutoAnalysis" class="rounded border-gray-300 text-wp-blue" />
          <label for="auto-analyze" class="cursor-pointer select-none">
            Run background real-time debounced analysis as authors write in the editor
          </label>
        </div>
      </div>

      <div class="pt-4 border-t border-gray-200 flex justify-start">
        <button type="button" @click="saveSettings" class="wp-btn-primary py-2 px-5 text-xs font-semibold flex items-center space-x-1.5">
          <Save class="w-3.5 h-3.5" />
          <span>Save Changes</span>
        </button>
      </div>
    </div>
  </div>
</template>
