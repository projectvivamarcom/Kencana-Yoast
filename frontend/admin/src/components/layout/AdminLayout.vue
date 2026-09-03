<script setup lang="ts">
import { ref } from 'vue'
import TopNavbar from './TopNavbar.vue'
import Sidebar from './Sidebar.vue'

const sidebarOpen = ref(false)

const toggleSidebar = () => {
  sidebarOpen.value = !sidebarOpen.value
}

const closeSidebar = () => {
  sidebarOpen.value = false
}
</script>

<template>
  <div class="min-h-screen bg-wp-bg text-wp-text flex flex-col antialiased">
    <!-- Fixed Top Admin Bar -->
    <TopNavbar 
      :sidebar-open="sidebarOpen" 
      @toggle-sidebar="toggleSidebar" 
    />

    <!-- Main Container -->
    <div class="flex flex-1 pt-8">
      <!-- Fixed Left Sidebar -->
      <Sidebar 
        :is-open="sidebarOpen" 
        @close="closeSidebar" 
      />

      <!-- Backdrop for mobile drawer -->
      <div 
        v-if="sidebarOpen" 
        @click="closeSidebar" 
        class="fixed inset-0 bg-black/50 z-30 md:hidden"
      ></div>

      <!-- Main Content Area -->
      <main class="flex-1 md:ml-48 p-4 sm:p-6 max-w-full overflow-x-hidden min-h-[calc(100vh-2rem)]">
        <slot />
      </main>
    </div>
  </div>
</template>
