import React from "react";
import { createContext, useContext, useState } from "react";

const IsDarkModeContext = createContext<boolean>(false);
const SetIsDarkModeContext = createContext<React.Dispatch<React.SetStateAction<boolean>>>(() => {});

type DarkModeProviderProps = {
  isDarkMode: boolean;
  setIsDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
  children: React.ReactElement;
};
export const DarkModeProvider = ({ isDarkMode, setIsDarkMode, children }: DarkModeProviderProps) => {
  return (
    <IsDarkModeContext.Provider value={isDarkMode}>
      <SetIsDarkModeContext.Provider value={setIsDarkMode}>{children}</SetIsDarkModeContext.Provider>
    </IsDarkModeContext.Provider>
  );
};
