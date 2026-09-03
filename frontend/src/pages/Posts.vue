<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { Plus, BarChart2, CheckCircle2 } from 'lucide-vue-next'
import { usePostStore } from '../stores/postStore'
import PostFilters from '../components/posts/PostFilters.vue'
import PostTable from '../components/posts/PostTable.vue'
import QuickEditModal from '../components/posts/QuickEditModal.vue'
import type { QuickEditData } from '../types/seo'

const router = useRouter()
const postStore = usePostStore()

const noticeMessage = ref<string | null>(null)

const handleSaveQuickEdit = (updated: QuickEditData) => {
  postStore.saveQuickEdit(updated)
  noticeMessage.value = `Post "${updated.title}" successfully updated.`
  setTimeout(() => {
    noticeMessage.value = null
  }, 4000)
}
</script>

<template>
  <div class="space-y-4">
    <!-- Page Header -->
    <div class="flex items-center justify-between pb-1 border-b border-gray-200">
      <div class="flex items-center space-x-3">
        <h1 class="text-2xl font-normal text-wp-text">Posts</h1>
        <router-link
          to="/posts/new"
          class="wp-btn-primary text-xs py-1 px-2.5 flex items-center space-x-1"
        >
          <Plus class="w-3.5 h-3.5" />
          <span>Add New Post</span>
        </router-link>
      </div>

      <!-- Quick SEO Summary Badge -->
      <div class="hidden sm:flex items-center space-x-2 text-xs text-gray-600 bg-white px-3 py-1.5 rounded border border-gray-200 shadow-xs">
        <BarChart2 class="w-3.5 h-3.5 text-blue-600" />
        <span class="font-medium">Kencana SEO Active</span>
      </div>
    </div>

    <!-- Admin Notice if any -->
    <div 
      v-if="noticeMessage" 
      class="wp-notice wp-notice-success flex items-center justify-between"
    >
      <div class="flex items-center space-x-2">
        <CheckCircle2 class="w-4 h-4 text-emerald-600 shrink-0" />
        <span>{{ noticeMessage }}</span>
      </div>
      <button @click="noticeMessage = null" class="text-gray-400 hover:text-gray-700">
        &times;
      </button>
    </div>

    <!-- Filters & Bulk Controls -->
    <PostFilters />

    <!-- Table of Posts -->
    <PostTable />

    <!-- Quick Edit Modal -->
    <QuickEditModal 
      :post-data="postStore.quickEditPost"
      @save="handleSaveQuickEdit"
      @close="postStore.closeQuickEdit"
    />
  </div>
</template>
