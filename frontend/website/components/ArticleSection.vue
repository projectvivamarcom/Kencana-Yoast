<script setup lang="ts">
import { ArrowRight } from 'lucide-vue-next'
import SectionTitle from './SectionTitle.vue'
import ArticleCard, { type ArticleItem } from './ArticleCard.vue'

const articles: ArticleItem[] = [
  {
    id: '1',
    title: 'Kencana Peduli: Menyemai Harapan Melalui Rak Bunga dari Baja Ringan untuk YPAC Surabaya',
    category: 'CSR',
    image: '/images/articles/csr-ypac.jpg',
    date: '24 Agustus 2026',
    excerpt: 'Wujud kepedulian PT Kencana Maju Bersama kepada sesama melalui penyediaan instalasi rak tanaman baja ringan tahan karat untuk siswa YPAC Surabaya.',
    link: '/articles/kencana-peduli-ypac-surabaya'
  },
  {
    id: '2',
    title: 'Berpartisipasi di ARCH:ID 2025/2026, Kencana Tampilkan Inovasi Baru dalam Dunia Konstruksi',
    category: 'Pameran Arsitektur',
    image: '/images/articles/arch-id.jpg',
    date: '15 Juli 2026',
    excerpt: 'Menampilkan keunggulan sistem rangka baja ringan dan dekoratif terkini kepada ribuan arsitek dan pelaku industri konstruksi se-Indonesia.',
    link: '/articles/kencana-arch-id-inovasi-konstruksi'
  },
  {
    id: '3',
    title: 'Kencana Semarakkan Pawai Budaya Surabaya Vaganza dengan Kreasi Baja Ringan',
    category: 'Budaya & Event',
    image: '/images/articles/surabaya-vaganza.jpg',
    date: '30 Mei 2026',
    excerpt: 'Berpartisipasi aktif dalam memeriahkan Hari Jadi Kota Surabaya melalui mobil hias spektakuler yang dirancang penuh dengan rangka baja presisi Kencana.',
    link: '/articles/kencana-surabaya-vaganza'
  },
  {
    id: '4',
    title: 'Tunjukkan Inovasi Terbaik, Kencana Baja Ringan Hadir di IMPACT+ Yogyakarta',
    category: 'Inovasi',
    image: '/images/articles/impact-jogja.jpg',
    date: '10 Mei 2026',
    excerpt: 'Kencana memperluas jangkauan edukasi material atap berstandar SNI dan keandalan software MaxiCAD kepada praktisi bangunan di wilayah Jawa Tengah & DIY.',
    link: '/articles/kencana-impact-yogyakarta'
  }
]
</script>

<template>
  <section class="py-24 bg-slate-50 border-t border-slate-200/80" id="berita">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
      <!-- Title -->
      <SectionTitle 
        badge="Wawasan &amp; Informasi"
        title="Simak Berita"
        highlight="Terkini"
        subtitle="KENCANA menyajikan konten yang relevan dan terpercaya untuk mendukung wawasan Anda di dunia konstruksi. Temukan kabar terkini seputar kegiatan perusahaan, CSR, pameran, hingga artikel teknis baja ringan."
        align="center"
      />

      <!-- Articles Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <ArticleCard 
          v-for="article in articles" 
          :key="article.id"
          :article="article"
        />
      </div>

      <!-- Bottom Button -->
      <div class="text-center pt-4">
        <NuxtLink 
          to="/articles"
          class="inline-flex items-center space-x-2 px-8 py-3.5 rounded-xl bg-white border border-slate-200 text-slate-800 hover:text-kencana-red hover:border-kencana-red font-bold text-sm shadow-sm hover:shadow-md transition-all"
        >
          <span>Jelajahi Seluruh Artikel &amp; Berita Kencana</span>
          <ArrowRight class="w-4 h-4" />
        </NuxtLink>
      </div>
    </div>
  </section>
</template>
