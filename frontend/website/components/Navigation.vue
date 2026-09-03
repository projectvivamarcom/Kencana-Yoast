<script setup lang="ts">
import { ref } from 'vue'
import { Menu, X, ChevronDown, MessageCircle, Building2, Layers, ShieldCheck, Newspaper, MapPin, PhoneCall } from 'lucide-vue-next'

const isMobileMenuOpen = ref(false)
const isProductDropdownOpen = ref(false)
const isCompanyDropdownOpen = ref(false)

const productCategories = [
  { name: 'Atap Baja Ringan (Spandek)', desc: 'Gelombang kokoh & anti karat', href: '/products?cat=atap' },
  { name: 'Genteng Metal & Pasir', desc: 'Estetis, ringan, dan kedap suara', href: '/products?cat=genteng' },
  { name: 'Rangka Atap (Truss & Reng)', desc: 'Baja G550 berstandar SNI presisi', href: '/products?cat=rangka-atap' },
  { name: 'Rangka Plafon (Hollow)', desc: 'Plafon gypsum & PVC tahan api', href: '/products?cat=rangka-plafon' },
  { name: 'Struktural Decking', desc: 'Floor deck komposit hemat beton', href: '/products?cat=struktural-decking' },
  { name: 'Produk Pendukung & Aksesoris', desc: 'Baut roofing, talang, dan insulasi', href: '/products?cat=pendukung' }
]

const companyItems = [
  { name: 'Tentang PT Kencana', desc: 'Dedikasi manufaktur sejak 1991', href: '/about' },
  { name: 'Standar Mutu & SNI', desc: 'Sertifikasi SNI 8399 & ISO 9001', href: '/about#standar-sni' },
  { name: 'Inovasi Roll On Site', desc: 'Pencetakan atap langsung di proyek', href: '/#roll-on-site' }
]
</script>

<template>
  <header class="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200/80 shadow-sm transition-all">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between h-20">
        <!-- Logo -->
        <NuxtLink to="/" class="flex items-center space-x-3 group">
          <img 
            src="/images/logo/logo-kencana.webp" 
            alt="Kencana Ahlinya Baja Ringan" 
            class="h-10 sm:h-12 w-auto object-contain transition-transform group-hover:scale-105"
          />
        </NuxtLink>

        <!-- Desktop Navigation Links -->
        <nav class="hidden lg:flex items-center space-x-1">
          <NuxtLink 
            to="/" 
            class="px-3.5 py-2 rounded-lg text-sm font-semibold text-slate-700 hover:text-kencana-red hover:bg-red-50/50 transition-colors"
            active-class="!text-kencana-red bg-red-50/80"
          >
            Beranda
          </NuxtLink>

          <!-- Dropdown Perusahaan -->
          <div class="relative group" @mouseenter="isCompanyDropdownOpen = true" @mouseleave="isCompanyDropdownOpen = false">
            <button 
              type="button"
              class="inline-flex items-center space-x-1 px-3.5 py-2 rounded-lg text-sm font-semibold text-slate-700 hover:text-kencana-red hover:bg-red-50/50 transition-colors"
            >
              <span>Perusahaan</span>
              <ChevronDown class="w-4 h-4 text-slate-400 group-hover:text-kencana-red transition-transform group-hover:rotate-180" />
            </button>

            <!-- Dropdown Menu -->
            <div 
              v-show="isCompanyDropdownOpen"
              class="absolute left-0 top-full pt-2 w-72 transition-all animate-fadeIn"
            >
              <div class="bg-white rounded-2xl shadow-xl border border-slate-100 p-2 space-y-1">
                <NuxtLink 
                  v-for="item in companyItems" 
                  :key="item.name"
                  :to="item.href"
                  class="block p-3 rounded-xl hover:bg-slate-50 transition-colors"
                >
                  <div class="text-sm font-bold text-slate-900 hover:text-kencana-red">{{ item.name }}</div>
                  <div class="text-xs text-slate-500 mt-0.5">{{ item.desc }}</div>
                </NuxtLink>
              </div>
            </div>
          </div>

          <!-- Dropdown Produk -->
          <div class="relative group" @mouseenter="isProductDropdownOpen = true" @mouseleave="isProductDropdownOpen = false">
            <button 
              type="button"
              class="inline-flex items-center space-x-1 px-3.5 py-2 rounded-lg text-sm font-semibold text-slate-700 hover:text-kencana-red hover:bg-red-50/50 transition-colors"
            >
              <span>Produk</span>
              <ChevronDown class="w-4 h-4 text-slate-400 group-hover:text-kencana-red transition-transform group-hover:rotate-180" />
            </button>

            <!-- Mega Dropdown Menu -->
            <div 
              v-show="isProductDropdownOpen"
              class="absolute -left-20 top-full pt-2 w-[520px] transition-all animate-fadeIn"
            >
              <div class="bg-white rounded-2xl shadow-2xl border border-slate-100 p-4">
                <div class="grid grid-cols-2 gap-2">
                  <NuxtLink 
                    v-for="cat in productCategories" 
                    :key="cat.name"
                    :to="cat.href"
                    class="p-3 rounded-xl hover:bg-slate-50 transition-colors group/item"
                  >
                    <div class="text-sm font-bold text-slate-900 group-hover/item:text-kencana-red transition-colors">
                      {{ cat.name }}
                    </div>
                    <div class="text-xs text-slate-500 mt-0.5">
                      {{ cat.desc }}
                    </div>
                  </NuxtLink>
                </div>
                <div class="mt-3 pt-3 border-t border-slate-100 flex items-center justify-between px-2 text-xs">
                  <span class="text-slate-500 font-medium">Semua produk bersertifikat SNI &amp; TKDN</span>
                  <NuxtLink to="/products" class="font-bold text-kencana-red hover:underline">
                    Lihat Semua Katalog &rarr;
                  </NuxtLink>
                </div>
              </div>
            </div>
          </div>

          <NuxtLink 
            to="/#roll-on-site" 
            class="px-3.5 py-2 rounded-lg text-sm font-semibold text-slate-700 hover:text-kencana-red hover:bg-red-50/50 transition-colors"
          >
            Proyek
          </NuxtLink>

          <NuxtLink 
            to="/articles" 
            class="px-3.5 py-2 rounded-lg text-sm font-semibold text-slate-700 hover:text-kencana-red hover:bg-red-50/50 transition-colors"
            active-class="!text-kencana-red bg-red-50/80"
          >
            Berita &amp; Acara
          </NuxtLink>

          <NuxtLink 
            to="/branches" 
            class="px-3.5 py-2 rounded-lg text-sm font-semibold text-slate-700 hover:text-kencana-red hover:bg-red-50/50 transition-colors"
            active-class="!text-kencana-red bg-red-50/80"
          >
            Cabang &amp; Depo
          </NuxtLink>

          <NuxtLink 
            to="/contact" 
            class="px-3.5 py-2 rounded-lg text-sm font-semibold text-slate-700 hover:text-kencana-red hover:bg-red-50/50 transition-colors"
            active-class="!text-kencana-red bg-red-50/80"
          >
            Kontak
          </NuxtLink>
        </nav>

        <!-- Right CTA Button -->
        <div class="hidden sm:flex items-center space-x-3">
          <a 
            href="https://wa.me/6281131158000?text=Halo%20Kencana,%20saya%20ingin%20konsultasi%20produk%20baja%20ringan"
            target="_blank"
            rel="noopener noreferrer"
            class="inline-flex items-center space-x-2 px-5 py-2.5 rounded-xl bg-kencana-red hover:bg-kencana-redDark text-white font-bold text-sm shadow-md hover:shadow-lg transition-all transform active:scale-95"
          >
            <MessageCircle class="w-4 h-4" />
            <span>Halo KENCANA</span>
          </a>
        </div>

        <!-- Mobile Menu Hamburger Button -->
        <div class="flex lg:hidden items-center space-x-2">
          <a 
            href="https://wa.me/6281131158000"
            class="p-2 rounded-xl bg-red-50 text-kencana-red sm:hidden"
            aria-label="WhatsApp"
          >
            <MessageCircle class="w-5 h-5" />
          </a>
          <button 
            type="button"
            @click="isMobileMenuOpen = !isMobileMenuOpen"
            class="p-2.5 rounded-xl text-slate-700 hover:text-kencana-red hover:bg-slate-100 transition-colors"
            aria-label="Toggle Navigation Menu"
          >
            <Menu v-if="!isMobileMenuOpen" class="w-6 h-6" />
            <X v-else class="w-6 h-6 text-kencana-red" />
          </button>
        </div>
      </div>
    </div>

    <!-- Mobile Drawer Menu -->
    <div 
      v-show="isMobileMenuOpen" 
      class="lg:hidden border-t border-slate-200 bg-white px-4 pt-3 pb-6 space-y-3 shadow-xl max-h-[85vh] overflow-y-auto"
    >
      <NuxtLink 
        to="/" 
        @click="isMobileMenuOpen = false"
        class="block px-3 py-2 rounded-lg text-base font-semibold text-slate-800 hover:bg-red-50 hover:text-kencana-red"
      >
        Beranda
      </NuxtLink>

      <NuxtLink 
        to="/about" 
        @click="isMobileMenuOpen = false"
        class="block px-3 py-2 rounded-lg text-base font-semibold text-slate-800 hover:bg-red-50 hover:text-kencana-red"
      >
        Perusahaan Kami (Sejak 1991)
      </NuxtLink>

      <div class="px-3 py-2">
        <div class="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">Produk Kencana SNI</div>
        <div class="space-y-1 pl-2 border-l-2 border-kencana-red/30">
          <NuxtLink 
            v-for="cat in productCategories" 
            :key="cat.name"
            :to="cat.href"
            @click="isMobileMenuOpen = false"
            class="block py-1.5 text-sm font-medium text-slate-700 hover:text-kencana-red"
          >
            {{ cat.name }}
          </NuxtLink>
        </div>
      </div>

      <NuxtLink 
        to="/#roll-on-site" 
        @click="isMobileMenuOpen = false"
        class="block px-3 py-2 rounded-lg text-base font-semibold text-slate-800 hover:bg-red-50 hover:text-kencana-red"
      >
        Proyek Roll On Site
      </NuxtLink>

      <NuxtLink 
        to="/articles" 
        @click="isMobileMenuOpen = false"
        class="block px-3 py-2 rounded-lg text-base font-semibold text-slate-800 hover:bg-red-50 hover:text-kencana-red"
      >
        Berita &amp; Acara
      </NuxtLink>

      <NuxtLink 
        to="/branches" 
        @click="isMobileMenuOpen = false"
        class="block px-3 py-2 rounded-lg text-base font-semibold text-slate-800 hover:bg-red-50 hover:text-kencana-red"
      >
        Cabang &amp; Depo (50+ Cabang)
      </NuxtLink>

      <NuxtLink 
        to="/contact" 
        @click="isMobileMenuOpen = false"
        class="block px-3 py-2 rounded-lg text-base font-semibold text-slate-800 hover:bg-red-50 hover:text-kencana-red"
      >
        Hubungi Kami
      </NuxtLink>

      <div class="pt-4 border-t border-slate-100">
        <a 
          href="https://wa.me/6281131158000"
          target="_blank"
          class="w-full flex items-center justify-center space-x-2 py-3 rounded-xl bg-kencana-red text-white font-bold text-sm shadow-md"
        >
          <MessageCircle class="w-4 h-4" />
          <span>Chat WhatsApp Halo KENCANA</span>
        </a>
      </div>
    </div>
  </header>
</template>
