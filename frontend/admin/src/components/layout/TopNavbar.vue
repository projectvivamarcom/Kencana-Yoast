<script setup lang="ts">
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'
import { 
  Globe, 
  Plus, 
  Menu, 
  BarChart2,
  ExternalLink,
  ChevronDown,
  LogOut,
  User,
  Shield,
  Briefcase,
  Package,
  FileText,
  Image as ImageIcon
} from 'lucide-vue-next'
import { usePostStore } from '../../stores/postStore'
import { useAuthStore } from '../../stores/authStore'

defineProps<{
  sidebarOpen: boolean
}>()

const emit = defineEmits<{
  (e: 'toggleSidebar'): void
}>()

const router = useRouter()
const postStore = usePostStore()
const authStore = useAuthStore()

const showUserDropdown = ref(false)
const showNewDropdown = ref(false)

const roleBadgeClass = computed(() => {
  switch (authStore.role) {
    case 'super_admin': return 'bg-purple-950/80 text-purple-300 border-purple-800'
    case 'admin': return 'bg-blue-950/80 text-blue-300 border-blue-800'
    case 'content_writer': return 'bg-emerald-950/80 text-emerald-300 border-emerald-800'
    case 'hr': return 'bg-amber-950/80 text-amber-300 border-amber-800'
    default: return 'bg-gray-800 text-gray-300 border-gray-700'
  }
})

async function handleLogout() {
  showUserDropdown.value = false
  await authStore.logout()
}
</script>

<template>
  <header class="h-8 bg-wp-dark text-gray-300 text-xs flex items-center justify-between px-3 fixed top-0 left-0 right-0 z-50 border-b border-[#2c3338] select-none">
    <!-- Left Section -->
    <div class="flex items-center space-x-2">
      <!-- Mobile menu toggle -->
      <button 
        @click="emit('toggleSidebar')" 
        class="md:hidden text-gray-300 hover:text-white p-1"
        aria-label="Toggle navigation"
      >
        <Menu class="w-4 h-4" />
      </button>

      <!-- Brand / Logo -->
      <router-link to="/dashboard" class="flex items-center space-x-1.5 text-white hover:text-wp-blue transition-colors px-1 py-0.5 rounded">
        <div class="w-5 h-5 bg-[#2271b1] text-white flex items-center justify-center font-bold text-xs rounded-full shadow-inner">
          K
        </div>
        <span class="font-semibold text-white tracking-wide">Kencana Admin</span>
      </router-link>

      <!-- Visit Site Link -->
      <a 
        href="http://localhost:3000" 
        target="_blank" 
        rel="noopener" 
        class="hidden sm:flex items-center space-x-1 text-gray-300 hover:text-white hover:bg-[#131619] px-2 py-1 rounded transition-colors"
      >
        <Globe class="w-3.5 h-3.5 text-gray-400" />
        <span>Kencana Website</span>
        <ExternalLink class="w-2.5 h-2.5 opacity-60" />
      </a>

      <!-- Quick "+ New" Dropdown (Permission-Aware) -->
      <div 
        v-if="authStore.hasPermission('articles.create') || authStore.hasPermission('products.create') || authStore.hasPermission('careers.create') || authStore.hasPermission('media.create')"
        class="relative hidden sm:block"
      >
        <button 
          @click="showNewDropdown = !showNewDropdown"
          class="flex items-center space-x-1 text-gray-300 hover:text-white hover:bg-[#131619] px-2 py-1 rounded transition-colors cursor-pointer"
        >
          <Plus class="w-3.5 h-3.5" />
          <span>New</span>
          <ChevronDown class="w-2.5 h-2.5" />
        </button>

        <!-- Dropdown Menu -->
        <div 
          v-if="showNewDropdown"
          @click="showNewDropdown = false"
          class="absolute top-full left-0 mt-0.5 w-40 bg-[#2c3338] shadow-lg py-1 border border-gray-700 text-xs z-50 rounded-b"
        >
          <router-link 
            v-if="authStore.hasPermission('articles.create')" 
            to="/posts/new" 
            class="flex items-center space-x-2 px-3 py-1.5 text-gray-200 hover:bg-[#2271b1] hover:text-white"
          >
            <FileText class="w-3.5 h-3.5 opacity-80" />
            <span>Article Post</span>
          </router-link>

          <router-link 
            v-if="authStore.hasPermission('products.create')" 
            to="/products" 
            class="flex items-center space-x-2 px-3 py-1.5 text-gray-200 hover:bg-[#2271b1] hover:text-white"
          >
            <Package class="w-3.5 h-3.5 opacity-80" />
            <span>Product</span>
          </router-link>

          <router-link 
            v-if="authStore.hasPermission('careers.create')" 
            to="/careers" 
            class="flex items-center space-x-2 px-3 py-1.5 text-gray-200 hover:bg-[#2271b1] hover:text-white"
          >
            <Briefcase class="w-3.5 h-3.5 opacity-80" />
            <span>Job Vacancy</span>
          </router-link>

          <router-link 
            v-if="authStore.hasPermission('media.create')" 
            to="/media" 
            class="flex items-center space-x-2 px-3 py-1.5 text-gray-200 hover:bg-[#2271b1] hover:text-white"
          >
            <ImageIcon class="w-3.5 h-3.5 opacity-80" />
            <span>Media File</span>
          </router-link>
        </div>
      </div>
    </div>

    <!-- Right Section: Role Tag & User Menu -->
    <div class="flex items-center space-x-3">
      <!-- Role Badge -->
      <div 
        class="hidden sm:flex items-center space-x-1 px-2 py-0.5 rounded text-[11px] border font-medium"
        :class="roleBadgeClass"
      >
        <Shield class="w-3 h-3 opacity-90" />
        <span>{{ authStore.user?.role_label || 'User' }}</span>
      </div>

      <!-- SEO Engine Quick Tag (if permitted) -->
      <router-link 
        v-if="authStore.hasPermission('seo.analyze')"
        to="/seo-audit" 
        class="flex items-center space-x-1 text-blue-400 hover:text-blue-300 hover:bg-[#131619] px-2 py-1 rounded transition-colors"
        title="Kencana SEO Active"
      >
        <BarChart2 class="w-3.5 h-3.5" />
        <span class="hidden md:inline font-medium">SEO Engine</span>
      </router-link>

      <!-- User Profile Dropdown -->
      <div class="relative">
        <button 
          @click="showUserDropdown = !showUserDropdown"
          class="flex items-center space-x-1.5 text-gray-300 hover:text-white hover:bg-[#131619] px-2 py-1 rounded transition-colors cursor-pointer"
        >
          <span class="truncate max-w-[120px]">Halo, <strong class="text-white">{{ authStore.user?.name ? authStore.user.name.split(' ')[0] : 'Admin' }}</strong></span>
          <div class="w-5 h-5 rounded-full bg-gradient-to-tr from-blue-600 to-indigo-600 text-white flex items-center justify-center text-[10px] font-bold border border-gray-600">
            {{ authStore.user?.name ? authStore.user.name.charAt(0) : 'A' }}
          </div>
          <ChevronDown class="w-2.5 h-2.5 opacity-70" />
        </button>

        <div 
          v-if="showUserDropdown"
          @click="showUserDropdown = false"
          class="absolute top-full right-0 mt-0.5 w-52 bg-[#2c3338] shadow-xl py-1.5 border border-gray-700 text-xs z-50 rounded"
        >
          <div class="px-3 py-2 border-b border-gray-700">
            <p class="font-semibold text-white truncate">{{ authStore.user?.name || 'Admin Kencana' }}</p>
            <p class="text-gray-400 text-[11px] truncate">{{ authStore.user?.email || 'admin@kencana.id' }}</p>
            <div class="mt-1.5">
              <span class="text-[10px] px-1.5 py-0.5 rounded font-semibold border" :class="roleBadgeClass">
                {{ authStore.user?.role_label || authStore.role }}
              </span>
            </div>
          </div>
          
          <router-link 
            v-if="authStore.hasPermission('settings.view')" 
            to="/settings" 
            class="block px-3 py-1.5 text-gray-200 hover:bg-[#2271b1] hover:text-white"
          >
            Pengaturan Sistem
          </router-link>

          <button 
            @click="handleLogout" 
            class="w-full text-left px-3 py-1.5 text-red-300 hover:bg-red-900/40 hover:text-red-200 flex items-center space-x-1.5 border-t border-gray-700/60 mt-1 pt-1.5 cursor-pointer"
          >
            <LogOut class="w-3.5 h-3.5" />
            <span>Keluar (Logout)</span>
          </button>
        </div>
      </div>
    </div>
  </header>
</template>
