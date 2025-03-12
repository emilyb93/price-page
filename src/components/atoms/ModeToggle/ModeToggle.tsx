import React from "react";
import { FaRegMoon, FaRegSun } from "react-icons/fa6";

interface ThemeToggleProps {
  toggle: () => void;
  isDarkMode: boolean;
}

export const ThemeToggle: React.FC<ThemeToggleProps> = ({
  toggle,
  isDarkMode,
}) => {
  return (
    <button
      onClick={toggle}
      className="fixed bottom-6 right-6 p-3 rounded-full shadow-lg bg-white dark:bg-gray-800  text-white hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-300"
      aria-label="Toggle dark mode"
    >
      {isDarkMode ? <FaRegSun /> : <FaRegMoon />}
    </button>
  );
};
