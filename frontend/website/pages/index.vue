<script setup lang="ts">
import HeroSection from '~/components/HeroSection.vue'
import ProductSection from '~/components/ProductSection.vue'
import AboutSection from '~/components/AboutSection.vue'
import ArticleSection from '~/components/ArticleSection.vue'
import FaqSection from '~/components/FaqSection.vue'
import CTASection from '~/components/CTASection.vue'

// Nuxt SEO Configuration
useHead({
  title: 'KENCANA Ahlinya Baja Ringan | Tidak Tipu-Tipu | Distributor Resmi',
  meta: [
    { 
      name: 'description', 
      content: 'KENCANA adalah produsen baja ringan berkualitas berstandar SNI dari PT Kencana Maju Bersama. Terbukti kokoh, presisi, anti rayap, dan didistribusikan ke seluruh Indonesia.' 
    },
    { name: 'keywords', content: 'baja ringan, kencana, atap spandek, genteng metal, truss kencana, reng baja ringan, hollow plafon, sni 8399, tidak tipu tipu' },
    { name: 'author', content: 'PT Kencana Maju Bersama' }
  ],
  link: [
    { rel: 'canonical', href: 'https://kencanaindonesia.co.id/' }
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
  title: 'KENCANA Ahlinya Baja Ringan | Tidak Tipu-Tipu | Distributor Resmi',
  ogTitle: 'KENCANA Ahlinya Baja Ringan | Tidak Tipu-Tipu',
  ogDescription: 'KENCANA adalah produsen baja ringan berkualitas dari PT Kencana Maju Bersama. Terbuat dari bahan baku ber-SNI dan didistribusikan di seluruh Indonesia.',
  ogUrl: 'https://kencanaindonesia.co.id/',
  ogSiteName: 'Kencana Ahlinya Baja Ringan',
  ogLocale: 'id_ID',
  ogImage: '/images/logo/logo-kencana.webp',
  twitterCard: 'summary_large_image',
  twitterTitle: 'KENCANA Ahlinya Baja Ringan',
  twitterDescription: 'KENCANA adalah produsen baja ringan berkualitas dari PT Kencana Maju Bersama. Terbuat dari bahan baku ber-SNI murni.'
})
</script>

<template>
  <div class="space-y-0">
    <!-- 1. Hero Banner with Stats & CTA -->
    <HeroSection />

    <!-- 2. Flagship Products with Filter Tabs -->
    <ProductSection />

    <!-- 3. About Kencana: Sejak 1991, 4 Kelebihan, and Roll On Site -->
    <AboutSection />

    <!-- 4. News, CSR & Industry Exhibitions -->
    <ArticleSection />

    <!-- 5. Frequently Asked Questions (Accordion) -->
    <FaqSection />

    <!-- 6. Bottom Consultation & Newsletter CTA -->
    <CTASection />
  </div>
</template>
