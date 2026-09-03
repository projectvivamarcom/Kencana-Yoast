<script setup lang="ts">
import { ref } from 'vue'
import { ChevronDown, HelpCircle } from 'lucide-vue-next'
import SectionTitle from './SectionTitle.vue'

interface FaqItem {
  question: string
  answer: string
}

const openIndex = ref<number | null>(0)

const toggleFaq = (idx: number) => {
  openIndex.value = openIndex.value === idx ? null : idx
}

const faqs: FaqItem[] = [
  {
    question: 'Apakah saya bisa melihat contoh produk baja ringan KENCANA secara langsung?',
    answer: 'Tentu! Anda dapat melihat sampel fisik contoh produk baja ringan KENCANA secara langsung di Gedung Pusat KENCANA, Jl. Bubutan 127-135 Surabaya, atau berkunjung ke 50+ cabang KENCANA yang tersebar di berbagai kota di Indonesia.'
  },
  {
    question: 'Apakah saya dapat membeli produk baja ringan KENCANA secara eceran?',
    answer: 'Ya, Anda dapat membeli produk baja ringan KENCANA secara eceran maupun partai besar melalui layanan Halo KENCANA di WhatsApp 0811-3115-8000 atau melalui toko material bahan bangunan rekanan resmi di kota Anda.'
  },
  {
    question: 'Apakah produk baja ringan KENCANA berstandar nasional dan memiliki TKDN?',
    answer: 'Ya, seluruh lini produk baja ringan KENCANA diproduksi dengan sertifikasi SNI resmi (SNI 8399:2017 untuk profil rangka & SNI 4096:2019 untuk BjLAS) serta memiliki sertifikasi Tingkat Komponen Dalam Negeri (TKDN).'
  },
  {
    question: 'Apakah produk baja ringan KENCANA memiliki garansi resmi?',
    answer: 'Ya, KENCANA memberikan garansi mutu hingga 10 sampai 20 tahun* (sesuai spesifikasi produk dan syarat & ketentuan yang berlaku) sebagai bukti komitmen kami terhadap daya tahan material bangunan Anda.'
  },
  {
    question: 'Berapa standar minimal lapisan Aluminium Seng (AZ) pada produk KENCANA?',
    answer: 'Produk baja ringan KENCANA menggunakan standar minimal lapisan AZ100 (100 gram/m2) untuk memastikan daya tahan optimal terhadap korosi dan kelembapan iklim tropis Indonesia.'
  },
  {
    question: 'Apakah KENCANA menyediakan perhitungan rangka atap dengan software?',
    answer: 'Ya, KENCANA menyediakan layanan perhitungan konstruksi rangka atap menggunakan software khusus MaxiCAD. Software ini menganalisis kekuatan kuda-kuda dan beban angin secara akurat untuk memastikan struktur aman dan efisien.'
  }
]
</script>

<template>
  <section class="py-24 bg-white border-t border-slate-100" id="faqs">
    <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
      <!-- Section Title -->
      <SectionTitle 
        badge="Pertanyaan Umum"
        title="Frequently Asked"
        highlight="Questions (FAQs)"
        subtitle="Temukan jawaban atas berbagai pertanyaan seputar spesifikasi material, sertifikasi mutu, garansi, serta cara pemesanan produk baja ringan Kencana."
        align="center"
      />

      <!-- FAQ Accordion List -->
      <div class="space-y-4">
        <div 
          v-for="(faq, idx) in faqs" 
          :key="faq.question"
          class="rounded-2xl border border-slate-200/90 overflow-hidden transition-all duration-200"
          :class="openIndex === idx ? 'bg-slate-50 border-red-200 shadow-sm' : 'bg-white hover:border-slate-300'"
        >
          <button 
            type="button"
            @click="toggleFaq(idx)"
            class="w-full px-6 py-5 text-left flex items-center justify-between space-x-4 focus:outline-none"
          >
            <span class="text-sm sm:text-base font-bold text-slate-900 leading-snug">
              {{ faq.question }}
            </span>
            <span 
              class="w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-transform duration-300"
              :class="openIndex === idx ? 'bg-kencana-red text-white rotate-180' : 'bg-slate-100 text-slate-500'"
            >
              <ChevronDown class="w-4 h-4" />
            </span>
          </button>

          <div 
            v-show="openIndex === idx" 
            class="px-6 pb-6 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100/80 pt-3"
          >
            {{ faq.answer }}
          </div>
        </div>
      </div>

      <!-- Still Have Questions CTA -->
      <div class="text-center pt-4">
        <p class="text-xs sm:text-sm text-slate-500">
          Punya pertanyaan spesifik mengenai kebutuhan proyek Anda?
        </p>
        <a 
          href="https://wa.me/6281131158000?text=Halo%20Kencana,%20saya%20ada%20pertanyaan%20seputar%20produk"
          target="_blank"
          rel="noopener noreferrer"
          class="inline-block mt-2 font-bold text-sm text-kencana-red hover:text-kencana-redDark underline"
        >
          Tanyakan Langsung ke Tim Halo KENCANA di WhatsApp &rarr;
        </a>
      </div>
    </div>
  </section>
</template>
