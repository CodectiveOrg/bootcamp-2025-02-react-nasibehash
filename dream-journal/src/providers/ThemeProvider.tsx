import { PropsWithChildren, ReactNode, useEffect, useState } from "react";

import { THEME_LOCAL_STORAGE_KEY } from "../constants/local-storage-keys.ts";

import { ThemeContext } from "../context/theme-context.ts";

import { Theme } from "../types/theme.ts";

type Props = PropsWithChildren;

export default function ThemeProvider({ children }: Props): ReactNode {
  const [theme, setTheme] = useState<Theme>(loadThemeInitialState);

  useEffect(() => {
    localStorage.setItem(THEME_LOCAL_STORAGE_KEY, theme);
    document.documentElement.dataset.theme = theme;
  }, [theme]);

  const toggleTheme = (): void => {
    setTheme((old) => (old === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

function loadThemeInitialState(): Theme {
  const item = localStorage.getItem(THEME_LOCAL_STORAGE_KEY);

  const defaultTheme = window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";

  return item === "dark" || item === "light" ? item : defaultTheme;
}
