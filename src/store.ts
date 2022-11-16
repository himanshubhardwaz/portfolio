import create from "zustand";

interface DarkThemeState {
  isDarkThemeEnabled: boolean;
  toggleDarkTheme: () => void;
  updateDarkTheme: (theme: "dark" | "light") => void;
}

export const useDarkTheme = create<DarkThemeState>((set) => ({
  isDarkThemeEnabled: true,
  toggleDarkTheme: () => {
    set((state) => {
      if (state.isDarkThemeEnabled) localStorage.setItem("theme", "light");
      else localStorage.setItem("theme", "dark");

      return { isDarkThemeEnabled: !state.isDarkThemeEnabled };
    });
  },
  updateDarkTheme: (theme) =>
    set(() => {
      localStorage.setItem("theme", theme);
      return { isDarkThemeEnabled: theme === "dark" ? true : false };
    }),
}));
