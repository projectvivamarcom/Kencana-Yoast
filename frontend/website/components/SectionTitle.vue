<script setup lang="ts">
interface Props {
  badge?: string
  title: string
  highlight?: string
  subtitle?: string
  align?: 'left' | 'center'
}

withDefaults(defineProps<Props>(), {
  align: 'center'
})
</script>

<template>
  <div 
    :class="[
      'max-w-3xl space-y-3',
      align === 'center' ? 'mx-auto text-center' : 'text-left'
    ]"
  >
    <div 
      v-if="badge"
      class="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-red-100 text-kencana-red"
    >
      <span>{{ badge }}</span>
    </div>

    <h2 class="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
      {{ title }}
      <span v-if="highlight" class="text-kencana-red"> {{ highlight }}</span>
    </h2>

    <p v-if="subtitle" class="text-sm sm:text-base text-slate-600 leading-relaxed">
      {{ subtitle }}
    </p>
  </div>
</template>
