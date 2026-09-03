<script setup lang="ts">
import { useRoute, useRouter } from 'vue-router'
import { useAuthStore } from '../stores/authStore'
import { ShieldAlert, ArrowLeft, LogOut, Lock, AlertTriangle } from 'lucide-vue-next'

const route = useRoute()
const router = useRouter()
const authStore = useAuthStore()

const requiredPermission = (route.query.required as string) || 'Tidak ditentukan'
const attemptedPath = (route.query.path as string) || ''

function goDashboard() {
  router.push('/dashboard')
}

async function handleLogout() {
  await authStore.logout()
}
</script>

<template>
  <div class="min-h-screen bg-[#0f1216] text-gray-100 flex flex-col justify-center items-center p-4 sm:p-6 relative">
    <!-- Glowing background accent -->
    <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[30rem] h-[30rem] bg-red-600/10 rounded-full blur-3xl pointer-events-none"></div>

    <div class="w-full max-w-lg bg-[#171b22] border border-red-900/40 rounded-2xl p-6 sm:p-8 shadow-2xl z-10 text-center relative overflow-hidden">
      <div class="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-red-600 via-amber-500 to-red-600"></div>

      <!-- Icon -->
      <div class="mx-auto w-16 h-16 rounded-2xl bg-red-950/80 border border-red-800/80 flex items-center justify-center text-red-400 mb-5 shadow-lg shadow-red-950/50">
        <ShieldAlert class="w-8 h-8" />
      </div>

      <!-- Header -->
      <div class="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-red-950/60 border border-red-800/60 text-red-400 text-xs font-semibold mb-3">
        <Lock class="w-3.5 h-3.5" />
        <span>HTTP 403 Forbidden</span>
      </div>

      <h1 class="text-2xl font-bold text-white mb-2">Akses Ditolak</h1>
      <p class="text-sm text-gray-300 mb-6">
        Anda tidak memiliki hak akses yang cukup untuk membuka halaman ini.
      </p>

      <!-- Details Box -->
      <div class="bg-[#0f1217] border border-[#2b313a] rounded-xl p-4 text-left text-xs space-y-2.5 mb-6">
        <div class="flex justify-between items-center pb-2 border-b border-gray-800">
          <span class="text-gray-400">Pengguna Saat Ini:</span>
          <span class="font-medium text-gray-200">{{ authStore.user?.name || 'Tidak diketahui' }}</span>
        </div>
        <div class="flex justify-between items-center pb-2 border-b border-gray-800">
          <span class="text-gray-400">Role Anda:</span>
          <span class="px-2 py-0.5 rounded text-[11px] font-semibold bg-blue-950 border border-blue-800 text-blue-300">
            {{ authStore.user?.role_label || authStore.role || 'Guest' }}
          </span>
        </div>
        <div class="flex justify-between items-center pb-2 border-b border-gray-800">
          <span class="text-gray-400">Permission yang Dibutuhkan:</span>
          <code class="px-2 py-0.5 bg-red-950/80 border border-red-800/60 text-red-300 font-mono text-[11px] rounded">
            {{ requiredPermission }}
          </code>
        </div>
        <div v-if="attemptedPath" class="flex justify-between items-center">
          <span class="text-gray-400">Halaman yang Dituju:</span>
          <span class="text-gray-300 font-mono">{{ attemptedPath }}</span>
        </div>
      </div>

      <!-- Security note -->
      <div class="p-3 bg-amber-950/30 border border-amber-800/40 rounded-lg text-[11.5px] text-amber-300 text-left flex items-start space-x-2 mb-6">
        <AlertTriangle class="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
        <span>
          <strong>Kebijakan Keamanan RBAC Kencana:</strong> Batasan akses ini tidak hanya berlaku di antarmuka web, namun divalidasi langsung oleh middleware backend Laravel.
        </span>
      </div>

      <!-- Action buttons -->
      <div class="flex flex-col sm:flex-row items-center justify-center gap-3">
        <button
          @click="goDashboard"
          class="w-full sm:w-auto px-5 py-2.5 bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold rounded-lg transition-colors flex items-center justify-center space-x-1.5 cursor-pointer"
        >
          <ArrowLeft class="w-4 h-4" />
          <span>Kembali ke Dashboard</span>
        </button>
        <button
          @click="handleLogout"
          class="w-full sm:w-auto px-5 py-2.5 bg-[#21262d] hover:bg-[#30363d] border border-gray-700 text-gray-300 hover:text-white text-xs font-semibold rounded-lg transition-colors flex items-center justify-center space-x-1.5 cursor-pointer"
        >
          <LogOut class="w-4 h-4" />
          <span>Ganti Akun Lain</span>
        </button>
      </div>
    </div>
  </div>
</template>
