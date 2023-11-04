import React, { createContext, useState, useEffect } from "react";

export const ModeContext = createContext({
  mode: "light",
  toggleMode: () => {},
});

export const ModeProvider = ({ children }) => {
  const [mode, setMode] = useState("light");

  useEffect(() => {
    const storedTheme = localStorage.getItem("mode");
    if (storedTheme) {
      setMode(storedTheme);
    } else {
      localStorage.setItem("mode", "light");
    }
  }, []);

  const toggleMode = () => {
    const newTheme = mode === "light" ? "dark" : "light";
    setMode(newTheme);
    localStorage.setItem("mode", newTheme);
  };

  return (
    <ModeContext.Provider value={{ mode, toggleMode }}>
      {children}
    </ModeContext.Provider>
  );
};
