<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import AdminLayout from './components/layout/AdminLayout.vue'

const route = useRoute()

const isAuthOrErrorPage = computed(() => {
  return route.path === '/login' || route.path === '/unauthorized'
})
</script>

<template>
  <div v-if="isAuthOrErrorPage">
    <router-view />
  </div>
  <AdminLayout v-else>
    <router-view />
  </AdminLayout>
</template>
