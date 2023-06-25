import { useEffect, useLayoutEffect, useState } from "react";

const useThemeSwitcher = () => {
  const isDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const [theme, setTheme] = useState("");
  const activeTheme = theme === "dark" ? "light" : "dark";

  useEffect(() => {
    const root = window.document.documentElement;

    root.classList.remove(activeTheme);
    theme && root.classList.add(theme);
    localStorage.setItem("theme", theme);
  }, [theme, activeTheme]);

  useLayoutEffect(() => {
    if (isDark) {
      window.document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
      setTheme("dark");
      console.log("Dark Mode Detected");
    } else {
      window.document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
      console.log("Light Mode Detected");
      setTheme("light");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return [activeTheme, setTheme];
};

export default useThemeSwitcher;
