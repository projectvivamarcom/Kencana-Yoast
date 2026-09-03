<script setup lang="ts">
import { ref, computed } from 'vue'
import { useRoute } from 'vue-router'
import {
  LayoutDashboard,
  Pin,
  FolderTree,
  Tag as TagIcon,
  Image as ImageIcon,
  Sparkles,
  Settings as SettingsIcon,
  ChevronDown,
  ChevronRight,
  FileText
} from 'lucide-vue-next'
import { usePostStore } from '../../stores/postStore'

defineProps<{
  isOpen: boolean
}>()

const emit = defineEmits<{
  (e: 'close'): void
}>()

const route = useRoute()
const postStore = usePostStore()

// State for expandable submenus
const postsSubmenuOpen = ref(true)

const isPostsActive = computed(() => {
  return route.path.startsWith('/posts')
})
</script>

<template>
  <aside
    class="w-48 bg-wp-dark text-gray-300 select-none fixed top-8 bottom-0 left-0 z-40 transition-transform duration-200 ease-in-out border-r border-[#131619] flex flex-col justify-between"
    :class="isOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'"
  >
    <!-- Navigation List -->
    <nav class="py-2 overflow-y-auto flex-1">
      <ul class="space-y-0.5 text-[13px]">
        <!-- 1. Dashboard -->
        <li>
          <router-link
            to="/dashboard"
            @click="emit('close')"
            class="flex items-center space-x-2.5 px-3 py-2 text-gray-300 hover:bg-wp-sidebarHover hover:text-[#72aee6] transition-colors relative"
            :class="{ 'bg-wp-blue text-white font-medium': route.path === '/dashboard' }"
          >
            <LayoutDashboard class="w-4 h-4 opacity-90" />
            <span>Dashboard</span>
            <span
              v-if="route.path === '/dashboard'"
              class="absolute right-0 top-0 bottom-0 w-1 bg-white"
            ></span>
          </router-link>
        </li>

        <!-- Divider -->
        <li class="h-[1px] bg-[#2c3338] my-1 mx-2"></li>

        <!-- 2. Posts (Parent with Submenu) -->
        <li>
          <div
            @click="postsSubmenuOpen = !postsSubmenuOpen"
            class="flex items-center justify-between px-3 py-2 text-gray-300 hover:bg-wp-sidebarHover hover:text-[#72aee6] transition-colors cursor-pointer relative"
            :class="{ 'bg-[#131619] text-white': isPostsActive }"
          >
            <div class="flex items-center space-x-2.5">
              <Pin class="w-4 h-4 opacity-90 rotate-45" />
              <span>Posts</span>
            </div>
            <div class="flex items-center space-x-1">
              <span class="bg-[#2c3338] text-[10px] px-1.5 py-0.2 rounded-full text-gray-300">
                {{ postStore.posts.length }}
              </span>
              <ChevronDown v-if="postsSubmenuOpen" class="w-3 h-3 text-gray-400" />
              <ChevronRight v-else class="w-3 h-3 text-gray-400" />
            </div>
          </div>

          <!-- Submenu -->
          <ul v-show="postsSubmenuOpen" class="bg-[#131619] py-1 text-xs border-l-2 border-[#2271b1] ml-2 pl-1 space-y-0.5">
            <li>
              <router-link
                to="/posts"
                @click="emit('close')"
                class="block px-3 py-1.5 text-gray-300 hover:text-[#72aee6] transition-colors"
                :class="{ 'text-white font-semibold bg-[#2271b1]/40 rounded-sm': route.path === '/posts' }"
              >
                All Posts
              </router-link>
            </li>
            <li>
              <router-link
                to="/posts/new"
                @click="emit('close')"
                class="block px-3 py-1.5 text-gray-300 hover:text-[#72aee6] transition-colors"
                :class="{ 'text-white font-semibold bg-[#2271b1]/40 rounded-sm': route.path === '/posts/new' }"
              >
                Add New Post
              </router-link>
            </li>
          </ul>
        </li>

        <!-- 3. Categories -->
        <li>
          <router-link
            to="/categories"
            @click="emit('close')"
            class="flex items-center justify-between px-3 py-2 text-gray-300 hover:bg-wp-sidebarHover hover:text-[#72aee6] transition-colors relative"
            :class="{ 'bg-wp-blue text-white font-medium': route.path === '/categories' }"
          >
            <div class="flex items-center space-x-2.5">
              <FolderTree class="w-4 h-4 opacity-90" />
              <span>Categories</span>
            </div>
            <span
              v-if="route.path === '/categories'"
              class="absolute right-0 top-0 bottom-0 w-1 bg-white"
            ></span>
          </router-link>
        </li>

        <!-- 4. Tags -->
        <li>
          <router-link
            to="/tags"
            @click="emit('close')"
            class="flex items-center justify-between px-3 py-2 text-gray-300 hover:bg-wp-sidebarHover hover:text-[#72aee6] transition-colors relative"
            :class="{ 'bg-wp-blue text-white font-medium': route.path === '/tags' }"
          >
            <div class="flex items-center space-x-2.5">
              <TagIcon class="w-4 h-4 opacity-90" />
              <span>Tags</span>
            </div>
            <span
              v-if="route.path === '/tags'"
              class="absolute right-0 top-0 bottom-0 w-1 bg-white"
            ></span>
          </router-link>
        </li>

        <!-- 5. Media -->
        <li>
          <router-link
            to="/media"
            @click="emit('close')"
            class="flex items-center justify-between px-3 py-2 text-gray-300 hover:bg-wp-sidebarHover hover:text-[#72aee6] transition-colors relative"
            :class="{ 'bg-wp-blue text-white font-medium': route.path === '/media' }"
          >
            <div class="flex items-center space-x-2.5">
              <ImageIcon class="w-4 h-4 opacity-90" />
              <span>Media</span>
            </div>
            <span
              v-if="route.path === '/media'"
              class="absolute right-0 top-0 bottom-0 w-1 bg-white"
            ></span>
          </router-link>
        </li>

        <!-- Divider -->
        <li class="h-[1px] bg-[#2c3338] my-1.5 mx-2"></li>

        <!-- 6. SEO Analyzer -->
        <li>
          <router-link
            to="/seo-audit"
            @click="emit('close')"
            class="flex items-center justify-between px-3 py-2 text-yellow-400 hover:bg-wp-sidebarHover hover:text-yellow-300 transition-colors relative"
            :class="{ 'bg-wp-blue text-white font-medium': route.path === '/seo-audit' }"
          >
            <div class="flex items-center space-x-2.5">
              <Sparkles class="w-4 h-4 text-yellow-400" />
              <span class="font-semibold text-yellow-300">SEO Analyzer</span>
            </div>
            <span class="bg-yellow-500/20 text-yellow-300 text-[10px] px-1.5 py-0.2 rounded font-mono">
              PRO
            </span>
            <span
              v-if="route.path === '/seo-audit'"
              class="absolute right-0 top-0 bottom-0 w-1 bg-white"
            ></span>
          </router-link>
        </li>

        <!-- 7. Settings -->
        <li>
          <router-link
            to="/settings"
            @click="emit('close')"
            class="flex items-center justify-between px-3 py-2 text-gray-300 hover:bg-wp-sidebarHover hover:text-[#72aee6] transition-colors relative"
            :class="{ 'bg-wp-blue text-white font-medium': route.path === '/settings' }"
          >
            <div class="flex items-center space-x-2.5">
              <SettingsIcon class="w-4 h-4 opacity-90" />
              <span>Settings</span>
            </div>
            <span
              v-if="route.path === '/settings'"
              class="absolute right-0 top-0 bottom-0 w-1 bg-white"
            ></span>
          </router-link>
        </li>
      </ul>
    </nav>

    <!-- Sidebar Footer / Version Info -->
    <div class="p-3 bg-[#131619] border-t border-[#2c3338] text-[11px] text-gray-400">
      <div class="flex items-center justify-between">
        <span>Kencana CMS</span>
        <span class="text-[#72aee6]">v2.4.1</span>
      </div>
      <div class="mt-1 text-[10px] text-gray-500 flex items-center space-x-1">
        <span class="inline-block w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
        <span>Yoast-Engine Linked</span>
      </div>
    </div>
  </aside>
</template>
