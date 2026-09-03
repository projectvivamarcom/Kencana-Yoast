import { ref } from 'vue'

export const useWebsiteStore = () => {
  const searchQuery = ref('')
  const currentLocale = ref('id')

  return {
    searchQuery,
    currentLocale
  }
}
