<script setup lang="ts">
import { ref } from 'vue'
import { Trash2 } from 'lucide-vue-next'
import { usePostStore } from '../stores/postStore'

const postStore = usePostStore()

const newName = ref('')
const newSlug = ref('')

const handleAdd = () => {
  if (!newName.value.trim()) return
  const slug = newSlug.value.trim() || newName.value.toLowerCase().replace(/\s+/g, '-')
  postStore.tags.push({
    id: Date.now(),
    name: newName.value.trim(),
    slug,
    count: 0
  })
  newName.value = ''
  newSlug.value = ''
}

const deleteTag = (id: number) => {
  if (confirm('Delete this tag?')) {
    postStore.tags = postStore.tags.filter(t => t.id !== id)
  }
}
</script>

<template>
  <div class="space-y-4">
    <div class="flex items-center justify-between pb-1 border-b border-gray-200">
      <h1 class="text-2xl font-normal text-wp-text">Tags</h1>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-12 gap-6">
      <!-- Add Tag Form -->
      <div class="md:col-span-5 space-y-3 bg-white p-4 border border-wp-border rounded shadow-xs text-xs">
        <h2 class="text-sm font-semibold text-gray-800 pb-2 border-b border-gray-100">Add New Tag</h2>
        <div class="space-y-1">
          <label class="font-semibold text-gray-700">Name</label>
          <input type="text" v-model="newName" placeholder="e.g. Rumah Minimalis" class="wp-input text-xs" />
        </div>

        <div class="space-y-1">
          <label class="font-semibold text-gray-700">Slug</label>
          <input type="text" v-model="newSlug" placeholder="rumah-minimalis" class="wp-input text-xs font-mono" />
        </div>

        <button type="button" @click="handleAdd" class="wp-btn-primary py-1.5 px-4 text-xs font-semibold">
          Add New Tag
        </button>
      </div>

      <!-- Tags Table -->
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
            <tr v-for="tag in postStore.tags" :key="tag.id" class="hover:bg-gray-50">
              <td class="px-4 py-2.5 font-medium text-gray-900">{{ tag.name }}</td>
              <td class="px-4 py-2.5 text-gray-500 font-mono">{{ tag.slug }}</td>
              <td class="px-4 py-2.5 text-center font-semibold text-gray-700">{{ tag.count }}</td>
              <td class="px-4 py-2.5 text-right">
                <button @click="deleteTag(tag.id)" class="text-rose-600 hover:text-rose-800 p-1">
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
