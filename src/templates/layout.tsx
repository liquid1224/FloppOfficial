//Default Components
import React from "react";
import { createContext, useContext, useState } from "react";
//Author Components
import { DarkModeProvider } from "../styles/context";
import * as Vanilla from "./layout.css";
import Header from "../components/header";
import Footer from "../components/footer";
import headerImage from "../images/headerImage.jpg";

//Layout
type layoutProps = {
  children: React.ReactNode;
  title?: string;
};
export const Layout = ({ children, title }: layoutProps) => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  return (
    <DarkModeProvider isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode}>
      <div className={Vanilla.Layout}>
        <Header isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
        {title !== undefined && (
          <div className={Vanilla.PageHeader} style={{ backgroundImage: `url("${headerImage}")` }}>
            <h1 className={Vanilla.h1}>{title}</h1>
          </div>
        )}
        {children}
        <Footer />
      </div>
    </DarkModeProvider>
  );
};
