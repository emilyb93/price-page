import React from "react";
import { FaRegMoon, FaRegSun } from "react-icons/fa6";
import "./ThemeToggle.css";
import { IconContext } from "react-icons";
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
      className="theme-toggle"
      aria-label="Toggle dark mode"
    >
      <IconContext.Provider value={{ className: "theme-toggle-icon" }}>
        {isDarkMode ? <FaRegSun /> : <FaRegMoon />}
      </IconContext.Provider>
    </button>
  );
};
