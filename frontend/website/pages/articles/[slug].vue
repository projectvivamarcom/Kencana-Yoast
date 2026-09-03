<script setup lang="ts">
import { useRoute } from 'vue-router'
import { ArrowLeft, Calendar, User, Clock, Share2, Tag } from 'lucide-vue-next'

const route = useRoute()
const { getArticleBySlug, articles } = useArticles()

const article = computed(() => {
  return getArticleBySlug(route.params.slug as string)
})

const relatedArticles = computed(() => {
  return articles.filter(a => a.slug !== route.params.slug).slice(0, 2)
})

useHead({
  title: computed(() => article.value ? `${article.value.title} | Kencana` : 'Artikel Kencana'),
  meta: [
    { name: 'description', content: computed(() => article.value ? article.value.excerpt : '') }
  ]
})

const handleShare = () => {
  if (import.meta.client) {
    alert('Tautan artikel berhasil disalin!')
  }
}
</script>

<template>
  <div class="py-10 pb-20">
    <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
      <!-- Back Link -->
      <div>
        <NuxtLink to="/articles" class="inline-flex items-center space-x-1.5 text-xs font-semibold text-blue-700 hover:underline">
          <ArrowLeft class="w-3.5 h-3.5" />
          <span>Kembali ke Semua Artikel</span>
        </NuxtLink>
      </div>

      <article v-if="article" class="space-y-8 bg-white p-6 sm:p-10 rounded-2xl border border-slate-200 shadow-sm">
        <!-- Header -->
        <header class="space-y-4">
          <span class="inline-block bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-1 rounded-full uppercase tracking-wider">
            {{ article.category }}
          </span>

          <h1 class="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 leading-tight">
            {{ article.title }}
          </h1>

          <div class="flex flex-wrap items-center gap-4 text-xs text-slate-500 border-y border-slate-100 py-3">
            <span class="flex items-center space-x-1 font-medium text-slate-700">
              <User class="w-3.5 h-3.5 text-blue-600" />
              <span>{{ article.author }}</span>
            </span>
            <span>&bull;</span>
            <span class="flex items-center space-x-1">
              <Calendar class="w-3.5 h-3.5 text-slate-400" />
              <span>{{ article.date }}</span>
            </span>
            <span>&bull;</span>
            <span class="flex items-center space-x-1">
              <Clock class="w-3.5 h-3.5 text-slate-400" />
              <span>{{ article.readTime }}</span>
            </span>
          </div>
        </header>

        <!-- Featured Image -->
        <div class="rounded-xl overflow-hidden aspect-video bg-slate-100 border border-slate-200">
          <img :src="article.image" :alt="article.title" class="w-full h-full object-cover" />
        </div>

        <!-- Excerpt -->
        <div class="p-4 bg-blue-50/70 border-l-4 border-blue-600 rounded-r-xl text-sm font-medium text-slate-700 italic">
          {{ article.excerpt }}
        </div>

        <!-- Body Content -->
        <div class="prose prose-slate max-w-none text-sm leading-relaxed text-slate-700 space-y-4 whitespace-pre-line">
          {{ article.content }}
        </div>

        <!-- Article Footer / Share -->
        <footer class="pt-6 border-t border-slate-100 flex items-center justify-between">
          <div class="flex items-center space-x-2 text-xs text-slate-500">
            <Tag class="w-3.5 h-3.5 text-blue-600" />
            <span>Kencana, Baja Ringan, SNI, Konstruksi Modern</span>
          </div>
          <button 
            @click="handleShare" 
            class="inline-flex items-center space-x-1.5 text-xs font-semibold text-blue-700 hover:bg-blue-50 px-3 py-1.5 rounded-lg border border-blue-200"
          >
            <Share2 class="w-3.5 h-3.5" />
            <span>Bagikan</span>
          </button>
        </footer>
      </article>

      <div v-else class="text-center py-20">
        <h2 class="text-xl font-bold text-slate-800">Artikel Tidak Ditemukan</h2>
        <NuxtLink to="/articles" class="text-blue-700 underline text-sm mt-2 inline-block">
          Kembali ke Daftar Artikel
        </NuxtLink>
      </div>

      <!-- Related Articles -->
      <div v-if="relatedArticles.length" class="space-y-4 pt-4">
        <h3 class="text-lg font-bold text-slate-900">Artikel Terkait Lainnya</h3>
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <NuxtLink 
            v-for="rel in relatedArticles" 
            :key="rel.id" 
            :to="`/articles/${rel.slug}`"
            class="bg-white p-4 rounded-xl border border-slate-200 hover:border-blue-500 transition-all flex items-center space-x-3 group"
          >
            <img :src="rel.image" :alt="rel.title" class="w-16 h-16 rounded-lg object-cover shrink-0" />
            <div class="space-y-1">
              <span class="text-[10px] font-semibold text-blue-600 uppercase">{{ rel.category }}</span>
              <h4 class="text-xs font-bold text-slate-900 group-hover:text-blue-700 transition-colors line-clamp-2">{{ rel.title }}</h4>
            </div>
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>
