import { useState, useEffect } from "react";

const Dark = () => {
  const [theme, setTheme] = useState(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  }, []);

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const handleThemeSwitch = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <div>
      <button
        className=" text-xs shadow-lg bg-black text-white rounded-md p-2 animate-bounce cursor-pointer dark:bg-slate-50 dark:text-blue-500 "
        onClick={handleThemeSwitch}
      >
        Dark Mode
      </button>
    </div>
  );
};

export default Dark;
