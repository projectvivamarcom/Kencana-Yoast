<script setup lang="ts">
import { ref, computed } from 'vue'
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
  Server 
} from 'lucide-vue-next'
import { usePostStore } from '../stores/postStore'
import ScoreBadge from '../components/seo/ScoreBadge.vue'

const router = useRouter()
const postStore = usePostStore()

// Quick Draft state
const quickDraftTitle = ref('')
const quickDraftContent = ref('')
const draftNotice = ref<string | null>(null)

const saveQuickDraft = () => {
  if (!quickDraftTitle.value.trim()) return

  postStore.addPost({
    title: quickDraftTitle.value,
    slug: quickDraftTitle.value.toLowerCase().replace(/\s+/g, '-'),
    author: 'Admin Kencana',
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
  draftNotice.value = 'Draft saved successfully!'
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
</script>

<template>
  <div class="space-y-4">
    <!-- Page Header -->
    <div class="flex items-center justify-between pb-1 border-b border-gray-200">
      <h1 class="text-2xl font-normal text-wp-text">Dashboard</h1>
      <div class="text-xs text-gray-500 font-mono">
        Kencana CMS 2.4.1 &bull; FastAPI Engine
      </div>
    </div>

    <!-- Welcome Panel (WordPress Style) -->
    <div class="bg-white border border-wp-border rounded shadow-xs p-5">
      <div class="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-4 border-b border-gray-100">
        <div>
          <h2 class="text-lg font-bold text-gray-900">Welcome to Kencana Admin CMS!</h2>
          <p class="text-xs text-gray-500 mt-0.5">
            Kelola konten artikel properti &amp; konstruksi baja ringan dengan analisis SEO real-time Kencana SEO &amp; FastAPI.
          </p>
        </div>
        <router-link
          to="/posts/new"
          class="wp-btn-primary py-1.5 px-4 text-xs font-semibold self-start shrink-0"
        >
          <Plus class="w-3.5 h-3.5 mr-1" />
          <span>Write your first post</span>
        </router-link>
      </div>

      <!-- Quick Shortcuts Grid -->
      <div class="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 text-xs text-gray-600">
        <div>
          <h3 class="font-semibold text-gray-800 mb-2">Get Started</h3>
          <ul class="space-y-1.5">
            <li>
              <router-link to="/posts/new" class="text-wp-blue hover:underline flex items-center space-x-1">
                <ArrowRight class="w-3 h-3" />
                <span>Add new post</span>
              </router-link>
            </li>
            <li>
              <router-link to="/posts" class="text-wp-blue hover:underline flex items-center space-x-1">
                <ArrowRight class="w-3 h-3" />
                <span>View all posts</span>
              </router-link>
            </li>
          </ul>
        </div>

        <div>
          <h3 class="font-semibold text-gray-800 mb-2">Next Steps</h3>
          <ul class="space-y-1.5">
            <li>
              <router-link to="/categories" class="text-wp-blue hover:underline flex items-center space-x-1">
                <ArrowRight class="w-3 h-3" />
                <span>Manage categories</span>
              </router-link>
            </li>
            <li>
              <router-link to="/media" class="text-wp-blue hover:underline flex items-center space-x-1">
                <ArrowRight class="w-3 h-3" />
                <span>Upload images &amp; media</span>
              </router-link>
            </li>
          </ul>
        </div>

        <div>
          <h3 class="font-semibold text-gray-800 mb-2">SEO Optimization</h3>
          <ul class="space-y-1.5">
            <li>
              <router-link to="/seo-audit" class="text-wp-blue hover:underline flex items-center space-x-1">
                <BarChart2 class="w-3 h-3 text-blue-500" />
                <span>Kencana SEO Audit</span>
              </router-link>
            </li>
            <li>
              <a href="http://127.0.0.1:8000/docs" target="_blank" class="text-wp-blue hover:underline flex items-center space-x-1">
                <ExternalLink class="w-3 h-3" />
                <span>FastAPI Swagger Documentation</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <!-- Widgets Grid (At a glance, SEO Health, Recent Posts, Quick Draft) -->
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-5">
      <!-- Widget 1: Kencana SEO Health Overview -->
      <div class="wp-postbox">
        <div class="wp-postbox-header flex items-center justify-between">
          <div class="flex items-center space-x-2">
            <BarChart2 class="w-4 h-4 text-[#2271b1]" />
            <span>Kencana SEO Health Overview</span>
          </div>
          <span class="text-xs font-mono bg-blue-50 text-blue-700 px-2 py-0.5 rounded">
            Avg Score: {{ seoStats.averageScore }}/100
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

          <!-- Legend Counters -->
          <div class="grid grid-cols-3 gap-3 text-center">
            <div class="p-2.5 rounded bg-emerald-50/80 border border-emerald-200">
              <div class="text-lg font-bold text-emerald-700">{{ seoStats.good }}</div>
              <div class="text-[11px] text-emerald-600 font-medium flex items-center justify-center space-x-1">
                <CheckCircle2 class="w-3 h-3" />
                <span>Good ({{ seoStats.goodPercent }}%)</span>
              </div>
            </div>

            <div class="p-2.5 rounded bg-amber-50/80 border border-amber-200">
              <div class="text-lg font-bold text-amber-700">{{ seoStats.improvement }}</div>
              <div class="text-[11px] text-amber-600 font-medium flex items-center justify-center space-x-1">
                <AlertTriangle class="w-3 h-3" />
                <span>Needs Work ({{ seoStats.improvementPercent }}%)</span>
              </div>
            </div>

            <div class="p-2.5 rounded bg-rose-50/80 border border-rose-200">
              <div class="text-lg font-bold text-rose-700">{{ seoStats.poor }}</div>
              <div class="text-[11px] text-rose-600 font-medium flex items-center justify-center space-x-1">
                <XCircle class="w-3 h-3" />
                <span>Poor ({{ seoStats.poorPercent }}%)</span>
              </div>
            </div>
          </div>

          <!-- Backend Connection Status Info -->
          <div class="p-3 bg-gray-50 border border-gray-200 rounded flex items-center justify-between text-gray-600">
            <div class="flex items-center space-x-2">
              <Server class="w-4 h-4 text-gray-500" />
              <span>FastAPI Backend Connection:</span>
            </div>
            <span 
              class="px-2 py-0.5 rounded text-[11px] font-semibold font-mono"
              :class="postStore.backendStatus === 'online' 
                ? 'bg-emerald-100 text-emerald-800' 
                : 'bg-amber-100 text-amber-800'"
            >
              {{ postStore.backendStatus === 'online' ? 'Connected (127.0.0.1:8000)' : 'Standby / Local Fallback' }}
            </span>
          </div>
        </div>
      </div>

      <!-- Widget 2: At a Glance -->
      <div class="wp-postbox">
        <div class="wp-postbox-header">
          <span>At a Glance</span>
        </div>
        <div class="p-4 space-y-4 text-xs text-gray-600">
          <div class="grid grid-cols-2 gap-4">
            <div class="space-y-2">
              <div class="flex items-center space-x-2">
                <FileText class="w-4 h-4 text-gray-400" />
                <router-link to="/posts" class="text-wp-blue hover:underline font-semibold">
                  {{ postStore.posts.length }} Posts
                </router-link>
              </div>
              <div class="flex items-center space-x-2">
                <FolderTree class="w-4 h-4 text-gray-400" />
                <router-link to="/categories" class="text-wp-blue hover:underline font-semibold">
                  {{ postStore.categories.length }} Categories
                </router-link>
              </div>
            </div>

            <div class="space-y-2">
              <div class="flex items-center space-x-2">
                <TagIcon class="w-4 h-4 text-gray-400" />
                <router-link to="/tags" class="text-wp-blue hover:underline font-semibold">
                  {{ postStore.tags.length }} Tags
                </router-link>
              </div>
              <div class="flex items-center space-x-2">
                <ShieldCheck class="w-4 h-4 text-emerald-600" />
                <span class="text-gray-700 font-medium">Kencana SEO Engine</span>
              </div>
            </div>
          </div>

          <div class="pt-3 border-t border-gray-100 text-gray-500 text-[11px]">
            Running Kencana Properti CMS with TailwindCSS &amp; PrimeVue UI engine.
          </div>
        </div>
      </div>

      <!-- Widget 3: Recent Posts with Scores -->
      <div class="wp-postbox">
        <div class="wp-postbox-header flex items-center justify-between">
          <span>Recent Posts</span>
          <router-link to="/posts" class="text-xs text-wp-blue hover:underline font-normal">
            View All
          </router-link>
        </div>
        <div class="divide-y divide-gray-100 text-xs">
          <div 
            v-for="post in postStore.posts.slice(0, 4)" 
            :key="post.id"
            class="p-3 flex items-center justify-between hover:bg-gray-50 transition-colors"
          >
            <div class="space-y-0.5 flex-1 pr-3">
              <router-link 
                :to="`/posts/edit/${post.id}`"
                class="font-medium text-gray-800 hover:text-wp-blue hover:underline line-clamp-1"
              >
                {{ post.title }}
              </router-link>
              <div class="text-[11px] text-gray-400">
                <span>{{ post.date }}</span> &bull; 
                <span>{{ post.author }}</span>
              </div>
            </div>

            <div class="flex items-center space-x-1.5 shrink-0">
              <ScoreBadge :score="post.seoScore" size="sm" />
            </div>
          </div>
        </div>
      </div>

      <!-- Widget 4: Quick Draft -->
      <div class="wp-postbox">
        <div class="wp-postbox-header">
          <span>Quick Draft</span>
        </div>
        <div class="p-4 space-y-3 text-xs">
          <div v-if="draftNotice" class="p-2 bg-emerald-50 text-emerald-700 border border-emerald-200 rounded">
            {{ draftNotice }}
          </div>

          <div class="space-y-1">
            <label class="font-medium text-gray-700">Title</label>
            <input 
              type="text" 
              v-model="quickDraftTitle"
              placeholder="What's on your mind?"
              class="wp-input text-xs py-1"
            />
          </div>

          <div class="space-y-1">
            <label class="font-medium text-gray-700">Content</label>
            <textarea 
              v-model="quickDraftContent"
              rows="3"
              placeholder="Draft content..."
              class="wp-input text-xs"
            ></textarea>
          </div>

          <div class="pt-1 flex justify-end">
            <button 
              type="button" 
              @click="saveQuickDraft"
              :disabled="!quickDraftTitle.trim()"
              class="wp-btn text-xs py-1 px-3 disabled:opacity-50"
            >
              Save Draft
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
