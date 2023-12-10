//Default Components
import React from "react";
import { Link } from "gatsby";
//Author Components
import Logo from "../images/logo";
import { Navigation } from "./navigation";
import * as Vanilla from "./header.css";

//Burger Button
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

//Toggle Switch
type ToggleSwitchProps = {
  isDarkMode: boolean;
  setIsDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
};
const ToggleSwitch = ({ isDarkMode, setIsDarkMode }: ToggleSwitchProps) => {
  //Click Handler
  const handleClick = () => {
    setIsDarkMode(!isDarkMode);
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
type HeaderProps = {
  isDarkMode: boolean;
  setIsDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
};
export const Header = ({ isDarkMode, setIsDarkMode }: HeaderProps) => {
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

  //Class
  const classHeader = `${Vanilla.Header} ${isScrolled ? Vanilla.Scrolled : ""}`;

  return (
    <>
      <header className={classHeader}>
        <Burger isOpen={isOpen} onClick={toggleOpen} />
        <div className={Vanilla.LogoWrapper}>
          <Link to="/" className={Vanilla.LogoLink} onClick={isOpen ? () => setIsOpen(!isOpen) : () => {}}>
            <Logo />
          </Link>
        </div>
        <ToggleSwitch isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
      </header>
      <Navigation isOpen={isOpen} setIsOpen={setIsOpen} />
    </>
  );
};

export default Header;
