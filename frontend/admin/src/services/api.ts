import axios from 'axios'
import type { AnalyzeRequest, AnalyzeResponse } from '../types/seo'
import type { AuthResponse, LoginCredentials, User } from '../types/auth'

// Laravel Backend API Client
const LARAVEL_API_BASE_URL = import.meta.env.VITE_LARAVEL_API_BASE_URL || 'http://127.0.0.1:8080'

export const laravelApi = axios.create({
  baseURL: `${LARAVEL_API_BASE_URL}/api/v1`,
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
  },
  timeout: 15000,
})

// Attach Bearer Token automatically
laravelApi.interceptors.request.use((config) => {
  const token = localStorage.getItem('kencana_auth_token')
  if (token) {
    config.headers.Authorization = `Bearer ${token}`
  }
  return config
})

// Global Response Interceptor for Unauthorized / Forbidden
laravelApi.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      localStorage.removeItem('kencana_auth_token')
      localStorage.removeItem('kencana_auth_user')
      if (window.location.pathname !== '/login') {
        window.location.href = '/login'
      }
    }
    return Promise.reject(error)
  }
)

// FastAPI SEO Engine Client
const SEO_API_BASE_URL = import.meta.env.VITE_SEO_API_BASE_URL || 'http://127.0.0.1:8000'

export const seoApi = axios.create({
  baseURL: SEO_API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
  timeout: 10000,
})

// Authentication API methods
export async function loginApi(credentials: LoginCredentials): Promise<AuthResponse> {
  const response = await laravelApi.post<AuthResponse>('/auth/login', credentials)
  return response.data
}

export async function logoutApi(): Promise<void> {
  await laravelApi.post('/auth/logout')
}

export async function fetchCurrentUserApi(): Promise<User> {
  const response = await laravelApi.get<User>('/auth/me')
  return response.data
}

export async function fetchDashboardStatsApi(): Promise<any> {
  const response = await laravelApi.get('/dashboard/stats')
  return response.data
}

// SEO Engine API methods
export async function analyzeContent(payload: AnalyzeRequest): Promise<AnalyzeResponse> {
  try {
    const response = await seoApi.post<AnalyzeResponse>('/analyze', payload)
    return response.data
  } catch (error: any) {
    console.warn('API call to /analyze failed or timed out:', error)
    throw error
  }
}

export async function checkBackendHealth(): Promise<boolean> {
  try {
    const response = await seoApi.get('/')
    return response.status === 200
  } catch {
    return false
  }
}

export default {
  laravelApi,
  seoApi,
  loginApi,
  logoutApi,
  fetchCurrentUserApi,
  fetchDashboardStatsApi,
  analyzeContent,
  checkBackendHealth,
}
