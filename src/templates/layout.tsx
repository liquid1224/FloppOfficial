//Default Components
import React from "react";
import { createContext, useContext, useState } from "react";
//Author Components
import { DarkModeProvider } from "../styles/context";
import * as Vanilla from "./layout.css";
import Header from "../components/header";
import Footer from "../components/footer";
import headerImage1 from "../images/headerImage1.jpg";
import headerImage2 from "../images/headerImage2.jpg";
import headerImage3 from "../images/headerImage3.jpg";

//Layout
type layoutProps = {
  children: React.ReactNode;
  title?: string;
};
export const Layout = ({ children, title }: layoutProps) => {
  //darkmode state
  const [isDarkMode, setIsDarkMode] = useState(false);
  //random header image
  const headerImageArray = [headerImage1, headerImage2, headerImage3];
  const randomIndex = Math.floor(Math.random() * headerImageArray.length);
  const headerImage = headerImageArray[randomIndex];
  return (
    <DarkModeProvider isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode}>
      <div className={Vanilla.Layout}>
        <Header isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
        {title !== undefined && (
          <div className={Vanilla.PageHeader} style={{ backgroundImage: `url("${headerImage}")`, backgroundPosition: `center`, backgroundRepeat: `no-repeat`, backgroundSize: `cover` }}>
            <h1 className={Vanilla.h1}>{title}</h1>
          </div>
        )}
        {children}
        <Footer />
      </div>
    </DarkModeProvider>
  );
};
