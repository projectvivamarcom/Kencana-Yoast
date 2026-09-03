<script setup lang="ts">
import { Briefcase, MapPin, CheckCircle2, ChevronRight, Send, HeartHandshake, Zap, Trophy } from 'lucide-vue-next'

const { jobs } = useCareers()

useHead({
  title: 'Karir & Lowongan Kerja | PT Kencana Maju Bersama',
  meta: [
    { name: 'description', content: 'Bergabunglah bersama keluarga besar PT Kencana Maju Bersama. Peluang karir di bidang teknik sipil, manufaktur, sales, dan manajemen.' }
  ]
})
</script>

<template>
  <div class="space-y-14 pb-20">
    <!-- Hero Banner -->
    <section class="bg-slate-900 text-white py-14">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-3">
        <span class="text-xs uppercase tracking-wider font-bold text-blue-400">Peluang Karir Kencana</span>
        <h1 class="text-3xl sm:text-4xl font-extrabold tracking-tight">Tumbuh &amp; Berkarya Bersama Kami</h1>
        <p class="text-sm text-slate-300 max-w-xl mx-auto">
          Temukan peran impian Anda dan jadilah bagian dari transformasi industri baja ringan modern di Indonesia.
        </p>
      </div>
    </section>

    <!-- Culture & Benefits -->
    <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div class="bg-white p-6 rounded-2xl border border-slate-200 space-y-2">
          <div class="w-9 h-9 rounded-lg bg-blue-100 text-blue-700 flex items-center justify-center">
            <HeartHandshake class="w-5 h-5" />
          </div>
          <h3 class="text-base font-bold text-slate-900">Lingkungan Kolaboratif</h3>
          <p class="text-xs text-slate-500 leading-relaxed">
            Budaya kerja kekeluargaan yang saling mendukung, mengapresiasi inovasi, dan menjunjung tinggi integritas.
          </p>
        </div>

        <div class="bg-white p-6 rounded-2xl border border-slate-200 space-y-2">
          <div class="w-9 h-9 rounded-lg bg-indigo-100 text-indigo-700 flex items-center justify-center">
            <Zap class="w-5 h-5" />
          </div>
          <h3 class="text-base font-bold text-slate-900">Pengembangan Profesional</h3>
          <p class="text-xs text-slate-500 leading-relaxed">
            Program pelatihan berkala, sertifikasi keahlian teknis SNI/ISO, serta jenjang karir yang transparan.
          </p>
        </div>

        <div class="bg-white p-6 rounded-2xl border border-slate-200 space-y-2">
          <div class="w-9 h-9 rounded-lg bg-amber-100 text-amber-700 flex items-center justify-center">
            <Trophy class="w-5 h-5" />
          </div>
          <h3 class="text-base font-bold text-slate-900">Kompensasi Kompetitif</h3>
          <p class="text-xs text-slate-500 leading-relaxed">
            Gaji kompetitif industri, tunjangan kesehatan keluarga, asuransi ketenagakerjaan, serta bonus performa tahunan.
          </p>
        </div>
      </div>
    </section>

    <!-- Job Openings List -->
    <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
      <div class="flex items-center justify-between border-b border-slate-200 pb-3">
        <h2 class="text-xl font-bold text-slate-900">Lowongan Pekerjaan Terbuka</h2>
        <span class="text-xs text-slate-500 font-mono">{{ jobs.length }} Posisi Tersedia</span>
      </div>

      <div class="space-y-4">
        <div 
          v-for="job in jobs" 
          :key="job.id"
          class="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm hover:border-blue-400 transition-all space-y-4"
        >
          <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <div>
              <span class="text-[11px] font-semibold text-blue-700 bg-blue-50 px-2 py-0.5 rounded">
                {{ job.department }}
              </span>
              <h3 class="text-lg font-bold text-slate-900 mt-1">{{ job.title }}</h3>
            </div>
            <div class="flex items-center space-x-3 text-xs text-slate-500">
              <span class="flex items-center space-x-1">
                <MapPin class="w-3.5 h-3.5 text-slate-400" />
                <span>{{ job.location }}</span>
              </span>
              <span>&bull;</span>
              <span class="font-mono bg-slate-100 px-2 py-0.5 rounded text-slate-700 font-medium">{{ job.type }}</span>
            </div>
          </div>

          <p class="text-xs text-slate-600 leading-relaxed">
            {{ job.description }}
          </p>

          <div class="space-y-1.5 pt-1">
            <span class="text-[11px] font-bold text-slate-800 uppercase tracking-wider">Kualifikasi:</span>
            <ul class="grid grid-cols-1 sm:grid-cols-2 gap-1.5 text-xs text-slate-600">
              <li v-for="(req, idx) in job.requirements" :key="idx" class="flex items-start space-x-1.5">
                <CheckCircle2 class="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                <span>{{ req }}</span>
              </li>
            </ul>
          </div>

          <div class="pt-3 border-t border-slate-100 flex items-center justify-end">
            <a 
              :href="`mailto:karir@kencana.id?subject=Lamaran Pekerjaan: ${job.title}`"
              class="px-5 py-2.5 bg-blue-700 hover:bg-blue-800 text-white font-semibold text-xs rounded-xl shadow-sm flex items-center space-x-1.5 transition-all"
            >
              <Send class="w-3.5 h-3.5" />
              <span>Kirim Lamaran (karir@kencana.id)</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
