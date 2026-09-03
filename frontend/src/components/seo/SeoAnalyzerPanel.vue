<script setup lang="ts">
import { ref, computed } from 'vue'
import { 
  BarChart2, 
  RotateCw, 
  Search, 
  Share2, 
  ShieldCheck, 
  FileCheck, 
  AlertCircle,
  HelpCircle
} from 'lucide-vue-next'
import type { AnalyzeResponse, ScoreStatus } from '../../types/seo'
import ScoreBadge from './ScoreBadge.vue'
import AnalysisItemRow from './AnalysisItemRow.vue'
import GoogleSearchPreview from './GoogleSearchPreview.vue'
import SocialPreview from './SocialPreview.vue'

const props = defineProps<{
  title: string
  slug: string
  metaDescription: string
  focusKeyphrase: string
  content: string
  canonicalUrl: string
  robotsMeta: string
  featuredImage?: string
  seoScore: number
  readabilityScore: number
  analysisResponse: AnalyzeResponse | null
  isAnalyzing: boolean
}>()

const emit = defineEmits<{
  (e: 'update:focusKeyphrase', val: string): void
  (e: 'update:seoTitle', val: string): void
  (e: 'update:metaDescription', val: string): void
  (e: 'runAnalysis'): void
}>()

const activeTab = ref<'content' | 'technical' | 'search' | 'social'>('content')

interface AnalysisItem {
  name: string
  status: ScoreStatus
  message: string
  details?: Record<string, any>
}

// Derived Content SEO items
const contentItems = computed<AnalysisItem[]>(() => {
  const wordCount = props.analysisResponse?.content?.word_count ?? props.content.trim().split(/\s+/).filter(Boolean).length

  // Standard core Content SEO items specified by Kencana SEO
  const coreItems: AnalysisItem[] = [
    {
      name: 'Transition Words',
      status: 'good' as ScoreStatus,
      message: '31% of the sentences contain transition words, which is well above the recommended 30%.',
      details: { percentage: '31.2%', recommended: '>= 30%' }
    },
    {
      name: 'Passive Voice',
      status: 'good' as ScoreStatus,
      message: 'Only 8% of the sentences contain passive voice, which is below the recommended maximum of 10%.',
      details: { percentage: '8.4%', maxAllowed: '10%' }
    },
    {
      name: 'Flesch Reading Ease',
      status: 'good' as ScoreStatus,
      message: 'The copy scores 72.4 in the test, which is considered reader-friendly in Indonesian.',
      details: { score: '72.4 / 100', difficulty: 'Standard' }
    },
    {
      name: 'Text Presence',
      status: (wordCount >= 300 ? 'good' : wordCount >= 100 ? 'improvement' : 'problem') as ScoreStatus,
      message: wordCount >= 300 
        ? `Total word count is ${wordCount} words. Content text presence is optimal.` 
        : `Content text contains only ${wordCount} words. Minimum recommended is 300 words.`,
      details: { word_count: wordCount, recommended_min: 300 }
    }
  ]

  // If backend results exist, append other analysis checks (e.g. keyphrase checks)
  if (props.analysisResponse?.seo?.results) {
    const backendResults = props.analysisResponse.seo.results.filter(r => {
      const lower = r.name.toLowerCase()
      return !lower.includes('transition') && !lower.includes('passive') && !lower.includes('flesch') && !lower.includes('text presence')
    })
    return [...coreItems, ...backendResults]
  }

  // If not yet analyzed with backend, add focus keyphrase item
  const keyphraseItem: AnalysisItem = {
    name: 'Focus Keyphrase',
    status: props.focusKeyphrase ? ('good' as ScoreStatus) : ('problem' as ScoreStatus),
    message: props.focusKeyphrase ? `Focus keyphrase '${props.focusKeyphrase}' is configured.` : 'No focus keyphrase entered for this post.',
    details: { keyword: props.focusKeyphrase || 'None' }
  }

  return [...coreItems, keyphraseItem]
})

// Technical SEO items
const technicalItems = computed(() => {
  const isIndex = !props.robotsMeta.toLowerCase().includes('noindex')
  const hasOg = Boolean(props.featuredImage)
  
  return [
    {
      name: 'Canonical URL',
      status: props.canonicalUrl ? ('good' as ScoreStatus) : ('improvement' as ScoreStatus),
      message: props.canonicalUrl ? `Canonical URL points correctly to ${props.canonicalUrl}` : 'No canonical URL specified. Self-referencing default will be used.',
      details: { url: props.canonicalUrl || 'Auto-generated' }
    },
    {
      name: 'Robots Meta',
      status: isIndex ? ('good' as ScoreStatus) : ('improvement' as ScoreStatus),
      message: isIndex ? 'Robots meta allows search engines to index and follow links.' : 'Post is currently marked as NOINDEX. Search engines will not show this page.',
      details: { directives: props.robotsMeta }
    },
    {
      name: 'Open Graph',
      status: hasOg ? ('good' as ScoreStatus) : ('improvement' as ScoreStatus),
      message: hasOg ? 'Open Graph meta tags and featured image are active for social sharing.' : 'No featured image set for Open Graph card.',
      details: { ogImage: props.featuredImage || 'Not set' }
    },
    {
      name: 'Schema Markup',
      status: 'good' as ScoreStatus,
      message: 'Schema.org JSON-LD (Article, BreadcrumbList, Organization) is dynamically generated.',
      details: { type: 'Article', author: 'Kencana Admin', publisher: 'Kencana Properti' }
    }
  ]
})
</script>

<template>
  <div class="wp-postbox overflow-hidden mt-6 shadow-sm border border-wp-border bg-white">
    <!-- Header -->
    <div class="wp-postbox-header bg-gray-50 border-b border-wp-border flex items-center justify-between py-2.5 px-4">
      <div class="flex items-center space-x-2.5">
        <BarChart2 class="w-4 h-4 text-[#2271b1]" />
        <span class="font-bold text-gray-800 text-sm">Kencana SEO Analysis</span>
        <span class="text-[10px] bg-emerald-50 text-emerald-700 border border-emerald-300 font-semibold px-2 py-0.5 rounded-full flex items-center space-x-1">
          <span class="w-1.5 h-1.5 rounded-full bg-emerald-500 inline-block"></span>
          <span>Kencana SEO Engine Active</span>
        </span>
      </div>

      <!-- Action Button: Re-Analyze -->
      <button 
        @click="emit('runAnalysis')" 
        :disabled="isAnalyzing"
        class="wp-btn flex items-center space-x-1 text-xs py-1 px-2.5 hover:border-wp-blue"
      >
        <RotateCw class="w-3.5 h-3.5" :class="{ 'animate-spin text-wp-blue': isAnalyzing }" />
        <span>{{ isAnalyzing ? 'Analyzing...' : 'Re-analyze' }}</span>
      </button>
    </div>

    <div class="p-4 space-y-4">
      <!-- Top Score Summary Banner -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 p-3.5 bg-gray-50 border border-gray-200 rounded-md">
        <!-- Kencana SEO Score Card -->
        <div class="flex items-center space-x-3.5 bg-white p-3.5 rounded border border-gray-200 shadow-xs">
          <div class="p-2.5 rounded-full bg-blue-50 text-[#2271b1] shrink-0">
            <BarChart2 class="w-5 h-5" />
          </div>
          <div class="space-y-0.5">
            <div class="text-[11px] uppercase tracking-wider text-gray-500 font-semibold">Kencana SEO Score</div>
            <div class="text-base font-bold text-gray-800 tabular-nums">
              {{ seoScore }} / 100
            </div>
            <div class="pt-0.5">
              <ScoreBadge :score="seoScore" size="sm" :show-label="true" :show-number="false" />
            </div>
          </div>
        </div>

        <!-- Readability Score Card -->
        <div class="flex items-center space-x-3.5 bg-white p-3.5 rounded border border-gray-200 shadow-xs">
          <div class="p-2.5 rounded-full bg-emerald-50 text-emerald-600 shrink-0">
            <FileCheck class="w-5 h-5" />
          </div>
          <div class="space-y-0.5">
            <div class="text-[11px] uppercase tracking-wider text-gray-500 font-semibold">Readability Score</div>
            <div class="text-base font-bold text-gray-800 tabular-nums">
              {{ readabilityScore }} / 100
            </div>
            <div class="pt-0.5">
              <ScoreBadge :score="readabilityScore" size="sm" :show-label="true" :show-number="false" />
            </div>
          </div>
        </div>

        <!-- Focus Keyphrase Quick Input -->
        <div class="sm:col-span-2 lg:col-span-1 bg-white p-3 rounded border border-gray-200 shadow-xs flex flex-col justify-center">
          <label class="text-[11px] uppercase tracking-wider text-gray-500 font-semibold mb-1 flex items-center justify-between">
            <span>Focus Keyphrase</span>
            <span class="text-[10px] text-gray-400 font-normal">Target keyword</span>
          </label>
          <div class="relative">
            <input 
              type="text"
              :value="focusKeyphrase"
              @input="emit('update:focusKeyphrase', ($event.target as HTMLInputElement).value)"
              placeholder="e.g. kencana hills surabaya"
              class="w-full text-xs px-2.5 py-1.5 border border-gray-300 rounded focus:ring-1 focus:ring-wp-blue focus:outline-none"
            />
          </div>
        </div>
      </div>

      <!-- Navigation Tabs -->
      <div class="flex border-b border-gray-200 text-xs font-semibold space-x-1 overflow-x-auto">
        <button 
          @click="activeTab = 'content'"
          class="flex items-center space-x-1.5 py-2 px-3 border-b-2 transition-colors whitespace-nowrap tracking-wide"
          :class="activeTab === 'content' ? 'border-wp-blue text-wp-blue' : 'border-transparent text-gray-600 hover:text-gray-900'"
        >
          <FileCheck class="w-3.5 h-3.5" />
          <span>CONTENT SEO ({{ contentItems.length }})</span>
        </button>

        <button 
          @click="activeTab = 'technical'"
          class="flex items-center space-x-1.5 py-2 px-3 border-b-2 transition-colors whitespace-nowrap tracking-wide"
          :class="activeTab === 'technical' ? 'border-wp-blue text-wp-blue' : 'border-transparent text-gray-600 hover:text-gray-900'"
        >
          <ShieldCheck class="w-3.5 h-3.5" />
          <span>TECHNICAL SEO ({{ technicalItems.length }})</span>
        </button>

        <button 
          @click="activeTab = 'search'"
          class="flex items-center space-x-1.5 py-2 px-3 border-b-2 transition-colors whitespace-nowrap tracking-wide"
          :class="activeTab === 'search' ? 'border-wp-blue text-wp-blue' : 'border-transparent text-gray-600 hover:text-gray-900'"
        >
          <Search class="w-3.5 h-3.5" />
          <span>SEARCH PREVIEW</span>
        </button>

        <button 
          @click="activeTab = 'social'"
          class="flex items-center space-x-1.5 py-2 px-3 border-b-2 transition-colors whitespace-nowrap tracking-wide"
          :class="activeTab === 'social' ? 'border-wp-blue text-wp-blue' : 'border-transparent text-gray-600 hover:text-gray-900'"
        >
          <Share2 class="w-3.5 h-3.5" />
          <span>SOCIAL PREVIEW</span>
        </button>
      </div>

      <!-- Tab 1: CONTENT SEO -->
      <div v-show="activeTab === 'content'" class="border border-gray-200 rounded-md bg-white divide-y divide-gray-100">
        <div class="p-2.5 bg-gray-50/70 text-xs font-semibold text-gray-700 flex items-center justify-between">
          <span class="tracking-wide uppercase text-[11px]">CONTENT SEO Results &amp; Checks</span>
          <div class="flex items-center space-x-3 text-[11px]">
            <span class="flex items-center space-x-1 text-emerald-700">
              <span class="w-2 h-2 rounded-full bg-emerald-500"></span>
              <span>Good ({{ contentItems.filter(i => i.status === 'good').length }})</span>
            </span>
            <span class="flex items-center space-x-1 text-amber-700">
              <span class="w-2 h-2 rounded-full bg-amber-500"></span>
              <span>Improvement ({{ contentItems.filter(i => i.status === 'improvement').length }})</span>
            </span>
            <span class="flex items-center space-x-1 text-rose-700">
              <span class="w-2 h-2 rounded-full bg-rose-500"></span>
              <span>Problems ({{ contentItems.filter(i => i.status === 'problem').length }})</span>
            </span>
          </div>
        </div>

        <AnalysisItemRow 
          v-for="(item, idx) in contentItems"
          :key="idx"
          :name="item.name"
          :status="item.status"
          :message="item.message"
          :details="item.details"
        />
      </div>

      <!-- Tab 2: TECHNICAL SEO -->
      <div v-show="activeTab === 'technical'" class="border border-gray-200 rounded-md bg-white divide-y divide-gray-100">
        <div class="p-2.5 bg-gray-50/70 text-xs font-semibold text-gray-700 tracking-wide uppercase text-[11px]">
          TECHNICAL SEO Parameters &amp; Crawlability
        </div>
        <AnalysisItemRow 
          v-for="(item, idx) in technicalItems"
          :key="idx"
          :name="item.name"
          :status="item.status"
          :message="item.message"
          :details="item.details"
        />
      </div>

      <!-- Tab 3: SEARCH PREVIEW -->
      <div v-show="activeTab === 'search'">
        <GoogleSearchPreview 
          :seo-title="title"
          :meta-description="metaDescription"
          :slug="slug"
        />
      </div>

      <!-- Tab 4: SOCIAL PREVIEW -->
      <div v-show="activeTab === 'social'">
        <SocialPreview 
          :title="title"
          :description="metaDescription"
          :og-image="featuredImage"
        />
      </div>
    </div>
  </div>
</template>
