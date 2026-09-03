<script setup lang="ts">
import { ref, watch, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { CheckCircle2, AlertCircle, Sparkles } from 'lucide-vue-next'
import { usePostStore } from '../stores/postStore'
import ContentEditor from '../components/editor/ContentEditor.vue'
import PublishBox from '../components/editor/PublishBox.vue'
import CategoryBox from '../components/editor/CategoryBox.vue'
import TagBox from '../components/editor/TagBox.vue'
import FeaturedImageBox from '../components/editor/FeaturedImageBox.vue'
import SeoAnalyzerPanel from '../components/seo/SeoAnalyzerPanel.vue'

const route = useRoute()
const router = useRouter()
const postStore = usePostStore()

const postId = ref(Number(route.params.id))

// Form Data
const title = ref('')
const slug = ref('')
const content = ref('')
const focusKeyphrase = ref('')
const seoTitle = ref('')
const metaDescription = ref('')
const canonicalUrl = ref('')
const robotsMeta = ref<'index, follow' | 'noindex, follow' | 'index, nofollow' | 'noindex, nofollow'>('index, follow')
const status = ref<'Published' | 'Draft' | 'Pending Review'>('Published')
const visibility = ref<'Public' | 'Private' | 'Password protected'>('Public')
const publishDate = ref('')
const selectedCategories = ref<string[]>([])
const selectedTags = ref<string[]>([])
const featuredImage = ref('')

const seoScore = ref(80)
const readabilityScore = ref(75)
const isSaving = ref(false)
const notification = ref<{ type: 'success' | 'error'; message: string } | null>(null)

// Load existing post data
const loadPost = () => {
  const post = postStore.posts.find(p => p.id === postId.value)
  if (!post) {
    notification.value = { type: 'error', message: 'Post tidak ditemukan. Mengarahkan kembali...' }
    setTimeout(() => router.push('/posts'), 1500)
    return
  }

  title.value = post.title
  slug.value = post.slug
  content.value = post.content || ''
  focusKeyphrase.value = post.focusKeyword || ''
  seoTitle.value = post.seoTitle || post.title
  metaDescription.value = post.metaDescription || ''
  canonicalUrl.value = post.canonicalUrl || `https://kencana.id/posts/${post.slug}`
  robotsMeta.value = post.robotsMeta || 'index, follow'
  status.value = post.status
  publishDate.value = post.date
  selectedCategories.value = [...post.categories]
  selectedTags.value = [...post.tags]
  featuredImage.value = post.featuredImage || ''
  seoScore.value = post.seoScore
  readabilityScore.value = post.readabilityScore

  executeAnalysis()
}

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

// Debounced auto-analysis
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
  loadPost()
})

// Update Post Action
const handleUpdate = () => {
  if (!title.value.trim()) {
    notification.value = { type: 'error', message: 'Judul tidak boleh kosong.' }
    return
  }

  isSaving.value = true

  postStore.updatePost(postId.value, {
    title: title.value,
    slug: slug.value,
    content: content.value,
    focusKeyword: focusKeyphrase.value,
    seoTitle: seoTitle.value,
    metaDescription: metaDescription.value,
    canonicalUrl: canonicalUrl.value,
    robotsMeta: robotsMeta.value,
    status: status.value,
    categories: [...selectedCategories.value],
    tags: [...selectedTags.value],
    featuredImage: featuredImage.value,
    seoScore: seoScore.value,
    readabilityScore: readabilityScore.value
  })

  isSaving.value = false
  notification.value = { type: 'success', message: 'Post berhasil diperbarui.' }
  setTimeout(() => {
    notification.value = null
  }, 3500)
}

const handleDelete = () => {
  if (confirm(`Yakin ingin memindahkan postingan "${title.value}" ke tong sampah?`)) {
    postStore.deletePost(postId.value)
    router.push('/posts')
  }
}
</script>

<template>
  <div class="space-y-4">
    <!-- Page Header -->
    <div class="flex items-center justify-between pb-2 border-b border-gray-200">
      <div class="flex items-center space-x-2">
        <h1 class="text-2xl font-normal text-wp-text">Edit Post</h1>
        <router-link to="/posts/new" class="wp-btn text-xs py-1">
          Add New Post
        </router-link>
      </div>
      <div class="flex items-center space-x-2">
        <router-link to="/posts" class="wp-btn text-xs py-1">
          &larr; Back to Posts
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
      <!-- Left Column: Title, Editor, SEO Analyzer -->
      <div class="lg:col-span-8 space-y-4">
        <ContentEditor 
          v-model:title="title"
          v-model:slug="slug"
          v-model:content="content"
        />

        <!-- SEO Analyzer Panel -->
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
          :is-edit-mode="true"
          :is-saving="isSaving"
          @save-draft="handleUpdate"
          @publish="handleUpdate"
          @preview="executeAnalysis"
          @delete="handleDelete"
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
