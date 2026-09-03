<script setup lang="ts">
import { computed } from 'vue'

const props = withDefaults(
  defineProps<{
    score: number
    label?: string
    size?: 'sm' | 'md' | 'lg'
    showLabel?: boolean
    showNumber?: boolean
  }>(),
  {
    label: '',
    size: 'sm',
    showLabel: false,
    showNumber: true
  }
)

const category = computed(() => {
  if (props.score >= 80) return 'good'
  if (props.score >= 50) return 'improvement'
  return 'poor'
})

const badgeConfig = computed(() => {
  switch (category.value) {
    case 'good':
      return {
        bg: 'bg-emerald-50 text-emerald-700 border-emerald-300',
        dot: 'bg-emerald-500',
        text: 'Good',
        ring: 'ring-emerald-500/20'
      }
    case 'improvement':
      return {
        bg: 'bg-amber-50 text-amber-700 border-amber-300',
        dot: 'bg-amber-500',
        text: 'Needs Improvement',
        ring: 'ring-amber-500/20'
      }
    case 'poor':
    default:
      return {
        bg: 'bg-rose-50 text-rose-700 border-rose-300',
        dot: 'bg-rose-500',
        text: 'Poor',
        ring: 'ring-rose-500/20'
      }
  }
})
</script>

<template>
  <div 
    class="inline-flex items-center space-x-1.5 font-medium border rounded-full transition-all select-none"
    :class="[
      badgeConfig.bg,
      size === 'sm' ? 'px-2 py-0.5 text-[11px]' : size === 'md' ? 'px-2.5 py-1 text-xs' : 'px-3.5 py-1.5 text-sm'
    ]"
    :title="`${label ? label + ': ' : ''}${score}/100 (${badgeConfig.text})`"
  >
    <span class="w-2 h-2 rounded-full shrink-0 shadow-sm" :class="badgeConfig.dot"></span>
    <span v-if="showNumber" class="font-semibold tabular-nums">{{ score }}</span>
    <span v-if="showLabel" class="opacity-90">({{ badgeConfig.text }})</span>
  </div>
</template>
