import { create } from "zustand";
import { immer } from "zustand/middleware/immer";

interface User {
  _id: string;
  name: string;
  email: string;
  phoneNo: number;
}

interface UserState {
  user: User | null;
  bear: number;
}
interface Actions {
  update: (user: User) => void;
  updateName: (name: string) => void;
  increaseBear: () => void;
  removeBear: () => void;
}

export const useUserStore = create<UserState & Actions>()(
  immer((set) => ({
    user: null,
    bear: 0,

    //   Updates
    update: (user) =>
      set(() => ({
        user,
      })),
    updateName: (name) =>
      set((state) => {
        state.user!.name = name;
      }),
    increaseBear: () => set((state) => ({ bear: state.bear + 1 })),
    removeBear: () => set({ bear: 0 }),
  }))
);
