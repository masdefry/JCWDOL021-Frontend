import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export type TAuth = {
  username: string;
  email: string;
  role: string;
  userId: string;
};

export interface IAuthStoreStateProps {
  auth: TAuth;
  setAuth: ({ username, email, role }: TAuth) => void;
}

// Persistance  : Mengsinkronkan antara global state dengan browser storage
// Partialize   : Mengatur data mana saja dari global state yang akan disimpan ke browser storage

export const authStore = create<IAuthStoreStateProps>()(
  persist((set) => ({
    auth: {
      username: '',
      email: '',
      role: '',
      userId: ''
    },
    setAuth: ({ username, email, role, userId }: TAuth) =>
      set((state) => ({
        auth: { username: username, email: email, role: role, userId: userId },
      })),
  }), {
    name: 'auth-session',
    partialize: (state) => ({userId: state?.auth?.userId})
  })
);



// Global State -> Zustand
// Login success -> Store data ke global state <- Username navbar global state
// Session login -> Browser storage (local storage) -> Zustand: persist & partialize 