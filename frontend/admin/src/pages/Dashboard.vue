<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { 
  FileText, 
  BarChart2, 
  FolderTree, 
  Tag as TagIcon, 
  CheckCircle2, 
  AlertTriangle, 
  XCircle, 
  ArrowRight, 
  Plus, 
  ExternalLink, 
  ShieldCheck, 
  Package,
  Briefcase,
  Users,
  MapPin,
  HelpCircle,
  FolderDown,
  Sparkles,
  Shield,
  Layers,
  Clock
} from 'lucide-vue-next'
import { usePostStore } from '../stores/postStore'
import { useAuthStore } from '../stores/authStore'
import { fetchDashboardStatsApi } from '../services/api'
import ScoreBadge from '../components/seo/ScoreBadge.vue'

const router = useRouter()
const postStore = usePostStore()
const authStore = useAuthStore()

const serverStats = ref<any>(null)
const isLoadingStats = ref(false)

// Quick Draft state
const quickDraftTitle = ref('')
const quickDraftContent = ref('')
const draftNotice = ref<string | null>(null)

const saveQuickDraft = () => {
  if (!quickDraftTitle.value.trim()) return

  postStore.addPost({
    title: quickDraftTitle.value,
    slug: quickDraftTitle.value.toLowerCase().replace(/\s+/g, '-'),
    author: authStore.user?.name || 'Admin Kencana',
    categories: ['Properti'],
    tags: [],
    seoScore: 50,
    readabilityScore: 60,
    seoTitle: quickDraftTitle.value,
    metaDescription: '',
    focusKeyword: '',
    canonicalUrl: '',
    robotsMeta: 'index, follow',
    indexStatus: 'Indexed',
    status: 'Draft',
    content: quickDraftContent.value
  })

  quickDraftTitle.value = ''
  quickDraftContent.value = ''
  draftNotice.value = 'Draft berhasil disimpan ke sistem!'
  setTimeout(() => {
    draftNotice.value = null
  }, 3000)
}

// SEO Statistics Breakdown
const seoStats = computed(() => {
  const posts = postStore.posts
  const good = posts.filter(p => p.seoScore >= 80).length
  const improvement = posts.filter(p => p.seoScore >= 50 && p.seoScore < 80).length
  const poor = posts.filter(p => p.seoScore < 50).length
  const total = posts.length || 1

  return {
    good,
    improvement,
    poor,
    goodPercent: Math.round((good / total) * 100),
    improvementPercent: Math.round((improvement / total) * 100),
    poorPercent: Math.round((poor / total) * 100),
    averageScore: Math.round(posts.reduce((acc, p) => acc + p.seoScore, 0) / total)
  }
})

// HR Sample Vacancies
const sampleVacancies = ref([
  { id: 1, title: 'Structural Engineer - Steel Fabrication', dept: 'Engineering', location: 'Surabaya HQ', status: 'Active', applicants: 8 },
  { id: 2, title: 'Digital Marketing & SEO Specialist', dept: 'Marketing', location: 'Jakarta Branch', status: 'Active', applicants: 14 },
  { id: 3, title: 'Plant Supervisor Baja Ringan', dept: 'Production', location: 'Mojokerto Plant', status: 'Active', applicants: 5 },
  { id: 4, title: 'Finance & Accounting Officer', dept: 'Finance', location: 'Surabaya HQ', status: 'Draft', applicants: 0 },
])

// Admin Sample Products
const sampleProducts = ref([
  { id: 1, name: 'Kencana Truss C75.75', category: 'Rangka Atap', standard: 'SNI 8399:2017', status: 'Tersedia' },
  { id: 2, name: 'Genteng Metal Pasir Kencana', category: 'Penutup Atap', standard: 'SNI Terverifikasi', status: 'Tersedia' },
  { id: 3, name: 'Bondek Plat Cor Kencana', category: 'Flooring Deck', standard: 'SNI 07-2053', status: 'Tersedia' },
  { id: 4, name: 'Hollow Galvalume 40x40', category: 'Plafon & Partisi', standard: 'SNI Terverifikasi', status: 'Tersedia' },
])

onMounted(async () => {
  try {
    isLoadingStats.value = true
    const res = await fetchDashboardStatsApi()
    serverStats.value = res
  } catch (e) {
    console.warn('Could not load server stats from Laravel backend (fallback to client state):', e)
  } finally {
    isLoadingStats.value = false
  }
})
</script>

<template>
  <div class="space-y-5">
    <!-- Page Header -->
    <div class="flex flex-col sm:flex-row sm:items-center justify-between pb-3 border-b border-gray-200 gap-2">
      <div>
        <h1 class="text-2xl font-semibold text-gray-900 tracking-tight">Dashboard Admin</h1>
        <p class="text-xs text-gray-500 mt-0.5">
          Sistem Manajemen Konten &amp; Otentikasi Role-Based Access Control (RBAC)
        </p>
      </div>

      <!-- Role Pill & Status -->
      <div class="flex items-center space-x-2">
        <div class="flex items-center space-x-1.5 px-3 py-1 rounded-full text-xs font-semibold border shadow-xs"
          :class="authStore.role === 'super_admin' ? 'bg-purple-50 text-purple-700 border-purple-200' :
                  authStore.role === 'admin' ? 'bg-blue-50 text-blue-700 border-blue-200' :
                  authStore.role === 'content_writer' ? 'bg-emerald-50 text-emerald-700 border-emerald-200' :
                  'bg-amber-50 text-amber-700 border-amber-200'"
        >
          <Shield class="w-3.5 h-3.5" />
          <span>{{ authStore.user?.role_label || authStore.role }}</span>
        </div>
      </div>
    </div>

    <!-- Role Welcome Banner -->
    <div class="bg-gradient-to-r from-gray-900 via-[#171b22] to-gray-900 text-white rounded-xl p-5 border border-gray-800 shadow-md">
      <div class="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div class="flex items-center space-x-2 mb-1">
            <span class="text-xs font-bold px-2 py-0.5 rounded bg-blue-500/20 text-blue-400 border border-blue-500/30">
              {{ authStore.user?.role_label }}
            </span>
            <span class="text-xs text-gray-400">&bull; {{ authStore.user?.email }}</span>
          </div>
          <h2 class="text-lg font-bold text-white">Selamat Datang, {{ authStore.user?.name }}!</h2>
          <p class="text-xs text-gray-300 mt-1 max-w-2xl leading-relaxed">
            <template v-if="authStore.isSuperAdmin">
              Anda memiliki hak akses penuh ke seluruh modul sistem (Katalog Produk, Artikel Edukasi, Lowongan Karir, Kencana SEO Engine, Media, dan Pengaturan Sistem).
            </template>
            <template v-else-if="authStore.isAdmin">
              Anda mengelola modul Homepage, Katalog Produk SNI, Depo Cabang, FAQ, Brosur Katalog, dan Media. (Akses Artikel &amp; Karir dibatasi).
            </template>
            <template v-else-if="authStore.isContentWriter">
              Anda mengelola modul Artikel Edukasi &amp; Analisis Kencana SEO Engine. (Akses modul lain dibatasi).
            </template>
            <template v-else-if="authStore.isHR">
              Anda mengelola modul Lowongan Karir &amp; Perekrutan Tenaga Kerja Kencana. (Akses modul lain dibatasi).
            </template>
          </p>
        </div>

        <!-- Role Action Button -->
        <div class="shrink-0 flex items-center space-x-2">
          <router-link
            v-if="authStore.hasPermission('articles.create')"
            to="/posts/new"
            class="px-3.5 py-2 bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold rounded-lg shadow transition-colors flex items-center space-x-1.5"
          >
            <Plus class="w-3.5 h-3.5" />
            <span>Tulis Artikel Baru</span>
          </router-link>

          <router-link
            v-if="authStore.hasPermission('products.view') && !authStore.hasPermission('articles.create')"
            to="/products"
            class="px-3.5 py-2 bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold rounded-lg shadow transition-colors flex items-center space-x-1.5"
          >
            <Package class="w-3.5 h-3.5" />
            <span>Lihat Produk SNI</span>
          </router-link>

          <router-link
            v-if="authStore.isHR"
            to="/careers"
            class="px-3.5 py-2 bg-amber-600 hover:bg-amber-500 text-white text-xs font-semibold rounded-lg shadow transition-colors flex items-center space-x-1.5"
          >
            <Briefcase class="w-3.5 h-3.5" />
            <span>Kelola Lowongan Karir</span>
          </router-link>
        </div>
      </div>
    </div>

    <!-- Tailored KPI Metric Cards Grid -->
    <div class="grid grid-cols-2 lg:grid-cols-4 gap-4">
      <!-- 1. Products Metric (Super Admin & Admin) -->
      <div 
        v-if="authStore.hasPermission('products.view')" 
        class="bg-white border border-gray-200 rounded-xl p-4 shadow-xs hover:border-blue-300 transition-colors"
      >
        <div class="flex items-center justify-between text-gray-500 mb-2">
          <span class="text-xs font-medium">Produk SNI</span>
          <div class="w-8 h-8 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center">
            <Package class="w-4 h-4" />
          </div>
        </div>
        <div class="text-2xl font-bold text-gray-900">24</div>
        <div class="text-[11px] text-emerald-600 font-medium mt-1 flex items-center space-x-1">
          <CheckCircle2 class="w-3 h-3" />
          <span>Katalog Siap Website</span>
        </div>
      </div>

      <!-- 2. Articles Metric (Super Admin & Content Writer) -->
      <div 
        v-if="authStore.hasPermission('articles.view')" 
        class="bg-white border border-gray-200 rounded-xl p-4 shadow-xs hover:border-emerald-300 transition-colors"
      >
        <div class="flex items-center justify-between text-gray-500 mb-2">
          <span class="text-xs font-medium">Artikel Edukasi</span>
          <div class="w-8 h-8 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center">
            <FileText class="w-4 h-4" />
          </div>
        </div>
        <div class="text-2xl font-bold text-gray-900">{{ postStore.posts.length }}</div>
        <div class="text-[11px] text-emerald-600 font-medium mt-1 flex items-center space-x-1">
          <CheckCircle2 class="w-3 h-3" />
          <span>Yoast SEO Integrated</span>
        </div>
      </div>

      <!-- 3. Careers Metric (Super Admin & HR) -->
      <div 
        v-if="authStore.hasPermission('careers.view')" 
        class="bg-white border border-gray-200 rounded-xl p-4 shadow-xs hover:border-amber-300 transition-colors"
      >
        <div class="flex items-center justify-between text-gray-500 mb-2">
          <span class="text-xs font-medium">Lowongan Aktif</span>
          <div class="w-8 h-8 rounded-lg bg-amber-50 text-amber-600 flex items-center justify-center">
            <Briefcase class="w-4 h-4" />
          </div>
        </div>
        <div class="text-2xl font-bold text-gray-900">6</div>
        <div class="text-[11px] text-amber-600 font-medium mt-1 flex items-center space-x-1">
          <Users class="w-3 h-3" />
          <span>12 Pelamar Baru</span>
        </div>
      </div>

      <!-- 4. Depo & Cabang Metric (Super Admin & Admin) -->
      <div 
        v-if="authStore.hasPermission('branches.view')" 
        class="bg-white border border-gray-200 rounded-xl p-4 shadow-xs hover:border-purple-300 transition-colors"
      >
        <div class="flex items-center justify-between text-gray-500 mb-2">
          <span class="text-xs font-medium">Depo &amp; Cabang</span>
          <div class="w-8 h-8 rounded-lg bg-purple-50 text-purple-600 flex items-center justify-center">
            <MapPin class="w-4 h-4" />
          </div>
        </div>
        <div class="text-2xl font-bold text-gray-900">15</div>
        <div class="text-[11px] text-purple-600 font-medium mt-1 flex items-center space-x-1">
          <Layers class="w-3 h-3" />
          <span>Jawa, Bali, Sumatera</span>
        </div>
      </div>

      <!-- 5. Kencana SEO Avg Score (Content Writer & Super Admin) -->
      <div 
        v-if="authStore.hasPermission('seo.analyze')" 
        class="bg-white border border-gray-200 rounded-xl p-4 shadow-xs hover:border-blue-300 transition-colors"
      >
        <div class="flex items-center justify-between text-gray-500 mb-2">
          <span class="text-xs font-medium">Rata-rata SEO Score</span>
          <div class="w-8 h-8 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center">
            <BarChart2 class="w-4 h-4" />
          </div>
        </div>
        <div class="text-2xl font-bold text-gray-900">{{ seoStats.averageScore }} <span class="text-xs text-gray-400">/ 100</span></div>
        <div class="text-[11px] text-blue-600 font-medium mt-1 flex items-center space-x-1">
          <Sparkles class="w-3 h-3" />
          <span>FastAPI Engine Online</span>
        </div>
      </div>

      <!-- 6. Total FAQ (Admin) -->
      <div 
        v-if="authStore.hasPermission('faq.view') && !authStore.isSuperAdmin" 
        class="bg-white border border-gray-200 rounded-xl p-4 shadow-xs hover:border-cyan-300 transition-colors"
      >
        <div class="flex items-center justify-between text-gray-500 mb-2">
          <span class="text-xs font-medium">Daftar FAQ</span>
          <div class="w-8 h-8 rounded-lg bg-cyan-50 text-cyan-600 flex items-center justify-center">
            <HelpCircle class="w-4 h-4" />
          </div>
        </div>
        <div class="text-2xl font-bold text-gray-900">12</div>
        <div class="text-[11px] text-cyan-600 font-medium mt-1">4 Kategori Bantuan</div>
      </div>

      <!-- 7. E-Katalog Brosur (Admin) -->
      <div 
        v-if="authStore.hasPermission('catalog.view') && !authStore.isSuperAdmin" 
        class="bg-white border border-gray-200 rounded-xl p-4 shadow-xs hover:border-amber-300 transition-colors"
      >
        <div class="flex items-center justify-between text-gray-500 mb-2">
          <span class="text-xs font-medium">Katalog Brosur</span>
          <div class="w-8 h-8 rounded-lg bg-amber-50 text-amber-600 flex items-center justify-center">
            <FolderDown class="w-4 h-4" />
          </div>
        </div>
        <div class="text-2xl font-bold text-gray-900">8</div>
        <div class="text-[11px] text-amber-600 font-medium mt-1">PDF Siap Unduh</div>
      </div>
    </div>

    <!-- Role-Specific Widget Sections -->

    <!-- Section A: Content Writer & Super Admin (SEO & Articles) -->
    <div v-if="authStore.hasPermission('articles.view')" class="grid grid-cols-1 lg:grid-cols-2 gap-5">
      <!-- SEO Health Overview -->
      <div class="bg-white border border-gray-200 rounded-xl shadow-xs overflow-hidden">
        <div class="px-4 py-3 bg-gray-50 border-b border-gray-200 flex items-center justify-between">
          <div class="flex items-center space-x-2 font-semibold text-xs text-gray-800">
            <BarChart2 class="w-4 h-4 text-[#2271b1]" />
            <span>Kencana SEO Health Overview</span>
          </div>
          <span class="text-xs font-mono bg-blue-50 text-blue-700 px-2 py-0.5 rounded font-semibold">
            Avg: {{ seoStats.averageScore }}/100
          </span>
        </div>
        <div class="p-4 space-y-4 text-xs">
          <!-- Stacked Progress Bar -->
          <div class="w-full bg-gray-200 h-3 rounded-full overflow-hidden flex shadow-inner">
            <div 
              class="bg-emerald-500 transition-all" 
              :style="{ width: `${seoStats.goodPercent}%` }"
              :title="`Good: ${seoStats.good} posts (${seoStats.goodPercent}%)`"
            ></div>
            <div 
              class="bg-amber-500 transition-all" 
              :style="{ width: `${seoStats.improvementPercent}%` }"
              :title="`Needs Improvement: ${seoStats.improvement} posts (${seoStats.improvementPercent}%)`"
            ></div>
            <div 
              class="bg-rose-500 transition-all" 
              :style="{ width: `${seoStats.poorPercent}%` }"
              :title="`Poor: ${seoStats.poor} posts (${seoStats.poorPercent}%)`"
            ></div>
          </div>

          <!-- Counters -->
          <div class="grid grid-cols-3 gap-3 text-center">
            <div class="p-2.5 rounded bg-emerald-50/80 border border-emerald-200">
              <div class="text-lg font-bold text-emerald-700">{{ seoStats.good }}</div>
              <div class="text-[11px] text-emerald-600 font-medium">Good ({{ seoStats.goodPercent }}%)</div>
            </div>
            <div class="p-2.5 rounded bg-amber-50/80 border border-amber-200">
              <div class="text-lg font-bold text-amber-700">{{ seoStats.improvement }}</div>
              <div class="text-[11px] text-amber-600 font-medium">Needs Work ({{ seoStats.improvementPercent }}%)</div>
            </div>
            <div class="p-2.5 rounded bg-rose-50/80 border border-rose-200">
              <div class="text-lg font-bold text-rose-700">{{ seoStats.poor }}</div>
              <div class="text-[11px] text-rose-600 font-medium">Poor ({{ seoStats.poorPercent }}%)</div>
            </div>
          </div>
        </div>
      </div>

      <!-- Quick Draft Box -->
      <div class="bg-white border border-gray-200 rounded-xl shadow-xs overflow-hidden">
        <div class="px-4 py-3 bg-gray-50 border-b border-gray-200 flex items-center justify-between">
          <span class="font-semibold text-xs text-gray-800">Quick Draft Artikel</span>
          <span class="text-[11px] text-gray-500">Draft Cepat</span>
        </div>
        <div class="p-4 space-y-3 text-xs">
          <div v-if="draftNotice" class="p-2 bg-emerald-50 text-emerald-700 border border-emerald-200 rounded">
            {{ draftNotice }}
          </div>

          <div class="space-y-1">
            <label class="font-medium text-gray-700">Judul Artikel</label>
            <input 
              type="text" 
              v-model="quickDraftTitle"
              placeholder="Contoh: Keunggulan Genteng Metal Pasir..."
              class="w-full px-3 py-1.5 border border-gray-300 rounded text-xs focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          <div class="space-y-1">
            <label class="font-medium text-gray-700">Isi Ringkas</label>
            <textarea 
              v-model="quickDraftContent"
              rows="3"
              placeholder="Tuliskan draft gagasan artikel Anda..."
              class="w-full px-3 py-1.5 border border-gray-300 rounded text-xs focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
            ></textarea>
          </div>

          <div class="pt-1 flex justify-end">
            <button 
              type="button" 
              @click="saveQuickDraft"
              :disabled="!quickDraftTitle.trim()"
              class="px-3 py-1.5 bg-blue-600 hover:bg-blue-500 text-white rounded text-xs font-semibold disabled:opacity-50 cursor-pointer"
            >
              Simpan Draft
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- Section B: Admin Specific (Products & Branches Overview) -->
    <div v-if="authStore.isAdmin" class="bg-white border border-gray-200 rounded-xl shadow-xs p-5">
      <div class="flex items-center justify-between pb-3 border-b border-gray-100 mb-4">
        <div>
          <h3 class="font-bold text-sm text-gray-900">Katalog Produk Unggulan Kencana</h3>
          <p class="text-xs text-gray-500">Daftar produk SNI yang tampil di katalog website publik.</p>
        </div>
        <router-link to="/products" class="text-xs text-blue-600 hover:underline font-semibold flex items-center gap-1">
          <span>Kelola Semua Produk</span>
          <ArrowRight class="w-3.5 h-3.5" />
        </router-link>
      </div>

      <div class="overflow-x-auto">
        <table class="w-full text-xs text-left">
          <thead class="bg-gray-50 text-gray-600 uppercase text-[10.5px]">
            <tr>
              <th class="px-3 py-2">Nama Produk</th>
              <th class="px-3 py-2">Kategori</th>
              <th class="px-3 py-2">Standar</th>
              <th class="px-3 py-2">Status</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-gray-100">
            <tr v-for="prod in sampleProducts" :key="prod.id" class="hover:bg-gray-50">
              <td class="px-3 py-2.5 font-semibold text-gray-900">{{ prod.name }}</td>
              <td class="px-3 py-2.5 text-gray-600">{{ prod.category }}</td>
              <td class="px-3 py-2.5 text-emerald-700 font-mono">{{ prod.standard }}</td>
              <td class="px-3 py-2.5">
                <span class="px-2 py-0.5 rounded-full text-[10px] font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200">
                  {{ prod.status }}
                </span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    <!-- Section C: HR Specific (Careers & Vacancies Overview) -->
    <div v-if="authStore.isHR" class="bg-white border border-gray-200 rounded-xl shadow-xs p-5">
      <div class="flex items-center justify-between pb-3 border-b border-gray-100 mb-4">
        <div>
          <h3 class="font-bold text-sm text-gray-900">Lowongan Karir &amp; Rekrutmen</h3>
          <p class="text-xs text-gray-500">Pantau lowongan kerja aktif dan permohonan pelamar.</p>
        </div>
        <router-link to="/careers" class="text-xs text-blue-600 hover:underline font-semibold flex items-center gap-1">
          <span>Kelola Semua Lowongan</span>
          <ArrowRight class="w-3.5 h-3.5" />
        </router-link>
      </div>

      <div class="overflow-x-auto">
        <table class="w-full text-xs text-left">
          <thead class="bg-gray-50 text-gray-600 uppercase text-[10.5px]">
            <tr>
              <th class="px-3 py-2">Posisi Lowongan</th>
              <th class="px-3 py-2">Departemen</th>
              <th class="px-3 py-2">Penempatan</th>
              <th class="px-3 py-2">Pelamar</th>
              <th class="px-3 py-2">Status</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-gray-100">
            <tr v-for="vac in sampleVacancies" :key="vac.id" class="hover:bg-gray-50">
              <td class="px-3 py-2.5 font-semibold text-gray-900">{{ vac.title }}</td>
              <td class="px-3 py-2.5 text-gray-600">{{ vac.dept }}</td>
              <td class="px-3 py-2.5 text-gray-600">{{ vac.location }}</td>
              <td class="px-3 py-2.5 font-bold text-blue-600">{{ vac.applicants }} Pelamar</td>
              <td class="px-3 py-2.5">
                <span 
                  class="px-2 py-0.5 rounded-full text-[10px] font-semibold border"
                  :class="vac.status === 'Active' ? 'bg-emerald-50 text-emerald-700 border-emerald-200' : 'bg-gray-100 text-gray-600 border-gray-300'"
                >
                  {{ vac.status }}
                </span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>
