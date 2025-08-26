import { create } from "zustand";

const useTheme = create((set) => ({
  theme: "cupcake",
  toggle: () =>
    set((state) => ({
      theme: state.theme === "cupcake" ? "coffee" : "cupcake",
    })),
}));

export default useTheme;
