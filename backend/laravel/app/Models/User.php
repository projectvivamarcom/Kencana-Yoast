<?php

namespace App\Models;

// use Illuminate\Contracts\Auth\MustVerifyEmail;
use Database\Factories\UserFactory;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;

class User extends Authenticatable
{
    /** @use HasFactory<UserFactory> */
    use HasApiTokens, HasFactory, Notifiable;

    protected $fillable = [
        'name',
        'email',
        'password',
    ];

    protected $hidden = [
        'password',
        'remember_token',
    ];

    protected function casts(): array
    {
        return [
            'email_verified_at' => 'datetime',
            'password' => 'hashed',
        ];
    }

    /**
     * The roles that belong to the user.
     */
    public function roles(): BelongsToMany
    {
        return $this->belongsToMany(Role::class, 'user_roles');
    }

    /**
     * Check if user has a specific role or any of the given roles.
     */
    public function hasRole(string|array $roles): bool
    {
        $roleNames = is_array($roles) ? $roles : func_get_args();
        return $this->roles->pluck('name')->intersect($roleNames)->isNotEmpty();
    }

    /**
     * Check if user has a specific permission.
     * Super Admin always has full access.
     */
    public function hasPermission(string $permission): bool
    {
        // Super admin has all permissions
        if ($this->hasRole('super_admin')) {
            return true;
        }

        // Check if any user's role contains this permission
        return $this->roles()
            ->with('permissions')
            ->get()
            ->flatMap(fn($role) => $role->permissions)
            ->pluck('name')
            ->contains($permission);
    }

    /**
     * Get all unique permission names for this user.
     */
    public function getAllPermissions(): array
    {
        if ($this->hasRole('super_admin')) {
            return Permission::pluck('name')->toArray();
        }

        return $this->roles()
            ->with('permissions')
            ->get()
            ->flatMap(fn($role) => $role->permissions)
            ->pluck('name')
            ->unique()
            ->values()
            ->toArray();
    }

    /**
     * Get primary role name.
     */
    public function getRoleName(): ?string
    {
        return $this->roles->first()?->name;
    }

    /**
     * Get primary role label.
     */
    public function getRoleLabel(): ?string
    {
        return $this->roles->first()?->label;
    }
}
