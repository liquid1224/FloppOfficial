//Default Components
import React from "react";
import { Link } from "gatsby";
//Author Components
import { useIsDarkModeContext, useSetIsDarkModeContext } from "../templates/layout";
import Logo from "../images/logo";
import { Navigation } from "./navigation";
import * as Vanilla from "./header.css";

//Burger button
type BurgerProps = {
  isOpen: boolean;
  onClick: React.MouseEventHandler;
};

const Burger = ({ isOpen, onClick }: BurgerProps) => {
  const classLine1 = `${Vanilla.Line1} ${isOpen ? Vanilla.Trans1 : ""}`;
  const classLine2 = `${Vanilla.Line2} ${isOpen ? Vanilla.Trans2 : ""}`;
  const classLine3 = `${Vanilla.Line3} ${isOpen ? Vanilla.Trans3 : ""}`;
  return (
    <div className={Vanilla.BurgerWrapper}>
      <button type="button" onClick={onClick} className={Vanilla.Burger}>
        <span className={classLine1}></span>
        <span className={classLine2}></span>
        <span className={classLine3}></span>
      </button>
    </div>
  );
};

//Toggle switch
const ToggleSwitch = () => {
  const isDarkMode = useIsDarkModeContext();
  const setIsDarkMode = useSetIsDarkModeContext();

  const handleClick = () => {
    setIsDarkMode(!isDarkMode);
  };

  const classToggleSwitchLabel = `${Vanilla.ToggleSwitchLabel} ${isDarkMode ? Vanilla.ToggleSwitchLabelChecked : ""}`;

  return (
    <div className={Vanilla.ToggleSwitch}>
      <input id="toggle" type="checkbox" checked={isDarkMode} onChange={handleClick} className={Vanilla.ToggleSwitchInput} />
      <label htmlFor="toggle" className={classToggleSwitchLabel} />
    </div>
  );
};

//Header
export const Header = () => {
  //Scroll Detection
  const [isScrolled, setIsScrolled] = React.useState(false);
  const toggleStyleScrolled = () => {
    window.scrollY > 36 ? setIsScrolled(true) : setIsScrolled(false);
  };
  React.useEffect(() => {
    window.addEventListener("scroll", toggleStyleScrolled);
    return () => window.removeEventListener("scroll", toggleStyleScrolled);
  }, []);

  //Burger state
  const [isOpen, setIsOpen] = React.useState(false);
  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  //Class
  const classHeader = `${Vanilla.Header} ${isScrolled ? Vanilla.Scrolled : ""}`;

  return (
    <header className={classHeader}>
      <Burger isOpen={isOpen} onClick={toggleOpen} />
      <Navigation isOpen={isOpen} />
      <Link to="/" className={Vanilla.LogoWrapper}>
        <Logo />
      </Link>
      <ToggleSwitch />
    </header>
  );
};

export default Header;
