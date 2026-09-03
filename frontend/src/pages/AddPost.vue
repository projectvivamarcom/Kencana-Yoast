<script setup lang="ts">
import { ref, watch, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { CheckCircle2, AlertCircle } from 'lucide-vue-next'
import { usePostStore } from '../stores/postStore'
import ContentEditor from '../components/editor/ContentEditor.vue'
import PublishBox from '../components/editor/PublishBox.vue'
import CategoryBox from '../components/editor/CategoryBox.vue'
import TagBox from '../components/editor/TagBox.vue'
import FeaturedImageBox from '../components/editor/FeaturedImageBox.vue'
import SeoAnalyzerPanel from '../components/seo/SeoAnalyzerPanel.vue'

const router = useRouter()
const postStore = usePostStore()

// Form Data
const title = ref('')
const slug = ref('')
const content = ref('')
const focusKeyphrase = ref('')
const seoTitle = ref('')
const metaDescription = ref('')
const canonicalUrl = ref('')
const robotsMeta = ref<'index, follow' | 'noindex, follow' | 'index, nofollow' | 'noindex, nofollow'>('index, follow')
const status = ref<'Published' | 'Draft' | 'Pending Review'>('Draft')
const visibility = ref<'Public' | 'Private' | 'Password protected'>('Public')
const publishDate = ref('')
const selectedCategories = ref<string[]>(['Properti'])
const selectedTags = ref<string[]>([])
const featuredImage = ref('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200&auto=format&fit=crop')

// Calculated Scores
const seoScore = ref(70)
const readabilityScore = ref(75)
const isSaving = ref(false)
const notification = ref<{ type: 'success' | 'error'; message: string } | null>(null)

// Auto-generate slug and SEO Title from Title
watch(title, (newTitle) => {
  if (!slug.value || slug.value === 'sample-post' || slug.value.startsWith('sample')) {
    slug.value = newTitle
      .toLowerCase()
      .trim()
      .replace(/[^\w\s-]/g, '')
      .replace(/[\s_-]+/g, '-')
      .replace(/^-+|-+$/g, '')
  }
  if (!seoTitle.value) {
    seoTitle.value = newTitle ? `${newTitle} | Kencana` : ''
  }
  canonicalUrl.value = `https://kencana.id/posts/${slug.value || 'sample-post'}`
})

watch(slug, (newSlug) => {
  canonicalUrl.value = `https://kencana.id/posts/${newSlug || 'sample-post'}`
})

// Run Analysis function
const executeAnalysis = async () => {
  const payload = {
    title: seoTitle.value || title.value,
    slug: slug.value,
    meta_description: metaDescription.value,
    focus_keyphrase: focusKeyphrase.value,
    content: content.value
  }

  const res = await postStore.runAnalysis(payload)
  seoScore.value = res.computedSeoScore
  readabilityScore.value = res.computedReadabilityScore
}

// Debounced auto-analysis when content or keywords change
let debounceTimeout: any = null
const triggerDebouncedAnalysis = () => {
  clearTimeout(debounceTimeout)
  debounceTimeout = setTimeout(() => {
    executeAnalysis()
  }, 1000)
}

watch([content, focusKeyphrase, seoTitle, metaDescription, slug], () => {
  triggerDebouncedAnalysis()
})

onMounted(() => {
  // Set default initial post content for preview
  title.value = 'Keunggulan Rangka Baja Ringan Kencana untuk Hunian Modern'
  slug.value = 'keunggulan-rangka-baja-ringan-kencana-hunian-modern'
  focusKeyphrase.value = 'baja ringan kencana'
  seoTitle.value = 'Keunggulan Rangka Baja Ringan Kencana untuk Hunian Modern | Kencana'
  metaDescription.value = 'Temukan keunggulan baja ringan Kencana berstandar SNI. Tahan karat, anti rayap, dan presisi tinggi untuk konstruksi atap rumah yang kuat dan kokoh.'
  content.value = `Penggunaan baja ringan Kencana kini menjadi standar utama dalam pembangunan hunian modern di Indonesia. Material ini memberikan proteksi maksimal terhadap rayap, korosi, dan gempa.\n\nKelebihan Menggunakan Baja Ringan Kencana\nKencana menggunakan baja lapis seng dan aluminium berkualitas tinggi yang dirancang dengan ketebalan presisi. Hal ini memudahkan proses instalasi sekaligus menghemat biaya konstruksi hingga 30% dibanding kayu tradisional.\n\nTips Pemasangan yang Tepat\nPastikan rangka dipasang oleh tenaga aplikator tersertifikasi agar distribusi beban atap genteng merata dan aman.`
  selectedCategories.value = ['Konstruksi', 'Material']
  selectedTags.value = ['Baja Ringan', 'Kencana Truss']

  executeAnalysis()
})

// Save / Publish Actions
const handlePublish = () => {
  if (!title.value.trim()) {
    notification.value = { type: 'error', message: 'Silakan isi judul postingan terlebih dahulu.' }
    return
  }

  isSaving.value = true
  status.value = 'Published'

  const created = postStore.addPost({
    title: title.value,
    slug: slug.value || 'post-slug',
    author: 'Admin Kencana',
    categories: [...selectedCategories.value],
    tags: [...selectedTags.value],
    seoScore: seoScore.value,
    readabilityScore: readabilityScore.value,
    seoTitle: seoTitle.value || title.value,
    metaDescription: metaDescription.value,
    focusKeyword: focusKeyphrase.value,
    canonicalUrl: canonicalUrl.value,
    robotsMeta: robotsMeta.value,
    indexStatus: robotsMeta.value.includes('noindex') ? 'Noindex' : 'Indexed',
    status: 'Published',
    content: content.value,
    featuredImage: featuredImage.value
  })

  isSaving.value = false
  notification.value = { type: 'success', message: `Post "${created.title}" berhasil dipublikasikan!` }
  
  setTimeout(() => {
    router.push('/posts')
  }, 1200)
}

const handleSaveDraft = () => {
  isSaving.value = true
  status.value = 'Draft'

  postStore.addPost({
    title: title.value || 'Draft Post Tanpa Judul',
    slug: slug.value || 'draft-post',
    author: 'Admin Kencana',
    categories: [...selectedCategories.value],
    tags: [...selectedTags.value],
    seoScore: seoScore.value,
    readabilityScore: readabilityScore.value,
    seoTitle: seoTitle.value,
    metaDescription: metaDescription.value,
    focusKeyword: focusKeyphrase.value,
    canonicalUrl: canonicalUrl.value,
    robotsMeta: robotsMeta.value,
    indexStatus: 'Indexed',
    status: 'Draft',
    content: content.value,
    featuredImage: featuredImage.value
  })

  isSaving.value = false
  notification.value = { type: 'success', message: 'Draft berhasil disimpan.' }
  setTimeout(() => {
    notification.value = null
  }, 3000)
}
</script>

<template>
  <div class="space-y-4">
    <!-- Page Header -->
    <div class="flex items-center justify-between pb-2 border-b border-gray-200">
      <div class="flex items-center space-x-2">
        <h1 class="text-2xl font-normal text-wp-text">Add New Post</h1>
      </div>
      <div class="flex items-center space-x-2">
        <router-link to="/posts" class="wp-btn text-xs py-1">
          Back to Posts
        </router-link>
      </div>
    </div>

    <!-- Notifications Banner -->
    <div 
      v-if="notification" 
      class="wp-notice"
      :class="notification.type === 'success' ? 'wp-notice-success' : 'wp-notice-error'"
    >
      <div class="flex items-center space-x-2">
        <CheckCircle2 v-if="notification.type === 'success'" class="w-4 h-4 text-emerald-600 shrink-0" />
        <AlertCircle v-else class="w-4 h-4 text-rose-600 shrink-0" />
        <span>{{ notification.message }}</span>
      </div>
      <button @click="notification = null" class="text-gray-400 hover:text-gray-700">&times;</button>
    </div>

    <!-- Main 2-Column WordPress Layout -->
    <div class="grid grid-cols-1 lg:grid-cols-12 gap-5">
      <!-- Left Column: Title, Editor, Kencana SEO Analysis -->
      <div class="lg:col-span-8 space-y-4">
        <!-- Content Editor -->
        <ContentEditor 
          v-model:title="title"
          v-model:slug="slug"
          v-model:content="content"
        />

        <!-- Kencana SEO Analysis Panel directly under editor -->
        <SeoAnalyzerPanel 
          :title="seoTitle || title"
          :slug="slug"
          :meta-description="metaDescription"
          :focus-keyphrase="focusKeyphrase"
          :content="content"
          :canonical-url="canonicalUrl"
          :robots-meta="robotsMeta"
          :featured-image="featuredImage"
          :seo-score="seoScore"
          :readability-score="readabilityScore"
          :analysis-response="postStore.lastAnalysisResponse"
          :is-analyzing="postStore.isAnalyzing"
          @update:focus-keyphrase="focusKeyphrase = $event"
          @update:seo-title="seoTitle = $event"
          @update:meta-description="metaDescription = $event"
          @run-analysis="executeAnalysis"
        />
      </div>

      <!-- Right Column: Sidebar Panels -->
      <div class="lg:col-span-4 space-y-4">
        <!-- 1. Publish Box -->
        <PublishBox 
          v-model:status="status"
          v-model:visibility="visibility"
          :publish-date="publishDate"
          :is-saving="isSaving"
          @save-draft="handleSaveDraft"
          @publish="handlePublish"
          @preview="executeAnalysis"
          @delete="router.push('/posts')"
        />

        <!-- 2. Categories Box -->
        <CategoryBox 
          v-model:selected-categories="selectedCategories"
        />

        <!-- 3. Tags Box -->
        <TagBox 
          v-model:selected-tags="selectedTags"
        />

        <!-- 4. Featured Image Box -->
        <FeaturedImageBox 
          v-model:image-url="featuredImage"
        />
      </div>
    </div>
  </div>
</template>
