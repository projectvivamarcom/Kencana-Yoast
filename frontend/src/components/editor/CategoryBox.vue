<script setup lang="ts">
import { ref } from 'vue'
import { ChevronDown, ChevronUp, Plus } from 'lucide-vue-next'
import { usePostStore } from '../../stores/postStore'

const props = defineProps<{
  selectedCategories: string[]
}>()

const emit = defineEmits<{
  (e: 'update:selectedCategories', val: string[]): void
}>()

const postStore = usePostStore()
const isOpen = ref(true)
const activeTab = ref<'all' | 'most_used'>('all')

// Add new category inline form
const showAddCategory = ref(false)
const newCategoryName = ref('')

const toggleCategory = (catName: string) => {
  const current = [...props.selectedCategories]
  const idx = current.indexOf(catName)
  if (idx === -1) {
    current.push(catName)
  } else {
    current.splice(idx, 1)
  }
  emit('update:selectedCategories', current)
}

const addNewCategory = () => {
  if (!newCategoryName.value.trim()) return
  const name = newCategoryName.value.trim()
  const slug = name.toLowerCase().replace(/\s+/g, '-')

  if (!postStore.categories.some(c => c.name.toLowerCase() === name.toLowerCase())) {
    postStore.categories.push({
      id: Date.now(),
      name,
      slug,
      count: 1
    })
  }

  if (!props.selectedCategories.includes(name)) {
    toggleCategory(name)
  }

  newCategoryName.value = ''
  showAddCategory.value = false
}
</script>

<template>
  <div class="wp-postbox bg-white border border-wp-border rounded shadow-xs mb-4">
    <div 
      @click="isOpen = !isOpen"
      class="wp-postbox-header flex items-center justify-between px-3.5 py-2.5 bg-gray-50 border-b border-wp-border cursor-pointer select-none"
    >
      <span class="font-semibold text-xs text-gray-800">Categories</span>
      <button type="button" class="text-gray-500 hover:text-gray-800">
        <ChevronUp v-if="isOpen" class="w-3.5 h-3.5" />
        <ChevronDown v-else class="w-3.5 h-3.5" />
      </button>
    </div>

    <div v-show="isOpen" class="p-3 text-xs space-y-3">
      <!-- Tabs: All Categories vs Most Used -->
      <div class="flex border-b border-gray-200 text-xs">
        <button 
          type="button" 
          @click="activeTab = 'all'"
          class="px-2 py-1 border-b-2 font-medium transition-colors"
          :class="activeTab === 'all' ? 'border-wp-blue text-wp-blue' : 'border-transparent text-gray-500 hover:text-gray-700'"
        >
          All Categories
        </button>
        <button 
          type="button" 
          @click="activeTab = 'most_used'"
          class="px-2 py-1 border-b-2 font-medium transition-colors"
          :class="activeTab === 'most_used' ? 'border-wp-blue text-wp-blue' : 'border-transparent text-gray-500 hover:text-gray-700'"
        >
          Most Used
        </button>
      </div>

      <!-- Categories Checkbox List -->
      <div class="max-h-36 overflow-y-auto space-y-1.5 pr-1 border border-gray-100 p-2 rounded bg-gray-50/50">
        <div 
          v-for="cat in postStore.categories" 
          :key="cat.id" 
          class="flex items-center space-x-2 text-gray-700 hover:text-gray-900"
        >
          <input 
            type="checkbox" 
            :id="`cat-${cat.id}`"
            :checked="selectedCategories.includes(cat.name)"
            @change="toggleCategory(cat.name)"
            class="rounded border-gray-300 text-wp-blue focus:ring-wp-blue"
          />
          <label :for="`cat-${cat.id}`" class="cursor-pointer select-none text-[12px] flex-1">
            {{ cat.name }}
          </label>
        </div>
      </div>

      <!-- Inline Add Category -->
      <div>
        <button 
          type="button" 
          @click="showAddCategory = !showAddCategory"
          class="text-[#2271b1] hover:underline flex items-center space-x-1 text-xs"
        >
          <Plus class="w-3 h-3" />
          <span>+ Add New Category</span>
        </button>

        <div v-if="showAddCategory" class="mt-2 space-y-2 p-2 bg-gray-50 border border-gray-200 rounded">
          <input 
            type="text" 
            v-model="newCategoryName" 
            placeholder="New Category Name"
            class="wp-input text-xs py-1"
            @keyup.enter="addNewCategory"
          />
          <button 
            type="button" 
            @click="addNewCategory"
            class="wp-btn text-xs py-1"
          >
            Add New Category
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
