<script setup lang="ts">
import { Phone, MessageCircle, Clock, MapPin } from 'lucide-vue-next'
</script>

<template>
  <div class="bg-slate-900 text-slate-300 text-xs py-2 border-b border-slate-800 hidden sm:block">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-wrap items-center justify-between gap-2">
      <!-- Left: Office & Contact info -->
      <div class="flex items-center space-x-6">
        <a 
          href="https://wa.me/6281131158000" 
          target="_blank" 
          rel="noopener noreferrer"
          class="inline-flex items-center space-x-1.5 text-slate-300 hover:text-emerald-400 transition-colors font-medium"
        >
          <MessageCircle class="w-3.5 h-3.5 text-emerald-400" />
          <span>Halo KENCANA: 0811-3115-8000</span>
        </a>
        <a 
          href="tel:03199210000" 
          class="inline-flex items-center space-x-1.5 text-slate-300 hover:text-white transition-colors"
        >
          <Phone class="w-3.5 h-3.5 text-slate-400" />
          <span>031-9921-0000</span>
        </a>
        <div class="hidden lg:flex items-center space-x-1.5 text-slate-400">
          <Clock class="w-3.5 h-3.5" />
          <span>Senin - Sabtu: 08:00 - 17:00 WIB</span>
        </div>
      </div>

      <!-- Right: Central Address & Store link -->
      <div class="flex items-center space-x-4">
        <div class="hidden md:flex items-center space-x-1.5 text-slate-400">
          <MapPin class="w-3.5 h-3.5 text-kencana-red" />
          <span>Jl. Bubutan 127-135 Surabaya</span>
        </div>
        <span class="text-slate-700">|</span>
        <a 
          href="https://kencanaindonesia.co.id/kencana-store" 
          target="_blank" 
          rel="noopener noreferrer"
          class="font-semibold text-kencana-red hover:text-red-400 transition-colors"
        >
          KENCANA Store Official &rarr;
        </a>
      </div>
    </div>
  </div>
</template>
