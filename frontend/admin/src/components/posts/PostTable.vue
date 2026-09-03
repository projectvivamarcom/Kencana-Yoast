<script setup lang="ts">
import { computed } from 'vue'
import { useRouter } from 'vue-router'
import { 
  ChevronLeft, 
  ChevronRight, 
  ChevronsLeft, 
  ChevronsRight,
  ExternalLink,
  Edit,
  Zap,
  Trash2,
  Eye
} from 'lucide-vue-next'
import { usePostStore } from '../../stores/postStore'
import type { Post } from '../../types/seo'
import ScoreBadge from '../seo/ScoreBadge.vue'

const router = useRouter()
const postStore = usePostStore()

// Select all checkbox
const isAllSelected = computed(() => {
  if (!postStore.paginatedPosts.length) return false
  return postStore.paginatedPosts.every((p) => postStore.selectedPostIds.includes(p.id))
})

const toggleSelectAll = () => {
  if (isAllSelected.value) {
    postStore.selectedPostIds = []
  } else {
    postStore.selectedPostIds = postStore.paginatedPosts.map((p) => p.id)
  }
}

const toggleSelectPost = (id: number) => {
  const idx = postStore.selectedPostIds.indexOf(id)
  if (idx === -1) {
    postStore.selectedPostIds.push(id)
  } else {
    postStore.selectedPostIds.splice(idx, 1)
  }
}

// Actions
const handleEdit = (post: Post) => {
  router.push(`/posts/edit/${post.id}`)
}

const handleQuickEdit = (post: Post) => {
  postStore.openQuickEdit(post)
}

const handleDelete = (post: Post) => {
  if (confirm(`Yakin ingin memindahkan postingan "${post.title}" ke tong sampah?`)) {
    postStore.deletePost(post.id)
  }
}
</script>

<template>
  <div class="bg-white border border-wp-border rounded shadow-xs overflow-hidden">
    <!-- Responsive Table Container -->
    <div class="overflow-x-auto min-h-[300px]">
      <table class="w-full text-left border-collapse text-xs">
        <!-- Table Header -->
        <thead class="bg-gray-50 border-b border-wp-border text-gray-700 select-none">
          <tr>
            <th class="w-8 px-3 py-2.5 text-center">
              <input 
                type="checkbox" 
                :checked="isAllSelected"
                @change="toggleSelectAll"
                class="rounded border-gray-300 text-wp-blue focus:ring-wp-blue"
              />
            </th>
            <th class="px-3 py-2.5 font-semibold text-gray-800 min-w-[240px]">Title</th>
            <th class="px-3 py-2.5 font-semibold text-gray-800">Author</th>
            <th class="px-3 py-2.5 font-semibold text-gray-800">Categories</th>
            <th class="px-3 py-2.5 font-semibold text-gray-800">Tags</th>
            <th class="px-3 py-2.5 font-semibold text-gray-800 text-center">SEO Score</th>
            <th class="px-3 py-2.5 font-semibold text-gray-800 text-center">Readability</th>
            <th class="px-3 py-2.5 font-semibold text-gray-800 min-w-[160px]">SEO Title</th>
            <th class="px-3 py-2.5 font-semibold text-gray-800 min-w-[180px]">Meta Description</th>
            <th class="px-3 py-2.5 font-semibold text-gray-800 text-center">Index Status</th>
            <th class="px-3 py-2.5 font-semibold text-gray-800 min-w-[110px]">Date</th>
          </tr>
        </thead>

        <!-- Table Body -->
        <tbody class="divide-y divide-gray-100">
          <tr 
            v-for="post in postStore.paginatedPosts" 
            :key="post.id"
            class="hover:bg-blue-50/30 transition-colors group"
            :class="{ 'bg-blue-50/50': postStore.selectedPostIds.includes(post.id) }"
          >
            <!-- Checkbox -->
            <td class="px-3 py-3 text-center align-top">
              <input 
                type="checkbox" 
                :checked="postStore.selectedPostIds.includes(post.id)"
                @change="toggleSelectPost(post.id)"
                class="rounded border-gray-300 text-wp-blue focus:ring-wp-blue mt-1"
              />
            </td>

            <!-- Title & WP Row Actions -->
            <td class="px-3 py-3 align-top">
              <div class="space-y-1">
                <a 
                  @click.prevent="handleEdit(post)"
                  href="#"
                  class="font-semibold text-sm text-[#2271b1] hover:underline leading-snug cursor-pointer block"
                >
                  {{ post.title }}
                </a>

                <!-- Post Status pill if not published -->
                <span 
                  v-if="post.status !== 'Published'" 
                  class="inline-block text-[10px] font-medium px-1.5 py-0.2 rounded bg-gray-100 text-gray-600 mr-2"
                >
                  — {{ post.status }}
                </span>

                <!-- WordPress Row Actions (Visible on hover) -->
                <div class="flex items-center space-x-2 text-[11px] text-gray-400 opacity-80 group-hover:opacity-100 transition-opacity">
                  <button 
                    @click="handleEdit(post)"
                    class="text-[#2271b1] hover:underline font-medium"
                  >
                    Edit
                  </button>
                  <span>|</span>
                  <button 
                    @click="handleQuickEdit(post)"
                    class="text-[#2271b1] hover:underline font-medium"
                  >
                    Quick Edit
                  </button>
                  <span>|</span>
                  <button 
                    @click="handleDelete(post)"
                    class="text-rose-600 hover:underline font-medium"
                  >
                    Trash
                  </button>
                  <span>|</span>
                  <a 
                    :href="post.canonicalUrl || `https://kencana.id/posts/${post.slug}`" 
                    target="_blank" 
                    rel="noopener"
                    class="text-gray-500 hover:text-gray-800 hover:underline"
                  >
                    View
                  </a>
                </div>
              </div>
            </td>

            <!-- Author -->
            <td class="px-3 py-3 align-top text-gray-600 whitespace-nowrap">
              {{ post.author }}
            </td>

            <!-- Categories -->
            <td class="px-3 py-3 align-top text-gray-600">
              <span v-if="post.categories && post.categories.length">
                {{ post.categories.join(', ') }}
              </span>
              <span v-else class="text-gray-400 italic">—</span>
            </td>

            <!-- Tags -->
            <td class="px-3 py-3 align-top text-gray-600">
              <span v-if="post.tags && post.tags.length">
                {{ post.tags.join(', ') }}
              </span>
              <span v-else class="text-gray-400 italic">—</span>
            </td>

            <!-- SEO Score (Green, Yellow, Red) -->
            <td class="px-3 py-3 align-top text-center">
              <ScoreBadge :score="post.seoScore" size="sm" />
            </td>

            <!-- Readability Score -->
            <td class="px-3 py-3 align-top text-center">
              <ScoreBadge :score="post.readabilityScore" size="sm" />
            </td>

            <!-- SEO Title -->
            <td class="px-3 py-3 align-top text-gray-700 text-[11px] leading-tight max-w-xs">
              <span class="line-clamp-2" :title="post.seoTitle">
                {{ post.seoTitle || post.title }}
              </span>
            </td>

            <!-- Meta Description -->
            <td class="px-3 py-3 align-top text-gray-500 text-[11px] leading-tight max-w-xs">
              <span class="line-clamp-2" :title="post.metaDescription">
                {{ post.metaDescription || '—' }}
              </span>
            </td>

            <!-- Index Status -->
            <td class="px-3 py-3 align-top text-center whitespace-nowrap">
              <span 
                class="px-2 py-0.5 rounded-full text-[10px] font-semibold"
                :class="post.indexStatus === 'Indexed' 
                  ? 'bg-emerald-50 text-emerald-700 border border-emerald-200' 
                  : 'bg-gray-100 text-gray-600 border border-gray-200'"
              >
                {{ post.indexStatus }}
              </span>
            </td>

            <!-- Date -->
            <td class="px-3 py-3 align-top text-gray-500 text-[11px] whitespace-nowrap">
              <div>{{ post.status === 'Published' ? 'Published' : 'Last Modified' }}</div>
              <div class="text-gray-700 font-medium">{{ post.date }}</div>
            </td>
          </tr>

          <!-- Empty State -->
          <tr v-if="postStore.paginatedPosts.length === 0">
            <td colspan="11" class="text-center py-10 text-gray-500 text-sm">
              No posts found matching the selected filters.
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <!-- Table Footer / Pagination -->
    <div class="px-4 py-2.5 bg-gray-50 border-t border-wp-border flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs text-gray-600 select-none">
      <!-- Total items count -->
      <div>
        <span>{{ postStore.filteredPosts.length }} items</span>
      </div>

      <!-- Pagination Buttons -->
      <div class="flex items-center space-x-2">
        <button 
          @click="postStore.filters.page = 1"
          :disabled="postStore.filters.page <= 1"
          class="wp-btn p-1 disabled:opacity-40 disabled:cursor-not-allowed"
          title="First Page"
        >
          <ChevronsLeft class="w-3.5 h-3.5" />
        </button>

        <button 
          @click="postStore.filters.page--"
          :disabled="postStore.filters.page <= 1"
          class="wp-btn p-1 disabled:opacity-40 disabled:cursor-not-allowed"
          title="Previous Page"
        >
          <ChevronLeft class="w-3.5 h-3.5" />
        </button>

        <div class="flex items-center space-x-1">
          <span class="text-gray-500">Page</span>
          <span class="font-bold text-gray-800">{{ postStore.filters.page }}</span>
          <span class="text-gray-500">of</span>
          <span class="font-bold text-gray-800">{{ postStore.totalPages }}</span>
        </div>

        <button 
          @click="postStore.filters.page++"
          :disabled="postStore.filters.page >= postStore.totalPages"
          class="wp-btn p-1 disabled:opacity-40 disabled:cursor-not-allowed"
          title="Next Page"
        >
          <ChevronRight class="w-3.5 h-3.5" />
        </button>

        <button 
          @click="postStore.filters.page = postStore.totalPages"
          :disabled="postStore.filters.page >= postStore.totalPages"
          class="wp-btn p-1 disabled:opacity-40 disabled:cursor-not-allowed"
          title="Last Page"
        >
          <ChevronsRight class="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  </div>
</template>
