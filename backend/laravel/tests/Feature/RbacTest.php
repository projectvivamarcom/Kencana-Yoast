<?php

namespace Tests\Feature;

use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;

class RbacTest extends TestCase
{
    use RefreshDatabase;

    protected function setUp(): void
    {
        parent::setUp();
        // Seed roles and permissions
        $this->seed(\Database\Seeders\RolePermissionSeeder::class);
    }

    /**
     * Test Super Admin has access to all protected endpoints.
     */
    public function test_super_admin_has_access_to_all_endpoints(): void
    {
        $superAdmin = User::where('email', 'superadmin@example.com')->first();
        $this->assertNotNull($superAdmin);

        $loginResponse = $this->postJson('/api/v1/auth/login', [
            'email' => 'superadmin@example.com',
            'password' => 'password123',
        ]);

        $loginResponse->assertStatus(200);
        $token = $loginResponse->json('token');
        $this->assertNotEmpty($token);

        $headers = ['Authorization' => 'Bearer ' . $token];

        $this->getJson('/api/v1/dashboard/stats', $headers)->assertStatus(200);
        $this->getJson('/api/v1/products', $headers)->assertStatus(200);
        $this->postJson('/api/v1/products', [], $headers)->assertStatus(201);
        $this->getJson('/api/v1/articles', $headers)->assertStatus(200);
        $this->postJson('/api/v1/articles', [], $headers)->assertStatus(201);
        $this->getJson('/api/v1/careers', $headers)->assertStatus(200);
        $this->postJson('/api/v1/careers', [], $headers)->assertStatus(201);
        $this->getJson('/api/v1/settings', $headers)->assertStatus(200);
    }

    /**
     * Test Admin has access to products and settings, but forbidden (403) from articles and careers.
     */
    public function test_admin_is_forbidden_from_articles_and_careers(): void
    {
        $admin = User::where('email', 'admin@example.com')->first();
        $this->assertNotNull($admin);

        $loginResponse = $this->postJson('/api/v1/auth/login', [
            'email' => 'admin@example.com',
            'password' => 'password123',
        ]);

        $loginResponse->assertStatus(200);
        $token = $loginResponse->json('token');
        $headers = ['Authorization' => 'Bearer ' . $token];

        // Allowed
        $this->getJson('/api/v1/dashboard/stats', $headers)->assertStatus(200);
        $this->getJson('/api/v1/products', $headers)->assertStatus(200);
        $this->postJson('/api/v1/products', [], $headers)->assertStatus(201);
        $this->getJson('/api/v1/settings', $headers)->assertStatus(200);

        // FORBIDDEN (403)
        $this->getJson('/api/v1/articles', $headers)->assertStatus(403);
        $this->postJson('/api/v1/articles', [], $headers)->assertStatus(403);
        $this->getJson('/api/v1/careers', $headers)->assertStatus(403);
        $this->postJson('/api/v1/careers', [], $headers)->assertStatus(403);
    }

    /**
     * Test Content Writer has access to articles, but forbidden (403) from products, careers, settings.
     */
    public function test_content_writer_is_forbidden_from_products_careers_settings(): void
    {
        $writer = User::where('email', 'writer@example.com')->first();
        $this->assertNotNull($writer);

        $loginResponse = $this->postJson('/api/v1/auth/login', [
            'email' => 'writer@example.com',
            'password' => 'password123',
        ]);

        $loginResponse->assertStatus(200);
        $token = $loginResponse->json('token');
        $headers = ['Authorization' => 'Bearer ' . $token];

        // Allowed
        $this->getJson('/api/v1/dashboard/stats', $headers)->assertStatus(200);
        $this->getJson('/api/v1/articles', $headers)->assertStatus(200);
        $this->postJson('/api/v1/articles', [], $headers)->assertStatus(201);

        // FORBIDDEN (403)
        $this->getJson('/api/v1/products', $headers)->assertStatus(403);
        $this->postJson('/api/v1/products', [], $headers)->assertStatus(403);
        $this->getJson('/api/v1/careers', $headers)->assertStatus(403);
        $this->postJson('/api/v1/careers', [], $headers)->assertStatus(403);
        $this->getJson('/api/v1/settings', $headers)->assertStatus(403);
    }

    /**
     * Test HR has access to careers, but forbidden (403) from products, articles, settings.
     */
    public function test_hr_is_forbidden_from_products_articles_settings(): void
    {
        $hr = User::where('email', 'hr@example.com')->first();
        $this->assertNotNull($hr);

        $loginResponse = $this->postJson('/api/v1/auth/login', [
            'email' => 'hr@example.com',
            'password' => 'password123',
        ]);

        $loginResponse->assertStatus(200);
        $token = $loginResponse->json('token');
        $headers = ['Authorization' => 'Bearer ' . $token];

        // Allowed
        $this->getJson('/api/v1/dashboard/stats', $headers)->assertStatus(200);
        $this->getJson('/api/v1/careers', $headers)->assertStatus(200);
        $this->postJson('/api/v1/careers', [], $headers)->assertStatus(201);

        // FORBIDDEN (403)
        $this->getJson('/api/v1/products', $headers)->assertStatus(403);
        $this->postJson('/api/v1/products', [], $headers)->assertStatus(403);
        $this->getJson('/api/v1/articles', $headers)->assertStatus(403);
        $this->postJson('/api/v1/articles', [], $headers)->assertStatus(403);
        $this->getJson('/api/v1/settings', $headers)->assertStatus(403);
    }
}
