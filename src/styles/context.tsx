import React from "react";

const isDarkModeContext = React.createContext<boolean>(true);
const setIsDarkModeContext = React.createContext<React.Dispatch<React.SetStateAction<boolean>>>(() => {});

interface IsDarkModeContextProps {
  isDarkMode: boolean;
  setIsDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
  children: React.ReactNode;
}

export const IsDarkModeProvider: React.FC<IsDarkModeContextProps> = ({ children, isDarkMode, setIsDarkMode }) => {
  return (
    <isDarkModeContext.Provider value={isDarkMode}>
      <setIsDarkModeContext.Provider value={setIsDarkMode}>{children}</setIsDarkModeContext.Provider>
    </isDarkModeContext.Provider>
  );
};

export const useIsDarkModeContext = () => React.useContext(isDarkModeContext);
export const useSetIsDarkModeContext = () => React.useContext(setIsDarkModeContext);
