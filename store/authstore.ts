import { create, createStore } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import { getItem, setItem, deleteItemAsync } from "expo-secure-store";

interface AuthState {
  isSignedIn: boolean;
  completedOnboarding: boolean;
}

interface AuthActions {
  login: () => void;
  logout: () => void;
  completeOnbaording: () => void;
}
export const useAuthStore = createStore<AuthState & AuthActions>()(
  persist(
    (set) => ({
      isSignedIn: false,
      completedOnboarding: false,

      login() {
        set((state) => ({
          ...state,
          isSignedIn: true,
        }));
      },
      logout() {
        set((state) => ({
          ...state,
          isSignedIn: false,
        }));
      },
      completeOnbaording() {
        set((state) => ({
          ...state,
          completedOnboarding: true,
        }));
      },
    }),
    {
      name: "auth-store",
      storage: createJSONStorage(()=>({
        setItem, getItem, removeItem: deleteItemAsync
      }))
    }
  )
);
