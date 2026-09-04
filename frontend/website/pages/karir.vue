<script setup lang="ts">
import { ref, computed } from 'vue'
import { 
  Briefcase, 
  MapPin, 
  CheckCircle2, 
  Search, 
  Send, 
  FileText, 
  Calendar, 
  Users, 
  BrainCircuit, 
  UserCheck, 
  Coins, 
  Rocket, 
  ChevronRight,
  Building2,
  Mail
} from 'lucide-vue-next'

const { jobs } = useCareers()

const searchQuery = ref('')
const selectedLocation = ref('All')

const locations = computed(() => {
  const locs = new Set<string>()
  jobs.forEach(j => {
    const city = j.location.split(',')[0].replace(' Head Office', '').trim()
    locs.add(city)
  })
  return ['All', ...Array.from(locs)]
})

const filteredJobs = computed(() => {
  return jobs.filter(j => {
    const matchSearch = j.title.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
                        j.department.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
                        j.description.toLowerCase().includes(searchQuery.value.toLowerCase())
    
    const matchLoc = selectedLocation.value === 'All' || j.location.includes(selectedLocation.value)
    return matchSearch && matchLoc
  })
})

const recruitmentSteps = [
  { step: 1, title: 'Temukan peran yang cocok untuk Anda', desc: 'Pilih posisi yang paling sesuai dengan passion dan kualifikasi keahlian Anda.', icon: Search },
  { step: 2, title: 'Kirim lamaran anda', desc: 'Lengkapi CV terbaru, portfolio, dan surat lamaran kerja resmi Anda.', icon: Send },
  { step: 3, title: 'Terima undangan wawancara', desc: 'Kandidat yang lolos seleksi berkas akan dihubungi oleh tim HR Kencana.', icon: Mail },
  { step: 4, title: 'Pilih waktu wawancara', desc: 'Konfirmasikan ketersediaan jadwal wawancara baik tatap muka maupun daring.', icon: Calendar },
  { step: 5, title: 'Wawancara HRD', desc: 'Sesi perkenalan dan evaluasi kesesuaian budaya kerja serta nilai integritas Kencana.', icon: Users },
  { step: 6, title: 'Psikotes', desc: 'Pengujian potensi akademik, psikologis, dan tes kemampuan teknis sesuai bidang.', icon: BrainCircuit },
  { step: 7, title: 'Wawancara dengan user', desc: 'Diskusi mendalam mengenai proyek teknis, studi kasus, dan target operasional kerja.', icon: UserCheck },
  { step: 8, title: 'Negosiasi gaji', desc: 'Pembahasan penawaran paket kompensasi kompetitif, benefit kesehatan, dan fasilitas.', icon: Coins },
  { step: 9, title: 'Mulailah perjalanan', desc: 'Onboarding resmi dan sambut masa depan karir cemerlang Anda bersama Kencana!', icon: Rocket }
]

useHead({
  title: 'Lowongan Kerja PT Kencana Maju Bersama tersedia sekarang - Kencana Ahlinya Baja Ringan',
  meta: [
    {
      name: 'description',
      content: 'Bergabung bersama PT Kencana Maju Bersama dan temukan peluang karir serta lowongan kerja terbaru di lingkungan kerja profesional.'
    }
  ],
  link: [
    { rel: 'canonical', href: 'https://kencanaindonesia.co.id/karir/' }
  ]
})

useSeoMeta({
  title: 'Lowongan Kerja PT Kencana Maju Bersama tersedia sekarang - Kencana Ahlinya Baja Ringan',
  ogTitle: 'Lowongan Kerja PT Kencana Maju Bersama | Karir Kencana',
  ogDescription: 'Bergabung bersama PT Kencana Maju Bersama dan temukan peluang karir serta lowongan kerja terbaru di lingkungan kerja profesional.',
  ogUrl: 'https://kencanaindonesia.co.id/karir/',
  ogImage: '/assets/img/Logo-Kencana-Ahlinya-Baja-Ringan.webp'
})
</script>

<template>
  <div class="min-h-screen bg-slate-50 font-sans pb-24">
    <!-- Breadcrumb & Header Banner -->
    <section class="bg-gradient-to-r from-slate-900 via-slate-800 to-red-950 text-white py-14 sm:py-20">
      <div class="max-w-[1300px] mx-auto px-6 sm:px-10 lg:px-16 text-center space-y-4">
        <!-- Breadcrumb -->
        <div class="inline-flex items-center space-x-2 text-xs text-slate-400 font-medium">
          <NuxtLink to="/" class="hover:text-white transition-colors">Home Page</NuxtLink>
          <span>/</span>
          <span class="text-red-400 font-bold">Karir</span>
        </div>

        <div class="space-y-2">
          <p class="text-xs sm:text-sm font-bold uppercase tracking-widest text-red-500">
            Selamat Datang Talenta
          </p>
          <h1 class="text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
            Temukan peluang karirmu di <span class="text-red-500">KENCANA</span>
          </h1>
        </div>

        <p class="text-xs sm:text-base text-slate-300 max-w-2xl mx-auto leading-relaxed">
          Tumbuh dan berkembang bersama pelopor industri baja ringan berstandar nasional di Indonesia. Mari wujudkan karya nyata bersama ribuan insan Kencana.
        </p>
      </div>
    </section>

    <div class="max-w-[1300px] mx-auto px-6 sm:px-10 lg:px-16 space-y-20 -mt-8">
      <!-- Section: Recruitment Process (Bagaimana cara menjadi bagian dari kami) -->
      <section class="bg-white rounded-3xl p-8 sm:p-12 shadow-xl border border-slate-200/80 space-y-10">
        <div class="text-center max-w-3xl mx-auto space-y-3">
          <h2 class="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            Bagaimana cara menjadi bagian dari kami
          </h2>
          <p class="text-xs sm:text-sm text-slate-600 leading-relaxed">
            Bergabung dengan <strong>KENCANA</strong> dan temukan tempat untuk bertumbuh! Lihat proses aplikasi kami di bawah. Jika Anda memiliki bakat yang kami butuhkan, kami akan segera menghubungi Anda.
          </p>
        </div>

        <!-- 9 Steps Grid -->
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div 
            v-for="st in recruitmentSteps" 
            :key="st.step"
            class="p-6 rounded-2xl border border-slate-100 bg-slate-50/60 hover:bg-white hover:border-red-200 hover:shadow-lg transition-all duration-300 flex flex-col space-y-3 group"
          >
            <div class="flex items-center justify-between">
              <span class="w-8 h-8 rounded-full bg-red-600 text-white font-extrabold text-xs flex items-center justify-center shadow-md">
                {{ st.step }}
              </span>
              <component :is="st.icon" class="w-5 h-5 text-slate-400 group-hover:text-red-600 transition-colors" />
            </div>
            <h3 class="text-base font-extrabold text-slate-900 group-hover:text-red-600 transition-colors">
              {{ st.title }}
            </h3>
            <p class="text-xs text-slate-600 leading-relaxed">
              {{ st.desc }}
            </p>
          </div>
        </div>
      </section>

      <!-- Section: Open Positions (Kami memiliki posisi terbuka sekarang!) -->
      <section id="posisi-terbuka" class="space-y-8">
        <div class="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-slate-200 pb-6">
          <div class="space-y-2">
            <h2 class="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              Kami memiliki posisi terbuka sekarang!
            </h2>
            <p class="text-xs sm:text-sm text-slate-600">
              Telusuri lowongan kerja yang tersedia di berbagai kantor cabang dan unit operasional Kencana di seluruh Indonesia.
            </p>
          </div>

          <!-- Search & Filter Controls -->
          <div class="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
            <!-- Location Filter -->
            <select 
              v-model="selectedLocation"
              class="px-4 py-2.5 rounded-xl border border-slate-200 bg-white text-xs font-semibold text-slate-700 focus:outline-none focus:border-red-500 shadow-sm"
            >
              <option value="All">Semua Lokasi Cabang</option>
              <option v-for="loc in locations.filter(l => l !== 'All')" :key="loc" :value="loc">
                Area {{ loc }}
              </option>
            </select>

            <!-- Search Input -->
            <div class="relative min-w-[240px]">
              <input 
                v-model="searchQuery"
                type="text"
                placeholder="Cari posisi pekerjaan..."
                class="w-full pl-9 pr-4 py-2.5 rounded-xl border border-slate-200 bg-white text-xs text-slate-900 focus:outline-none focus:border-red-500 shadow-sm"
              />
              <Search class="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            </div>
          </div>
        </div>

        <!-- Job Cards List -->
        <div v-if="filteredJobs.length > 0" class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div 
            v-for="job in filteredJobs" 
            :key="job.id"
            class="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200/90 shadow-sm hover:shadow-xl hover:border-red-300 transition-all duration-300 flex flex-col justify-between space-y-6 group"
          >
            <div class="space-y-4">
              <!-- Department & Type Tag -->
              <div class="flex items-center justify-between text-xs">
                <span class="font-bold text-red-600 bg-red-50 px-2.5 py-1 rounded-full border border-red-100">
                  {{ job.department }}
                </span>
                <span class="font-semibold text-slate-500 bg-slate-100 px-2.5 py-1 rounded-full">
                  {{ job.type }}
                </span>
              </div>

              <!-- Job Title & Location -->
              <div>
                <h3 class="text-lg sm:text-xl font-extrabold text-slate-900 group-hover:text-red-600 transition-colors">
                  {{ job.title }}
                </h3>
                <div class="flex items-center space-x-1.5 text-xs text-slate-500 mt-1.5">
                  <MapPin class="w-3.5 h-3.5 text-red-500 shrink-0" />
                  <span>{{ job.location }}</span>
                </div>
              </div>

              <!-- Description -->
              <p class="text-xs sm:text-sm text-slate-600 leading-relaxed">
                {{ job.description }}
              </p>

              <!-- Qualifications -->
              <div class="space-y-2 pt-2">
                <p class="text-xs font-bold text-slate-900 uppercase tracking-wider">Kualifikasi Utama:</p>
                <ul class="space-y-1.5 text-xs text-slate-600">
                  <li v-for="(req, idx) in job.requirements" :key="idx" class="flex items-start space-x-2">
                    <CheckCircle2 class="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                    <span>{{ req }}</span>
                  </li>
                </ul>
              </div>
            </div>

            <!-- Apply CTA Button -->
            <div class="pt-4 border-t border-slate-100 flex items-center justify-between">
              <span class="text-xs text-slate-400 font-medium">Kirimkan CV Anda</span>
              <a 
                :href="`mailto:hrd@kencanaindonesia.co.id?subject=Lamaran Pekerjaan: ${encodeURIComponent(job.title)}&body=Halo Tim HRD Kencana, saya tertarik untuk melamar posisi ${encodeURIComponent(job.title)} di ${encodeURIComponent(job.location)}.`"
                class="inline-flex items-center space-x-2 px-5 py-2.5 rounded-[5px] text-xs font-bold text-white shadow-md hover:bg-black transition-all"
                style="background: linear-gradient(180deg, #FF3535 0%, #C60505 100%);"
              >
                <span>Lamar Posisi Ini</span>
                <ChevronRight class="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>

        <!-- Empty State -->
        <div v-else class="text-center py-16 bg-white rounded-3xl border border-slate-200 p-8 space-y-3">
          <Briefcase class="w-12 h-12 text-slate-300 mx-auto" />
          <h3 class="text-base font-bold text-slate-800">Tidak ada posisi yang cocok dengan kriteria pencarian</h3>
          <p class="text-xs text-slate-500 max-w-sm mx-auto">
            Coba gunakan kata kunci lain atau pilih lokasi cabang yang berbeda untuk menemukan lowongan yang tersedia.
          </p>
        </div>
      </section>
    </div>
  </div>
</template>
