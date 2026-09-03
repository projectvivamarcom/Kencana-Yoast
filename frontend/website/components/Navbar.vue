<script setup lang="ts">
import { ref } from 'vue'
import { Menu, X, ShieldCheck, PhoneCall, ExternalLink, ChevronDown } from 'lucide-vue-next'

const isMobileOpen = ref(false)

const navLinks = [
  { name: 'Beranda', path: '/' },
  { name: 'Tentang Kami', path: '/about' },
  { name: 'Produk SNI', path: '/products' },
  { name: 'Artikel & Edukasi', path: '/articles' },
  { name: 'Karir', path: '/careers' },
  { name: 'Cabang & Depo', path: '/branches' },
  { name: 'Kontak', path: '/contact' },
]
</script>

<template>
  <header class="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200/80 shadow-sm">
    <!-- Top info bar -->
    <div class="bg-slate-900 text-slate-300 text-[11px] py-1 px-4 hidden md:block">
      <div class="max-w-7xl mx-auto flex items-center justify-between">
        <div class="flex items-center space-x-4">
          <span class="flex items-center space-x-1">
            <ShieldCheck class="w-3.5 h-3.5 text-blue-400" />
            <span>Produsen Baja Ringan Berstandar SNI 4096:2007 Terpercaya Indonesia</span>
          </span>
        </div>
        <div class="flex items-center space-x-4">
          <a href="tel:0800100200" class="hover:text-white flex items-center space-x-1">
            <PhoneCall class="w-3 h-3 text-amber-400" />
            <span>Hotline Bebas Pulsa: 0800-100-200</span>
          </a>
          <span class="text-slate-600">|</span>
          <a href="http://localhost:5173" target="_blank" class="hover:text-blue-300 flex items-center space-x-1 text-slate-300">
            <span>Kencana Admin</span>
            <ExternalLink class="w-2.5 h-2.5 opacity-60" />
          </a>
        </div>
      </div>
    </div>

    <!-- Main Navigation Bar -->
    <nav class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
      <!-- Brand Logo -->
      <NuxtLink to="/" class="flex items-center space-x-3 group">
        <div class="w-9 h-9 rounded-lg bg-gradient-to-br from-blue-700 to-indigo-900 flex items-center justify-center text-white font-bold text-lg shadow-sm group-hover:scale-105 transition-transform">
          K
        </div>
        <div class="flex flex-col">
          <span class="text-lg font-bold tracking-tight text-slate-900 leading-tight">KENCANA</span>
          <span class="text-[10px] font-semibold text-blue-700 tracking-wider uppercase leading-none">Baja Ringan &amp; Properti</span>
        </div>
      </NuxtLink>

      <!-- Desktop Links -->
      <div class="hidden lg:flex items-center space-x-1 text-sm font-medium text-slate-700">
        <NuxtLink 
          v-for="link in navLinks" 
          :key="link.path"
          :to="link.path"
          class="px-3 py-2 rounded-lg hover:text-blue-600 hover:bg-blue-50/50 transition-colors"
          active-class="text-blue-700 font-semibold bg-blue-50/80"
        >
          {{ link.name }}
        </NuxtLink>
      </div>

      <!-- Action Button -->
      <div class="hidden sm:flex items-center space-x-3">
        <NuxtLink 
          to="/contact" 
          class="px-4 py-2 text-xs font-semibold text-white bg-blue-700 hover:bg-blue-800 rounded-lg shadow-sm hover:shadow transition-all"
        >
          Konsultasi Gratis
        </NuxtLink>
      </div>

      <!-- Mobile Menu Button -->
      <div class="lg:hidden flex items-center">
        <button 
          @click="isMobileOpen = !isMobileOpen"
          class="p-2 text-slate-600 hover:text-slate-900 focus:outline-none"
          aria-label="Toggle Navigation"
        >
          <X v-if="isMobileOpen" class="w-6 h-6" />
          <Menu v-else class="w-6 h-6" />
        </button>
      </div>
    </nav>

    <!-- Mobile Navigation Drawer -->
    <div 
      v-if="isMobileOpen"
      class="lg:hidden border-t border-slate-200 bg-white px-4 pt-2 pb-6 space-y-2 shadow-lg"
    >
      <NuxtLink 
        v-for="link in navLinks" 
        :key="link.path"
        :to="link.path"
        @click="isMobileOpen = false"
        class="block px-3 py-2 rounded-md text-sm font-medium text-slate-700 hover:text-blue-600 hover:bg-slate-50"
        active-class="text-blue-700 font-semibold bg-blue-50"
      >
        {{ link.name }}
      </NuxtLink>

      <div class="pt-4 border-t border-slate-100 flex flex-col space-y-2">
        <NuxtLink 
          to="/contact"
          @click="isMobileOpen = false"
          class="w-full text-center px-4 py-2.5 text-xs font-semibold text-white bg-blue-700 rounded-lg"
        >
          Hubungi Tim Sales
        </NuxtLink>
      </div>
    </div>
  </header>
</template>
