import { useEffect } from "react";
import { useDarkMode } from "usehooks-ts";
import { ThemeToggle } from "../../atoms/ModeToggle/ModeToggle";

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
    console.log("isDarkMode", isDarkMode);
  }, [isDarkMode]);

  return (
    <div>
      <ThemeToggle toggle={toggle} isDarkMode={isDarkMode} />
      {children}
    </div>
  );
}

export default ThemeWrapper;
