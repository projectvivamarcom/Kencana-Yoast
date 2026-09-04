<script setup lang="ts">
// ShowcaseSection: Proyek Roll On Site (Video YT), Penghargaan Produk (5 Piala), & Apa Kata #SobatKENCANA

interface TrophyItem {
  id: number
  image: string
  title: string
  subtitle?: string
}

// Data Penghargaan Produk (Text code agar mudah diedit)
const trophies: TrophyItem[] = [
  {
    id: 1,
    image: '/assets/img/piala-1.png',
    title: 'Best Choice Brand',
    subtitle: 'Light Steel Construction Systems'
  },
  {
    id: 2,
    image: '/assets/img/piala-2.png',
    title: 'Anugrah Ekonomi Hijau Inovasi',
    subtitle: 'Produk Baja Ringan Ramah Lingkungan'
  },
  {
    id: 3,
    image: '/assets/img/piala-3.png',
    title: 'Perusahaan Peduli',
    subtitle: 'Pembangunan Berkelanjutan'
  },
  {
    id: 4,
    image: '/assets/img/piala-4.png',
    title: 'Outstanding Contribution in',
    subtitle: 'Economic Growth'
  },
  {
    id: 5,
    image: '/assets/img/piala-5.png',
    title: 'Best Choice',
    subtitle: 'Building Material'
  }
]
</script>

<template>
  <div class="w-full space-y-0 overflow-hidden font-sans">
    <!-- 1. "Proyek Roll On Site" Section with YouTube Background Video -->
    <section 
      id="roll-on-site"
      class="relative py-16 sm:py-24 lg:py-28 bg-slate-950 text-white overflow-hidden min-h-[540px] sm:min-h-[620px] flex items-center select-none"
    >
      <!-- Background YouTube Video (Autoplay, Loop, Mute) -->
      <div class="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <iframe
          class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[180%] sm:w-[135%] h-[180%] sm:h-[135%] object-cover pointer-events-none opacity-85"
          src="https://www.youtube-nocookie.com/embed/JKPQ9NDGy8Q?autoplay=1&mute=1&loop=1&playlist=JKPQ9NDGy8Q&controls=0&showinfo=0&rel=0&modestbranding=1&playsinline=1&enablejsapi=1&iv_load_policy=3&disablekb=1"
          title="Proyek Roll On Site Video Kencana"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
        <!-- Contrast Overlay -->
        <div class="absolute inset-0 bg-black/25 sm:bg-black/20"></div>
      </div>

      <!-- Overlaid Pill Box -->
      <div class="relative z-10 max-w-[1100px] w-full mx-auto px-4 sm:px-6">
        <div class="border-2 sm:border-[3px] border-white rounded-[32px] sm:rounded-[48px] p-6 sm:p-10 lg:p-12 bg-black/25 backdrop-blur-[2px] flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-10 shadow-2xl">
          <!-- Text Left -->
          <div class="space-y-4 max-w-lg text-left">
            <h2 class="text-3xl sm:text-4xl lg:text-[42px] font-extrabold text-white tracking-tight leading-tight drop-shadow-md">
              Proyek Roll On Site
            </h2>
            <p class="text-xs sm:text-[14px] text-white/95 leading-relaxed font-normal drop-shadow-sm">
              Atap yang digunakan untuk Roll On Site diproduksi secara langsung di lokasi proyek, sehingga memberikan efisiensi bagi customer, baik dari segi biaya maupun waktu dalam pemasangan atap.
            </p>
            <div class="pt-2">
              <a 
                href="https://www.youtube.com/watch?v=JKPQ9NDGy8Q"
                target="_blank"
                rel="noopener noreferrer"
                class="inline-block px-7 py-2.5 rounded-full bg-white hover:bg-slate-100 text-slate-900 font-bold text-xs sm:text-sm shadow-lg transition-all transform hover:scale-105"
              >
                Selengkapnya
              </a>
            </div>
          </div>

          <!-- Machine & Crew Image Right -->
          <div class="w-full lg:w-auto max-w-[400px] rounded-2xl overflow-hidden shadow-2xl shrink-0 border border-white/20">
            <img 
              src="/images/general/mask-roll-on-site.png" 
              alt="Proyek Roll On Site Kencana" 
              class="w-full h-auto object-cover rounded-2xl"
            />
          </div>
        </div>
      </div>
    </section>

    <!-- 2. "Penghargaan produk KENCANA®" (5 Trophies Grid Display) -->
    <section class="py-16 sm:py-24 bg-white border-b border-slate-100">
      <div class="max-w-[1300px] mx-auto px-6 sm:px-10 lg:px-16 space-y-10 sm:space-y-12">
        <!-- Title: "Penghargaan produk" + Logo KENCANA (gambar) -->
        <div class="space-y-2">
          <h3 class="text-xl sm:text-2xl font-bold text-red-600">
            Penghargaan produk
          </h3>
          <img
            src="/assets/img/logokmb.png"
            alt="KENCANA® Ahlinya Baja Ringan"
            class="h-10 sm:h-12 lg:h-14 w-auto object-contain"
          />
        </div>

        <!-- 5 Trophies Grid: individual PNG per piala + teks di bawahnya -->
        <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 sm:gap-8 items-start">
          <div
            v-for="trophy in trophies"
            :key="trophy.id"
            class="flex flex-col items-center text-center group"
          >
            <!-- Trophy Image -->
            <div class="w-full h-52 sm:h-60 lg:h-72 flex items-center justify-center p-2 mb-4">
              <img
                :src="trophy.image"
                :alt="trophy.title"
                class="max-h-full max-w-full object-contain drop-shadow-sm transition-transform duration-300 group-hover:scale-105"
                loading="lazy"
              />
            </div>
            <!-- Text di bawah piala -->
            <div class="w-full text-center space-y-1 px-2">
              <h4 class="text-xs sm:text-sm font-bold text-slate-800 leading-snug">
                {{ trophy.title }}
              </h4>
              <p v-if="trophy.subtitle" class="text-[11px] sm:text-xs text-slate-500 font-medium leading-snug">
                {{ trophy.subtitle }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 3. "Apa Kata #SobatKENCANA" (Exact Match to New Screenshot 1) -->
    <section 
      class="relative py-24 sm:py-32 lg:py-40 bg-white bg-no-repeat bg-center bg-cover flex items-center min-h-[500px] sm:min-h-[580px]"
      style="background-image: url('/images/banners/apa-kata-landing-page.png');"
    >
      <div class="max-w-[1300px] w-full mx-auto px-6 sm:px-10 lg:px-16 flex justify-end">
        <div class="w-full lg:w-7/12 flex flex-col items-center text-center space-y-3 lg:pr-12">
          <!-- Gray Heading Above Quote -->
          <h2 class="text-3xl sm:text-4xl lg:text-[46px] font-bold text-slate-400 tracking-tight leading-tight">
            Apa Kata
            <br />
            <span class="font-extrabold text-slate-500">#SobatKENCANA</span>
          </h2>

          <!-- Red Quote Spacer / Symbol (Baked into background image, with fallback on mobile) -->
          <div class="h-16 sm:h-20 lg:h-24 w-full flex items-center justify-center">
            <span class="lg:hidden text-red-600 font-serif text-6xl leading-none">“</span>
          </div>

          <!-- Testimonial Quote Text -->
          <p class="text-xs sm:text-[13px] text-slate-600 max-w-sm sm:max-w-md leading-relaxed font-normal">
            Saya sangat puas dengan kualitas baja ringan Kencana. Bahannya kuat, presisi, dan tahan lama.
          </p>

          <!-- Author Info -->
          <div class="space-y-0.5 pt-1">
            <div class="font-bold text-slate-800 text-xs sm:text-sm">
              Arie Dwi Andhika
            </div>
            <div class="text-[11px] sm:text-xs text-slate-500 font-medium">
              Artis Indonesia
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
