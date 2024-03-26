import React, { createContext } from "react";
import { useState } from "react";

export const SelectedBook = createContext(null);

export default function SelectedBookProvider({ children }) {
  const [selected, setSelected] = useState([]);

  const value = { selected, setSelected };

  return (
    <SelectedBook.Provider value={value}>{children}</SelectedBook.Provider>
  );
}
