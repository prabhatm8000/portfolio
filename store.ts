import { create } from "zustand";

type AppStoreType = {
    theme: string;
    loading: boolean;
    setTheme: (newTheme: string) => void;
    setLoading: (loading: boolean) => void;
};

export const useAppStore = create<AppStoreType>((set) => ({
    theme: "dark",
    loading: true,
    setTheme: (newTheme: string) => set({ theme: newTheme }),
    setLoading: (loading: boolean) => set({ loading }),
}));
