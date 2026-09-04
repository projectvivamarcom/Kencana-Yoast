<script setup lang="ts">
import { ref } from 'vue'
import { MapPin, Phone, Mail, Instagram, Facebook, Linkedin } from 'lucide-vue-next'

const email = ref('')
const isSubscribed = ref(false)
const isMicanBubbleClosed = ref(false)

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
  <footer class="w-full font-sans">
    <!-- 1. Red Main Footer Container (Exact Match to Screenshot 4) -->
    <div class="bg-[#E31E24] text-white py-14 px-6 sm:px-10 lg:px-16">
      <div class="max-w-[1300px] mx-auto space-y-12">
        <!-- Top Row: Logo Kencana + Mascot Left, Newsletter Subscribe Right -->
        <div class="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8 pb-10 border-b border-white/20">
          <!-- Logo & Mascot Left -->
          <div class="flex items-center space-x-3 sm:space-x-4">
            <img 
              src="/assets/img/tpp.png" 
              alt="#tidak TIPU TIPU" 
              class="h-10 sm:h-12 w-auto object-contain"
            />
          </div>

          <!-- Newsletter Form Right -->
          <div class="w-full lg:w-auto space-y-2 text-left lg:text-right">
            <p class="text-xs sm:text-sm font-semibold text-white">
              Dapatkan Update Penawaran Terbaik dengan Berlangganan dibawah ini!
            </p>
            <form @submit.prevent="subscribe" class="flex items-center gap-2 max-w-md ml-auto">
              <input 
                v-model="email"
                type="email" 
                required
                placeholder="Email@gmail.com" 
                class="flex-1 px-4 py-2 rounded-md text-slate-900 bg-white text-xs sm:text-sm focus:outline-none shadow-sm placeholder:text-slate-400"
              />
              <button 
                type="submit"
                class="px-5 py-2 rounded-md bg-black hover:bg-slate-900 text-white font-bold text-xs sm:text-sm transition-colors shadow-sm cursor-pointer"
              >
                Kirim
              </button>
            </form>
            <p v-if="isSubscribed" class="text-xs text-white font-medium">
              ✓ Terima kasih telah berlangganan penawaran Kencana!
            </p>
          </div>
        </div>

        <!-- 4 Columns Navigation Row (Screenshot 4) -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10 text-xs sm:text-[13px] leading-relaxed">
          <!-- Col 1: Kantor Pusat & Social Links -->
          <div class="space-y-3.5">
            <h3 class="text-sm sm:text-base font-bold text-white tracking-wide">
              Kantor Pusat
            </h3>
            <div class="space-y-1.5 text-white/95">
              <p class="font-semibold text-white">PT Kencana Maju Bersama</p>
              <div class="flex items-start space-x-2 pt-0.5">
                <MapPin class="w-3.5 h-3.5 mt-0.5 shrink-0" />
                <span>JL. Bubutan 127-135 Surabaya</span>
              </div>
              <div class="flex items-center space-x-2">
                <Phone class="w-3.5 h-3.5 shrink-0" />
                <span>031-9921-0000</span>
              </div>
              <div class="flex items-center space-x-2">
                <Phone class="w-3.5 h-3.5 shrink-0" />
                <a href="https://wa.me/6281131158000" target="_blank" class="hover:underline font-medium">
                  0811-3115-8000
                </a>
              </div>
              <div class="flex items-center space-x-2">
                <Mail class="w-3.5 h-3.5 shrink-0" />
                <a href="mailto:info@kencanaindonesia.co.id" class="hover:underline">
                  info@kencanaindonesia.co.id
                </a>
              </div>
            </div>

            <!-- Social Links (White Outline Circles: f, camera, in) -->
            <div class="pt-3 space-y-2">
              <h4 class="text-xs sm:text-sm font-bold text-white">
                Temukan Kami di
              </h4>
              <div class="flex items-center space-x-3 text-white">
                <a 
                  href="https://www.facebook.com/kencanabajaringan" 
                  target="_blank" 
                  class="w-8 h-8 rounded-full border border-white hover:bg-white hover:text-red-600 flex items-center justify-center transition-colors" 
                  aria-label="Facebook"
                >
                  <Facebook class="w-4 h-4" />
                </a>
                <a 
                  href="https://www.instagram.com/kencana.bajaringan/?hl=en" 
                  target="_blank" 
                  class="w-8 h-8 rounded-full border border-white hover:bg-white hover:text-red-600 flex items-center justify-center transition-colors" 
                  aria-label="Instagram"
                >
                  <Instagram class="w-4 h-4" />
                </a>
                <a 
                  href="https://www.linkedin.com/company/pt-kencana-maju-bersama/" 
                  target="_blank" 
                  class="w-8 h-8 rounded-full border border-white hover:bg-white hover:text-red-600 flex items-center justify-center transition-colors" 
                  aria-label="LinkedIn"
                >
                  <Linkedin class="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

          <!-- Col 2: Tentang Kami -->
          <div class="space-y-3.5">
            <h3 class="text-sm sm:text-base font-bold text-white tracking-wide">
              Tentang Kami
            </h3>
            <ul class="space-y-2 text-white/95">
              <li><NuxtLink to="/about" class="hover:underline">Perusahaan Kami</NuxtLink></li>
              <li><a href="https://wa.me/6281131158000" target="_blank" class="hover:underline">Hubungi Halo KENCANA</a></li>
              <li><NuxtLink to="/articles" class="hover:underline">Berita &amp; Acara</NuxtLink></li>
              <li><NuxtLink to="/branches" class="hover:underline">Cabang KENCANA</NuxtLink></li>
            </ul>
          </div>

          <!-- Col 3: Produk -->
          <div class="space-y-3.5">
            <h3 class="text-sm sm:text-base font-bold text-white tracking-wide">
              Produk
            </h3>
            <ul class="space-y-2 text-white/95">
              <li><NuxtLink to="/about#proyek" class="hover:underline">Portofolio Proyek</NuxtLink></li>
              <li><NuxtLink to="/kalkulator-kencana" class="hover:underline">Estimasi Biaya</NuxtLink></li>
            </ul>
          </div>

          <!-- Col 4: Lainnya & Kencana Store House Icon -->
          <div class="space-y-3.5">
            <h3 class="text-sm sm:text-base font-bold text-white tracking-wide">
              Lainnya
            </h3>
            <ul class="space-y-2 text-white/95">
              <li><NuxtLink to="/#faqs" class="hover:underline">FAQs</NuxtLink></li>
              <li>Belanja sekarang di</li>
            </ul>

            <!-- Kencana Store Logo -->
            <div class="pt-1">
              <a 
                href="https://kencanaindonesia.co.id/kencana-store" 
                target="_blank" 
                rel="noopener noreferrer"
                class="inline-block hover:opacity-90 transition-opacity"
              >
                <img 
                  src="/assets/img/Kencana-Store-1-1.png.webp" 
                  alt="KENCANA STORE" 
                  class="h-16 sm:h-20 w-auto object-contain"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- 2. Dark Bottom Copyright Bar (Exact Match to Screenshot 4) -->
    <div class="bg-[#18181B] text-white/80 py-4 px-6 sm:px-10 lg:px-16 text-xs select-none">
      <div class="max-w-[1300px] mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
        <div>
          Copyright © 2025 <strong class="text-white font-bold">KENCANA®</strong>, All rights reserved.
        </div>
        <div class="flex items-center space-x-4 sm:space-x-6">
          <NuxtLink to="/contact" class="hover:text-white transition-colors">Customer Service</NuxtLink>
          <a href="#" @click.prevent class="hover:text-white transition-colors">Terms &amp; Conditions</a>
          <a href="#" @click.prevent class="hover:text-white transition-colors">Privacy Policy</a>
        </div>
      </div>
    </div>

    <!-- 3. Floating MiCan Widget (Responsive for Mobile & Desktop) -->
    <aside 
      aria-label="Tanya MiCan"
      class="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 flex flex-col items-end space-y-1.5 sm:space-y-2 select-none"
    >
      <!-- White Speech Bubble with Close Button -->
      <div 
        v-if="!isMicanBubbleClosed"
        class="bg-white text-slate-800 text-[11px] sm:text-xs md:text-[13px] font-medium py-1.5 px-3 sm:py-2 sm:px-3.5 rounded-full shadow-xl border border-slate-200/80 flex items-center space-x-1.5 sm:space-x-2 transition-all max-w-[220px] sm:max-w-none"
      >
        <a 
          href="https://wa.me/6281131158000?text=Halo%20MiCan,%20saya%20ingin%20tanya%20produk%20baja%20ringan%20Kencana" 
          target="_blank" 
          rel="noopener noreferrer"
          class="hover:text-red-600 transition-colors font-semibold truncate"
        >
          Tanya MiCan!
        </a>
        <button 
          type="button" 
          @click="isMicanBubbleClosed = true" 
          class="text-slate-400 hover:text-slate-700 ml-1 leading-none text-sm p-0.5 cursor-pointer shrink-0"
          aria-label="Tutup bubble MiCan"
        >
          &times;
        </button>
      </div>

      <!-- Circular Avatar MiCan (Proportional 44px on Mobile, 56px on Desktop) -->
      <a 
        href="https://wa.me/6281131158000?text=Halo%20MiCan,%20saya%20ingin%20tanya%20produk%20baja%20ringan%20Kencana" 
        target="_blank" 
        rel="noopener noreferrer"
        class="w-11 h-11 sm:w-13 sm:h-13 md:w-14 md:h-14 rounded-full overflow-hidden shadow-2xl border-2 border-white ring-1 ring-slate-200/60 hover:scale-105 transition-all duration-300 block bg-slate-900"
        title="Tanya MiCan via WhatsApp"
        aria-label="Tanya MiCan"
      >
        <img 
          src="/assets/img/Mican-bg-merah@3x.webp" 
          alt="MiCan Kencana" 
          class="w-full h-full object-cover"
        />
      </a>
    </aside>
  </footer>
</template>
