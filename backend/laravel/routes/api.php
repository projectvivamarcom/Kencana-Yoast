<?php

use App\Http\Controllers\Api\AuthController;
use App\Http\Controllers\Api\DashboardController;
use App\Http\Controllers\Api\VerificationController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes - Kencana Website Ecosystem
|--------------------------------------------------------------------------
*/

Route::prefix('v1')->group(function () {

    // 1. Authentication Routes (Public)
    Route::prefix('auth')->group(function () {
        Route::post('/login', [AuthController::class, 'login']);

        // Authenticated Auth Routes
        Route::middleware('auth:sanctum')->group(function () {
            Route::get('/me', [AuthController::class, 'me']);
            Route::post('/logout', [AuthController::class, 'logout']);
        });
    });

    // 2. Protected Routes with RBAC Middleware (HTTP 403 enforcement)
    Route::middleware('auth:sanctum')->group(function () {

        // Legacy / standard Sanctum user endpoint
        Route::get('/user', [AuthController::class, 'me']);

        // Dashboard (requires dashboard.view)
        Route::get('/dashboard/stats', [DashboardController::class, 'stats'])
            ->middleware('permission:dashboard.view');

        // Products Endpoints
        Route::get('/products', [VerificationController::class, 'getProducts'])
            ->middleware('permission:products.view');
        Route::post('/products', [VerificationController::class, 'createProduct'])
            ->middleware('permission:products.create');

        // Articles Endpoints (Forbidden for Admin and HR)
        Route::get('/articles', [VerificationController::class, 'getArticles'])
            ->middleware('permission:articles.view');
        Route::post('/articles', [VerificationController::class, 'createArticle'])
            ->middleware('permission:articles.create');

        // Careers Endpoints (Forbidden for Admin and Content Writer)
        Route::get('/careers', [VerificationController::class, 'getCareers'])
            ->middleware('permission:careers.view');
        Route::post('/careers', [VerificationController::class, 'createCareer'])
            ->middleware('permission:careers.create');

        // Settings Endpoints
        Route::get('/settings', [VerificationController::class, 'getSettings'])
            ->middleware('permission:settings.view');
    });
});
