import { lightColors, darkColors } from "./colors";

const THEME_KEY = "theme";

export const getTheme = () => {
  if (typeof window !== "undefined") {
    const stored = localStorage.getItem(THEME_KEY);
    if (stored === "dark") return darkColors;
    if (stored === "light") return lightColors;
  }
  return lightColors;
};

export const setTheme = (theme: "light" | "dark") => {
  if (typeof window !== "undefined") {
    localStorage.setItem(THEME_KEY, theme);
  }
};
