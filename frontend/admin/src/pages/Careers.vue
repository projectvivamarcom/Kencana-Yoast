<script setup lang="ts">
import { ref, computed } from 'vue'
import { Plus, Search, Edit, Trash2, Briefcase, CheckCircle2, Users } from 'lucide-vue-next'

interface JobOpening {
  id: number
  title: string
  department: string
  location: string
  type: 'Full-Time' | 'Contract'
  applicantsCount: number
  status: 'Open' | 'Closed' | 'Draft'
  postedDate: string
}

const jobs = ref<JobOpening[]>([
  {
    id: 1,
    title: 'Senior Civil Engineer (Structural Steel)',
    department: 'Engineering & R&D',
    location: 'Surabaya Head Office',
    type: 'Full-Time',
    applicantsCount: 24,
    status: 'Open',
    postedDate: '2026-02-10'
  },
  {
    id: 2,
    title: 'Quality Assurance Supervisor',
    department: 'Manufacturing',
    location: 'Pabrik Kencana Mojokerto',
    type: 'Full-Time',
    applicantsCount: 18,
    status: 'Open',
    postedDate: '2026-02-14'
  },
  {
    id: 3,
    title: 'Area Sales Manager (B2B Project)',
    department: 'Sales & Marketing',
    location: 'Jakarta Branch',
    type: 'Full-Time',
    applicantsCount: 32,
    status: 'Open',
    postedDate: '2026-02-18'
  },
  {
    id: 4,
    title: 'Digital Marketing & Content Specialist',
    department: 'Brand & Communications',
    location: 'Surabaya / Hybrid',
    type: 'Full-Time',
    applicantsCount: 45,
    status: 'Open',
    postedDate: '2026-02-22'
  },
  {
    id: 5,
    title: 'Warehouse & Logistics Staff',
    department: 'Supply Chain',
    location: 'Depo Semarang',
    type: 'Contract',
    applicantsCount: 12,
    status: 'Closed',
    postedDate: '2026-01-15'
  }
])

const search = ref('')
const selectedDepartment = ref('All')
const noticeMessage = ref<string | null>(null)

const departments = ['All', 'Engineering & R&D', 'Manufacturing', 'Sales & Marketing', 'Brand & Communications', 'Supply Chain']

const filteredJobs = computed(() => {
  return jobs.value.filter((j) => {
    const matchSearch = j.title.toLowerCase().includes(search.value.toLowerCase()) || j.location.toLowerCase().includes(search.value.toLowerCase())
    const matchDept = selectedDepartment.value === 'All' || j.department === selectedDepartment.value
    return matchSearch && matchDept
  })
})

const deleteJob = (id: number) => {
  if (confirm('Hapus lowongan pekerjaan ini?')) {
    jobs.value = jobs.value.filter((j) => j.id !== id)
    noticeMessage.value = 'Lowongan berhasil dihapus.'
    setTimeout(() => { noticeMessage.value = null }, 3000)
  }
}
</script>

<template>
  <div class="space-y-4">
    <!-- Page Header -->
    <div class="flex items-center justify-between pb-1 border-b border-gray-200">
      <div class="flex items-center space-x-3">
        <h1 class="text-2xl font-normal text-wp-text">Careers</h1>
        <button class="wp-btn-primary text-xs py-1 px-2.5 flex items-center space-x-1">
          <Plus class="w-3.5 h-3.5" />
          <span>Post New Job</span>
        </button>
      </div>

      <div class="text-xs text-gray-500 font-mono">
        Total: {{ jobs.length }} Lowongan
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
        <select v-model="selectedDepartment" class="wp-select text-xs">
          <option v-for="dept in departments" :key="dept" :value="dept">
            {{ dept === 'All' ? 'All Departments' : dept }}
          </option>
        </select>
      </div>

      <div class="relative w-full sm:w-64">
        <input 
          type="text" 
          v-model="search" 
          placeholder="Search job title or location..." 
          class="wp-input pl-8 text-xs py-1.5"
        />
        <Search class="w-3.5 h-3.5 text-gray-400 absolute left-2.5 top-2.5" />
      </div>
    </div>

    <!-- Jobs Table -->
    <div class="bg-white border border-wp-border rounded shadow-xs overflow-hidden">
      <div class="overflow-x-auto min-h-[250px]">
        <table class="w-full text-left border-collapse text-xs">
          <thead class="bg-gray-50 border-b border-wp-border text-gray-700 select-none">
            <tr>
              <th class="px-4 py-2.5 font-semibold min-w-[220px]">Position Title</th>
              <th class="px-4 py-2.5 font-semibold">Department</th>
              <th class="px-4 py-2.5 font-semibold">Location</th>
              <th class="px-4 py-2.5 font-semibold">Type</th>
              <th class="px-4 py-2.5 font-semibold text-center">Applicants</th>
              <th class="px-4 py-2.5 font-semibold text-center">Status</th>
              <th class="px-4 py-2.5 font-semibold text-right">Actions</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-gray-100">
            <tr v-for="job in filteredJobs" :key="job.id" class="hover:bg-blue-50/30 transition-colors">
              <td class="px-4 py-3 font-semibold text-[#2271b1]">
                <div class="flex items-center space-x-2">
                  <Briefcase class="w-4 h-4 text-gray-400 shrink-0" />
                  <span>{{ job.title }}</span>
                </div>
              </td>
              <td class="px-4 py-3 text-gray-600">{{ job.department }}</td>
              <td class="px-4 py-3 text-gray-600">{{ job.location }}</td>
              <td class="px-4 py-3 text-gray-500 font-mono">{{ job.type }}</td>
              <td class="px-4 py-3 text-center">
                <span class="inline-flex items-center space-x-1 font-semibold text-gray-700 bg-gray-100 px-2 py-0.5 rounded-full">
                  <Users class="w-3 h-3 text-gray-500" />
                  <span>{{ job.applicantsCount }}</span>
                </span>
              </td>
              <td class="px-4 py-3 text-center">
                <span 
                  class="px-2 py-0.5 rounded-full text-[10px] font-semibold"
                  :class="job.status === 'Open' 
                    ? 'bg-emerald-50 text-emerald-700 border border-emerald-200' 
                    : 'bg-gray-100 text-gray-600 border border-gray-200'"
                >
                  {{ job.status }}
                </span>
              </td>
              <td class="px-4 py-3 text-right">
                <div class="flex items-center justify-end space-x-2 text-xs">
                  <button class="text-[#2271b1] hover:underline flex items-center space-x-0.5">
                    <Edit class="w-3.5 h-3.5" />
                    <span>Edit</span>
                  </button>
                  <span class="text-gray-300">|</span>
                  <button @click="deleteJob(job.id)" class="text-rose-600 hover:underline flex items-center space-x-0.5">
                    <Trash2 class="w-3.5 h-3.5" />
                    <span>Delete</span>
                  </button>
                </div>
              </td>
            </tr>

            <tr v-if="filteredJobs.length === 0">
              <td colspan="7" class="text-center py-10 text-gray-500 text-xs">
                Tidak ada lowongan yang cocok dengan pencarian.
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>
