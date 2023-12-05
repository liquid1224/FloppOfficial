//Default Components
import React from "react";
import { createContext, useContext, useState } from "react";
//Author Components
import { DarkModeProvider } from "../styles/context";
import * as Vanilla from "./layout.css";
import Header from "../components/header";
import Footer from "../components/footer";

//Layout
type layoutProps = {
  children: React.ReactNode;
};
export const Layout = ({ children }: layoutProps) => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  return (
    <DarkModeProvider isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode}>
      <div className={Vanilla.Layout}>
        <Header isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
        {children}
        <Footer />
      </div>
    </DarkModeProvider>
  );
};
