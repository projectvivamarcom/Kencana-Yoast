<script setup lang="ts">
import { ref } from 'vue'
import { MessageCircle, Mail, Send, CheckCircle2, PhoneCall } from 'lucide-vue-next'

const email = ref('')
const isSubscribed = ref(false)

const handleSubscribe = () => {
  if (email.value && email.value.includes('@')) {
    isSubscribed.value = true
    email.value = ''
    setTimeout(() => {
      isSubscribed.value = false
    }, 5000)
  }
}
</script>

<template>
  <section class="py-20 bg-gradient-to-br from-slate-900 via-slate-950 to-red-950 text-white relative overflow-hidden">
    <!-- Glow Background Accent -->
    <div class="absolute -top-40 right-0 w-96 h-96 bg-red-600/20 rounded-full blur-3xl pointer-events-none"></div>
    <div class="absolute bottom-0 -left-20 w-80 h-80 bg-red-800/20 rounded-full blur-3xl pointer-events-none"></div>

    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <!-- Left: Quick Direct Contact Info -->
        <div class="lg:col-span-7 space-y-6 text-center lg:text-left">
          <div class="inline-flex items-center space-x-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-white/10 text-red-400 border border-white/10">
            <span>Layanan Pelanggan Resmi Kencana</span>
          </div>

          <h2 class="text-3xl sm:text-4xl font-extrabold tracking-tight leading-tight">
            Konsultasikan Kebutuhan Rangka &amp; Atap Anda Bersama
            <span class="text-kencana-red block sm:inline"> Ahlinya Baja Ringan</span>
          </h2>

          <p class="text-sm sm:text-base text-slate-300 leading-relaxed max-w-xl mx-auto lg:mx-0">
            Tim teknis Kencana siap membantu perhitungan estimasi rangka atap, rekomendasi profil SNI, hingga konsultasi proyek langsung di seluruh cabang Indonesia.
          </p>

          <!-- Direct Action Buttons -->
          <div class="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2">
            <a 
              href="https://wa.me/6281131158000?text=Halo%20Kencana,%20saya%20ingin%20konsultasi%20penawaran%20harga%20dan%20katalog"
              target="_blank" 
              rel="noopener noreferrer"
              class="px-7 py-3.5 rounded-xl bg-kencana-red hover:bg-kencana-redDark text-white font-bold text-sm shadow-lg shadow-red-900/50 flex items-center space-x-2 transition-all transform hover:-translate-y-0.5 active:translate-y-0"
            >
              <MessageCircle class="w-4 h-4 text-white" />
              <span>WhatsApp Halo KENCANA</span>
            </a>

            <a 
              href="tel:03199210000"
              class="px-6 py-3.5 rounded-xl bg-white/10 hover:bg-white/20 border border-white/20 text-white font-bold text-sm flex items-center space-x-2 transition-all"
            >
              <PhoneCall class="w-4 h-4 text-slate-300" />
              <span>Telepon Kantor (031) 9921-0000</span>
            </a>
          </div>
        </div>

        <!-- Right: Newsletter Subscribe Box -->
        <div class="lg:col-span-5">
          <div class="bg-white/10 backdrop-blur-xl p-8 rounded-3xl border border-white/15 shadow-2xl space-y-6 text-center lg:text-left">
            <div class="space-y-2">
              <div class="w-12 h-12 rounded-2xl bg-kencana-red/30 border border-kencana-red/40 flex items-center justify-center mx-auto lg:mx-0">
                <Mail class="w-6 h-6 text-red-400" />
              </div>
              <h3 class="text-xl font-bold text-white">
                Dapatkan Update Penawaran Terbaik
              </h3>
              <p class="text-xs text-slate-300 leading-relaxed">
                Berlangganan buletin informasi promo berkala, rilis produk baru, dan katalog harga material baja ringan langsung ke email Anda.
              </p>
            </div>

            <form @submit.prevent="handleSubscribe" class="space-y-3">
              <div class="relative">
                <input 
                  v-model="email"
                  type="email" 
                  required
                  placeholder="Masukkan alamat email Anda..." 
                  class="w-full px-4 py-3.5 rounded-xl bg-white/10 border border-white/20 text-white placeholder-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-kencana-red transition-all"
                />
              </div>
              <button 
                type="submit"
                class="w-full py-3.5 rounded-xl bg-kencana-red hover:bg-kencana-redDark text-white font-bold text-sm shadow-md flex items-center justify-center space-x-2 transition-all"
              >
                <span>Kirim Berlangganan</span>
                <Send class="w-4 h-4" />
              </button>
            </form>

            <div v-if="isSubscribed" class="p-3 rounded-xl bg-emerald-500/20 border border-emerald-500/40 text-emerald-300 text-xs flex items-center space-x-2">
              <CheckCircle2 class="w-4 h-4 shrink-0" />
              <span>Terima kasih! Email Anda telah terdaftar untuk menerima info penawaran Kencana.</span>
            </div>

            <div class="text-[11px] text-slate-400 text-center lg:text-left">
              *Kami menjaga privasi data Anda. Bebas berhenti berlangganan kapan saja.
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
