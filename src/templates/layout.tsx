//Default Components
import React from "react";
import { createContext, useContext, useState } from "react";
//Author Components
import * as Vanilla from "./layout.css";
import Header from "../components/header";
import Footer from "../components/footer";

//Make dark mode contexts
const isDarkModeContext = createContext<boolean>(false);
const setIsDarkModeContext = createContext<React.Dispatch<React.SetStateAction<boolean>>>(() => {});
//Export functions to use dark mode contexts
export const useIsDarkModeContext = () => useContext(isDarkModeContext);
export const useSetIsDarkModeContext = () => useContext(setIsDarkModeContext);

//Layout
type layoutProps = {
  children: React.ReactNode;
};
export const Layout = ({ children }: layoutProps) => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  return (
    <isDarkModeContext.Provider value={isDarkMode}>
      <setIsDarkModeContext.Provider value={setIsDarkMode}>
        <div className={Vanilla.Layout}>
          <Header />
          {children}
          <Footer />
        </div>
      </setIsDarkModeContext.Provider>
    </isDarkModeContext.Provider>
  );
};
