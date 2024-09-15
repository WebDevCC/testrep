// app/Components/Providers.js
"use client";

import { ThemeProvider } from "next-themes";
import useThemeManager from "./useThemeManager";

const Providers = ({ children }) => {
  const { theme } = useThemeManager();

  return (
    <ThemeProvider attribute="data-theme" defaultTheme={theme}>
      {children}
    </ThemeProvider>
  );
};

export default Providers;
