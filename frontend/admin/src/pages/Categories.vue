<script setup lang="ts">
import { ref } from 'vue'
import { Plus, Trash2 } from 'lucide-vue-next'
import { usePostStore } from '../stores/postStore'

const postStore = usePostStore()

const newName = ref('')
const newSlug = ref('')
const newDescription = ref('')

const handleAdd = () => {
  if (!newName.value.trim()) return
  const slug = newSlug.value.trim() || newName.value.toLowerCase().replace(/\s+/g, '-')
  postStore.categories.push({
    id: Date.now(),
    name: newName.value.trim(),
    slug,
    count: 0
  })
  newName.value = ''
  newSlug.value = ''
  newDescription.value = ''
}

const deleteCategory = (id: number) => {
  if (confirm('Delete this category?')) {
    postStore.categories = postStore.categories.filter(c => c.id !== id)
  }
}
</script>

<template>
  <div class="space-y-4">
    <div class="flex items-center justify-between pb-1 border-b border-gray-200">
      <h1 class="text-2xl font-normal text-wp-text">Categories</h1>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-12 gap-6">
      <!-- Add New Category Form (Left) -->
      <div class="md:col-span-5 space-y-3 bg-white p-4 border border-wp-border rounded shadow-xs text-xs">
        <h2 class="text-sm font-semibold text-gray-800 pb-2 border-b border-gray-100">Add New Category</h2>
        <div class="space-y-1">
          <label class="font-semibold text-gray-700">Name</label>
          <input type="text" v-model="newName" placeholder="e.g. Perumahan Mewah" class="wp-input text-xs" />
          <p class="text-[11px] text-gray-400">The name is how it appears on your site.</p>
        </div>

        <div class="space-y-1">
          <label class="font-semibold text-gray-700">Slug</label>
          <input type="text" v-model="newSlug" placeholder="perumahan-mewah" class="wp-input text-xs font-mono" />
          <p class="text-[11px] text-gray-400">The "slug" is the URL-friendly version of the name.</p>
        </div>

        <div class="space-y-1">
          <label class="font-semibold text-gray-700">Description</label>
          <textarea v-model="newDescription" rows="3" class="wp-input text-xs"></textarea>
        </div>

        <button type="button" @click="handleAdd" class="wp-btn-primary py-1.5 px-4 text-xs font-semibold">
          Add New Category
        </button>
      </div>

      <!-- Categories Table (Right) -->
      <div class="md:col-span-7 bg-white border border-wp-border rounded shadow-xs overflow-hidden">
        <table class="w-full text-left border-collapse text-xs">
          <thead class="bg-gray-50 border-b border-wp-border text-gray-700">
            <tr>
              <th class="px-4 py-2.5 font-semibold">Name</th>
              <th class="px-4 py-2.5 font-semibold">Slug</th>
              <th class="px-4 py-2.5 font-semibold text-center">Count</th>
              <th class="px-4 py-2.5 font-semibold text-right">Action</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-gray-100">
            <tr v-for="cat in postStore.categories" :key="cat.id" class="hover:bg-gray-50">
              <td class="px-4 py-2.5 font-medium text-gray-900">{{ cat.name }}</td>
              <td class="px-4 py-2.5 text-gray-500 font-mono">{{ cat.slug }}</td>
              <td class="px-4 py-2.5 text-center font-semibold text-gray-700">{{ cat.count }}</td>
              <td class="px-4 py-2.5 text-right">
                <button @click="deleteCategory(cat.id)" class="text-rose-600 hover:text-rose-800 p-1">
                  <Trash2 class="w-3.5 h-3.5" />
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>
