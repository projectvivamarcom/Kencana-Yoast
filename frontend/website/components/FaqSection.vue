<script setup lang="ts">
import { ref } from 'vue'
import { Plus, Minus } from 'lucide-vue-next'

const openIndex = ref<number | null>(null)

const toggle = (idx: number) => {
  openIndex.value = openIndex.value === idx ? null : idx
}

const faqs = [
  {
    q: 'Apakah saya bisa melihat contoh produk baja ringan KENCANA secara langsung?',
    a: 'Tentu! Anda dapat melihat contoh produk baja ringan KENCANA secara langsung di Gedung KENCANA Jl. Bubutan 127-135 Surabaya atau dapat berkunjung ke cabang KENCANA di kota terdekat.'
  },
  {
    q: 'Apakah saya dapat membeli produk baja ringan KENCANA secara eceran?',
    a: 'Ya, Anda dapat membeli produk baja ringan KENCANA melalui Halo KENCANA di 0811-3115-8000 atau langsung berkunjung ke cabang KENCANA terdekat di kota Anda.'
  },
  {
    q: 'Apakah produk baja ringan KENCANA berstandar nasional dan TKDN?',
    a: 'Ya, produk baja ringan KENCANA memiliki SNI dan TKDN.'
  },
  {
    q: 'Bagaimana saya mendapatkan nomor telepon cabang KENCANA di kota saya berada?',
    a: 'Anda dapat menghubungi Halo KENCANA di 0811-3115-8000 melalui Whatsapp atau Telepon dan tanyakan nomor telepon cabang/sales di kota anda berada.'
  },
  {
    q: 'Apakah produk baja ringan KENCANA dapat dibeli dengan rikues warna dan ukuran tertentu?',
    a: 'Bisa, tergantung dari ketersedian stok yang ada.'
  },
  {
    q: 'Dimanakah saya dapat membeli produk baja ringan KENCANA?',
    a: 'Anda dapat membeli produk KENCANA melalui 50 lebih cabang kami di seluruh Indonesia atau toko material bahan bangunan langganan di kota Anda. Informasi lebih lanjut hubungi Halo KENCANA di 0811-3115-8000 melalui Whatsapp.'
  },
  {
    q: 'Apakah produk baja ringan KENCANA memiliki garansi?',
    a: 'Ya, produk kami memiliki garansi hingga 10 Tahun* (S&K Berlaku).'
  },
  {
    q: 'Apakah produk baja ringan KENCANA memiliki sertifikasi uji?',
    a: 'Ya, produk baja ringan KENCANA memiliki sertifikasi uji*'
  },
  {
    q: 'Berapa standar minimal lapisan AZ yang dimilki oleh produk baja ringan KENCANA?',
    a: 'Produk baja ringan KENCANA memiliki standar minimal AZ100'
  },
  {
    q: 'Apakah KENCANA menyediakan perhitungan rangka atap?',
    a: 'Ya, KENCANA menyediakan perhitungan rangka atap dengan software khusus, - Maxicad. Maxicad adalah software analisa struktur kuda-kuda yang diciptakan untuk profil baja ringan KENCANA pada rangka atap. Maxicad, telah direkomendasikan untuk rancang bangun atap yang presisi dan kokoh.'
  }
]
</script>

<template>
  <section class="py-20 bg-white border-b border-slate-100" id="faqs">
    <div class="max-w-[1300px] mx-auto px-6 sm:px-10 lg:px-16 space-y-12">
      <!-- Section Header -->
      <div class="space-y-2 text-center">
        <h2 class="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
          FAQs
        </h2>
        <p class="text-sm sm:text-base text-slate-600">
          Kami akan menjawab pertanyaan yang sering diajukan tentang KENCANA
        </p>
      </div>

      <!-- Accordion List -->
      <div class="max-w-4xl mx-auto divide-y divide-slate-200 border-y border-slate-200">
        <div 
          v-for="(faq, idx) in faqs" 
          :key="idx"
          class="py-4 sm:py-5"
        >
          <button 
            type="button"
            @click="toggle(idx)"
            class="w-full flex items-center justify-between text-left space-x-4 focus:outline-none group"
          >
            <span class="text-sm sm:text-base font-bold text-slate-900 group-hover:text-red-600 transition-colors">
              {{ faq.q }}
            </span>
            <span class="w-6 h-6 flex items-center justify-center shrink-0 text-slate-400 group-hover:text-red-600 transition-colors">
              <Minus v-if="openIndex === idx" class="w-5 h-5 text-red-600" />
              <Plus v-else class="w-5 h-5" />
            </span>
          </button>

          <div 
            v-show="openIndex === idx"
            class="mt-3 text-xs sm:text-sm text-slate-600 leading-relaxed pr-8 animate-fadeIn"
          >
            {{ faq.a }}
          </div>
        </div>
      </div>

      <!-- Partner / Certification Badges Logo Bar (Section 19 & 20) -->
      <div class="pt-12 space-y-8 text-center">
        <!-- SNI dkk Banner -->
        <div class="flex justify-center">
          <img 
            src="/images/general/sni-dkk.png" 
            alt="Sertifikasi SNI Kencana" 
            class="max-w-md sm:max-w-lg w-full h-auto object-contain"
          />
        </div>

        <!-- Green Product Award & Tidak Tipu-Tipu -->
        <div class="flex items-center justify-center space-x-8">
          <img 
            src="/images/logo/logo-gpa-2024.png" 
            alt="Green Product Award 2024" 
            class="h-14 sm:h-16 w-auto object-contain"
          />
          <img 
            src="/images/logo/logo-tidak-tipu-tipu.png" 
            alt="Tidak Tipu-Tipu" 
            class="h-14 sm:h-16 w-auto object-contain"
          />
        </div>
      </div>
    </div>
  </section>
</template>
