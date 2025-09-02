import { create } from "zustand";

const useTheme = create((set) => ({
  theme: "emerald",
  toggle: () =>
    set((state) => ({
      theme: state.theme === "emerald" ? "coffee" : "emerald",
    })),
}));

export default useTheme;

