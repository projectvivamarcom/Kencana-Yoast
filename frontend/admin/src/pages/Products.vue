<script setup lang="ts">
import { ref, computed } from 'vue'
import { Plus, Search, Filter, Edit, Trash2, Package, CheckCircle2 } from 'lucide-vue-next'

interface Product {
  id: number
  sku: string
  name: string
  category: string
  specification: string
  unit: string
  status: 'Active' | 'Draft' | 'Out of Stock'
  dateAdded: string
}

const products = ref<Product[]>([
  {
    id: 1,
    sku: 'KCN-TRS-C75',
    name: 'Kencana Truss C75.75',
    category: 'Baja Ringan',
    specification: 'Galvalume SNI 4096:2007 | TCT 0.75mm',
    unit: 'Batang (6m)',
    status: 'Active',
    dateAdded: '2026-02-15'
  },
  {
    id: 2,
    sku: 'KCN-GNT-MTL',
    name: 'Genteng Metal Kencana Pasir 2x4',
    category: 'Genteng Metal',
    specification: 'Ketebalan 0.25mm | Lapisan Batuan Alami',
    unit: 'Lembar',
    status: 'Active',
    dateAdded: '2026-02-18'
  },
  {
    id: 3,
    sku: 'KCN-HLW-4040',
    name: 'Hollow Plafon Kencana 40x40',
    category: 'Hollow & Plafon',
    specification: 'Zinc-Aluminium Alloy | TCT 0.30mm',
    unit: 'Batang (4m)',
    status: 'Active',
    dateAdded: '2026-02-20'
  },
  {
    id: 4,
    sku: 'KCN-SPD-1000',
    name: 'Atap Spandek Kencana Eco 1000',
    category: 'Atap & Spandek',
    specification: 'Lebar Efektif 1000mm | Panjang Custom',
    unit: 'Meter Lari',
    status: 'Active',
    dateAdded: '2026-02-22'
  },
  {
    id: 5,
    sku: 'KCN-FLR-DK',
    name: 'Floor Deck Kencana Bondek W-1000',
    category: 'Floor Deck',
    specification: 'High Tensile Steel G550 | Tebal 0.75mm',
    unit: 'Meter Lari',
    status: 'Draft',
    dateAdded: '2026-02-25'
  }
])

const search = ref('')
const selectedCategory = ref('All')
const noticeMessage = ref<string | null>(null)

const categories = ['All', 'Baja Ringan', 'Genteng Metal', 'Hollow & Plafon', 'Atap & Spandek', 'Floor Deck']

const filteredProducts = computed(() => {
  return products.value.filter((p) => {
    const matchSearch = p.name.toLowerCase().includes(search.value.toLowerCase()) || p.sku.toLowerCase().includes(search.value.toLowerCase())
    const matchCat = selectedCategory.value === 'All' || p.category === selectedCategory.value
    return matchSearch && matchCat
  })
})

const deleteProduct = (id: number) => {
  if (confirm('Yakin ingin menghapus produk ini?')) {
    products.value = products.value.filter((p) => p.id !== id)
    noticeMessage.value = 'Produk berhasil dihapus.'
    setTimeout(() => { noticeMessage.value = null }, 3000)
  }
}
</script>

<template>
  <div class="space-y-4">
    <!-- Page Header -->
    <div class="flex items-center justify-between pb-1 border-b border-gray-200">
      <div class="flex items-center space-x-3">
        <h1 class="text-2xl font-normal text-wp-text">Products</h1>
        <button class="wp-btn-primary text-xs py-1 px-2.5 flex items-center space-x-1">
          <Plus class="w-3.5 h-3.5" />
          <span>Add New Product</span>
        </button>
      </div>

      <div class="text-xs text-gray-500 font-mono">
        Total: {{ products.length }} Produk
      </div>
    </div>

    <!-- Notice -->
    <div v-if="noticeMessage" class="wp-notice wp-notice-success flex items-center justify-between">
      <div class="flex items-center space-x-2">
        <CheckCircle2 class="w-4 h-4 text-emerald-600 shrink-0" />
        <span>{{ noticeMessage }}</span>
      </div>
      <button @click="noticeMessage = null" class="text-gray-400 hover:text-gray-700">&times;</button>
    </div>

    <!-- Filters & Search Toolbar -->
    <div class="bg-white p-3 border border-wp-border rounded shadow-xs flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
      <div class="flex items-center space-x-2">
        <select v-model="selectedCategory" class="wp-select text-xs">
          <option v-for="cat in categories" :key="cat" :value="cat">
            {{ cat === 'All' ? 'All Categories' : cat }}
          </option>
        </select>
      </div>

      <div class="relative w-full sm:w-64">
        <input 
          type="text" 
          v-model="search" 
          placeholder="Search products by SKU or name..." 
          class="wp-input pl-8 text-xs py-1.5"
        />
        <Search class="w-3.5 h-3.5 text-gray-400 absolute left-2.5 top-2.5" />
      </div>
    </div>

    <!-- Products Table -->
    <div class="bg-white border border-wp-border rounded shadow-xs overflow-hidden">
      <div class="overflow-x-auto min-h-[250px]">
        <table class="w-full text-left border-collapse text-xs">
          <thead class="bg-gray-50 border-b border-wp-border text-gray-700 select-none">
            <tr>
              <th class="px-4 py-2.5 font-semibold">SKU</th>
              <th class="px-4 py-2.5 font-semibold min-w-[200px]">Product Name</th>
              <th class="px-4 py-2.5 font-semibold">Category</th>
              <th class="px-4 py-2.5 font-semibold">Specification</th>
              <th class="px-4 py-2.5 font-semibold">Unit</th>
              <th class="px-4 py-2.5 font-semibold text-center">Status</th>
              <th class="px-4 py-2.5 font-semibold text-right">Actions</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-gray-100">
            <tr v-for="prod in filteredProducts" :key="prod.id" class="hover:bg-blue-50/30 transition-colors">
              <td class="px-4 py-3 font-mono text-gray-600 font-semibold">{{ prod.sku }}</td>
              <td class="px-4 py-3 font-semibold text-[#2271b1]">
                <div class="flex items-center space-x-2">
                  <Package class="w-4 h-4 text-gray-400 shrink-0" />
                  <span>{{ prod.name }}</span>
                </div>
              </td>
              <td class="px-4 py-3 text-gray-600">{{ prod.category }}</td>
              <td class="px-4 py-3 text-gray-500">{{ prod.specification }}</td>
              <td class="px-4 py-3 text-gray-600">{{ prod.unit }}</td>
              <td class="px-4 py-3 text-center">
                <span 
                  class="px-2 py-0.5 rounded-full text-[10px] font-semibold"
                  :class="prod.status === 'Active' 
                    ? 'bg-emerald-50 text-emerald-700 border border-emerald-200' 
                    : 'bg-gray-100 text-gray-600 border border-gray-200'"
                >
                  {{ prod.status }}
                </span>
              </td>
              <td class="px-4 py-3 text-right">
                <div class="flex items-center justify-end space-x-2 text-xs">
                  <button class="text-[#2271b1] hover:underline flex items-center space-x-0.5">
                    <Edit class="w-3.5 h-3.5" />
                    <span>Edit</span>
                  </button>
                  <span class="text-gray-300">|</span>
                  <button @click="deleteProduct(prod.id)" class="text-rose-600 hover:underline flex items-center space-x-0.5">
                    <Trash2 class="w-3.5 h-3.5" />
                    <span>Delete</span>
                  </button>
                </div>
              </td>
            </tr>

            <tr v-if="filteredProducts.length === 0">
              <td colspan="7" class="text-center py-10 text-gray-500 text-xs">
                Tidak ada produk yang cocok dengan pencarian.
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>
