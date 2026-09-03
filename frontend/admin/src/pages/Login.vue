<script setup lang="ts">
import { ref } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { useAuthStore } from '../stores/authStore'
import { 
  Lock, 
  Mail, 
  Eye, 
  EyeOff, 
  ShieldCheck, 
  UserCheck, 
  Feather, 
  Users, 
  ArrowRight,
  AlertCircle,
  CheckCircle2,
  Sparkles
} from 'lucide-vue-next'

const router = useRouter()
const route = useRoute()
const authStore = useAuthStore()

const email = ref('superadmin@example.com')
const password = ref('password123')
const showPassword = ref(false)
const rememberMe = ref(true)
const errorMessage = ref<string | null>(null)
const isSubmitting = ref(false)

// Quick account selector profiles
const demoAccounts = [
  {
    role: 'Super Admin',
    email: 'superadmin@example.com',
    desc: 'Akses penuh seluruh sistem, produk, artikel, karir, SEO, & settings.',
    badgeColor: 'bg-purple-900/60 text-purple-300 border-purple-700/50',
    icon: ShieldCheck,
  },
  {
    role: 'Admin',
    email: 'admin@example.com',
    desc: 'Kelola Homepage, Produk, Cabang, FAQ, & Media. (No Articles & Careers)',
    badgeColor: 'bg-blue-900/60 text-blue-300 border-blue-700/50',
    icon: UserCheck,
  },
  {
    role: 'Content Writer',
    email: 'writer@example.com',
    desc: 'Kelola Artikel Edukasi & Kencana SEO Engine. (No Products, Careers, Settings)',
    badgeColor: 'bg-emerald-900/60 text-emerald-300 border-emerald-700/50',
    icon: Feather,
  },
  {
    role: 'HR Officer',
    email: 'hr@example.com',
    desc: 'Kelola Lowongan Karir & Rekrutmen. (No Products, Articles, Media)',
    badgeColor: 'bg-amber-900/60 text-amber-300 border-amber-700/50',
    icon: Users,
  },
]

function selectAccount(accEmail: string) {
  email.value = accEmail
  password.value = 'password123'
  errorMessage.value = null
}

async function handleLogin() {
  if (!email.value || !password.value) {
    errorMessage.value = 'Mohon isi email dan kata sandi Anda.'
    return
  }

  isSubmitting.value = true
  errorMessage.value = null

  try {
    await authStore.login({
      email: email.value,
      password: password.value,
    })

    const redirectPath = (route.query.redirect as string) || '/dashboard'
    router.push(redirectPath)
  } catch (err: any) {
    errorMessage.value = err.message || 'Email atau password salah.'
  } finally {
    isSubmitting.value = false
  }
}
</script>

<template>
  <div class="min-h-screen bg-[#0f1216] text-gray-100 flex flex-col justify-center items-center p-4 sm:p-6 relative overflow-hidden">
    <!-- Background subtle glowing gradient orbs -->
    <div class="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none"></div>
    <div class="absolute bottom-10 right-10 w-80 h-80 bg-red-600/5 rounded-full blur-3xl pointer-events-none"></div>

    <!-- Header / Brand -->
    <div class="w-full max-w-md mb-6 text-center z-10">
      <div class="inline-flex items-center justify-center space-x-2.5 mb-2">
        <div class="w-10 h-10 bg-gradient-to-tr from-[#1d4ed8] to-[#3b82f6] text-white flex items-center justify-center font-extrabold text-xl rounded-xl shadow-lg shadow-blue-500/20 border border-blue-400/30">
          K
        </div>
        <div class="text-left">
          <h1 class="text-xl font-bold tracking-tight text-white flex items-center gap-1.5">
            Kencana Admin <span class="text-xs px-2 py-0.5 rounded bg-blue-500/20 text-blue-400 font-semibold border border-blue-500/30">RBAC</span>
          </h1>
          <p class="text-[11px] text-gray-400 font-medium">PT Kencana Maju Bersama — CMS & SEO Suite</p>
        </div>
      </div>
    </div>

    <!-- Login Card -->
    <div class="w-full max-w-md bg-[#171b22] border border-[#2b313a] rounded-2xl p-6 sm:p-8 shadow-2xl z-10 backdrop-blur-md">
      <div class="mb-5">
        <h2 class="text-lg font-semibold text-white">Masuk ke Panel Admin</h2>
        <p class="text-xs text-gray-400 mt-0.5">Gunakan akun sesuai hak akses / role Anda untuk mengelola konten.</p>
      </div>

      <!-- Error Alert -->
      <div v-if="errorMessage" class="mb-5 p-3 rounded-lg bg-red-950/60 border border-red-800 text-red-300 text-xs flex items-start space-x-2">
        <AlertCircle class="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
        <span>{{ errorMessage }}</span>
      </div>

      <!-- Form -->
      <form @submit.prevent="handleLogin" class="space-y-4">
        <!-- Email Input -->
        <div>
          <label class="block text-xs font-medium text-gray-300 mb-1.5">Email Akun</label>
          <div class="relative">
            <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
              <Mail class="w-4 h-4" />
            </div>
            <input
              v-model="email"
              type="email"
              required
              autocomplete="email"
              placeholder="nama@kencana.id"
              class="w-full pl-9 pr-3 py-2 bg-[#0d1015] border border-[#30363d] focus:border-blue-500 focus:ring-1 focus:ring-blue-500 rounded-lg text-sm text-gray-100 placeholder-gray-500 transition-colors"
            />
          </div>
        </div>

        <!-- Password Input -->
        <div>
          <div class="flex items-center justify-between mb-1.5">
            <label class="text-xs font-medium text-gray-300">Kata Sandi</label>
            <span class="text-[11px] text-gray-500">Dev default: <code class="text-gray-300 font-mono">password123</code></span>
          </div>
          <div class="relative">
            <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
              <Lock class="w-4 h-4" />
            </div>
            <input
              v-model="password"
              :type="showPassword ? 'text' : 'password'"
              required
              autocomplete="current-password"
              placeholder="••••••••"
              class="w-full pl-9 pr-10 py-2 bg-[#0d1015] border border-[#30363d] focus:border-blue-500 focus:ring-1 focus:ring-blue-500 rounded-lg text-sm text-gray-100 placeholder-gray-500 transition-colors"
            />
            <button
              type="button"
              @click="showPassword = !showPassword"
              class="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-gray-200"
            >
              <EyeOff v-if="showPassword" class="w-4 h-4" />
              <Eye v-else class="w-4 h-4" />
            </button>
          </div>
        </div>

        <!-- Remember me -->
        <div class="flex items-center justify-between pt-1">
          <label class="flex items-center space-x-2 text-xs text-gray-400 cursor-pointer select-none">
            <input
              v-model="rememberMe"
              type="checkbox"
              class="rounded border-[#30363d] bg-[#0d1015] text-blue-600 focus:ring-blue-500 focus:ring-offset-0"
            />
            <span>Ingat sesi di perangkat ini</span>
          </label>
        </div>

        <!-- Submit Button -->
        <button
          type="submit"
          :disabled="isSubmitting"
          class="w-full mt-2 py-2.5 px-4 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 text-white font-medium text-sm rounded-lg shadow-md shadow-blue-600/30 transition-all flex items-center justify-center space-x-2 disabled:opacity-60 disabled:cursor-not-allowed cursor-pointer"
        >
          <span v-if="isSubmitting" class="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
          <span v-else class="flex items-center gap-2">
            <span>Masuk ke Dashboard</span>
            <ArrowRight class="w-4 h-4" />
          </span>
        </button>
      </form>

      <!-- Quick Test Accounts Selector -->
      <div class="mt-6 pt-5 border-t border-[#2b313a]">
        <div class="flex items-center justify-between mb-3">
          <div class="flex items-center space-x-1.5 text-xs text-gray-300 font-semibold">
            <Sparkles class="w-3.5 h-3.5 text-amber-400" />
            <span>Pilih Akun Demo (RBAC Test)</span>
          </div>
          <span class="text-[10px] text-gray-500">Klik untuk isi otomatis</span>
        </div>

        <div class="grid grid-cols-2 gap-2">
          <button
            v-for="acc in demoAccounts"
            :key="acc.email"
            type="button"
            @click="selectAccount(acc.email)"
            class="text-left p-2.5 rounded-lg border transition-all hover:scale-[1.02] cursor-pointer relative"
            :class="email === acc.email 
              ? 'bg-[#1e2530] border-blue-500/80 shadow-sm shadow-blue-500/20 ring-1 ring-blue-500' 
              : 'bg-[#10141a] border-[#29303a] hover:border-gray-600'"
          >
            <div class="flex items-center justify-between mb-1">
              <span class="text-[11px] font-bold px-1.5 py-0.5 rounded border" :class="acc.badgeColor">
                {{ acc.role }}
              </span>
              <CheckCircle2 v-if="email === acc.email" class="w-3.5 h-3.5 text-blue-400" />
            </div>
            <p class="text-[11px] text-gray-300 font-medium truncate">{{ acc.email }}</p>
            <p class="text-[9.5px] text-gray-500 leading-tight mt-1 line-clamp-2">{{ acc.desc }}</p>
          </button>
        </div>
      </div>
    </div>

    <!-- Footer -->
    <div class="mt-6 text-center text-xs text-gray-500">
      &copy; 2026 PT Kencana Maju Bersama &bull; Sistem Otentikasi Laravel Sanctum + RBAC
    </div>
  </div>
</template>
