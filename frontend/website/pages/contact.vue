<script setup lang="ts">
import { ref } from 'vue'
import { MapPin, Phone, Mail, Clock, Send, CheckCircle2 } from 'lucide-vue-next'

const form = ref({
  name: '',
  phone: '',
  email: '',
  subject: 'Konsultasi Baja Ringan / Rangka Atap',
  message: ''
})

const isSubmitted = ref(false)

const handleSubmit = () => {
  if (!form.value.name || !form.value.phone) {
    alert('Mohon lengkapi nama dan nomor telepon Anda.')
    return
  }
  isSubmitted.value = true
}

useHead({
  title: 'Hubungi Kami | PT Kencana Maju Bersama',
  meta: [
    { name: 'description', content: 'Kontak resmi PT Kencana Maju Bersama. Layanan pelanggan, konsultasi struktur baja ringan, dan pemesanan proyek nasional.' }
  ]
})
</script>

<template>
  <div class="space-y-12 pb-20">
    <!-- Header Banner -->
    <section class="bg-slate-900 text-white py-12 sm:py-16">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-3">
        <span class="text-xs uppercase tracking-wider font-bold text-red-400">Hubungi Kencana</span>
        <h1 class="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight">Konsultasi &amp; Layanan Pelanggan</h1>
        <p class="text-sm sm:text-base text-slate-300 max-w-xl mx-auto">
          Tim spesialis kami siap membantu perencanaan struktur rangka atap dan penawaran material untuk proyek Anda.
        </p>
      </div>
    </section>

    <!-- Main Content: Form + Office Info -->
    <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10">
        <!-- Contact Information (Left) -->
        <div class="lg:col-span-5 space-y-6">
          <div class="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-sm space-y-6">
            <h2 class="text-lg font-bold text-slate-900">Kantor Pusat Kencana</h2>
            
            <div class="space-y-4 text-xs sm:text-sm text-slate-600">
              <div class="flex items-start space-x-3">
                <MapPin class="w-5 h-5 text-red-600 shrink-0 mt-0.5" />
                <div>
                  <div class="font-bold text-slate-800">Alamat Pabrik &amp; Kantor:</div>
                  <p class="mt-0.5 leading-relaxed">
                    Kawasan Industri Rungkut (SIER), Jl. Rungkut Industri III No. 12, Surabaya, Jawa Timur 60293
                  </p>
                </div>
              </div>

              <div class="flex items-start space-x-3">
                <Phone class="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                <div>
                  <div class="font-bold text-slate-800">Hotline Telepon:</div>
                  <p class="mt-0.5 font-medium">(031) 843-8888 / 0800-100-200 (Bebas Pulsa)</p>
                </div>
              </div>

              <div class="flex items-start space-x-3">
                <Mail class="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                <div>
                  <div class="font-bold text-slate-800">Email Resmi:</div>
                  <p class="mt-0.5 font-mono break-all">info@kencana.id / sales@kencana.id</p>
                </div>
              </div>

              <div class="flex items-start space-x-3">
                <Clock class="w-5 h-5 text-indigo-600 shrink-0 mt-0.5" />
                <div>
                  <div class="font-bold text-slate-800">Jam Operasional:</div>
                  <p class="mt-0.5">Senin - Jumat: 08:00 - 17:00 WIB<br />Sabtu: 08:00 - 13:00 WIB</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Contact Form (Right) -->
        <div class="lg:col-span-7">
          <div class="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-sm space-y-6">
            <h2 class="text-lg font-bold text-slate-900">Kirim Pesan / Permintaan Penawaran</h2>

            <div v-if="isSubmitted" class="p-6 bg-emerald-50 border border-emerald-200 rounded-xl text-center space-y-2">
              <CheckCircle2 class="w-8 h-8 text-emerald-600 mx-auto" />
              <h3 class="text-sm font-bold text-emerald-800">Terima Kasih, Pesan Anda Telah Terkirim!</h3>
              <p class="text-xs text-emerald-700">Tim teknis/sales Kencana akan segera menghubungi nomor telepon Anda.</p>
              <button @click="isSubmitted = false" class="text-xs text-red-600 hover:text-red-700 underline font-semibold mt-2 inline-block">
                Kirim pesan lain
              </button>
            </div>

            <form v-else @submit.prevent="handleSubmit" class="space-y-4 text-xs sm:text-sm">
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div class="space-y-1">
                  <label class="font-semibold text-slate-700">Nama Lengkap *</label>
                  <input 
                    type="text" 
                    v-model="form.name"
                    required
                    placeholder="Contoh: Bpk. Hendra" 
                    class="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 focus:outline-none focus:border-red-600 focus:ring-1 focus:ring-red-600 text-sm"
                  />
                </div>
                <div class="space-y-1">
                  <label class="font-semibold text-slate-700">Nomor WhatsApp / HP *</label>
                  <input 
                    type="tel" 
                    v-model="form.phone"
                    required
                    placeholder="0812-xxxx-xxxx" 
                    class="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 focus:outline-none focus:border-red-600 focus:ring-1 focus:ring-red-600 text-sm"
                  />
                </div>
              </div>

              <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div class="space-y-1">
                  <label class="font-semibold text-slate-700">Email</label>
                  <input 
                    type="email" 
                    v-model="form.email"
                    placeholder="alamat@email.com" 
                    class="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 focus:outline-none focus:border-red-600 focus:ring-1 focus:ring-red-600 text-sm"
                  />
                </div>
                <div class="space-y-1">
                  <label class="font-semibold text-slate-700">Topik Konsultasi</label>
                  <select 
                    v-model="form.subject"
                    class="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 focus:outline-none focus:border-red-600 focus:ring-1 focus:ring-red-600 bg-white text-sm"
                  >
                    <option>Konsultasi Baja Ringan / Rangka Atap</option>
                    <option>Penawaran Proyek Genteng Metal</option>
                    <option>Pemesanan Hollow &amp; Spandek</option>
                    <option>Kemitraan Toko / Agen Depo</option>
                    <option>Lainnya</option>
                  </select>
                </div>
              </div>

              <div class="space-y-1">
                <label class="font-semibold text-slate-700">Detail Kebutuhan Proyek / Pesan</label>
                <textarea 
                  v-model="form.message"
                  rows="4" 
                  placeholder="Tuliskan estimasi luas atap, lokasi proyek, atau pertanyaan Anda..."
                  class="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 focus:outline-none focus:border-red-600 focus:ring-1 focus:ring-red-600 text-sm"
                ></textarea>
              </div>

              <button 
                type="submit" 
                class="w-full min-h-[44px] py-3 bg-red-600 hover:bg-red-700 active:bg-red-800 text-white font-bold text-sm rounded-xl shadow-sm flex items-center justify-center space-x-2 transition-all"
              >
                <Send class="w-4 h-4" />
                <span>Kirim Formulir Konsultasi</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
