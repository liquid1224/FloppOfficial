import React, { useState } from "react";

const isDarkModeContext = React.createContext<boolean>(false);
const setIsDarkModeContext = React.createContext<React.Dispatch<React.SetStateAction<boolean>>>(() => {});

interface IsDarkModeContextProps {
  children: React.ReactNode;
}

export const IsDarkModeProvider: React.FC<IsDarkModeContextProps> = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(true);
  return (
    <isDarkModeContext.Provider value={isDarkMode}>
      <setIsDarkModeContext.Provider value={setIsDarkMode}>{children}</setIsDarkModeContext.Provider>
    </isDarkModeContext.Provider>
  );
};

export const useIsDarkModeContext = () => React.useContext(isDarkModeContext);
export const useSetIsDarkModeContext = () => React.useContext(setIsDarkModeContext);
