import React, { createContext } from "react";
import { useState } from "react";

export const DarkMode = createContext(null);

export default function DarkModeProvider({ children }) {
  const [theme, setTheme] = useState("light");

  const value = {
    theme,
    setTheme,
  };

  return <DarkMode.Provider value={value}>{children}</DarkMode.Provider>;
}
