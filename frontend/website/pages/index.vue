<script setup lang="ts">
import HeroSection from '~/components/HeroSection.vue'
import AboutSection from '~/components/AboutSection.vue'
import ProductSection from '~/components/ProductSection.vue'
import ShowcaseSection from '~/components/ShowcaseSection.vue'
import ArticleSection from '~/components/ArticleSection.vue'
import FaqSection from '~/components/FaqSection.vue'

// Nuxt SEO Configuration
useHead({
  title: 'KENCANA Ahlinya Baja Ringan | Tidak Tipu-Tipu | Distributor',
  meta: [
    { 
      name: 'description', 
      content: 'KENCANA adalah baja ringan berkualitas dari PT Kencana Maju Bersama. Terbuat dari bahan baku ber-SNI dan didistribusikan di seluruh Indonesia.' 
    },
    { name: 'keywords', content: 'baja ringan, kencana, atap spandek, genteng metal, truss kencana, reng baja ringan, hollow plafon, sni 8399, tidak tipu tipu' },
    { name: 'author', content: 'PT Kencana Maju Bersama' }
  ],
  link: [
    { rel: 'canonical', href: 'https://kencanaindonesia.co.id/' },
    { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
  ],
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@graph': [
          {
            '@type': 'Organization',
            '@id': 'https://kencanaindonesia.co.id/#organization',
            'name': 'PT Kencana Maju Bersama',
            'url': 'https://kencanaindonesia.co.id/',
            'logo': {
              '@type': 'ImageObject',
              'url': 'https://kencanaindonesia.co.id/images/logo/logo-kencana.webp'
            },
            'contactPoint': {
              '@type': 'ContactPoint',
              'telephone': '+62-31-9921-0000',
              'contactType': 'customer service',
              'areaServed': 'ID',
              'availableLanguage': ['Indonesian']
            },
            'address': {
              '@type': 'PostalAddress',
              'streetAddress': 'JL. Bubutan 127-135',
              'addressLocality': 'Surabaya',
              'addressRegion': 'Jawa Timur',
              'postalCode': '60174',
              'addressCountry': 'ID'
            }
          },
          {
            '@type': 'WebSite',
            '@id': 'https://kencanaindonesia.co.id/#website',
            'url': 'https://kencanaindonesia.co.id/',
            'name': 'Kencana Ahlinya Baja Ringan',
            'description': 'Ahlinya Baja Ringan Tidak Tipu-Tipu'
          }
        ]
      })
    }
  ]
})

useSeoMeta({
  title: 'KENCANA Ahlinya Baja Ringan | Tidak Tipu-Tipu | Distributor',
  ogTitle: 'KENCANA Ahlinya Baja Ringan',
  ogDescription: 'KENCANA adalah baja ringan berkualitas dari PT Kencana Maju Bersama. Terbuat dari bahan baku ber-SNI dan didistribusikan di seluruh Indonesia.',
  ogUrl: 'https://kencanaindonesia.co.id/',
  ogSiteName: 'Kencana Ahlinya Baja Ringan',
  ogLocale: 'id_ID',
  ogImage: '/images/logo/logo-kencana.webp',
  twitterCard: 'summary_large_image',
  twitterTitle: 'KENCANA Ahlinya Baja Ringan',
  twitterDescription: 'KENCANA adalah baja ringan berkualitas dari PT Kencana Maju Bersama. Terbuat dari bahan baku ber-SNI dan didistribusikan di seluruh Indonesia.'
})
</script>

<template>
  <div class="space-y-0 font-sans">
    <!-- 1. Hero Section Slider -->
    <HeroSection />

    <!-- 2. "Ahli dalam Produk Baja Ringan Sejak 1991" & "Kelebihan produk" -->
    <AboutSection />

    <!-- 3. "Produk unggulan kami" (11 Flagship Products) -->
    <ProductSection />

    <!-- 4. "Proyek Roll On Site", "Penghargaan produk", and "Apa Kata #SobatKENCANA" -->
    <ShowcaseSection />

    <!-- 5. "Simak Berita Terkini" (Expanding Content Cards) -->
    <ArticleSection />

    <!-- 6. "FAQs" (10 Questions Accordion + Certifications Banner) -->
    <FaqSection />
  </div>
</template>
