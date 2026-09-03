<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class VerificationController extends Controller
{
    public function getProducts(Request $request): JsonResponse
    {
        return response()->json([
            'status' => 'success',
            'message' => 'Akses diizinkan: data produk Kencana berhasil diambil.',
            'user' => $request->user()->name,
            'role' => $request->user()->getRoleName(),
            'data' => [
                ['id' => 1, 'name' => 'Kencana Truss C75.75', 'category' => 'Rangka Atap'],
                ['id' => 2, 'name' => 'Genteng Metal Kencana', 'category' => 'Penutup Atap'],
            ]
        ]);
    }

    public function createProduct(Request $request): JsonResponse
    {
        return response()->json([
            'status' => 'success',
            'message' => 'Akses diizinkan: produk baru berhasil dibuat.',
            'user' => $request->user()->name,
            'role' => $request->user()->getRoleName(),
        ], 201);
    }

    public function getArticles(Request $request): JsonResponse
    {
        return response()->json([
            'status' => 'success',
            'message' => 'Akses diizinkan: daftar artikel edukasi Kencana berhasil diambil.',
            'user' => $request->user()->name,
            'role' => $request->user()->getRoleName(),
            'data' => [
                ['id' => 1, 'title' => 'Cara Memilih Baja Ringan SNI Berkualitas', 'status' => 'published'],
                ['id' => 2, 'title' => 'Keunggulan Rangka Atap Kencana Truss', 'status' => 'draft'],
            ]
        ]);
    }

    public function createArticle(Request $request): JsonResponse
    {
        return response()->json([
            'status' => 'success',
            'message' => 'Akses diizinkan: artikel baru berhasil dibuat.',
            'user' => $request->user()->name,
            'role' => $request->user()->getRoleName(),
        ], 201);
    }

    public function getCareers(Request $request): JsonResponse
    {
        return response()->json([
            'status' => 'success',
            'message' => 'Akses diizinkan: daftar lowongan karir Kencana berhasil diambil.',
            'user' => $request->user()->name,
            'role' => $request->user()->getRoleName(),
            'data' => [
                ['id' => 1, 'title' => 'Structural Engineer - Steel Fabrication', 'status' => 'active'],
                ['id' => 2, 'title' => 'Digital Marketing & SEO Specialist', 'status' => 'active'],
            ]
        ]);
    }

    public function createCareer(Request $request): JsonResponse
    {
        return response()->json([
            'status' => 'success',
            'message' => 'Akses diizinkan: lowongan karir baru berhasil dibuat.',
            'user' => $request->user()->name,
            'role' => $request->user()->getRoleName(),
        ], 201);
    }

    public function getSettings(Request $request): JsonResponse
    {
        return response()->json([
            'status' => 'success',
            'message' => 'Akses diizinkan: pengaturan sistem berhasil diambil.',
            'user' => $request->user()->name,
            'role' => $request->user()->getRoleName(),
        ]);
    }
}
