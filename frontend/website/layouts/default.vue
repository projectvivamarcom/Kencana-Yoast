<script setup lang="ts">
import { computed } from 'vue'
import Navigation from '~/components/Navigation.vue'
import Footer from '~/components/Footer.vue'

const route = useRoute()
const isOverlayPage = computed(() => route.path === '/')
</script>

<template>
  <div class="min-h-screen flex flex-col bg-white text-slate-800 font-sans antialiased selection:bg-red-600 selection:text-white">
    <Navigation />
    <main class="flex-grow" :class="{ 'pt-20 sm:pt-22': !isOverlayPage }">
      <slot />
    </main>
    <Footer />
  </div>
</template>
