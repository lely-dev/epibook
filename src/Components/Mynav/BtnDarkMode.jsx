import React from "react";
import { useContext } from "react";
import { DarkMode } from "../../Context/DarkModeProvider";
import { Button } from "react-bootstrap";

export default function BtnDarkMode() {
  const { theme, setTheme } = useContext(DarkMode);
  return (
    <>
      <Button
        theme={theme}
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      ></Button>
    </>
  );
}
