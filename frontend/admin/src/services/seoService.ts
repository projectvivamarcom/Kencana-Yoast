import axios from 'axios'
import type { AnalyzeRequest, AnalyzeResponse } from '../types/seo'

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://127.0.0.1:8000'

export const seoApiClient = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
  timeout: 10000,
})

/**
 * Kencana SEO Engine Service
 * Handles communication with the FastAPI SEO Analyzer endpoint
 */
export const seoService = {
  /**
   * Run real-time SEO & Readability analysis
   * Calls: POST /analyze
   */
  async analyze(payload: AnalyzeRequest): Promise<AnalyzeResponse> {
    const response = await seoApiClient.post<AnalyzeResponse>('/analyze', payload)
    return response.data
  },

  /**
   * Check status of the Kencana SEO Engine
   * Calls: GET /
   */
  async checkHealth(): Promise<{ status: string; service: string; version: string }> {
    const response = await seoApiClient.get('/')
    return response.data
  },
}

export default seoService
