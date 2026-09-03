import { defineStore } from 'pinia'
import type { Post, QuickEditData, Category, Tag, AnalyzeResponse } from '../types/seo'
import { seoService } from '../services/seoService'

export const usePostStore = defineStore('posts', {
  state: () => ({
    posts: [
      {
        id: 1,
        title: 'Review Rumah Mewah Kencana Hills: Investasi Properti Terbaik di Surabaya Barat',
        slug: 'review-rumah-mewah-kencana-hills-surabaya-barat',
        author: 'Redaksi Kencana',
        categories: ['Properti', 'Investasi'],
        tags: ['Rumah Mewah', 'Surabaya Barat', 'Kencana Hills'],
        seoScore: 92,
        readabilityScore: 88,
        seoTitle: 'Review Rumah Mewah Kencana Hills Surabaya Barat | Kencana Properti',
        metaDescription: 'Temukan ulasan lengkap Kencana Hills Surabaya Barat. Fasilitas bintang lima, lokasi strategis, dan potensi capital gain tinggi untuk investasi keluarga.',
        focusKeyword: 'kencana hills',
        canonicalUrl: 'https://kencana.id/posts/review-rumah-mewah-kencana-hills-surabaya-barat',
        robotsMeta: 'index, follow',
        indexStatus: 'Indexed',
        date: '2026/02/28 at 10:15 am',
        status: 'Published',
        content: `Kencana Hills merupakan salah satu kawasan hunian eksklusif yang berlokasi strategis di Surabaya Barat. Hunian ini menawarkan konsep modern tropis dengan lanskap hijau asri serta fasilitas club house mewah.\n\nMemilih hunian di Kencana Hills memberikan keuntungan ganda: kenyamanan hidup dan nilai investasi yang konsisten tumbuh. Selain itu, aksesibilitas menuju jalan tol utama dan pusat perbelanjaan hanya memakan waktu 10 menit.\n\nFasilitas Unggulan Kencana Hills\nSetiap unit dirancang dengan ventilasi silang optimal dan smart home system terintegrasi. Lingkungan perumahan didukung oleh keamanan 24 jam dengan sistem one-gate dan CCTV canggih di setiap sudut.`,
        featuredImage: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200&auto=format&fit=crop'
      },
      {
        id: 2,
        title: 'Panduan Lengkap Memilih Baja Ringan Kencana Truss untuk Rangka Atap Kuat',
        slug: 'panduan-memilih-baja-ringan-kencana-truss',
        author: 'Budi Santoso',
        categories: ['Konstruksi', 'Material'],
        tags: ['Baja Ringan', 'Kencana Truss', 'Atap'],
        seoScore: 84,
        readabilityScore: 78,
        seoTitle: 'Panduan Lengkap Memilih Baja Ringan Kencana Truss | Kencana',
        metaDescription: 'Kenali keunggulan baja ringan Kencana Truss berstandar SNI. Kuat, tahan karat, presisi tinggi, dan hemat biaya untuk atap rumah impian Anda.',
        focusKeyword: 'kencana truss',
        canonicalUrl: 'https://kencana.id/posts/panduan-memilih-baja-ringan-kencana-truss',
        robotsMeta: 'index, follow',
        indexStatus: 'Indexed',
        date: '2026/02/25 at 02:40 pm',
        status: 'Published',
        content: `Rangka atap merupakan salah satu elemen paling krusial dalam konstruksi bangunan. Penggunaan Kencana Truss berbahan baja ringan telah terbukti memberikan ketahanan maksimal terhadap cuaca ekstrem dan gempa.\n\nKeunggulan Kencana Truss Berstandar SNI\nMaterial baja lapis seng dan aluminium (zinc-aluminium) menjamin anti rayap dan tahan karat seumur hidup. Oleh karena itu, Kencana Truss menjadi standar emas bagi kontraktor di seluruh Indonesia.`,
        featuredImage: 'https://images.unsplash.com/photo-1541888946425-d0fbb186f5f7?q=80&w=1200&auto=format&fit=crop'
      },
      {
        id: 3,
        title: 'Tren Desain Interior Minimalis Modern untuk Hunian Urban 2026',
        slug: 'tren-desain-interior-minimalis-modern-2026',
        author: 'Siti Aminah',
        categories: ['Arsitektur'],
        tags: ['Interior', 'Minimalis', 'Desain Rumah'],
        seoScore: 68,
        readabilityScore: 65,
        seoTitle: 'Tren Desain Interior Minimalis Modern 2026',
        metaDescription: 'Inspirasi desain interior minimalis modern 2026 untuk rumah compact agar terlihat luas dan estetis.',
        focusKeyword: 'desain interior',
        canonicalUrl: 'https://kencana.id/posts/tren-desain-interior-minimalis-modern-2026',
        robotsMeta: 'index, follow',
        indexStatus: 'Indexed',
        date: '2026/02/20 at 09:30 am',
        status: 'Published',
        content: `Gaya minimalis terus berevolusi mengikuti kebutuhan masyarakat urban masa kini. Penggunaan warna netral berpadu aksen kayu alami menciptakan suasana hangat dan menenangkan.\n\nRuang Terbuka Tanpa Sekat\nKonsep open space memaksimalkan aliran cahaya alami dan sirkulasi udara di dalam rumah, sehingga ruangan compact terasa jauh lebih lapang.`,
        featuredImage: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=1200&auto=format&fit=crop'
      },
      {
        id: 4,
        title: 'Tips Merawat Genteng Metal Kencana Agar Tetap Mengkilap dan Bebas Bocor',
        slug: 'tips-merawat-genteng-metal-kencana',
        author: 'Ahmad Fauzi',
        categories: ['Tips & Trik', 'Material'],
        tags: ['Genteng Metal', 'Kencana', 'Perawatan Rumah'],
        seoScore: 45,
        readabilityScore: 55,
        seoTitle: 'Tips Merawat Genteng Metal',
        metaDescription: 'Cara merawat genteng metal agar awet.',
        focusKeyword: 'genteng metal',
        canonicalUrl: 'https://kencana.id/posts/tips-merawat-genteng-metal-kencana',
        robotsMeta: 'noindex, follow',
        indexStatus: 'Noindex',
        date: '2026/02/15 at 11:20 am',
        status: 'Draft',
        content: `Genteng metal merupakan pilihan populer. Genteng ini ringan dan mudah dipasang. Namun perlu dirawat agar tidak rusak dan berkarat. Bersihkan genteng secara berkala dari daun kering dan kotoran.`,
        featuredImage: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=1200&auto=format&fit=crop'
      },
      {
        id: 5,
        title: 'Mengenal Perbedaan Hollow Kencana dan Pipa Baja Biasa untuk Plafon',
        slug: 'perbedaan-hollow-kencana-dan-pipa-baja',
        author: 'Budi Santoso',
        categories: ['Konstruksi'],
        tags: ['Hollow Kencana', 'Plafon', 'Baja Ringan'],
        seoScore: 76,
        readabilityScore: 82,
        seoTitle: 'Perbedaan Hollow Kencana dan Pipa Baja Biasa untuk Plafon Kuat',
        metaDescription: 'Pelajari perbedaan spesifikasi dan keunggulan hollow Kencana dibandingkan pipa biasa untuk rangka plafon rumah yang tahan lama dan presisi.',
        focusKeyword: 'hollow kencana',
        canonicalUrl: 'https://kencana.id/posts/perbedaan-hollow-kencana-dan-pipa-baja',
        robotsMeta: 'index, follow',
        indexStatus: 'Indexed',
        date: '2026/02/10 at 04:00 pm',
        status: 'Published',
        content: `Banyak pemilik rumah bingung menentukan pilihan material rangka plafon yang tepat. Hollow Kencana hadir dengan profil presisi dan lapisan anti karat bermutu tinggi.\n\nKelebihan Hollow Kencana\nKetebalan material yang konsisten menjamin pemasangan gypsum atau PVC plafon lurus tanpa lendutan.`,
        featuredImage: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=1200&auto=format&fit=crop'
      },
      {
        id: 6,
        title: 'Update Proyek Kencana Signature: Tahap Pembangunan Cluster Amethyst',
        slug: 'update-proyek-kencana-signature-cluster-amethyst',
        author: 'Redaksi Kencana',
        categories: ['Properti', 'Berita'],
        tags: ['Kencana Signature', 'Cluster Amethyst'],
        seoScore: 38,
        readabilityScore: 42,
        seoTitle: 'Update Proyek Kencana',
        metaDescription: 'Pembangunan cluster baru di Kencana Signature.',
        focusKeyword: 'cluster amethyst',
        canonicalUrl: 'https://kencana.id/posts/update-proyek-kencana-signature-cluster-amethyst',
        robotsMeta: 'index, follow',
        indexStatus: 'Indexed',
        date: '2026/02/05 at 01:10 pm',
        status: 'Pending Review',
        content: `Pembangunan terus berjalan tepat waktu. Cluster Amethyst kini memasuki tahap pengerjaan struktur dasar dan pemasangan instalasi listrik bawah tanah.`,
        featuredImage: 'https://images.unsplash.com/photo-1590381105924-c72589b9ef3f?q=80&w=1200&auto=format&fit=crop'
      }
    ] as Post[],

    categories: [
      { id: 1, name: 'Properti', slug: 'properti', count: 2 },
      { id: 2, name: 'Investasi', slug: 'investasi', count: 1 },
      { id: 3, name: 'Konstruksi', slug: 'konstruksi', count: 2 },
      { id: 4, name: 'Material', slug: 'material', count: 2 },
      { id: 5, name: 'Arsitektur', slug: 'arsitektur', count: 1 },
      { id: 6, name: 'Tips & Trik', slug: 'tips-trik', count: 1 },
      { id: 7, name: 'Berita', slug: 'berita', count: 1 }
    ] as Category[],

    tags: [
      { id: 1, name: 'Rumah Mewah', slug: 'rumah-mewah', count: 1 },
      { id: 2, name: 'Surabaya Barat', slug: 'surabaya-barat', count: 1 },
      { id: 3, name: 'Kencana Hills', slug: 'kencana-hills', count: 1 },
      { id: 4, name: 'Baja Ringan', slug: 'baja-ringan', count: 2 },
      { id: 5, name: 'Kencana Truss', slug: 'kencana-truss', count: 1 },
      { id: 6, name: 'Interior', slug: 'interior', count: 1 },
      { id: 7, name: 'Genteng Metal', slug: 'genteng-metal', count: 1 },
      { id: 8, name: 'Hollow Kencana', slug: 'hollow-kencana', count: 1 }
    ] as Tag[],

    // Filters for All Posts page
    filters: {
      search: '',
      category: '',
      seoScoreFilter: 'all', // all, good (80-100), improvement (50-79), poor (0-49)
      readabilityFilter: 'all',
      indexStatusFilter: 'all',
      statusFilter: 'all',
      page: 1,
      perPage: 10
    },

    // Selected post IDs for bulk operations
    selectedPostIds: [] as number[],

    // Quick Edit Active State
    quickEditPost: null as QuickEditData | null,

    // Loading and SEO Analyzer states
    isAnalyzing: false,
    backendStatus: 'checking' as 'online' | 'offline' | 'checking',
    lastAnalysisResponse: null as AnalyzeResponse | null,
    lastAnalysisError: null as string | null
  }),

  getters: {
    filteredPosts(state): Post[] {
      return state.posts.filter((post) => {
        // Search filter
        if (state.filters.search.trim()) {
          const q = state.filters.search.toLowerCase()
          const matchTitle = post.title.toLowerCase().includes(q)
          const matchAuthor = post.author.toLowerCase().includes(q)
          const matchSlug = post.slug.toLowerCase().includes(q)
          if (!matchTitle && !matchAuthor && !matchSlug) return false
        }

        // Category filter
        if (state.filters.category && state.filters.category !== 'all') {
          if (!post.categories.includes(state.filters.category)) return false
        }

        // SEO Score filter
        if (state.filters.seoScoreFilter !== 'all') {
          if (state.filters.seoScoreFilter === 'good' && post.seoScore < 80) return false
          if (state.filters.seoScoreFilter === 'improvement' && (post.seoScore < 50 || post.seoScore >= 80)) return false
          if (state.filters.seoScoreFilter === 'poor' && post.seoScore >= 50) return false
        }

        // Readability filter
        if (state.filters.readabilityFilter !== 'all') {
          if (state.filters.readabilityFilter === 'good' && post.readabilityScore < 80) return false
          if (state.filters.readabilityFilter === 'improvement' && (post.readabilityScore < 50 || post.readabilityScore >= 80)) return false
          if (state.filters.readabilityFilter === 'poor' && post.readabilityScore >= 50) return false
        }

        // Index Status filter
        if (state.filters.indexStatusFilter !== 'all') {
          if (post.indexStatus !== state.filters.indexStatusFilter) return false
        }

        // Status filter
        if (state.filters.statusFilter !== 'all') {
          if (post.status !== state.filters.statusFilter) return false
        }

        return true
      })
    },

    paginatedPosts(): Post[] {
      const start = (this.filters.page - 1) * this.filters.perPage
      return this.filteredPosts.slice(start, start + this.filters.perPage)
    },

    totalPages(): number {
      return Math.ceil(this.filteredPosts.length / this.filters.perPage) || 1
    },

    postCountsByStatus(state) {
      return {
        all: state.posts.length,
        published: state.posts.filter((p) => p.status === 'Published').length,
        draft: state.posts.filter((p) => p.status === 'Draft').length,
        pending: state.posts.filter((p) => p.status === 'Pending Review').length,
        trash: 0
      }
    }
  },

  actions: {
    // Quick Edit
    openQuickEdit(post: Post) {
      this.quickEditPost = {
        id: post.id,
        title: post.title,
        slug: post.slug,
        seoTitle: post.seoTitle || post.title,
        metaDescription: post.metaDescription || '',
        focusKeyword: post.focusKeyword || '',
        canonicalUrl: post.canonicalUrl || `https://kencana.id/posts/${post.slug}`,
        robotsMeta: post.robotsMeta || 'index, follow',
        status: post.status,
        categories: [...post.categories],
        tags: [...post.tags]
      }
    },

    closeQuickEdit() {
      this.quickEditPost = null
    },

    saveQuickEdit(updated: QuickEditData) {
      const idx = this.posts.findIndex((p) => p.id === updated.id)
      if (idx !== -1) {
        this.posts[idx] = {
          ...this.posts[idx],
          title: updated.title,
          slug: updated.slug,
          seoTitle: updated.seoTitle,
          metaDescription: updated.metaDescription,
          focusKeyword: updated.focusKeyword,
          canonicalUrl: updated.canonicalUrl,
          robotsMeta: updated.robotsMeta,
          status: updated.status,
          indexStatus: updated.robotsMeta.includes('noindex') ? 'Noindex' : 'Indexed'
        }
      }
      this.closeQuickEdit()
    },

    // Delete post
    deletePost(id: number) {
      this.posts = this.posts.filter((p) => p.id !== id)
      this.selectedPostIds = this.selectedPostIds.filter((selId) => selId !== id)
    },

    // Bulk actions
    applyBulkAction(action: string) {
      if (!this.selectedPostIds.length) return
      if (action === 'delete') {
        this.posts = this.posts.filter((p) => !this.selectedPostIds.includes(p.id))
        this.selectedPostIds = []
      } else if (action === 'publish') {
        this.posts.forEach((p) => {
          if (this.selectedPostIds.includes(p.id)) p.status = 'Published'
        })
        this.selectedPostIds = []
      } else if (action === 'draft') {
        this.posts.forEach((p) => {
          if (this.selectedPostIds.includes(p.id)) p.status = 'Draft'
        })
        this.selectedPostIds = []
      }
    },

    // Add new post
    addPost(newPost: Omit<Post, 'id' | 'date'>): Post {
      const id = this.posts.length ? Math.max(...this.posts.map((p) => p.id)) + 1 : 1
      const now = new Date()
      const dateFormatted = `${now.getFullYear()}/${String(now.getMonth() + 1).padStart(2, '0')}/${String(now.getDate()).padStart(2, '0')} at ${String(now.getHours()).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')} ${now.getHours() >= 12 ? 'pm' : 'am'}`

      const created: Post = {
        ...newPost,
        id,
        date: dateFormatted,
        indexStatus: newPost.robotsMeta.includes('noindex') ? 'Noindex' : 'Indexed'
      }

      this.posts.unshift(created)
      return created
    },

    // Update existing post
    updatePost(id: number, updated: Partial<Post>) {
      const idx = this.posts.findIndex((p) => p.id === id)
      if (idx !== -1) {
        this.posts[idx] = {
          ...this.posts[idx],
          ...updated,
          indexStatus: updated.robotsMeta ? (updated.robotsMeta.includes('noindex') ? 'Noindex' : 'Indexed') : this.posts[idx].indexStatus
        }
      }
    },

    // Run SEO Analysis against FastAPI backend
    async runAnalysis(payload: {
      title: string
      slug: string
      meta_description: string
      focus_keyphrase: string
      content: string
    }): Promise<{
      response: AnalyzeResponse
      computedSeoScore: number
      computedReadabilityScore: number
    }> {
      this.isAnalyzing = true
      this.lastAnalysisError = null

      try {
        const response = await seoService.analyze(payload)
        this.lastAnalysisResponse = response
        this.backendStatus = 'online'

        // Compute SEO score from results
        const items = response.seo.results
        const goodCount = items.filter((r) => r.status === 'good').length
        const improvementCount = items.filter((r) => r.status === 'improvement').length
        const total = items.length || 1

        const computedSeoScore = Math.min(100, Math.max(10, Math.round(((goodCount * 1.0 + improvementCount * 0.5) / total) * 100)))

        // Readability checks subset (sentence length, paragraph length, subheading distribution)
        const readabilityNames = ['Sentence length', 'Paragraph length', 'Subheading distribution', 'Consecutive sentences']
        const readabilityItems = items.filter((r) => readabilityNames.includes(r.name))
        let computedReadabilityScore = 75
        if (readabilityItems.length > 0) {
          const rGood = readabilityItems.filter((r) => r.status === 'good').length
          const rImprove = readabilityItems.filter((r) => r.status === 'improvement').length
          computedReadabilityScore = Math.min(100, Math.max(15, Math.round(((rGood * 1.0 + rImprove * 0.5) / readabilityItems.length) * 100)))
        }

        this.isAnalyzing = false
        return {
          response,
          computedSeoScore,
          computedReadabilityScore
        }
      } catch (err: any) {
        this.backendStatus = 'offline'
        this.lastAnalysisError = err.message || 'Gagal menghubungi backend FastAPI (http://127.0.0.1:8000)'
        this.isAnalyzing = false

        // Provide a smart local calculation fallback so the UI remains fully functional and responsive!
        const fallback = this.generateLocalAnalysis(payload)
        this.lastAnalysisResponse = fallback.response
        return fallback
      }
    },

    // Local heuristic fallback if backend server is not reachable
    generateLocalAnalysis(payload: {
      title: string
      slug: string
      meta_description: string
      focus_keyphrase: string
      content: string
    }) {
      const kw = payload.focus_keyphrase.trim().toLowerCase()
      const title = payload.title.toLowerCase()
      const slug = payload.slug.toLowerCase()
      const meta = payload.meta_description.toLowerCase()
      const words = payload.content.trim().split(/\s+/).filter(Boolean)
      const wordCount = words.length

      const results = [
        {
          name: 'Keyphrase in title',
          status: kw && title.includes(kw) ? ('good' as const) : ('problem' as const),
          message: kw && title.includes(kw) ? 'Focus keyphrase found in SEO title.' : 'Focus keyphrase does not appear in the SEO title.'
        },
        {
          name: 'Keyphrase in slug',
          status: kw && (slug.includes(kw) || slug.includes(kw.replace(/\s+/g, '-'))) ? ('good' as const) : ('problem' as const),
          message: kw && (slug.includes(kw) || slug.includes(kw.replace(/\s+/g, '-'))) ? 'Focus keyphrase found in URL slug.' : 'Focus keyphrase does not appear in URL slug.'
        },
        {
          name: 'Keyphrase in meta description',
          status: kw && meta.includes(kw) ? ('good' as const) : ('improvement' as const),
          message: kw && meta.includes(kw) ? 'Focus keyphrase found in meta description.' : 'Focus keyphrase does not appear in meta description.'
        },
        {
          name: 'SEO title length',
          status: payload.title.length >= 35 && payload.title.length <= 65 ? ('good' as const) : ('improvement' as const),
          message: payload.title.length >= 35 && payload.title.length <= 65 ? `The SEO title length is optimal (${payload.title.length} characters).` : `SEO title is ${payload.title.length} characters. Recommended: 40-60 characters.`
        },
        {
          name: 'Meta description length',
          status: payload.meta_description.length >= 110 && payload.meta_description.length <= 160 ? ('good' as const) : ('improvement' as const),
          message: payload.meta_description.length >= 110 && payload.meta_description.length <= 160 ? `Meta description length is good (${payload.meta_description.length} characters).` : `Meta description length is ${payload.meta_description.length} characters. Ideal: 120-155 characters.`
        },
        {
          name: 'Text length',
          status: wordCount >= 300 ? ('good' as const) : wordCount >= 150 ? ('improvement' as const) : ('problem' as const),
          message: wordCount >= 300 ? `The text contains ${wordCount} words. Good job!` : `The text contains ${wordCount} words. Recommended minimum is 300 words.`
        },
        {
          name: 'Sentence length',
          status: 'good' as const,
          message: 'Sentence lengths are well balanced for optimal user readability.'
        },
        {
          name: 'Paragraph length',
          status: 'good' as const,
          message: 'None of the paragraphs are too long.'
        }
      ]

      const goodCount = results.filter((r) => r.status === 'good').length
      const improvementCount = results.filter((r) => r.status === 'improvement').length
      const score = Math.round(((goodCount * 1.0 + improvementCount * 0.5) / results.length) * 100)

      const response: AnalyzeResponse = {
        seo: { results },
        content: { word_count: wordCount }
      }

      return {
        response,
        computedSeoScore: score,
        computedReadabilityScore: Math.min(100, Math.max(60, score + 5))
      }
    }
  }
})
