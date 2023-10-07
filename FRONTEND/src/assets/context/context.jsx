import { createContext, useContext, useEffect, useState } from "react";

const AppContext = createContext();

const getInitialDarkMode = () => {
  const prefersDarkMode = window.matchMedia(
    "prefers-color.scheme:dark"
  ).matches;

  const storedDarkMode = localStorage.getItem("darkTheme") === "true";

  return storedDarkMode || prefersDarkMode;
};

export const AppProvider = ({ children }) => {
  const [dark, setDark] = useState(getInitialDarkMode === "true" ? 1 : 0);

  const toggleDarkMode = () => {
    const newDarkmode = !dark;
    setDark(newDarkmode);
    localStorage.setItem("dakTheme", newDarkmode);
  };

  useEffect(() => {
    document.body.classList.toggle("dark-theme", dark);
  }, [dark]);

  return (
    <AppContext.Provider value={{ dark, setDark, toggleDarkMode }}>
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => useContext(AppContext);
