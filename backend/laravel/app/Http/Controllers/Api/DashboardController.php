<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class DashboardController extends Controller
{
    /**
     * Get role-tailored dashboard stats and widget data.
     */
    public function stats(Request $request): JsonResponse
    {
        $user = $request->user();
        $role = $user->getRoleName();

        $data = [
            'user' => [
                'name' => $user->name,
                'role' => $role,
                'role_label' => $user->getRoleLabel(),
            ],
            'server_time' => now()->toISOString(),
        ];

        switch ($role) {
            case 'super_admin':
                $data['metrics'] = [
                    ['key' => 'products', 'label' => 'Total Produk SNI', 'value' => 24, 'change' => '+3 bulan ini', 'color' => 'blue'],
                    ['key' => 'articles', 'label' => 'Total Artikel Edukasi', 'value' => 18, 'change' => '94% Good SEO Score', 'color' => 'emerald'],
                    ['key' => 'careers', 'label' => 'Lowongan Aktif', 'value' => 6, 'change' => '12 Pelamar Baru', 'color' => 'amber'],
                    ['key' => 'branches', 'label' => 'Depo & Cabang', 'value' => 15, 'change' => 'Nasional', 'color' => 'purple'],
                    ['key' => 'media', 'label' => 'Media & Aset', 'value' => 142, 'change' => '1.2 GB digunakan', 'color' => 'indigo'],
                ];
                $data['seo_summary'] = [
                    'average_score' => 92,
                    'analyzed_articles' => 18,
                    'seo_engine_status' => 'online',
                ];
                break;

            case 'admin':
                $data['metrics'] = [
                    ['key' => 'products', 'label' => 'Total Produk SNI', 'value' => 24, 'change' => 'Semua Kategori Aktif', 'color' => 'blue'],
                    ['key' => 'branches', 'label' => 'Depo & Cabang', 'value' => 15, 'change' => 'Jawa, Bali, Sumatera', 'color' => 'purple'],
                    ['key' => 'faq', 'label' => 'Daftar FAQ', 'value' => 12, 'change' => '4 Kategori', 'color' => 'cyan'],
                    ['key' => 'catalog', 'label' => 'Katalog PDF', 'value' => 8, 'change' => 'Edisi 2026', 'color' => 'amber'],
                    ['key' => 'media', 'label' => 'Media Library', 'value' => 142, 'change' => 'Aset Terkelola', 'color' => 'indigo'],
                ];
                break;

            case 'content_writer':
                $data['metrics'] = [
                    ['key' => 'articles_total', 'label' => 'Total Artikel', 'value' => 18, 'change' => 'Koleksi Blog', 'color' => 'blue'],
                    ['key' => 'articles_published', 'label' => 'Artikel Published', 'value' => 14, 'change' => 'Live di Website', 'color' => 'emerald'],
                    ['key' => 'articles_draft', 'label' => 'Artikel Draft', 'value' => 4, 'change' => 'Perlu Review', 'color' => 'amber'],
                    ['key' => 'seo_avg', 'label' => 'Rata-rata Skor SEO', 'value' => '94 / 100', 'change' => 'Yoast Compliant', 'color' => 'emerald'],
                ];
                $data['seo_summary'] = [
                    'average_score' => 94,
                    'good_readability' => '89%',
                    'focus_keyphrases_ranked' => 14,
                ];
                break;

            case 'hr':
                $data['metrics'] = [
                    ['key' => 'careers_total', 'label' => 'Total Lowongan', 'value' => 9, 'change' => 'Semua Divisi', 'color' => 'blue'],
                    ['key' => 'careers_active', 'label' => 'Lowongan Aktif', 'value' => 6, 'change' => 'Menerima Lamaran', 'color' => 'emerald'],
                    ['key' => 'careers_draft', 'label' => 'Draft Lowongan', 'value' => 2, 'change' => 'Menunggu Approval', 'color' => 'amber'],
                    ['key' => 'careers_expired', 'label' => 'Lowongan Ditutup', 'value' => 1, 'change' => 'Sudah Terisi', 'color' => 'gray'],
                ];
                break;

            default:
                $data['metrics'] = [];
                break;
        }

        return response()->json($data);
    }
}
