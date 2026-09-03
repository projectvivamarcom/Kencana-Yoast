<script setup lang="ts">
import { ChevronRight, Calendar, User, Clock } from 'lucide-vue-next'

const { articles } = useArticles()

useHead({
  title: 'Artikel & Edukasi Konstruksi Baja Ringan | Kencana',
  meta: [
    { name: 'description', content: 'Kumpulan artikel edukatif, panduan memilih rangka atap SNI, dan tren properti modern dari PT Kencana Maju Bersama.' }
  ]
})
</script>

<template>
  <div class="space-y-12 pb-20">
    <!-- Header Banner -->
    <section class="bg-slate-900 text-white py-14">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-3">
        <span class="text-xs uppercase tracking-wider font-bold text-blue-400">Pusat Informasi &amp; Wawasan</span>
        <h1 class="text-3xl sm:text-4xl font-extrabold tracking-tight">Artikel &amp; Edukasi Konstruksi</h1>
        <p class="text-sm text-slate-300 max-w-xl mx-auto">
          Dapatkan tips praktis, panduan arsitektur, dan berita seputar produk baja ringan Kencana.
        </p>
      </div>
    </section>

    <!-- Articles Grid -->
    <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <article 
          v-for="article in articles" 
          :key="article.id"
          class="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
        >
          <div class="aspect-video bg-slate-100 overflow-hidden relative">
            <img 
              :src="article.image" 
              :alt="article.title" 
              class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <span class="absolute top-3 left-3 bg-blue-900/80 backdrop-blur-sm text-white text-[10px] font-semibold px-2.5 py-1 rounded-full uppercase tracking-wider">
              {{ article.category }}
            </span>
          </div>

          <div class="p-6 flex-1 flex flex-col justify-between space-y-4">
            <div class="space-y-2">
              <div class="flex items-center space-x-3 text-[11px] text-slate-400">
                <span class="flex items-center space-x-1">
                  <Calendar class="w-3.5 h-3.5" />
                  <span>{{ article.date }}</span>
                </span>
                <span>&bull;</span>
                <span class="flex items-center space-x-1">
                  <Clock class="w-3.5 h-3.5" />
                  <span>{{ article.readTime }}</span>
                </span>
              </div>

              <h2 class="text-base font-bold text-slate-900 group-hover:text-blue-700 transition-colors line-clamp-2">
                {{ article.title }}
              </h2>

              <p class="text-xs text-slate-500 line-clamp-3 leading-relaxed">
                {{ article.excerpt }}
              </p>
            </div>

            <div class="pt-4 border-t border-slate-100 flex items-center justify-between">
              <span class="text-xs text-slate-500 font-medium flex items-center space-x-1">
                <User class="w-3 h-3 text-slate-400" />
                <span>{{ article.author }}</span>
              </span>
              <NuxtLink 
                :to="`/articles/${article.slug}`"
                class="text-xs font-semibold text-blue-700 hover:underline flex items-center space-x-0.5"
              >
                <span>Baca Selengkapnya</span>
                <ChevronRight class="w-3.5 h-3.5" />
              </NuxtLink>
            </div>
          </div>
        </article>
      </div>
    </section>
  </div>
</template>
