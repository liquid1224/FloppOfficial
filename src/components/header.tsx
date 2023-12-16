//Default Components
import React from "react";
import { Link } from "gatsby";
//Author Components
import Logo from "../images/logo";
import { Navigation } from "./navigation";
import * as Vanilla from "./header.css";
import { useIsDarkModeContext, useSetIsDarkModeContext } from "../styles/context";

//Burger Button
type BurgerProps = {
  isOpen: boolean;
  onClick: React.MouseEventHandler;
};

const Burger = ({ isOpen, onClick }: BurgerProps) => {
  const isDarkMode = useIsDarkModeContext();
  const classLine1 = `${Vanilla.Line1} ${isOpen ? Vanilla.Trans1 : ""}`;
  const classLine2 = `${Vanilla.Line2} ${isOpen ? Vanilla.Trans2 : ""}`;
  const classLine3 = `${Vanilla.Line3} ${isOpen ? Vanilla.Trans3 : ""}`;
  return (
    <div className={`${Vanilla.BurgerWrapper} ${isDarkMode ? Vanilla.BurgerWrapperDark : ""}`}>
      <button type="button" aria-label="Navigation button" onClick={onClick} className={Vanilla.Burger}>
        <span className={classLine1} />
        <span className={classLine2} />
        <span className={classLine3} />
      </button>
    </div>
  );
};

//Toggle Switch
type ToggleSwitchProps = {};
const ToggleSwitch = ({}: ToggleSwitchProps) => {
  const isDarkMode = useIsDarkModeContext();
  const setIsDarkMode = useSetIsDarkModeContext();
  //Click Handler
  const handleClick = () => {
    setIsDarkMode(!isDarkMode);
    const nextIsDarkMode = !isDarkMode;
    localStorage.setItem("isDarkMode", nextIsDarkMode.toString());
  };

  //Class
  const classToggleSwitchLabel = `${Vanilla.ToggleSwitchLabel} ${isDarkMode ? Vanilla.ToggleSwitchLabelChecked : ""}`;

  return (
    <div className={Vanilla.ToggleSwitch}>
      <input id="toggle" type="checkbox" checked={isDarkMode} onChange={handleClick} className={Vanilla.ToggleSwitchInput} />
      <label htmlFor="toggle" className={classToggleSwitchLabel} />
    </div>
  );
};

//Header
type HeaderProps = {};
export const Header = ({}: HeaderProps) => {
  //Scroll Detection
  const [isScrolled, setIsScrolled] = React.useState(false);
  const toggleStyleScrolled = () => {
    window.scrollY > 36 ? setIsScrolled(true) : setIsScrolled(false);
  };
  React.useEffect(() => {
    window.addEventListener("scroll", toggleStyleScrolled);
    return () => window.removeEventListener("scroll", toggleStyleScrolled);
  }, []);

  //Burger State
  const [isOpen, setIsOpen] = React.useState(false);
  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  //Dark Mode State
  const isDarkMode = useIsDarkModeContext();

  //Class
  const classHeader = `${Vanilla.Header} ${isScrolled && !isOpen ? Vanilla.Scrolled : ""} ${isScrolled && !isOpen && isDarkMode ? Vanilla.ScrolledDark : ""} ${isOpen ? Vanilla.MenuOn : ""}`;

  return (
    <>
      <header className={classHeader}>
        <Burger isOpen={isOpen} onClick={toggleOpen} />
        <div className={Vanilla.LogoWrapper}>
          <Link to="/" aria-label="Back to index" className={`${Vanilla.LogoLink} ${isDarkMode ? Vanilla.LogoLinkDark : ""}`} onClick={isOpen ? () => setIsOpen(!isOpen) : () => {}}>
            <Logo />
          </Link>
        </div>
        <ToggleSwitch />
      </header>
      <Navigation isOpen={isOpen} setIsOpen={setIsOpen} />
    </>
  );
};

export default Header;
