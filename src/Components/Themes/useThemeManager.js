// app/hooks/useThemeManager.js
import { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';

const useThemeManager = () => {
  const { theme, setTheme } = useTheme();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (isMounted) {
      const storedTheme = localStorage.getItem('theme') || 'light';
      if (storedTheme !== theme) {
        setTheme(storedTheme);
      }
    }
  }, [isMounted, theme, setTheme]);

  const handleThemeChange = (newTheme) => {
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
  };

  return {
    theme,
    handleThemeChange,
  };
};

export default useThemeManager;
