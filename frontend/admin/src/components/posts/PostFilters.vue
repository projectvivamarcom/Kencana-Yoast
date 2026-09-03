<script setup lang="ts">
import { ref } from 'vue'
import { Search } from 'lucide-vue-next'
import { usePostStore } from '../../stores/postStore'

const postStore = usePostStore()

const selectedBulkAction = ref('')

const applyBulk = () => {
  if (selectedBulkAction.value) {
    postStore.applyBulkAction(selectedBulkAction.value)
    selectedBulkAction.value = ''
  }
}

const resetFilters = () => {
  postStore.filters.search = ''
  postStore.filters.category = ''
  postStore.filters.seoScoreFilter = 'all'
  postStore.filters.readabilityFilter = 'all'
  postStore.filters.indexStatusFilter = 'all'
  postStore.filters.page = 1
}
</script>

<template>
  <div class="space-y-2 mb-3 select-none">
    <!-- Top Row: Status Tabs & Search Box -->
    <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
      <!-- Status Tabs: All | Published | Draft | Pending Review -->
      <div class="flex items-center space-x-1.5 text-xs text-gray-600 divide-x divide-gray-300">
        <button 
          @click="postStore.filters.statusFilter = 'all'"
          class="pr-1.5 transition-colors"
          :class="postStore.filters.statusFilter === 'all' ? 'font-bold text-black' : 'text-[#2271b1] hover:underline'"
        >
          All <span class="text-gray-400">({{ postStore.postCountsByStatus.all }})</span>
        </button>

        <button 
          @click="postStore.filters.statusFilter = 'Published'"
          class="px-1.5 transition-colors"
          :class="postStore.filters.statusFilter === 'Published' ? 'font-bold text-black' : 'text-[#2271b1] hover:underline'"
        >
          Published <span class="text-gray-400">({{ postStore.postCountsByStatus.published }})</span>
        </button>

        <button 
          @click="postStore.filters.statusFilter = 'Draft'"
          class="px-1.5 transition-colors"
          :class="postStore.filters.statusFilter === 'Draft' ? 'font-bold text-black' : 'text-[#2271b1] hover:underline'"
        >
          Draft <span class="text-gray-400">({{ postStore.postCountsByStatus.draft }})</span>
        </button>

        <button 
          @click="postStore.filters.statusFilter = 'Pending Review'"
          class="pl-1.5 transition-colors"
          :class="postStore.filters.statusFilter === 'Pending Review' ? 'font-bold text-black' : 'text-[#2271b1] hover:underline'"
        >
          Pending Review <span class="text-gray-400">({{ postStore.postCountsByStatus.pending }})</span>
        </button>
      </div>

      <!-- Search Input -->
      <div class="flex items-center space-x-1">
        <div class="relative">
          <input 
            type="search" 
            v-model="postStore.filters.search" 
            placeholder="Search Posts..."
            class="wp-input text-xs py-1 pl-7 w-48 sm:w-64"
          />
          <Search class="w-3.5 h-3.5 text-gray-400 absolute left-2 top-2" />
        </div>
        <button 
          @click="postStore.filters.page = 1"
          class="wp-btn py-1 text-xs"
        >
          Search
        </button>
      </div>
    </div>

    <!-- Bottom Row: Bulk Action + Category, SEO Score, Readability, Index Filters -->
    <div class="flex flex-wrap items-center justify-between gap-2 pt-1">
      <!-- Bulk Actions -->
      <div class="flex items-center space-x-1">
        <select v-model="selectedBulkAction" class="wp-select text-xs py-1">
          <option value="">Bulk actions</option>
          <option value="publish">Mark as Published</option>
          <option value="draft">Mark as Draft</option>
          <option value="delete">Move to Trash</option>
        </select>
        <button 
          @click="applyBulk"
          :disabled="!selectedBulkAction || postStore.selectedPostIds.length === 0"
          class="wp-btn text-xs py-1 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Apply
        </button>
      </div>

      <!-- Filters Group -->
      <div class="flex flex-wrap items-center gap-1.5">
        <!-- Category Filter -->
        <select v-model="postStore.filters.category" class="wp-select text-xs py-1">
          <option value="">All categories</option>
          <option v-for="cat in postStore.categories" :key="cat.id" :value="cat.name">
            {{ cat.name }}
          </option>
        </select>

        <!-- SEO Score Filter -->
        <select v-model="postStore.filters.seoScoreFilter" class="wp-select text-xs py-1">
          <option value="all">All SEO Scores</option>
          <option value="good">SEO: Good (80-100)</option>
          <option value="improvement">SEO: Needs Improvement (50-79)</option>
          <option value="poor">SEO: Poor (0-49)</option>
        </select>

        <!-- Readability Filter -->
        <select v-model="postStore.filters.readabilityFilter" class="wp-select text-xs py-1">
          <option value="all">All Readability</option>
          <option value="good">Readability: Good (80-100)</option>
          <option value="improvement">Readability: Needs Improvement (50-79)</option>
          <option value="poor">Readability: Poor (0-49)</option>
        </select>

        <!-- Index Status Filter -->
        <select v-model="postStore.filters.indexStatusFilter" class="wp-select text-xs py-1">
          <option value="all">All Index Status</option>
          <option value="Indexed">Indexed</option>
          <option value="Noindex">Noindex</option>
        </select>

        <!-- Reset Button -->
        <button 
          @click="resetFilters"
          class="wp-btn text-xs py-1 text-gray-500 hover:text-gray-900"
          title="Reset all filters"
        >
          Reset
        </button>
      </div>
    </div>
  </div>
</template>
