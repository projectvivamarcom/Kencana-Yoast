<script setup lang="ts">
const pillars = [
  {
    title: 'SNI',
    icon: '/images/general/icon-sni.png',
    descriptions: [
      'SNI Profil Rangka Baja Ringan No. 8399: 2017',
      'SNI Baja Lembaran dan Gulungan Lapis Paduan Aluminium - Seng (BJLAS) No. 4096: 2007/2019'
    ]
  },
  {
    title: 'TKDN',
    icon: '/images/general/icon-tkdn.png',
    descriptions: [
      'Sebagai bentuk komitmen perusahaan dalam ekonomi Indonesia serta membangun kepercayaan dengan pemangku kepentingan dan konsumen.'
    ]
  },
  {
    title: 'MaxiCAD',
    icon: '/images/general/icon-maxicad.png',
    descriptions: [
      'Program khusus yang dirancang untuk kuda kuda Baja Ringan KENCANA, guna menjamin keamanan dan efisiensi struktur.'
    ]
  },
  {
    title: 'GARANSI',
    icon: '/images/general/icon-garansi.png',
    descriptions: [
      'KENCANA menghadirkan produk berkualitas yang dijamin dengan GARANSI hingga *20 tahun.'
    ]
  }
]
</script>

<template>
  <div class="w-full overflow-hidden font-sans">

    <!-- ===================================================== -->
    <!-- 1. BANNER -->
    <!-- ===================================================== -->
    <section
      class="relative bg-cover bg-center bg-no-repeat
             py-16 sm:py-20 lg:py-24"
      style="background-image: url('/images/banners/about-bg.png');"
    >
      <div
        class="mx-auto flex max-w-[1300px]
               flex-col items-center justify-center
               px-6 text-center sm:px-10 lg:px-16"
      >
        <div class="flex flex-col items-center">

          <!-- #tidak TIPU TIPU -->
          <div
            class="mb-3 w-28
                   sm:mb-4 sm:w-32
                   lg:w-36"
          >
            <img
              src="/images/general/ttt-1.svg"
              alt="#tidak TIPU TIPU"
              class="block h-auto w-full object-contain"
            />
          </div>

          <!-- Main Text -->
          <h3
            class="text-sm font-semibold leading-tight
                   text-slate-900
                   sm:text-lg
                   lg:text-[23px]"
          >
            <span>Ahli dalam Produk</span>
            <br />
            <span class="font-extrabold text-red-600">
              Baja Ringan
            </span>
            <span> Sejak 1991</span>
          </h3>

        </div>
      </div>
    </section>


    <!-- ===================================================== -->
    <!-- 2. KELEBIHAN PRODUK -->
    <!-- ===================================================== -->
    <section
      class="bg-white
             py-10 sm:py-12 lg:py-14"
    >
      <div
        class="mx-auto max-w-[1300px]
               px-6 sm:px-10 lg:px-16"
      >

        <!-- ===================== -->
        <!-- SECTION TITLE -->
        <!-- ===================== -->
        <div
          class="mb-6
                 sm:mb-7
                 lg:mb-8"
        >

          <!-- Kelebihan produk -->
          <h3
            class="text-xl font-bold leading-tight
                   text-red-600
                   sm:text-2xl"
          >
            Kelebihan produk
          </h3>

          <!-- LOGO KENCANA -->
          <div
            class="mt-2 w-[190px]
                  sm:w-[220px]
                  lg:w-[250px]"
          >
            <img
              src="/assets/img/logokmb.png"
              alt="KENCANA"
              class="block h-auto w-full object-contain object-left"
            />
          </div>
        </div>


        <!-- ===================== -->
        <!-- PRODUCT ADVANTAGES -->
        <!-- ===================== -->
        <div
          class="grid grid-cols-1
                 gap-8
                 sm:grid-cols-2
                 sm:gap-x-8
                 sm:gap-y-10
                 lg:grid-cols-4
                 lg:gap-x-10
                 lg:gap-y-0"
        >

          <div
            v-for="p in pillars"
            :key="p.title"
            class="flex flex-col items-start text-left"
          >

            <!-- ===================== -->
            <!-- LARGE ICON -->
            <!-- ===================== -->
            <div
              class="mb-4 flex
                     h-[110px] w-[110px]
                     items-center justify-start
                     sm:h-[120px] sm:w-[120px]
                     lg:h-[130px] lg:w-[130px]"
            >
              <img
                :src="p.icon"
                :alt="p.title"
                class="block h-full w-full
                       object-contain object-left"
              />
            </div>


            <!-- ===================== -->
            <!-- TITLE -->
            <!-- ===================== -->
            <h3
              class="mb-2
                     text-lg font-bold
                     leading-tight
                     tracking-wide
                     text-slate-900
                     sm:text-xl"
            >
              {{ p.title }}
            </h3>


            <!-- ===================== -->
            <!-- DESCRIPTION -->
            <!-- ===================== -->
            <div
              class="max-w-[275px]
                     space-y-2
                     text-[13px]
                     leading-[1.6]
                     text-slate-600
                     sm:text-[14px]"
            >
              <p
                v-for="(desc, dIdx) in p.descriptions"
                :key="dIdx"
              >
                {{ desc }}
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>

  </div>
</template>