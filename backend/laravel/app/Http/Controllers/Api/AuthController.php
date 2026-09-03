<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\ValidationException;

class AuthController extends Controller
{
    /**
     * Authenticate user and issue Sanctum token with role and permissions.
     */
    public function login(Request $request): JsonResponse
    {
        $validated = $request->validate([
            'email' => ['required', 'email'],
            'password' => ['required', 'string'],
        ]);

        $user = User::where('email', $validated['email'])->first();

        if (!$user || !Hash::check($validated['password'], $user->password)) {
            return response()->json([
                'error' => 'Unauthorized',
                'message' => 'Email atau password yang Anda masukkan salah.',
            ], 401);
        }

        // Delete previous tokens for clean session (optional for SPA single session)
        $user->tokens()->delete();

        // Create new Sanctum personal access token
        $token = $user->createToken('kencana-admin-auth')->plainTextToken;

        $primaryRole = $user->roles()->first();
        $permissions = $user->getAllPermissions();

        return response()->json([
            'token' => $token,
            'token_type' => 'Bearer',
            'user' => [
                'id' => $user->id,
                'name' => $user->name,
                'email' => $user->email,
                'role' => $primaryRole?->name ?? 'user',
                'role_label' => $primaryRole?->label ?? 'User',
                'permissions' => $permissions,
            ],
            'message' => 'Login berhasil. Selamat datang di Kencana Admin CMS.',
        ]);
    }

    /**
     * Get authenticated user profile and permissions.
     */
    public function me(Request $request): JsonResponse
    {
        $user = $request->user();
        $primaryRole = $user->roles()->first();
        $permissions = $user->getAllPermissions();

        return response()->json([
            'id' => $user->id,
            'name' => $user->name,
            'email' => $user->email,
            'role' => $primaryRole?->name ?? 'user',
            'role_label' => $primaryRole?->label ?? 'User',
            'permissions' => $permissions,
        ]);
    }

    /**
     * Revoke current user's token (Logout).
     */
    public function logout(Request $request): JsonResponse
    {
        $request->user()->currentAccessToken()->delete();

        return response()->json([
            'message' => 'Logout berhasil. Sesi autentikasi telah diakhiri.',
        ]);
    }
}
