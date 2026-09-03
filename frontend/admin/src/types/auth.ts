export type RoleName = 'super_admin' | 'admin' | 'content_writer' | 'hr'

export interface User {
  id: number
  name: string
  email: string
  role: RoleName
  role_label: string
  permissions: string[]
}

export interface LoginCredentials {
  email: string
  password: string
}

export interface AuthResponse {
  token: string
  token_type: string
  user: User
  message?: string
}
