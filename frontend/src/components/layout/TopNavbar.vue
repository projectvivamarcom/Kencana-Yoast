<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { 
  Globe, 
  Plus, 
  User, 
  Menu, 
  Activity, 
  Sparkles,
  ExternalLink,
  ChevronDown
} from 'lucide-vue-next'
import { usePostStore } from '../../stores/postStore'

defineProps<{
  sidebarOpen: boolean
}>()

const emit = defineEmits<{
  (e: 'toggleSidebar'): void
}>()

const router = useRouter()
const postStore = usePostStore()
const showUserDropdown = ref(false)
const showNewDropdown = ref(false)
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

      <!-- WP Brand / Kencana Logo -->
      <router-link to="/dashboard" class="flex items-center space-x-1.5 text-white hover:text-wp-blue transition-colors px-1 py-0.5 rounded">
        <div class="w-5 h-5 bg-[#2271b1] text-white flex items-center justify-center font-bold text-xs rounded-full shadow-inner">
          K
        </div>
        <span class="font-semibold text-white tracking-wide">Kencana Admin</span>
      </router-link>

      <!-- Visit Site Link -->
      <a 
        href="https://kencana.id" 
        target="_blank" 
        rel="noopener" 
        class="hidden sm:flex items-center space-x-1 text-gray-300 hover:text-white hover:bg-[#131619] px-2 py-1 rounded transition-colors"
      >
        <Globe class="w-3.5 h-3.5 text-gray-400" />
        <span>Kencana Properti</span>
        <ExternalLink class="w-2.5 h-2.5 opacity-60" />
      </a>

      <!-- Quick "+ New" Dropdown -->
      <div class="relative hidden sm:block">
        <button 
          @click="showNewDropdown = !showNewDropdown"
          class="flex items-center space-x-1 text-gray-300 hover:text-white hover:bg-[#131619] px-2 py-1 rounded transition-colors"
        >
          <Plus class="w-3.5 h-3.5" />
          <span>New</span>
          <ChevronDown class="w-2.5 h-2.5" />
        </button>

        <!-- Dropdown Menu -->
        <div 
          v-if="showNewDropdown"
          @click="showNewDropdown = false"
          class="absolute top-full left-0 mt-0.5 w-36 bg-[#2c3338] shadow-lg py-1 border border-gray-700 text-xs z-50"
        >
          <router-link to="/posts/new" class="block px-3 py-1.5 text-gray-200 hover:bg-[#2271b1] hover:text-white">
            Post
          </router-link>
          <router-link to="/media" class="block px-3 py-1.5 text-gray-200 hover:bg-[#2271b1] hover:text-white">
            Media
          </router-link>
          <router-link to="/categories" class="block px-3 py-1.5 text-gray-200 hover:bg-[#2271b1] hover:text-white">
            Category
          </router-link>
        </div>
      </div>
    </div>

    <!-- Right Section: Backend Status, SEO Quick Health & User -->
    <div class="flex items-center space-x-3">
      <!-- FastApi Backend Indicator -->
      <div 
        class="hidden md:flex items-center space-x-1.5 px-2 py-0.5 rounded text-[11px] border"
        :class="postStore.backendStatus === 'online' 
          ? 'bg-emerald-950/40 text-emerald-400 border-emerald-800/60' 
          : postStore.backendStatus === 'offline' 
            ? 'bg-amber-950/40 text-amber-400 border-amber-800/60' 
            : 'bg-blue-950/40 text-blue-300 border-blue-800/60'"
        :title="postStore.backendStatus === 'online' ? 'FastAPI Backend Ready at 127.0.0.1:8000' : 'Backend Standby / Offline'"
      >
        <span class="relative flex h-2 w-2">
          <span 
            class="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75"
            :class="postStore.backendStatus === 'online' ? 'bg-emerald-400' : 'bg-amber-400'"
          ></span>
          <span 
            class="relative inline-flex rounded-full h-2 w-2"
            :class="postStore.backendStatus === 'online' ? 'bg-emerald-500' : 'bg-amber-500'"
          ></span>
        </span>
        <span>FastAPI {{ postStore.backendStatus === 'online' ? 'Online' : 'Analyzer' }}</span>
      </div>

      <!-- SEO Score Quick Tag -->
      <router-link 
        to="/seo-audit" 
        class="flex items-center space-x-1 text-yellow-400 hover:text-yellow-300 hover:bg-[#131619] px-2 py-1 rounded transition-colors"
      >
        <Sparkles class="w-3.5 h-3.5" />
        <span class="hidden sm:inline font-medium">SEO Health</span>
      </router-link>

      <!-- User Profile -->
      <div class="relative">
        <button 
          @click="showUserDropdown = !showUserDropdown"
          class="flex items-center space-x-1.5 text-gray-300 hover:text-white hover:bg-[#131619] px-2 py-1 rounded transition-colors"
        >
          <span>Howdy, <strong class="text-white">Admin Kencana</strong></span>
          <img 
            src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=100&auto=format&fit=crop" 
            alt="Admin Avatar" 
            class="w-5 h-5 rounded-full border border-gray-600 object-cover ml-1"
          />
        </button>

        <div 
          v-if="showUserDropdown"
          @click="showUserDropdown = false"
          class="absolute top-full right-0 mt-0.5 w-44 bg-[#2c3338] shadow-xl py-1.5 border border-gray-700 text-xs z-50"
        >
          <div class="px-3 py-2 border-b border-gray-700">
            <p class="font-semibold text-white">Admin Kencana</p>
            <p class="text-gray-400 text-[11px]">admin@kencana.id</p>
          </div>
          <router-link to="/settings" class="block px-3 py-1.5 text-gray-200 hover:bg-[#2271b1] hover:text-white">
            Edit Profile
          </router-link>
          <a href="#" class="block px-3 py-1.5 text-gray-200 hover:bg-[#2271b1] hover:text-white">
            Log Out
          </a>
        </div>
      </div>
    </div>
  </header>
</template>
