// store/authSlice.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type AuthState = {
  isAuthenticated: boolean;
  token: string | null;
};

// جلب التوكن المحفوظ (إن وُجد)
const tokenFromStorage = typeof window !== "undefined" ? localStorage.getItem("token") : null;

const initialState: AuthState = {
  isAuthenticated: !!tokenFromStorage,
  token: tokenFromStorage,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action: PayloadAction<string>) => {
      state.isAuthenticated = true;
      state.token = action.payload;
      localStorage.setItem("token", action.payload); // تخزين التوكن
    },
    logout: (state) => {
      state.isAuthenticated = false;
      state.token = null;
      localStorage.removeItem("token"); // حذف التوكن
    },
  },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
