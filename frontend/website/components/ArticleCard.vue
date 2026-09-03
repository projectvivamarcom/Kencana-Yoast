<script setup lang="ts">
import { Calendar, ArrowRight } from 'lucide-vue-next'

export interface ArticleItem {
  id: string
  title: string
  category: string
  image: string
  date: string
  excerpt: string
  link: string
}

defineProps<{
  article: ArticleItem
}>()
</script>

<template>
  <article class="group bg-white rounded-2xl border border-slate-200/80 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col overflow-hidden hover:-translate-y-1">
    <!-- Image Header -->
    <div class="relative aspect-[16/10] bg-slate-100 overflow-hidden">
      <img 
        :src="article.image" 
        :alt="article.title"
        loading="lazy"
        class="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
      />
      <div class="absolute top-3 left-3 px-3 py-1 rounded-full text-xs font-bold bg-kencana-red text-white shadow-sm">
        {{ article.category }}
      </div>
    </div>

    <!-- Body Content -->
    <div class="p-6 flex-1 flex flex-col justify-between space-y-4">
      <div class="space-y-2">
        <div class="flex items-center space-x-1.5 text-xs text-slate-400">
          <Calendar class="w-3.5 h-3.5" />
          <span>{{ article.date }}</span>
        </div>
        <h3 class="text-base sm:text-lg font-bold text-slate-900 group-hover:text-kencana-red transition-colors line-clamp-2 leading-snug">
          {{ article.title }}
        </h3>
        <p class="text-xs sm:text-sm text-slate-600 line-clamp-3 leading-relaxed">
          {{ article.excerpt }}
        </p>
      </div>

      <!-- Action Link -->
      <div class="pt-3 border-t border-slate-100">
        <NuxtLink 
          :to="article.link"
          class="inline-flex items-center space-x-1.5 text-xs sm:text-sm font-bold text-kencana-red hover:text-kencana-redDark transition-colors group/link"
        >
          <span>Baca Selengkapnya</span>
          <ArrowRight class="w-4 h-4 transform group-hover/link:translate-x-1 transition-transform" />
        </NuxtLink>
      </div>
    </div>
  </article>
</template>
