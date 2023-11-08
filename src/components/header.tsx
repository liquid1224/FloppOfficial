//Default Components
import React from "react";
import { Link } from "gatsby";
//Author Components
import Logo from "../images/logo";
import * as Vanilla from "./header.css";

export const Header = () => {
  //Scroll Detection
  const [isScrolled, setStyleScrolled] = React.useState(false);
  const toggleStyleScrolled = () => {
    window.scrollY > 30 ? setStyleScrolled(true) : setStyleScrolled(false);
  };
  React.useEffect(() => {
    window.addEventListener("scroll", toggleStyleScrolled);
    return () => window.removeEventListener("scroll", toggleStyleScrolled);
  }, []);

  //Class
  const classHeader = `${Vanilla.Header} ${isScrolled ? Vanilla.Scrolled : ""}`;

  return (
    <header className={classHeader}>
      <Link to="/" className={Vanilla.LogoWrapper}>
        <Logo />
      </Link>
    </header>
  );
};

export default Header;
