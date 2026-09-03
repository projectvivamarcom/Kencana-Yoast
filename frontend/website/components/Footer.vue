<script setup lang="ts">
import { ref } from 'vue'
import { Phone, MessageCircle, Mail, MapPin, Instagram, Facebook, Youtube } from 'lucide-vue-next'

const email = ref('')
const isSubscribed = ref(false)

const subscribe = () => {
  if (email.value) {
    isSubscribed.value = true
    email.value = ''
    setTimeout(() => {
      isSubscribed.value = false
    }, 4000)
  }
}
</script>

<template>
  <footer class="w-full font-sans bg-white">
    <!-- 1. Red Newsletter Banner -->
    <div class="bg-red-600 text-white py-12 px-6 sm:px-10 lg:px-16 text-center">
      <div class="max-w-3xl mx-auto space-y-6">
        <h2 class="text-xl sm:text-2xl lg:text-3xl font-extrabold tracking-tight">
          Dapatkan Update Penawaran Terbaik dengan Berlangganan dibawah ini!
        </h2>

        <form @submit.prevent="subscribe" class="flex flex-col sm:flex-row gap-3 max-w-xl mx-auto">
          <input 
            v-model="email"
            type="email" 
            required
            placeholder="Masukkan email Anda..." 
            class="flex-1 px-5 py-3 rounded-[5px] text-slate-900 bg-white text-sm focus:outline-none shadow-sm"
          />
          <button 
            type="submit"
            class="px-8 py-3 rounded-[5px] bg-slate-950 hover:bg-black text-white font-bold text-sm transition-colors shadow-sm"
          >
            Kirim
          </button>
        </form>

        <p v-if="isSubscribed" class="text-xs text-white font-semibold animate-fadeIn">
          ✓ Terima kasih! Anda telah terdaftar untuk menerima penawaran terbaik dari Kencana.
        </p>
      </div>
    </div>

    <!-- 2. Footer Navigation Columns -->
    <div class="bg-white text-slate-800 py-16 px-6 sm:px-10 lg:px-16 border-b border-slate-200">
      <div class="max-w-[1300px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
        <!-- Col 1: Kantor Pusat -->
        <div class="space-y-4">
          <h3 class="text-base font-extrabold text-slate-900">Kantor Pusat</h3>
          <div class="space-y-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
            <p class="font-bold text-slate-900">PT Kencana Maju Bersama</p>
            <p>JL. Bubutan 127-135 Surabaya</p>
            <p>031-9921-0000</p>
            <p>
              <a href="https://wa.me/6281131158000" target="_blank" class="hover:text-red-600 font-semibold">
                0811-3115-8000
              </a>
            </p>
            <p>
              <a href="mailto:info@kencanaindonesia.co.id" class="hover:text-red-600">
                info@kencanaindonesia.co.id
              </a>
            </p>
          </div>
        </div>

        <!-- Col 2: Temukan Kami di -->
        <div class="space-y-4">
          <h3 class="text-base font-extrabold text-slate-900">Temukan Kami di</h3>
          <div class="flex items-center space-x-3 text-slate-600">
            <a href="https://www.instagram.com/kencana.indonesia/" target="_blank" class="w-9 h-9 rounded-full bg-slate-100 hover:bg-red-600 hover:text-white flex items-center justify-center transition-colors" aria-label="Instagram">
              <Instagram class="w-4 h-4" />
            </a>
            <a href="https://www.facebook.com/kencanabajaringan" target="_blank" class="w-9 h-9 rounded-full bg-slate-100 hover:bg-red-600 hover:text-white flex items-center justify-center transition-colors" aria-label="Facebook">
              <Facebook class="w-4 h-4" />
            </a>
            <a href="https://www.youtube.com/@kencanaindonesia" target="_blank" class="w-9 h-9 rounded-full bg-slate-100 hover:bg-red-600 hover:text-white flex items-center justify-center transition-colors" aria-label="YouTube">
              <Youtube class="w-4 h-4" />
            </a>
          </div>
        </div>

        <!-- Col 3: Tentang Kami -->
        <div class="space-y-4">
          <h3 class="text-base font-extrabold text-slate-900">Tentang Kami</h3>
          <ul class="space-y-2 text-xs sm:text-sm text-slate-600">
            <li><NuxtLink to="/about" class="hover:text-red-600 transition-colors">Perusahaan Kami</NuxtLink></li>
            <li><a href="https://wa.me/6281131158000" target="_blank" class="hover:text-red-600 transition-colors">Hubungi Halo KENCANA</a></li>
            <li><NuxtLink to="/articles" class="hover:text-red-600 transition-colors">Berita &amp; Acara</NuxtLink></li>
            <li><NuxtLink to="/branches" class="hover:text-red-600 transition-colors">Cabang KENCANA</NuxtLink></li>
            <li><NuxtLink to="/karir" class="hover:text-red-600 transition-colors">Karir &amp; Lowongan Kerja</NuxtLink></li>
          </ul>
        </div>

        <!-- Col 4: Produk -->
        <div class="space-y-4">
          <h3 class="text-base font-extrabold text-slate-900">Produk</h3>
          <ul class="space-y-2 text-xs sm:text-sm text-slate-600">
            <li><NuxtLink to="/about#proyek" class="hover:text-red-600 transition-colors">Portofolio Proyek</NuxtLink></li>
            <li><NuxtLink to="/kalkulator-kencana" class="hover:text-red-600 transition-colors">Estimasi Biaya</NuxtLink></li>
          </ul>
        </div>

        <!-- Col 5: Lainnya -->
        <div class="space-y-4">
          <h3 class="text-base font-extrabold text-slate-900">Lainnya</h3>
          <ul class="space-y-2 text-xs sm:text-sm text-slate-600">
            <li><NuxtLink to="/#faqs" class="hover:text-red-600 transition-colors">FAQs</NuxtLink></li>
            <li>
              <a href="https://kencanaindonesia.co.id/kencana-store" target="_blank" class="hover:text-red-600 transition-colors">
                Belanja sekarang di Kencana Store
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <!-- 3. Bottom Copyright Bar -->
    <div class="py-6 px-6 sm:px-10 lg:px-16 text-center text-xs text-slate-500 space-y-2">
      <div class="max-w-[1300px] mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <div>
          Copyright © 2025 <strong>KENCANA®</strong>, All rights reserved.
        </div>
        <div class="flex items-center space-x-4">
          <NuxtLink to="/contact" class="hover:text-slate-800">Customer Service</NuxtLink>
          <span>&bull;</span>
          <NuxtLink to="/terms" class="hover:text-slate-800">Terms &amp; Conditions</NuxtLink>
          <span>&bull;</span>
          <NuxtLink to="/privacy" class="hover:text-slate-800">Privacy Policy</NuxtLink>
        </div>
      </div>
    </div>

    <!-- 4. Floating MiCan Widget (Exact match to live site) -->
    <aside aria-label="Tanya MiCan" class="fixed bottom-6 right-6 z-50">
      <a 
        href="https://wa.me/6281131158000?text=Halo%20MiCan,%20saya%20ingin%20tanya%20produk%20baja%20ringan%20Kencana"
        target="_blank"
        rel="noopener noreferrer"
        class="flex items-center space-x-2 pl-3 pr-4 py-2 rounded-full bg-emerald-500 hover:bg-emerald-600 text-white font-bold text-xs shadow-2xl transition-all transform hover:scale-105"
      >
        <img 
          src="/images/general/mican.webp" 
          alt="MiCan" 
          class="w-7 h-7 rounded-full object-cover bg-white p-0.5"
        />
        <span>Tanya MiCan!</span>
      </a>
    </aside>
  </footer>
</template>
