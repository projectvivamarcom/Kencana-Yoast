<?php

namespace Database\Seeders;

use App\Models\Permission;
use App\Models\Role;
use App\Models\User;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class RolePermissionSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        // 1. Define all granular permissions
        $permissionsList = [
            // Dashboard
            ['name' => 'dashboard.view', 'group' => 'dashboard', 'description' => 'Melihat halaman dashboard'],

            // Homepage
            ['name' => 'homepage.view', 'group' => 'homepage', 'description' => 'Melihat manajemen homepage'],
            ['name' => 'homepage.manage', 'group' => 'homepage', 'description' => 'Mengelola slider, banner, dan section homepage'],

            // About
            ['name' => 'about.view', 'group' => 'about', 'description' => 'Melihat profil perusahaan'],
            ['name' => 'about.manage', 'group' => 'about', 'description' => 'Mengelola profil, visi misi, dan sertifikasi'],

            // Products
            ['name' => 'products.view', 'group' => 'products', 'description' => 'Melihat katalog produk'],
            ['name' => 'products.create', 'group' => 'products', 'description' => 'Menambahkan produk baru'],
            ['name' => 'products.update', 'group' => 'products', 'description' => 'Mengubah data produk'],
            ['name' => 'products.delete', 'group' => 'products', 'description' => 'Menghapus produk'],

            // Articles
            ['name' => 'articles.view', 'group' => 'articles', 'description' => 'Melihat daftar artikel'],
            ['name' => 'articles.create', 'group' => 'articles', 'description' => 'Membuat artikel baru'],
            ['name' => 'articles.update', 'group' => 'articles', 'description' => 'Mengedit artikel'],
            ['name' => 'articles.delete', 'group' => 'articles', 'description' => 'Menghapus artikel'],

            // Careers
            ['name' => 'careers.view', 'group' => 'careers', 'description' => 'Melihat daftar lowongan kerja'],
            ['name' => 'careers.create', 'group' => 'careers', 'description' => 'Membuat lowongan karir baru'],
            ['name' => 'careers.update', 'group' => 'careers', 'description' => 'Mengedit lowongan karir'],
            ['name' => 'careers.delete', 'group' => 'careers', 'description' => 'Menghapus lowongan karir'],

            // Branches
            ['name' => 'branches.view', 'group' => 'branches', 'description' => 'Melihat daftar cabang & depo'],
            ['name' => 'branches.create', 'group' => 'branches', 'description' => 'Menambahkan cabang baru'],
            ['name' => 'branches.update', 'group' => 'branches', 'description' => 'Mengedit cabang'],
            ['name' => 'branches.delete', 'group' => 'branches', 'description' => 'Menghapus cabang'],

            // FAQ
            ['name' => 'faq.view', 'group' => 'faq', 'description' => 'Melihat daftar tanya jawab FAQ'],
            ['name' => 'faq.create', 'group' => 'faq', 'description' => 'Menambahkan FAQ baru'],
            ['name' => 'faq.update', 'group' => 'faq', 'description' => 'Mengedit FAQ'],
            ['name' => 'faq.delete', 'group' => 'faq', 'description' => 'Menghapus FAQ'],

            // Catalog
            ['name' => 'catalog.view', 'group' => 'catalog', 'description' => 'Melihat e-katalog brosur'],
            ['name' => 'catalog.create', 'group' => 'catalog', 'description' => 'Mengunggah brosur katalog PDF'],
            ['name' => 'catalog.update', 'group' => 'catalog', 'description' => 'Mengubah file/info katalog'],
            ['name' => 'catalog.delete', 'group' => 'catalog', 'description' => 'Menghapus katalog'],

            // Media
            ['name' => 'media.view', 'group' => 'media', 'description' => 'Melihat media library'],
            ['name' => 'media.create', 'group' => 'media', 'description' => 'Mengunggah gambar/media baru'],
            ['name' => 'media.update', 'group' => 'media', 'description' => 'Mengedit metadata media'],
            ['name' => 'media.delete', 'group' => 'media', 'description' => 'Menghapus file media'],

            // Settings
            ['name' => 'settings.view', 'group' => 'settings', 'description' => 'Melihat pengaturan sistem website'],
            ['name' => 'settings.update', 'group' => 'settings', 'description' => 'Mengubah pengaturan website'],

            // Analytics & SEO
            ['name' => 'analytics.view', 'group' => 'analytics', 'description' => 'Melihat analitik kunjungan'],
            ['name' => 'seo.analyze', 'group' => 'seo', 'description' => 'Menggunakan Kencana SEO Engine Analyzer'],
        ];

        // Create or update permissions
        $createdPermissions = [];
        foreach ($permissionsList as $perm) {
            $createdPermissions[$perm['name']] = Permission::updateOrCreate(
                ['name' => $perm['name']],
                ['group' => $perm['group'], 'description' => $perm['description']]
            );
        }

        // 2. Create Roles
        $superAdminRole = Role::updateOrCreate(
            ['name' => 'super_admin'],
            ['label' => 'Super Admin', 'description' => 'Akses penuh ke seluruh Admin Website Kencana']
        );

        $adminRole = Role::updateOrCreate(
            ['name' => 'admin'],
            ['label' => 'Admin', 'description' => 'Mengelola konten website KECUALI Artikel dan Karir']
        );

        $contentWriterRole = Role::updateOrCreate(
            ['name' => 'content_writer'],
            ['label' => 'Content Writer', 'description' => 'Hanya mengelola Artikel dan analisis Kencana SEO']
        );

        $hrRole = Role::updateOrCreate(
            ['name' => 'hr'],
            ['label' => 'HR', 'description' => 'Hanya mengelola lowongan Karir & rekrutmen']
        );

        // 3. Assign Permissions to Roles

        // Super Admin gets all permissions
        $superAdminRole->permissions()->sync(
            collect($createdPermissions)->pluck('id')->toArray()
        );

        // Admin gets all EXCEPT articles.* and careers.*
        $adminPermissions = collect($createdPermissions)
            ->reject(fn($perm, $name) => str_starts_with($name, 'articles.') || str_starts_with($name, 'careers.'))
            ->pluck('id')
            ->toArray();
        $adminRole->permissions()->sync($adminPermissions);

        // Content Writer gets dashboard, articles.*, and seo.analyze
        $writerPermissions = collect($createdPermissions)
            ->filter(fn($perm, $name) => in_array($name, [
                'dashboard.view',
                'articles.view',
                'articles.create',
                'articles.update',
                'articles.delete',
                'seo.analyze',
            ]))
            ->pluck('id')
            ->toArray();
        $contentWriterRole->permissions()->sync($writerPermissions);

        // HR gets dashboard and careers.*
        $hrPermissions = collect($createdPermissions)
            ->filter(fn($perm, $name) => in_array($name, [
                'dashboard.view',
                'careers.view',
                'careers.create',
                'careers.update',
                'careers.delete',
            ]))
            ->pluck('id')
            ->toArray();
        $hrRole->permissions()->sync($hrPermissions);

        // 4. Create Test Users
        $defaultPassword = Hash::make('password123');

        // Super Admin User
        $superAdmin = User::updateOrCreate(
            ['email' => 'superadmin@example.com'],
            [
                'name' => 'Devita Melya (Super Admin)',
                'password' => $defaultPassword,
                'email_verified_at' => now(),
            ]
        );
        $superAdmin->roles()->sync([$superAdminRole->id]);

        // Admin User
        $admin = User::updateOrCreate(
            ['email' => 'admin@example.com'],
            [
                'name' => 'Budi Santoso (Admin Web)',
                'password' => $defaultPassword,
                'email_verified_at' => now(),
            ]
        );
        $admin->roles()->sync([$adminRole->id]);

        // Content Writer User
        $writer = User::updateOrCreate(
            ['email' => 'writer@example.com'],
            [
                'name' => 'Siti Nurhaliza (Content Writer)',
                'password' => $defaultPassword,
                'email_verified_at' => now(),
            ]
        );
        $writer->roles()->sync([$contentWriterRole->id]);

        // HR User
        $hr = User::updateOrCreate(
            ['email' => 'hr@example.com'],
            [
                'name' => 'Hendro Pratama (HR Officer)',
                'password' => $defaultPassword,
                'email_verified_at' => now(),
            ]
        );
        $hr->roles()->sync([$hrRole->id]);
    }
}
