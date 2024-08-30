export interface User {
  id: number;
  name: string;
  email: string;
  avatar: string;
  email_verified_at: Date | null;
  created_at: Date;
  updated_at: Date;
}

export interface RegisterData {
  username: string;
  email: string;
  password: string;
}

export interface LoginData {
  email: string;
  password: string;
}
