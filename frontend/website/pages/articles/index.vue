<script setup lang="ts">
import { ChevronRight, Calendar, User, Clock } from 'lucide-vue-next'

const { articles } = useArticles()

useHead({
  title: 'Berita & Artikel Edukasi Konstruksi Baja Ringan | Kencana',
  meta: [
    { name: 'description', content: 'Kumpulan artikel edukatif, panduan memilih rangka atap SNI, dan liputan pameran dari PT Kencana Maju Bersama.' }
  ]
})
</script>

<template>
  <div class="space-y-12 pb-24 font-sans">
    <!-- Header Banner with Fluid Typography -->
    <section class="bg-gradient-to-r from-slate-950 via-slate-900 to-red-950 text-white py-14 sm:py-20">
      <div class="max-w-[1300px] mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-3">
        <span class="text-xs uppercase tracking-widest font-extrabold text-red-500">Pusat Informasi &amp; Wawasan</span>
        <h1 class="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">Berita &amp; Edukasi <span class="text-red-500">KENCANA</span></h1>
        <p class="text-xs sm:text-base text-slate-300 max-w-xl mx-auto leading-relaxed">
          Dapatkan tips praktis, panduan arsitektur baja ringan SNI, dan kabar terkini seputar kegiatan Kencana.
        </p>
      </div>
    </section>

    <!-- Articles Grid -->
    <section class="max-w-[1300px] mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        <article 
          v-for="article in articles" 
          :key="article.id"
          class="bg-white rounded-xl border border-slate-200/90 overflow-hidden shadow-sm hover:shadow-xl hover:border-red-400 transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1"
        >
          <div class="aspect-video bg-slate-100 overflow-hidden relative">
            <img 
              :src="article.image" 
              :alt="article.title" 
              loading="lazy"
              class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <span class="absolute top-3 left-3 bg-red-600 text-white text-[10px] font-bold px-2.5 py-0.5 rounded-md uppercase tracking-wider shadow-sm">
              {{ article.category }}
            </span>
          </div>

          <div class="p-6 flex-1 flex flex-col justify-between space-y-4">
            <div class="space-y-2.5">
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

              <h2 class="text-base sm:text-lg font-bold text-slate-900 group-hover:text-red-600 transition-colors line-clamp-2">
                {{ article.title }}
              </h2>

              <p class="text-xs text-slate-600 line-clamp-3 leading-relaxed">
                {{ article.excerpt }}
              </p>
            </div>

            <div class="pt-4 border-t border-slate-100 flex items-center justify-between">
              <span class="text-xs text-slate-500 font-medium flex items-center space-x-1">
                <User class="w-3.5 h-3.5 text-slate-400" />
                <span>{{ article.author }}</span>
              </span>
              <NuxtLink 
                :to="`/articles/${article.slug}`"
                class="text-xs font-bold text-red-600 hover:text-red-700 hover:underline flex items-center space-x-0.5 py-1"
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
