import { create } from 'zustand';

interface User {
  username: string;
}

interface UserState {
  user: User | null;
  setUser(user: User): void;
}

export const useUserState = create<UserState>((set) => ({
  user: null,
  setUser: (user: User | null) => set({ user }),
}));
