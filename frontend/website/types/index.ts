export interface Product {
  id: number
  slug: string
  name: string
  category: string
  tagline: string
  description: string
  image: string
  specifications: Record<string, string>
  features: string[]
}

export interface Article {
  id: number
  slug: string
  title: string
  category: string
  excerpt: string
  content: string
  author: string
  date: string
  readTime: string
  image: string
}

export interface Branch {
  id: number
  city: string
  name: string
  address: string
  phone: string
  email: string
  type: 'Pabrik & Kantor Pusat' | 'Depo Distribusi' | 'Kantor Cabang'
}

export interface JobOpening {
  id: number
  title: string
  department: string
  location: string
  type: string
  description: string
  requirements: string[]
}
