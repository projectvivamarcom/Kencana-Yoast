<script setup lang="ts">
import Header from '~/components/Header.vue'
import Navigation from '~/components/Navigation.vue'
import Footer from '~/components/Footer.vue'
</script>

<template>
  <div class="min-h-screen flex flex-col bg-white text-slate-800 font-sans antialiased selection:bg-kencana-red selection:text-white">
    <Header />
    <Navigation />
    <main class="flex-grow">
      <slot />
    </main>
    <Footer />
  </div>
</template>
