//Default Components
import React, { useEffect } from "react";
import { useState } from "react";
import { IconContext } from "react-icons/lib";
//Author Components
import { IsDarkModeProvider } from "../styles/context";
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
  const darkModeMediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
  const isDarkModeQuery = darkModeMediaQuery.matches;
  const initialIsDarkMode = () => {
    if (localStorage.getItem("isDarkMode") === "true") return true;
    else if (localStorage.getItem("isDarkMode") === "false") return false;
    else {
      localStorage.setItem("isDarkMode", isDarkModeQuery.toString());
      return isDarkModeQuery;
    }
  };
  const [isDarkMode, setIsDarkMode] = useState(initialIsDarkMode());

  useEffect(() => {
    const updatedIsDarkMode = initialIsDarkMode();
    setIsDarkMode(updatedIsDarkMode);
  }, []);
  //random header image
  const headerImageArray = [headerImage1, headerImage2, headerImage3];
  const randomIndex = Math.floor(Math.random() * headerImageArray.length);
  const headerImage = headerImageArray[randomIndex];
  return (
    <IconContext.Provider value={{ size: `40px` }}>
      <IsDarkModeProvider isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode}>
        <div className={`${Vanilla.Layout} ${isDarkMode ? Vanilla.LayoutDark : ""}`}>
          <Header />
          {title !== undefined && (
            <div className={Vanilla.PageHeader} style={{ backgroundImage: `url("${headerImage}")`, backgroundPosition: `center`, backgroundRepeat: `no-repeat`, backgroundSize: `cover` }}>
              <h1 className={Vanilla.h1}>{title}</h1>
            </div>
          )}
          {children}
          <Footer />
        </div>
      </IsDarkModeProvider>
    </IconContext.Provider>
  );
};
