import { create } from "zustand";

interface LoginUser {
  email: string;
  password: string;
}

interface RegisterUser {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
}

interface AuthState {
  user: LoginUser | RegisterUser | null;
  isAuthenticated: boolean;
  loading: boolean;
  error: string | null;
  login: (user: LoginUser) => Promise<void>;
  register: (user: RegisterUser) => Promise<void>;
  logout: () => void;
  reset: () => void;
}

const useAuthStore = create<AuthState>((set) => ({
  user: null,
  isAuthenticated: false,
  loading: false,
  error: null,

  login: async (user: LoginUser) => {
    try {
      set({ loading: true, error: null });

      const res = await fetch("/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(user),
      });

      if (!res.ok) throw new Error("Login failed");

      const data = await res.json();

      set({ user: data.user, isAuthenticated: true, loading: false });
    } catch (err: any) {
      set({ error: err.message, loading: false });
    }
  },

  register: async (user: RegisterUser) => {
    try {
      set({ loading: true, error: null });

      const res = await fetch("/api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(user),
      });

      if (!res.ok) throw new Error("Registration failed");

      const data = await res.json();

      set({ user: data.user, isAuthenticated: true, loading: false });
    } catch (err: any) {
      set({ error: err.message, loading: false });
    }
  },

  logout: () => {
    set({ user: null, isAuthenticated: false });
  },

  reset: () => {
    set({ user: null, isAuthenticated: false, loading: false, error: null });
  },
}));

export default useAuthStore;
