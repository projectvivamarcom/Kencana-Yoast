<script setup lang="ts">
import { ref, computed } from 'vue'
import { Plus, Search, Edit, Trash2, BookOpen, CheckCircle2 } from 'lucide-vue-next'
import ScoreBadge from '../components/seo/ScoreBadge.vue'

interface Article {
  id: number
  title: string
  category: string
  author: string
  views: number
  seoScore: number
  status: 'Published' | 'Draft'
  date: string
}

const articles = ref<Article[]>([
  {
    id: 1,
    title: '5 Tips Memilih Rangka Atap Baja Ringan Berkualitas Anti Rayap',
    category: 'Tips & Panduan',
    author: 'Tim Redaksi Kencana',
    views: 1420,
    seoScore: 90,
    status: 'Published',
    date: '2026-02-28'
  },
  {
    id: 2,
    title: 'Standar SNI Baja Lapis Aluminium Seng (BJLAS) untuk Konstruksi Modern',
    category: 'Edukasi Teknis',
    author: 'Ir. Hendra Wijaya',
    views: 980,
    seoScore: 85,
    status: 'Published',
    date: '2026-02-24'
  },
  {
    id: 3,
    title: 'Kencana Buka Depo Distribusi Baru di Kawasan Industri Makassar',
    category: 'Berita Perusahaan',
    author: 'Humas Kencana',
    views: 650,
    seoScore: 78,
    status: 'Published',
    date: '2026-02-20'
  },
  {
    id: 4,
    title: 'Perbandingan Efisiensi Biaya Baja Ringan vs Kayu Balok 2026',
    category: 'Tips & Panduan',
    author: 'Tim Redaksi Kencana',
    views: 310,
    seoScore: 65,
    status: 'Draft',
    date: '2026-02-18'
  }
])

const search = ref('')
const selectedCategory = ref('All')
const noticeMessage = ref<string | null>(null)

const categories = ['All', 'Tips & Panduan', 'Edukasi Teknis', 'Berita Perusahaan']

const filteredArticles = computed(() => {
  return articles.value.filter((a) => {
    const matchSearch = a.title.toLowerCase().includes(search.value.toLowerCase()) || a.author.toLowerCase().includes(search.value.toLowerCase())
    const matchCat = selectedCategory.value === 'All' || a.category === selectedCategory.value
    return matchSearch && matchCat
  })
})

const deleteArticle = (id: number) => {
  if (confirm('Yakin ingin menghapus artikel ini?')) {
    articles.value = articles.value.filter((a) => a.id !== id)
    noticeMessage.value = 'Artikel berhasil dihapus.'
    setTimeout(() => { noticeMessage.value = null }, 3000)
  }
}
</script>

<template>
  <div class="space-y-4">
    <!-- Page Header -->
    <div class="flex items-center justify-between pb-1 border-b border-gray-200">
      <div class="flex items-center space-x-3">
        <h1 class="text-2xl font-normal text-wp-text">Articles</h1>
        <button class="wp-btn-primary text-xs py-1 px-2.5 flex items-center space-x-1">
          <Plus class="w-3.5 h-3.5" />
          <span>Add New Article</span>
        </button>
      </div>

      <div class="text-xs text-gray-500 font-mono">
        Total: {{ articles.length }} Artikel
      </div>
    </div>

    <!-- Notice -->
    <div v-if="noticeMessage" class="wp-notice wp-notice-success flex items-center justify-between">
      <div class="flex items-center space-x-2">
        <CheckCircle2 class="w-4 h-4 text-emerald-600 shrink-0" />
        <span>{{ noticeMessage }}</span>
      </div>
      <button @click="noticeMessage = null" class="text-gray-400 hover:text-gray-700">&times;</button>
    </div>

    <!-- Filters & Search Toolbar -->
    <div class="bg-white p-3 border border-wp-border rounded shadow-xs flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
      <div class="flex items-center space-x-2">
        <select v-model="selectedCategory" class="wp-select text-xs">
          <option v-for="cat in categories" :key="cat" :value="cat">
            {{ cat === 'All' ? 'All Categories' : cat }}
          </option>
        </select>
      </div>

      <div class="relative w-full sm:w-64">
        <input 
          type="text" 
          v-model="search" 
          placeholder="Search articles by title or author..." 
          class="wp-input pl-8 text-xs py-1.5"
        />
        <Search class="w-3.5 h-3.5 text-gray-400 absolute left-2.5 top-2.5" />
      </div>
    </div>

    <!-- Articles Table -->
    <div class="bg-white border border-wp-border rounded shadow-xs overflow-hidden">
      <div class="overflow-x-auto min-h-[250px]">
        <table class="w-full text-left border-collapse text-xs">
          <thead class="bg-gray-50 border-b border-wp-border text-gray-700 select-none">
            <tr>
              <th class="px-4 py-2.5 font-semibold min-w-[240px]">Article Title</th>
              <th class="px-4 py-2.5 font-semibold">Category</th>
              <th class="px-4 py-2.5 font-semibold">Author</th>
              <th class="px-4 py-2.5 font-semibold text-center">SEO Score</th>
              <th class="px-4 py-2.5 font-semibold text-center">Views</th>
              <th class="px-4 py-2.5 font-semibold text-center">Status</th>
              <th class="px-4 py-2.5 font-semibold text-right">Actions</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-gray-100">
            <tr v-for="art in filteredArticles" :key="art.id" class="hover:bg-blue-50/30 transition-colors">
              <td class="px-4 py-3 font-semibold text-[#2271b1]">
                <div class="flex items-center space-x-2">
                  <BookOpen class="w-4 h-4 text-gray-400 shrink-0" />
                  <span>{{ art.title }}</span>
                </div>
              </td>
              <td class="px-4 py-3 text-gray-600">{{ art.category }}</td>
              <td class="px-4 py-3 text-gray-600">{{ art.author }}</td>
              <td class="px-4 py-3 text-center">
                <ScoreBadge :score="art.seoScore" size="sm" />
              </td>
              <td class="px-4 py-3 text-center font-mono text-gray-500">{{ art.views }}</td>
              <td class="px-4 py-3 text-center">
                <span 
                  class="px-2 py-0.5 rounded-full text-[10px] font-semibold"
                  :class="art.status === 'Published' 
                    ? 'bg-emerald-50 text-emerald-700 border border-emerald-200' 
                    : 'bg-gray-100 text-gray-600 border border-gray-200'"
                >
                  {{ art.status }}
                </span>
              </td>
              <td class="px-4 py-3 text-right">
                <div class="flex items-center justify-end space-x-2 text-xs">
                  <button class="text-[#2271b1] hover:underline flex items-center space-x-0.5">
                    <Edit class="w-3.5 h-3.5" />
                    <span>Edit</span>
                  </button>
                  <span class="text-gray-300">|</span>
                  <button @click="deleteArticle(art.id)" class="text-rose-600 hover:underline flex items-center space-x-0.5">
                    <Trash2 class="w-3.5 h-3.5" />
                    <span>Delete</span>
                  </button>
                </div>
              </td>
            </tr>

            <tr v-if="filteredArticles.length === 0">
              <td colspan="7" class="text-center py-10 text-gray-500 text-xs">
                Tidak ada artikel yang cocok dengan pencarian.
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>
