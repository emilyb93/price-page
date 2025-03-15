import { useEffect } from "react";
import { useDarkMode } from "usehooks-ts";
import { ThemeToggle } from "../../atoms/ThemeToggle/ThemeToggle";

interface ThemeWrapperProps {
  children: React.ReactNode;
}

function ThemeWrapper({ children }: ThemeWrapperProps) {
  const { isDarkMode, toggle } = useDarkMode();

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDarkMode]);

  return (
    <div>
      <ThemeToggle toggle={toggle} isDarkMode={isDarkMode} />
      {children}
    </div>
  );
}

export default ThemeWrapper;
