/**
 * Public Website API Client Service
 * Configured to communicate with Laravel Main Backend API
 */

export const getApiBaseUrl = () => {
  return process.env.NUXT_PUBLIC_API_BASE || 'http://127.0.0.1:8000'
}

export const websiteApi = {
  async getArticles() {
    return useArticles().articles
  },
  async getProducts() {
    return useProducts().products
  },
  async getBranches() {
    return useBranches().branches
  },
  async getJobs() {
    return useCareers().jobs
  }
}
