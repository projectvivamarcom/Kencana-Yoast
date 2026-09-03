<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

class CheckPermission
{
    /**
     * Handle an incoming request.
     *
     * @param  \Closure(\Illuminate\Http\Request): (\Symfony\Component\HttpFoundation\Response)  $next
     * @param  string  $permission
     */
    public function handle(Request $request, Closure $next, string $permission): Response
    {
        $user = $request->user();

        if (!$user) {
            return response()->json([
                'error' => 'Unauthenticated',
                'message' => 'Silakan login terlebih dahulu untuk mengakses endpoint ini.'
            ], Response::HTTP_UNAUTHORIZED); // 401
        }

        if (!$user->hasPermission($permission)) {
            return response()->json([
                'error' => 'Forbidden',
                'required_permission' => $permission,
                'user_role' => $user->getRoleName(),
                'message' => "Akses ditolak (HTTP 403 Forbidden). Anda tidak memiliki izin [{$permission}] untuk melakukan aksi ini."
            ], Response::HTTP_FORBIDDEN); // 403
        }

        return $next($request);
    }
}
