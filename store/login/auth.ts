import { create } from "zustand";

interface LoginUser {
  email: string | null;
  password: string | null;
}

interface RegisterUser {
  firstName: string | null;
  lastName: string | null;
  email: string | null;
  password: string | null;
  confirmPassword: string | null;
}

interface AuthState {
  loginData: LoginUser | null;
  registerData: RegisterUser | null;
  isAuthenticated: boolean;
  loading: boolean;
  error: string | null;
  login: (user: LoginUser) => Promise<void>;
  register: (user: RegisterUser) => Promise<void>;
  logout: () => void;
  setData: (
    form: "login" | "register",
    data: Partial<LoginUser | RegisterUser>
  ) => void;
  reset: () => void;
}

const useAuthStore = create<AuthState>((set) => ({
  loginData: {
    email: null,
    password: null,
  },
  registerData: {
    firstName: null,
    lastName: null,
    email: null,
    password: null,
    confirmPassword: null,
  },
  isAuthenticated: false,
  loading: false,
  error: null,

  setData: (form: "login" | "register", data: any) =>
    set((state) => ({
      [form === "login" ? "loginData" : "registerData"]: {
        ...(form === "login" ? state.loginData : state.registerData),
        ...data,
      },
    })),

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
    set({ isAuthenticated: false });
  },

  reset: () => {
    set({
      loginData: {
        email: null,
        password: null,
      },
      registerData: {
        firstName: null,
        lastName: null,
        email: null,
        password: null,
        confirmPassword: null,
      },
      isAuthenticated: false,
      loading: false,
      error: null,
    });
  },
}));

export default useAuthStore;
