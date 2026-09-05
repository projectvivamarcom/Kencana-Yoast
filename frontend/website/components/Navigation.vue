<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { Menu, X, ChevronDown, Search, User, ExternalLink } from 'lucide-vue-next'

const route = useRoute()
const isScrolled = ref(false)
const isMobileMenuOpen = ref(false)
const isSearchOpen = ref(false)
const searchQuery = ref('')
const activeDropdown = ref<string | null>(null)

const handleScroll = () => {
  isScrolled.value = window.scrollY > 40
}

onMounted(() => {
  handleScroll()
  window.addEventListener('scroll', handleScroll, { passive: true })
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})

const toggleDropdown = (name: string) => {
  activeDropdown.value = activeDropdown.value === name ? null : name
}

const perusahaanItems = [
  { name: 'Profil Perusahaan', href: '/perusahaan' },
  { name: 'Sejarah Singkat', href: '/perusahaan#sejarah' },
  { name: 'Visi & Misi', href: '/perusahaan#visi-misi' },
  { name: 'Keunggulan Produk', href: '/perusahaan#keunggulan' },
  { name: 'CABANG Kencana', href: '/branches' },
  { name: 'Karir', href: '/karir' },
  { name: 'KENCANA Store', href: 'https://kencanaindonesia.co.id/kencana-store', external: true }
]

const produkCategories = [
  {
    title: 'Dekoratif/Arsitektural',
    items: [
      { name: 'Ceiling', href: '/products?cat=ceiling' },
      { name: 'Louvre', href: '/products?cat=louvre' },
      { name: 'Pintu', href: '/products?cat=pintu' },
      { name: 'Para - para', href: '/products?cat=para-para' }
    ]
  },
  {
    title: 'Roofing & Walling',
    items: [
      { name: 'Atap', href: '/products?cat=atap' },
      { name: 'Genteng', href: '/products?cat=genteng' },
      { name: 'Aksesoris', href: '/products?cat=aksesoris' },
      { name: 'Kerangka Green House', href: '/products?cat=greenhouse' },
      { name: 'Spring Clip', href: '/products?cat=springclip' }
    ]
  },
  {
    title: 'Struktural',
    items: [
      { name: 'Rangka Baja Ringan', href: '/products?cat=rangka-baja-ringan' },
      { name: 'Rangka Baja Berat', href: '/products?cat=rangka-baja-berat' },
      { name: 'Rangka Partisi', href: '/products?cat=rangka-partisi' },
      { name: 'Rangka Plafon', href: '/products?cat=rangka-plafon' },
      { name: 'Struktural Decking', href: '/products?cat=struktural-decking' },
      { name: 'Pipa Galvanis', href: '/products?cat=pipa-galvanis' }
    ]
  },
  {
    title: 'Pendukung',
    items: [
      { name: 'Baut', href: '/products?cat=baut' },
      { name: 'Talang', href: '/products?cat=talang' },
      { name: 'Insulasi', href: '/products?cat=insulasi' }
    ]
  }
]
const overlayPaths = ['/', '/perusahaan']
const isOverlayHero = computed(() => overlayPaths.includes(route.path))
const isTransparent = computed(() => isOverlayHero.value && !isScrolled.value && !isMobileMenuOpen.value)

// Search Results Quick Data
const searchableItems = [
  { name: 'Atap Baja Ringan Spandek', type: 'Produk', link: '/products?cat=atap' },
  { name: 'Genteng Metal Pasir & Polos', type: 'Produk', link: '/products?cat=genteng' },
  { name: 'Truss & Reng Baja Ringan SNI', type: 'Produk', link: '/products?cat=rangka-baja-ringan' },
  { name: 'Hollow Plafon & Furing', type: 'Produk', link: '/products?cat=rangka-plafon' },
  { name: 'Kalkulator Baja Ringan Kencana', type: 'Kalkulator', link: '/kalkulator-kencana' },
  { name: 'Lowongan Kerja PT Kencana Maju Bersama', type: 'Karir', link: '/karir' },
  { name: 'Daftar 50+ Cabang Kencana di Indonesia', type: 'Cabang', link: '/branches' },
  { name: 'Profil PT Kencana Maju Bersama', type: 'Tentang Kami', link: '/about' }
]

const searchResults = computed(() => {
  if (!searchQuery.value.trim()) return []
  const q = searchQuery.value.toLowerCase()
  return searchableItems.filter(item => item.name.toLowerCase().includes(q) || item.type.toLowerCase().includes(q))
})
</script>

<template>
  <header 
    class="fixed top-0 left-0 right-0 z-50 transition-all duration-300 font-sans"
    :class="[
      isTransparent 
        ? 'bg-gradient-to-b from-black/70 via-black/30 to-transparent text-white' 
        : 'bg-white/95 backdrop-blur-md shadow-md text-slate-900 border-b border-slate-100'
    ]"
  >
    <div class="max-w-[1340px] mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between h-20 sm:h-22">
        <!-- Brand Logo (White Logo when at top, Red Logo when scrolled) -->
        <NuxtLink to="/" class="flex items-center transition-transform hover:opacity-95">
          <img 
            v-if="isTransparent"
            src="/assets/img/Logo-Kencana-Ahlinya-Baja-Ringan-putih.webp" 
            alt="Kencana Ahlinya Baja Ringan" 
            class="h-8 sm:h-10 lg:h-12 w-auto object-contain transition-all duration-300"
          />
          <img 
            v-else
            src="/assets/img/Logo-Kencana-Ahlinya-Baja-Ringan.webp" 
            alt="Kencana Ahlinya Baja Ringan" 
            class="h-8 sm:h-10 lg:h-12 w-auto object-contain transition-all duration-300"
          />
        </NuxtLink>

        <!-- Desktop Menu Links (7 Menu Sesuai Situs Resmi: Produk, Perusahaan, Katalog, Berita, Proyek, Kalkulator, Karir) -->
        <nav class="hidden lg:flex items-center space-x-6 xl:space-x-7 text-[15px] font-medium">
          <!-- Produk Mega Menu -->
          <div class="relative group" @mouseenter="activeDropdown = 'produk'" @mouseleave="activeDropdown = null">
            <button 
              type="button"
              class="inline-flex items-center space-x-1 py-2 transition-colors"
              :class="isTransparent ? 'text-white hover:text-red-400' : 'text-slate-900 hover:text-kencana-red'"
            >
              <span>Produk</span>
              <ChevronDown 
                class="w-3.5 h-3.5 transition-transform group-hover:rotate-180" 
                :class="isTransparent ? 'text-white/80' : 'text-slate-400'"
              />
            </button>

            <!-- Mega Menu Dropdown -->
            <div 
              v-show="activeDropdown === 'produk'"
              class="absolute -left-32 top-full pt-2 w-[840px] animate-fadeIn"
            >
              <div class="bg-white rounded-2xl shadow-2xl border border-slate-100 p-6 text-slate-800">
                <div class="grid grid-cols-4 gap-6">
                  <div v-for="cat in produkCategories" :key="cat.title" class="space-y-3">
                    <div class="text-xs font-extrabold uppercase tracking-wider text-slate-900 border-b border-red-500 pb-1.5 inline-block">
                      {{ cat.title }}
                    </div>
                    <ul class="space-y-1.5 text-xs text-slate-600">
                      <li v-for="item in cat.items" :key="item.name">
                        <NuxtLink :to="item.href" class="hover:text-kencana-red transition-colors block py-0.5">
                          {{ item.name }}
                        </NuxtLink>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Perusahaan Dropdown -->
          <div class="relative group" @mouseenter="activeDropdown = 'perusahaan'" @mouseleave="activeDropdown = null">
            <button 
              type="button"
              class="inline-flex items-center space-x-1 py-2 transition-colors font-medium"
              :class="[
                route.path.startsWith('/perusahaan')
                  ? (isTransparent ? 'text-red-500 font-semibold' : 'text-kencana-red font-semibold')
                  : (isTransparent ? 'text-white hover:text-red-400' : 'text-slate-900 hover:text-kencana-red')
              ]"
            >
              <span>Perusahaan</span>
              <ChevronDown 
                class="w-3.5 h-3.5 transition-transform group-hover:rotate-180" 
                :class="route.path.startsWith('/perusahaan') ? (isTransparent ? 'text-red-500' : 'text-kencana-red') : (isTransparent ? 'text-white/80' : 'text-slate-400')"
              />
            </button>

            <div 
              v-show="activeDropdown === 'perusahaan'"
              class="absolute left-0 top-full pt-2 w-56 animate-fadeIn"
            >
              <div class="bg-white rounded-xl shadow-xl border border-slate-100 py-2 divide-y divide-slate-50 text-slate-800">
                <div class="py-1">
                  <component
                    :is="item.external ? 'a' : 'NuxtLink'"
                    v-for="item in perusahaanItems"
                    :key="item.name"
                    :href="item.external ? item.href : undefined"
                    :to="!item.external ? item.href : undefined"
                    :target="item.external ? '_blank' : undefined"
                    class="block px-4 py-2 text-xs font-semibold text-slate-700 hover:text-kencana-red hover:bg-slate-50 transition-colors"
                  >
                    {{ item.name }}
                  </component>
                </div>
              </div>
            </div>
          </div>

          <!-- Katalog Link (External shortlink from WP) -->
          <a 
            href="https://shorturl.at/TcW29" 
            target="_blank"
            rel="noopener noreferrer"
            class="py-2 transition-colors"
            :class="isTransparent ? 'text-white hover:text-red-400' : 'text-slate-900 hover:text-kencana-red'"
          >
            Katalog
          </a>

          <!-- Berita Link -->
          <NuxtLink 
            to="/articles" 
            class="py-2 transition-colors"
            :class="isTransparent ? 'text-white hover:text-red-400' : 'text-slate-900 hover:text-kencana-red'"
            active-class="!text-kencana-red"
          >
            Berita
          </NuxtLink>

          <!-- Proyek Link -->
          <NuxtLink 
            to="/about#proyek" 
            class="py-2 transition-colors"
            :class="isTransparent ? 'text-white hover:text-red-400' : 'text-slate-900 hover:text-kencana-red'"
            active-class="!text-kencana-red"
          >
            Proyek
          </NuxtLink>

          <!-- Kalkulator Link -->
          <NuxtLink 
            to="/kalkulator-kencana" 
            class="py-2 transition-colors"
            :class="isTransparent ? 'text-white hover:text-red-400' : 'text-slate-900 hover:text-kencana-red'"
            active-class="!text-kencana-red"
          >
            Kalkulator
          </NuxtLink>

          <!-- Karir Link -->
          <NuxtLink 
            to="/karir" 
            class="py-2 transition-colors"
            :class="isTransparent ? 'text-white hover:text-red-400' : 'text-slate-900 hover:text-kencana-red'"
            active-class="!text-kencana-red"
          >
            Karir
          </NuxtLink>
        </nav>

        <!-- Right Side: Search Icon & User Icon -->
        <div class="flex items-center space-x-2 sm:space-x-3">
          <!-- Search Icon Button -->
          <button 
            type="button"
            @click="isSearchOpen = true"
            class="p-2 rounded-full transition-colors"
            :class="isTransparent ? 'text-white hover:text-red-400 hover:bg-white/10' : 'text-slate-800 hover:text-kencana-red hover:bg-slate-100'"
            aria-label="Cari produk atau informasi"
          >
            <Search class="w-5 h-5" />
          </button>

          <!-- User / Admin Login Icon -->
          <a 
            href="http://localhost:5173"
            target="_blank"
            class="p-2 rounded-full transition-colors"
            :class="isTransparent ? 'text-white hover:text-red-400 hover:bg-white/10' : 'text-slate-800 hover:text-kencana-red hover:bg-slate-100'"
            title="Kencana Portal"
            aria-label="Login User"
          >
            <User class="w-5 h-5" />
          </a>

          <!-- Mobile Hamburger Menu Button -->
          <button 
            type="button"
            @click="isMobileMenuOpen = !isMobileMenuOpen"
            class="p-2 lg:hidden focus:outline-none transition-colors"
            :class="isTransparent ? 'text-white hover:text-red-400' : 'text-slate-900 hover:text-kencana-red'"
            aria-label="Buka Menu"
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
      class="lg:hidden bg-white text-slate-900 border-t border-slate-100 px-6 py-5 space-y-3 shadow-2xl max-h-[85vh] overflow-y-auto animate-fadeIn"
    >
      <NuxtLink to="/" @click="isMobileMenuOpen = false" class="block py-2.5 text-sm font-bold text-slate-900 border-b border-slate-50 min-h-[44px] flex items-center">
        Beranda
      </NuxtLink>

      <!-- Mobile Produk Accordion -->
      <div class="py-1 border-b border-slate-50">
        <button 
          type="button"
          @click="toggleDropdown('mobile-produk')"
          class="flex items-center justify-between w-full py-2.5 text-sm font-bold text-slate-900 min-h-[44px]"
        >
          <span>Produk</span>
          <ChevronDown class="w-4 h-4 transition-transform" :class="activeDropdown === 'mobile-produk' ? 'rotate-180' : ''" />
        </button>
        <div v-show="activeDropdown === 'mobile-produk'" class="pl-4 py-2 space-y-3 text-xs">
          <div v-for="cat in produkCategories" :key="cat.title" class="space-y-1">
            <div class="font-bold text-kencana-red">{{ cat.title }}</div>
            <div class="pl-2 space-y-1">
              <NuxtLink 
                v-for="item in cat.items" 
                :key="item.name" 
                :to="item.href"
                @click="isMobileMenuOpen = false"
                class="block py-1.5 text-slate-600 hover:text-kencana-red min-h-[36px] flex items-center"
              >
                {{ item.name }}
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>

      <!-- Mobile Perusahaan Accordion -->
      <div class="py-1 border-b border-slate-50">
        <button 
          type="button"
          @click="toggleDropdown('mobile-perusahaan')"
          class="flex items-center justify-between w-full py-2.5 text-sm font-bold text-slate-900 min-h-[44px]"
        >
          <span>Perusahaan</span>
          <ChevronDown class="w-4 h-4 transition-transform" :class="activeDropdown === 'mobile-perusahaan' ? 'rotate-180' : ''" />
        </button>
        <div v-show="activeDropdown === 'mobile-perusahaan'" class="pl-4 py-1 space-y-1 text-xs">
          <NuxtLink 
            v-for="item in perusahaanItems" 
            :key="item.name" 
            :to="item.href"
            @click="isMobileMenuOpen = false"
            class="block py-1.5 text-slate-600 hover:text-kencana-red min-h-[36px] flex items-center"
          >
            {{ item.name }}
          </NuxtLink>
        </div>
      </div>

      <a href="https://shorturl.at/TcW29" target="_blank" class="block py-2.5 text-sm font-bold text-slate-900 border-b border-slate-50 min-h-[44px] flex items-center">
        Katalog
      </a>
      <NuxtLink to="/articles" @click="isMobileMenuOpen = false" class="block py-2.5 text-sm font-bold text-slate-900 border-b border-slate-50 min-h-[44px] flex items-center">
        Berita
      </NuxtLink>
      <NuxtLink to="/about#proyek" @click="isMobileMenuOpen = false" class="block py-2.5 text-sm font-bold text-slate-900 border-b border-slate-50 min-h-[44px] flex items-center">
        Proyek
      </NuxtLink>
      <NuxtLink to="/kalkulator-kencana" @click="isMobileMenuOpen = false" class="block py-2.5 text-sm font-bold text-slate-900 border-b border-slate-50 min-h-[44px] flex items-center">
        Kalkulator
      </NuxtLink>
      <NuxtLink to="/karir" @click="isMobileMenuOpen = false" class="block py-2.5 text-sm font-bold text-slate-900 border-b border-slate-50 min-h-[44px] flex items-center">
        Karir
      </NuxtLink>
      <NuxtLink to="/branches" @click="isMobileMenuOpen = false" class="block py-2.5 text-sm font-bold text-slate-900 border-b border-slate-50 min-h-[44px] flex items-center">
        Cabang
      </NuxtLink>
      <NuxtLink to="/contact" @click="isMobileMenuOpen = false" class="block py-2.5 text-sm font-bold text-slate-900 min-h-[44px] flex items-center">
        Kontak
      </NuxtLink>

      <div class="pt-2">
        <a 
          href="https://kencanaindonesia.co.id/kencana-store" 
          target="_blank"
          class="block w-full py-2.5 text-center rounded-lg bg-kencana-red text-white font-bold text-xs shadow-md"
        >
          KENCANA Store
        </a>
      </div>
    </div>

    <!-- Search Modal Popup (Matches WordPress #ekit_modal-popup) -->
    <div 
      v-if="isSearchOpen"
      class="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-start justify-center pt-24 px-4 animate-fadeIn"
      @click.self="isSearchOpen = false"
    >
      <div class="bg-white rounded-2xl w-full max-w-2xl shadow-2xl overflow-hidden border border-slate-100">
        <!-- Search Input Bar -->
        <div class="p-4 sm:p-6 border-b border-slate-100 flex items-center space-x-3">
          <Search class="w-5 h-5 text-slate-400 shrink-0" />
          <input 
            v-model="searchQuery"
            type="text"
            autofocus
            placeholder="Cari produk, artikel, cabang, atau dokumen..."
            class="flex-1 text-slate-900 text-sm sm:text-base focus:outline-none"
          />
          <button 
            type="button" 
            @click="isSearchOpen = false" 
            class="p-1 rounded-full text-slate-400 hover:text-slate-800"
          >
            <X class="w-5 h-5" />
          </button>
        </div>

        <!-- Search Results List -->
        <div class="max-h-80 overflow-y-auto p-4 sm:p-6">
          <div v-if="searchResults.length > 0" class="space-y-2">
            <NuxtLink 
              v-for="item in searchResults" 
              :key="item.name"
              :to="item.link"
              @click="isSearchOpen = false; searchQuery = ''"
              class="flex items-center justify-between p-3 rounded-xl hover:bg-slate-50 transition-colors group"
            >
              <span class="text-sm font-semibold text-slate-800 group-hover:text-kencana-red transition-colors">
                {{ item.name }}
              </span>
              <span class="text-[11px] font-bold uppercase tracking-wider text-slate-400 bg-slate-100 px-2 py-0.5 rounded">
                {{ item.type }}
              </span>
            </NuxtLink>
          </div>

          <div v-else-if="searchQuery.trim()" class="text-center py-8 text-xs text-slate-400">
            Tidak ditemukan hasil untuk "{{ searchQuery }}"
          </div>

          <div v-else class="space-y-3">
            <p class="text-xs font-bold uppercase tracking-wider text-slate-400">Paling Sering Dicari:</p>
            <div class="flex flex-wrap gap-2">
              <NuxtLink 
                v-for="tag in ['Kalkulator Baja Ringan', 'Atap Spandek', 'Genteng Metal', 'Karir', 'Cabang', 'MaxiCAD']"
                :key="tag"
                :to="tag === 'Karir' ? '/karir' : tag === 'Kalkulator Baja Ringan' ? '/kalkulator-kencana' : '/products'"
                @click="isSearchOpen = false"
                class="px-3 py-1.5 rounded-lg bg-slate-100 hover:bg-red-50 hover:text-kencana-red text-xs font-semibold text-slate-700 transition-colors"
              >
                {{ tag }}
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>
