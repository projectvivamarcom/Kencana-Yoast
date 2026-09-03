import type { Branch } from '~/types'

export const useBranches = () => {
  const branches: Branch[] = [
    {
      id: 1,
      city: 'Surabaya (Head Office & Plant)',
      name: 'Pabrik & Kantor Pusat Kencana Surabaya',
      address: 'Kawasan Industri Rungkut (SIER), Jl. Rungkut Industri III No. 12, Surabaya, Jawa Timur 60293',
      phone: '(031) 843-8888',
      email: 'surabaya@kencana.id',
      type: 'Pabrik & Kantor Pusat'
    },
    {
      id: 2,
      city: 'Jakarta & Jabodetabek',
      name: 'Cabang Utama Jakarta',
      address: 'Sentra Bisnis Daan Mogot KM 19, Blok C No. 5-7, Batuceper, Tangerang / Jakarta Barat',
      phone: '(021) 543-9999',
      email: 'jakarta@kencana.id',
      type: 'Kantor Cabang'
    },
    {
      id: 3,
      city: 'Semarang (Jawa Tengah)',
      name: 'Depo Distribusi Semarang',
      address: 'Kawasan Industri Candi Blok XI No. 8, Ngaliyan, Semarang, Jawa Tengah',
      phone: '(024) 762-5555',
      email: 'semarang@kencana.id',
      type: 'Depo Distribusi'
    },
    {
      id: 4,
      city: 'Medan (Sumatera)',
      name: 'Depo Distribusi Regional Sumatera',
      address: 'Jl. Letda Sujono No. 188, Medan Tembung, Kota Medan, Sumatera Utara',
      phone: '(061) 738-2222',
      email: 'medan@kencana.id',
      type: 'Depo Distribusi'
    },
    {
      id: 5,
      city: 'Makassar (Sulawesi & Indonesia Timur)',
      name: 'Depo Distribusi Makassar Kencana',
      address: 'Kawasan Industri Makassar (KIMA) Kav. 14, Biringkanaya, Makassar, Sulawesi Selatan',
      phone: '(0411) 510-777',
      email: 'makassar@kencana.id',
      type: 'Depo Distribusi'
    }
  ]

  return { branches }
}
