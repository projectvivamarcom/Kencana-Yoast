import axios from 'axios'
import type { AnalyzeRequest, AnalyzeResponse } from '../types/seo'

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://127.0.0.1:8000'

export const apiClient = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
  timeout: 10000,
})

/**
 * Sends content and SEO metadata to FastAPI backend for analysis
 * Endpoint: POST /analyze
 */
export async function analyzeContent(payload: AnalyzeRequest): Promise<AnalyzeResponse> {
  try {
    const response = await apiClient.post<AnalyzeResponse>('/analyze', payload)
    return response.data
  } catch (error: any) {
    console.warn('API call to /analyze failed or timed out:', error)
    // If backend is unreachable, throw meaningful error to let the caller handle it or show fallback
    throw error
  }
}

/**
 * Health check endpoint
 */
export async function checkBackendHealth(): Promise<boolean> {
  try {
    const response = await apiClient.get('/')
    return response.status === 200
  } catch {
    return false
  }
}

export default {
  analyzeContent,
  checkBackendHealth,
}
