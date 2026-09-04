<script setup lang="ts">
import { ref } from 'vue'

// Default open index is 0 as seen in live site Screenshot 3
const openIndex = ref<number | null>(0)

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
    q: 'Berapa standar minimal lapisan AZ yang dimiliki oleh produk baja ringan KENCANA?',
    a: 'Produk baja ringan KENCANA memiliki standar minimal AZ100'
  },
  {
    q: 'Apakah KENCANA menyediakan perhitungan rangka atap?',
    a: 'Ya, KENCANA menyediakan perhitungan rangka atap dengan software khusus, - Maxicad. Maxicad adalah software analisa struktur kuda-kuda yang diciptakan untuk profil baja ringan KENCANA pada rangka atap. Maxicad, telah direkomendasikan untuk rancang bangun atap yang presisi dan kokoh.'
  },
  {
    q: 'Apa itu Maxicad?',
    a: 'Maxicad adalah program khusus analisa struktur yang dirancang untuk kuda-kuda Baja Ringan KENCANA guna menjamin keamanan dan efisiensi struktur atap bangunan.'
  }
]
</script>

<template>
  <section class="py-16 sm:py-24 bg-white" id="faqs">
    <div class="max-w-[1300px] mx-auto px-6 sm:px-10 lg:px-16 space-y-12">
      <!-- Section Title (Screenshot 3) -->
      <div class="space-y-1.5 text-left max-w-4xl mx-auto">
        <h2 class="text-3xl sm:text-4xl font-extrabold text-slate-500 tracking-tight">
          FAQs
        </h2>
        <p class="text-xs sm:text-sm text-slate-500 font-normal">
          Kami akan menjawab pertanyaan yang sering diajukan tentang KENCANA
        </p>
      </div>

      <!-- Accordion List: Individual Rounded Boxes (Screenshot 3) -->
      <div class="max-w-4xl mx-auto space-y-3">
        <div 
          v-for="(faq, idx) in faqs" 
          :key="idx"
          class="bg-white border border-slate-200/90 rounded-xl px-5 py-4 transition-all"
        >
          <button 
            type="button"
            @click="toggle(idx)"
            class="w-full flex items-center justify-between text-left focus:outline-none group cursor-pointer"
          >
            <span class="text-xs sm:text-[13.5px] font-semibold text-slate-800 group-hover:text-red-600 transition-colors">
              {{ faq.q }}
            </span>
          </button>

          <div 
            v-show="openIndex === idx"
            class="mt-3 pt-2 text-xs sm:text-[13px] text-slate-600 leading-relaxed animate-fadeIn"
          >
            {{ faq.a }}
          </div>
        </div>
      </div>

      <!-- Partner / Certification Banner (Screenshot 4) -->
      <div class="pt-16 flex justify-center px-4">
        <img 
          src="/images/general/sni-dkk.png" 
          alt="Sertifikasi SNI, KAN, MAXICAD Kencana" 
          class="max-w-xl sm:max-w-2xl w-full h-auto object-contain"
        />
      </div>
    </div>
  </section>
</template>
