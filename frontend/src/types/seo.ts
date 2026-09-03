// Types matching FastAPI backend and CMS Post data structure

export interface AnalysisResultItem {
  name: string
  status: 'good' | 'improvement' | 'problem'
  message: string
  details?: Record<string, any>
}

export interface SEOResults {
  results: AnalysisResultItem[]
}

export interface ContentResult {
  word_count: number
}

export interface AnalyzeRequest {
  title: string
  slug: string
  meta_description: string
  focus_keyphrase: string
  content: string
}

export interface AnalyzeResponse {
  seo: SEOResults
  content: ContentResult
}

export type ScoreStatus = 'good' | 'improvement' | 'problem'

export interface TechnicalSEOItem {
  name: string
  status: ScoreStatus
  message: string
  details?: Record<string, any>
}

export interface Post {
  id: number
  title: string
  slug: string
  author: string
  categories: string[]
  tags: string[]
  seoScore: number // 0-100
  readabilityScore: number // 0-100
  seoTitle: string
  metaDescription: string
  focusKeyword: string
  canonicalUrl: string
  robotsMeta: 'index, follow' | 'noindex, follow' | 'noindex, nofollow' | 'index, nofollow'
  indexStatus: 'Indexed' | 'Noindex' | 'Excluded'
  date: string
  status: 'Published' | 'Draft' | 'Pending Review'
  content: string
  featuredImage?: string
  ogTitle?: string
  ogDescription?: string
  ogImage?: string
}

export interface QuickEditData {
  id: number
  title: string
  slug: string
  seoTitle: string
  metaDescription: string
  focusKeyword: string
  canonicalUrl: string
  robotsMeta: Post['robotsMeta']
  status: Post['status']
  categories?: string[]
  tags?: string[]
}

export interface Category {
  id: number
  name: string
  slug: string
  count: number
  parent?: number
}

export interface Tag {
  id: number
  name: string
  slug: string
  count: number
}
