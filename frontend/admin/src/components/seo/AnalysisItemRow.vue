<script setup lang="ts">
import { ref } from 'vue'
import { CheckCircle2, AlertTriangle, XCircle, ChevronDown, ChevronUp } from 'lucide-vue-next'
import type { ScoreStatus } from '../../types/seo'

const props = defineProps<{
  name: string
  status: ScoreStatus
  message: string
  details?: Record<string, any>
}>()

const showDetails = ref(false)
</script>

<template>
  <div class="py-2.5 px-3 border-b border-gray-100 last:border-b-0 hover:bg-gray-50/80 transition-colors text-xs">
    <div class="flex items-start justify-between gap-2">
      <!-- Left: Status Indicator & Info -->
      <div class="flex items-start space-x-2.5 flex-1">
        <!-- Status Icon -->
        <div class="mt-0.5 shrink-0">
          <CheckCircle2 v-if="status === 'good'" class="w-4 h-4 text-emerald-600" />
          <AlertTriangle v-else-if="status === 'improvement'" class="w-4 h-4 text-amber-500" />
          <XCircle v-else class="w-4 h-4 text-rose-600" />
        </div>

        <!-- Name & Message -->
        <div class="space-y-0.5">
          <div class="flex items-center space-x-2">
            <span class="font-semibold text-gray-800">{{ name }}</span>
            <span 
              class="px-1.5 py-0.2 rounded text-[10px] font-medium uppercase tracking-wider"
              :class="{
                'bg-emerald-100 text-emerald-800': status === 'good',
                'bg-amber-100 text-amber-800': status === 'improvement',
                'bg-rose-100 text-rose-800': status === 'problem'
              }"
            >
              {{ status === 'improvement' ? 'Needs Improvement' : status }}
            </span>
          </div>
          <p class="text-gray-600 leading-relaxed">{{ message }}</p>
        </div>
      </div>

      <!-- Expand Details Button (if details exist) -->
      <button 
        v-if="details && Object.keys(details).length > 0"
        @click="showDetails = !showDetails"
        class="text-gray-400 hover:text-gray-700 p-1 rounded"
        title="Show details"
      >
        <ChevronUp v-if="showDetails" class="w-3.5 h-3.5" />
        <ChevronDown v-else class="w-3.5 h-3.5" />
      </button>
    </div>

    <!-- Collapsible Details Box -->
    <div 
      v-if="showDetails && details" 
      class="mt-2 ml-6 p-2 bg-gray-100/90 rounded text-[11px] font-mono text-gray-700 space-y-1"
    >
      <div v-for="(val, key) in details" :key="key" class="flex justify-between">
        <span class="text-gray-500 capitalize">{{ key.replace(/_/g, ' ') }}:</span>
        <span class="font-semibold">{{ val }}</span>
      </div>
    </div>
  </div>
</template>
