<script setup lang="ts">
import { ref } from 'vue'
import { Sparkles, RotateCw, CheckCircle2, AlertTriangle, XCircle, Search, ExternalLink } from 'lucide-vue-next'
import { usePostStore } from '../stores/postStore'
import ScoreBadge from '../components/seo/ScoreBadge.vue'
import SeoAnalyzerPanel from '../components/seo/SeoAnalyzerPanel.vue'

const postStore = usePostStore()

const testTitle = ref('Perumahan Modern Kencana Hills: Investasi Rumah Masa Depan')
const testSlug = ref('perumahan-modern-kencana-hills-investasi')
const testFocusKeyphrase = ref('kencana hills')
const testSeoTitle = ref('Perumahan Modern Kencana Hills Surabaya Barat | Kencana Properti')
const testMetaDescription = ref('Kencana Hills menghadirkan kawasan perumahan modern dengan fasilitas lengkap di Surabaya Barat. Investasi terbaik dengan nilai capital gain tinggi.')
const testContent = ref(`Kencana Hills adalah perumahan modern yang dirancang untuk kenyamanan keluarga urban masa kini. Dilengkapi infrastruktur bawah tanah, area komersial, dan sistem keamanan terpadu.\n\nKeunggulan Kencana Hills\nSetiap unit rumah dibangun menggunakan material berkualitas tinggi seperti rangka baja ringan Kencana Truss dan genteng metal anti bocor. Hubungi agen resmi kami untuk penawaran khusus minggu ini.`)
const testCanonicalUrl = ref('https://kencana.id/posts/perumahan-modern-kencana-hills-investasi')
const testRobotsMeta = ref('index, follow')
const featuredImage = ref('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200&auto=format&fit=crop')

const seoScore = ref(86)
const readabilityScore = ref(80)

const runAudit = async () => {
  const res = await postStore.runAnalysis({
    title: testSeoTitle.value || testTitle.value,
    slug: testSlug.value,
    meta_description: testMetaDescription.value,
    focus_keyphrase: testFocusKeyphrase.value,
    content: testContent.value
  })

  seoScore.value = res.computedSeoScore
  readabilityScore.value = res.computedReadabilityScore
}
</script>

<template>
  <div class="space-y-4">
    <div class="flex items-center justify-between pb-1 border-b border-gray-200">
      <div class="flex items-center space-x-2">
        <Sparkles class="w-6 h-6 text-yellow-500" />
        <h1 class="text-2xl font-normal text-wp-text">Kencana SEO Analyzer &amp; Audit Tool</h1>
      </div>
      <div class="flex items-center space-x-2">
        <a 
          href="http://127.0.0.1:8000/docs" 
          target="_blank" 
          class="wp-btn text-xs py-1 flex items-center space-x-1"
        >
          <ExternalLink class="w-3.5 h-3.5" />
          <span>FastAPI Docs</span>
        </a>
      </div>
    </div>

    <!-- Live Interactive SEO Tester -->
    <div class="bg-white border border-wp-border rounded shadow-xs p-5 space-y-4">
      <h2 class="text-sm font-semibold text-gray-800">Quick Interactive Content SEO Tester</h2>
      <p class="text-xs text-gray-500">
        Uji coba analisis SEO dan Readability secara langsung menggunakan endpoint <code>POST /analyze</code>.
      </p>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
        <div class="space-y-1">
          <label class="font-semibold text-gray-700">Page Title</label>
          <input type="text" v-model="testTitle" class="wp-input text-xs" />
        </div>

        <div class="space-y-1">
          <label class="font-semibold text-gray-700">Focus Keyphrase</label>
          <input type="text" v-model="testFocusKeyphrase" class="wp-input text-xs" />
        </div>

        <div class="space-y-1">
          <label class="font-semibold text-gray-700">SEO Title</label>
          <input type="text" v-model="testSeoTitle" class="wp-input text-xs" />
        </div>

        <div class="space-y-1">
          <label class="font-semibold text-gray-700">URL Slug</label>
          <input type="text" v-model="testSlug" class="wp-input text-xs font-mono" />
        </div>

        <div class="md:col-span-2 space-y-1">
          <label class="font-semibold text-gray-700">Meta Description</label>
          <textarea v-model="testMetaDescription" rows="2" class="wp-input text-xs"></textarea>
        </div>

        <div class="md:col-span-2 space-y-1">
          <label class="font-semibold text-gray-700">Article Content</label>
          <textarea v-model="testContent" rows="5" class="wp-input text-xs"></textarea>
        </div>
      </div>

      <div class="flex justify-end">
        <button 
          @click="runAudit"
          :disabled="postStore.isAnalyzing"
          class="wp-btn-primary py-1.5 px-5 text-xs font-semibold flex items-center space-x-1.5"
        >
          <RotateCw class="w-3.5 h-3.5" :class="{ 'animate-spin': postStore.isAnalyzing }" />
          <span>{{ postStore.isAnalyzing ? 'Running SEO Analysis...' : 'Run Analysis Now' }}</span>
        </button>
      </div>
    </div>

    <!-- SEO Analyzer Panel Component -->
    <SeoAnalyzerPanel 
      :title="testSeoTitle || testTitle"
      :slug="testSlug"
      :meta-description="testMetaDescription"
      :focus-keyphrase="testFocusKeyphrase"
      :content="testContent"
      :canonical-url="testCanonicalUrl"
      :robots-meta="testRobotsMeta"
      :featured-image="featuredImage"
      :seo-score="seoScore"
      :readability-score="readabilityScore"
      :analysis-response="postStore.lastAnalysisResponse"
      :is-analyzing="postStore.isAnalyzing"
      @update:focus-keyphrase="testFocusKeyphrase = $event"
      @update:seo-title="testSeoTitle = $event"
      @update:meta-description="testMetaDescription = $event"
      @run-analysis="runAudit"
    />
  </div>
</template>
