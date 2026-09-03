import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import type { User, RoleName, LoginCredentials } from '../types/auth'
import { loginApi, logoutApi, fetchCurrentUserApi } from '../services/api'
import router from '../router'

const TOKEN_KEY = 'kencana_auth_token'
const USER_KEY = 'kencana_auth_user'

export const useAuthStore = defineStore('auth', () => {
  // State
  const token = ref<string | null>(localStorage.getItem(TOKEN_KEY))
  const user = ref<User | null>(null)
  const isLoading = ref<boolean>(false)
  const authError = ref<string | null>(null)

  // Try to parse cached user on initial load
  try {
    const cachedUser = localStorage.getItem(USER_KEY)
    if (cachedUser) {
      user.value = JSON.parse(cachedUser)
    }
  } catch (e) {
    console.error('Failed to parse cached user:', e)
  }

  // Getters
  const isAuthenticated = computed<boolean>(() => !!token.value && !!user.value)
  const role = computed<RoleName | null>(() => user.value?.role || null)
  const permissions = computed<string[]>(() => user.value?.permissions || [])

  const isSuperAdmin = computed<boolean>(() => role.value === 'super_admin')
  const isAdmin = computed<boolean>(() => role.value === 'admin')
  const isContentWriter = computed<boolean>(() => role.value === 'content_writer')
  const isHR = computed<boolean>(() => role.value === 'hr')

  /**
   * Check if the authenticated user has a specific role or any of the given roles
   */
  function hasRole(roles: RoleName | RoleName[]): boolean {
    if (!user.value || !role.value) return false
    if (Array.isArray(roles)) {
      return roles.includes(role.value)
    }
    return role.value === roles
  }

  /**
   * Check if the user has a specific granular permission
   * Super Admin automatically satisfies all permission checks.
   */
  function hasPermission(permission: string): boolean {
    if (!user.value) return false
    if (isSuperAdmin.value) return true
    return permissions.value.includes(permission)
  }

  /**
   * Log in user with credentials
   */
  async function login(credentials: LoginCredentials): Promise<boolean> {
    isLoading.value = true
    authError.value = null

    try {
      const response = await loginApi(credentials)
      
      token.value = response.token
      user.value = response.user

      localStorage.setItem(TOKEN_KEY, response.token)
      localStorage.setItem(USER_KEY, JSON.stringify(response.user))

      return true
    } catch (err: any) {
      const message = err.response?.data?.message || 'Login gagal. Periksa email dan password Anda.'
      authError.value = message
      throw new Error(message)
    } finally {
      isLoading.value = false
    }
  }

  /**
   * Fetch current user profile and permissions from backend to stay in sync
   */
  async function fetchCurrentUser(): Promise<void> {
    if (!token.value) return

    try {
      const freshUser = await fetchCurrentUserApi()
      user.value = freshUser
      localStorage.setItem(USER_KEY, JSON.stringify(freshUser))
    } catch (err: any) {
      if (err.response?.status === 401) {
        logout()
      }
    }
  }

  /**
   * Log out user, revoke token, clear local state, and redirect to /login
   */
  async function logout(): Promise<void> {
    try {
      if (token.value) {
        await logoutApi()
      }
    } catch (e) {
      console.warn('Logout API error (token may already be invalid):', e)
    } finally {
      token.value = null
      user.value = null
      localStorage.removeItem(TOKEN_KEY)
      localStorage.removeItem(USER_KEY)
      router.push('/login')
    }
  }

  return {
    // State
    token,
    user,
    isLoading,
    authError,

    // Getters
    isAuthenticated,
    role,
    permissions,
    isSuperAdmin,
    isAdmin,
    isContentWriter,
    isHR,

    // Methods
    hasRole,
    hasPermission,
    login,
    logout,
    fetchCurrentUser,
  }
})
