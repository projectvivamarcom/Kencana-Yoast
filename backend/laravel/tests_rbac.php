<?php

require __DIR__ . '/vendor/autoload.php';

$app = require_once __DIR__ . '/bootstrap/app.php';
$kernel = $app->make(Illuminate\Contracts\Http\Kernel::class);

echo "\n=======================================================\n";
echo "🔐 RUNNING BACKEND RBAC AUTHORIZATION VERIFICATION SUITE\n";
echo "=======================================================\n\n";

$usersToTest = [
    [
        'email' => 'superadmin@example.com',
        'role' => 'super_admin',
        'tests' => [
            ['method' => 'GET', 'uri' => '/api/v1/dashboard/stats', 'expected' => 200, 'name' => 'Dashboard Stats'],
            ['method' => 'GET', 'uri' => '/api/v1/products', 'expected' => 200, 'name' => 'Products List'],
            ['method' => 'GET', 'uri' => '/api/v1/articles', 'expected' => 200, 'name' => 'Articles List'],
            ['method' => 'GET', 'uri' => '/api/v1/careers', 'expected' => 200, 'name' => 'Careers List'],
            ['method' => 'GET', 'uri' => '/api/v1/settings', 'expected' => 200, 'name' => 'Settings'],
        ]
    ],
    [
        'email' => 'admin@example.com',
        'role' => 'admin',
        'tests' => [
            ['method' => 'GET', 'uri' => '/api/v1/dashboard/stats', 'expected' => 200, 'name' => 'Dashboard Stats'],
            ['method' => 'GET', 'uri' => '/api/v1/products', 'expected' => 200, 'name' => 'Products List'],
            ['method' => 'GET', 'uri' => '/api/v1/settings', 'expected' => 200, 'name' => 'Settings'],
            ['method' => 'GET', 'uri' => '/api/v1/articles', 'expected' => 403, 'name' => 'Articles List (SHOULD BE 403)'],
            ['method' => 'GET', 'uri' => '/api/v1/careers', 'expected' => 403, 'name' => 'Careers List (SHOULD BE 403)'],
        ]
    ],
    [
        'email' => 'writer@example.com',
        'role' => 'content_writer',
        'tests' => [
            ['method' => 'GET', 'uri' => '/api/v1/dashboard/stats', 'expected' => 200, 'name' => 'Dashboard Stats'],
            ['method' => 'GET', 'uri' => '/api/v1/articles', 'expected' => 200, 'name' => 'Articles List'],
            ['method' => 'GET', 'uri' => '/api/v1/products', 'expected' => 403, 'name' => 'Products List (SHOULD BE 403)'],
            ['method' => 'GET', 'uri' => '/api/v1/careers', 'expected' => 403, 'name' => 'Careers List (SHOULD BE 403)'],
            ['method' => 'GET', 'uri' => '/api/v1/settings', 'expected' => 403, 'name' => 'Settings (SHOULD BE 403)'],
        ]
    ],
    [
        'email' => 'hr@example.com',
        'role' => 'hr',
        'tests' => [
            ['method' => 'GET', 'uri' => '/api/v1/dashboard/stats', 'expected' => 200, 'name' => 'Dashboard Stats'],
            ['method' => 'GET', 'uri' => '/api/v1/careers', 'expected' => 200, 'name' => 'Careers List'],
            ['method' => 'GET', 'uri' => '/api/v1/products', 'expected' => 403, 'name' => 'Products List (SHOULD BE 403)'],
            ['method' => 'GET', 'uri' => '/api/v1/articles', 'expected' => 403, 'name' => 'Articles List (SHOULD BE 403)'],
            ['method' => 'GET', 'uri' => '/api/v1/settings', 'expected' => 403, 'name' => 'Settings (SHOULD BE 403)'],
        ]
    ]
];

$allPassed = true;

foreach ($usersToTest as $item) {
    echo "-------------------------------------------------------\n";
    echo "👤 User: {$item['email']} (Role: {$item['role']})\n";
    echo "-------------------------------------------------------\n";

    // Reset Auth Guard
    auth()->forgetGuards();

    // 1. Authenticate via POST /api/v1/auth/login
    $loginRequest = Illuminate\Http\Request::create('/api/v1/auth/login', 'POST', [
        'email' => $item['email'],
        'password' => 'password123',
    ]);
    $loginRequest->headers->set('Accept', 'application/json');
    $loginResponse = $kernel->handle($loginRequest);

    $loginData = json_decode($loginResponse->getContent(), true);
    if ($loginResponse->getStatusCode() !== 200 || !isset($loginData['token'])) {
        echo "❌ Login failed! Status: {$loginResponse->getStatusCode()}\n";
        echo $loginResponse->getContent() . "\n";
        $allPassed = false;
        continue;
    }

    $token = $loginData['token'];
    echo "  ✓ Login Success -> Token generated. Role: [{$loginData['user']['role']}], Permissions: " . count($loginData['user']['permissions']) . "\n";

    // 2. Run Test Cases
    foreach ($item['tests'] as $t) {
        auth()->forgetGuards();

        $req = Illuminate\Http\Request::create($t['uri'], $t['method']);
        $req->headers->set('Accept', 'application/json');
        $req->headers->set('Authorization', 'Bearer ' . $token);

        $res = $kernel->handle($req);
        $status = $res->getStatusCode();

        if ($status === $t['expected']) {
            echo "  ✓ PASS: [{$t['method']} {$t['uri']}] -> HTTP {$status} ({$t['name']})\n";
        } else {
            echo "  ❌ FAIL: [{$t['method']} {$t['uri']}] -> Expected HTTP {$t['expected']}, got HTTP {$status} ({$t['name']})\n";
            echo "     Response: " . $res->getContent() . "\n";
            $allPassed = false;
        }
    }
    echo "\n";
}

if ($allPassed) {
    echo "=======================================================\n";
    echo "🎉 ALL BACKEND RBAC AUTHORIZATION TESTS PASSED 100%!\n";
    echo "=======================================================\n";
    exit(0);
} else {
    echo "=======================================================\n";
    echo "❌ SOME TESTS FAILED. PLEASE REVIEW.\n";
    echo "=======================================================\n";
    exit(1);
}
