<script setup lang="ts">
import { Phone, MessageCircle, Mail, MapPin, ExternalLink } from 'lucide-vue-next'
</script>

<template>
  <footer class="bg-slate-950 text-slate-300 pt-16 pb-12 border-t border-slate-800">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
      <!-- Main Grid Columns -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12">
        <!-- Col 1: Corporate Identity & Address (Span 2) -->
        <div class="lg:col-span-2 space-y-6">
          <NuxtLink to="/" class="inline-block">
            <img 
              src="/images/logo/logo-kencana-white.webp" 
              alt="Kencana Ahlinya Baja Ringan" 
              class="h-12 w-auto object-contain"
            />
          </NuxtLink>

          <p class="text-xs sm:text-sm text-slate-400 leading-relaxed max-w-sm">
            <strong>PT Kencana Maju Bersama</strong> adalah pelopor manufaktur material baja ringan di Indonesia sejak 1991. Menghadirkan solusi rangka atap, genteng metal, hollow plafon, dan spandek berstandar SNI murni dan bergaransi resmi.
          </p>

          <!-- Contact Details List -->
          <div class="space-y-3 text-xs sm:text-sm text-slate-300">
            <div class="flex items-start space-x-3">
              <MapPin class="w-4 h-4 text-kencana-red shrink-0 mt-0.5" />
              <span><strong>Kantor Pusat:</strong> Gedung KENCANA, Jl. Bubutan 127-135, Surabaya, Jawa Timur 60174</span>
            </div>
            <div class="flex items-center space-x-3">
              <Phone class="w-4 h-4 text-slate-400 shrink-0" />
              <span>031-9921-0000</span>
            </div>
            <div class="flex items-center space-x-3">
              <MessageCircle class="w-4 h-4 text-emerald-400 shrink-0" />
              <a href="https://wa.me/6281131158000" target="_blank" class="hover:text-emerald-400 font-semibold">
                Halo KENCANA: 0811-3115-8000
              </a>
            </div>
            <div class="flex items-center space-x-3">
              <Mail class="w-4 h-4 text-slate-400 shrink-0" />
              <span>info@kencanaindonesia.co.id</span>
            </div>
          </div>
        </div>

        <!-- Col 2: Perusahaan -->
        <div class="space-y-4">
          <h3 class="text-sm font-bold uppercase tracking-wider text-white border-l-2 border-kencana-red pl-2.5">
            Tentang Kami
          </h3>
          <ul class="space-y-2.5 text-xs sm:text-sm text-slate-400">
            <li><NuxtLink to="/about" class="hover:text-white transition-colors">Perusahaan Kami</NuxtLink></li>
            <li><NuxtLink to="/about#sejarah" class="hover:text-white transition-colors">Sejarah (Sejak 1991)</NuxtLink></li>
            <li><NuxtLink to="/about#standar-sni" class="hover:text-white transition-colors">Standar SNI &amp; TKDN</NuxtLink></li>
            <li><NuxtLink to="/articles" class="hover:text-white transition-colors">Berita &amp; Acara CSR</NuxtLink></li>
            <li><NuxtLink to="/careers" class="hover:text-white transition-colors">Karir &amp; Rekrutmen</NuxtLink></li>
          </ul>
        </div>

        <!-- Col 3: Produk -->
        <div class="space-y-4">
          <h3 class="text-sm font-bold uppercase tracking-wider text-white border-l-2 border-kencana-red pl-2.5">
            Produk SNI
          </h3>
          <ul class="space-y-2.5 text-xs sm:text-sm text-slate-400">
            <li><NuxtLink to="/products?cat=atap" class="hover:text-white transition-colors">Atap Spandek KR</NuxtLink></li>
            <li><NuxtLink to="/products?cat=genteng" class="hover:text-white transition-colors">Genteng Metal Pasir</NuxtLink></li>
            <li><NuxtLink to="/products?cat=rangka-atap" class="hover:text-white transition-colors">Rangka Atap Truss C75</NuxtLink></li>
            <li><NuxtLink to="/products?cat=rangka-plafon" class="hover:text-white transition-colors">Hollow Plafon 2x4 &amp; 4x4</NuxtLink></li>
            <li><NuxtLink to="/products?cat=struktural-decking" class="hover:text-white transition-colors">Floor Decking Cor</NuxtLink></li>
            <li><NuxtLink to="/products?cat=pendukung" class="hover:text-white transition-colors">Baut &amp; Aksesoris</NuxtLink></li>
          </ul>
        </div>

        <!-- Col 4: Layanan & Jaringan -->
        <div class="space-y-4">
          <h3 class="text-sm font-bold uppercase tracking-wider text-white border-l-2 border-kencana-red pl-2.5">
            Layanan &amp; Depo
          </h3>
          <ul class="space-y-2.5 text-xs sm:text-sm text-slate-400">
            <li><NuxtLink to="/#roll-on-site" class="hover:text-white transition-colors">Layanan Roll On Site</NuxtLink></li>
            <li><NuxtLink to="/about#maxicad" class="hover:text-white transition-colors">Software MaxiCAD</NuxtLink></li>
            <li><NuxtLink to="/branches" class="hover:text-white transition-colors">50+ Cabang Kencana</NuxtLink></li>
            <li><NuxtLink to="/#faqs" class="hover:text-white transition-colors">Pusat Bantuan FAQs</NuxtLink></li>
            <li>
              <a 
                href="https://kencanaindonesia.co.id/kencana-store" 
                target="_blank" 
                rel="noopener noreferrer"
                class="inline-flex items-center space-x-1 text-kencana-red font-semibold hover:underline"
              >
                <span>KENCANA Store</span>
                <ExternalLink class="w-3 h-3" />
              </a>
            </li>
          </ul>
        </div>
      </div>

      <!-- Certifications Logo Banner -->
      <div class="pt-8 border-t border-slate-900 flex flex-wrap items-center justify-between gap-6">
        <div class="flex items-center space-x-4">
          <img 
            src="/images/general/sni-dkk.png" 
            alt="Sertifikasi SNI Kencana" 
            class="h-8 sm:h-10 w-auto object-contain brightness-90"
          />
        </div>

        <div class="flex items-center space-x-4 text-xs text-slate-500">
          <span>Produk Asli &bull; Garansi Pabrik &bull; Tanpa Banci</span>
        </div>
      </div>

      <!-- Copyright & Bottom Bar -->
      <div class="pt-6 border-t border-slate-900/80 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
        <div>
          Copyright &copy; {{ new Date().getFullYear() }} <strong>PT Kencana Maju Bersama</strong>. All rights reserved.
        </div>
        <div class="flex space-x-6">
          <NuxtLink to="/contact" class="hover:text-slate-400 transition-colors">Hubungi Kami</NuxtLink>
          <NuxtLink to="/terms" class="hover:text-slate-400 transition-colors">Syarat &amp; Ketentuan</NuxtLink>
          <NuxtLink to="/privacy" class="hover:text-slate-400 transition-colors">Kebijakan Privasi</NuxtLink>
        </div>
      </div>
    </div>

    <!-- Floating Tanya MiCan WhatsApp Widget -->
    <aside aria-label="WhatsApp Halo Kencana Quick Chat" class="fixed bottom-6 right-6 z-40 flex items-center space-x-2 group">
      <a 
        href="https://wa.me/6281131158000?text=Halo%20MiCan,%20saya%20ingin%20tanya%20produk%20baja%20ringan%20Kencana"
        target="_blank"
        rel="noopener noreferrer"
        class="flex items-center space-x-2.5 pl-3 pr-4 py-2.5 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs sm:text-sm shadow-2xl transition-all transform hover:scale-105"
      >
        <div class="w-8 h-8 rounded-full overflow-hidden border border-white shrink-0 bg-white">
          <img 
            src="/images/general/mican.webp" 
            alt="MiCan Maskot Kencana" 
            class="w-full h-full object-cover"
          />
        </div>
        <span>Tanya MiCan!</span>
      </a>
    </aside>
  </footer>
</template>
