//Default Components
import React from "react";
import { Link } from "gatsby";
//Author Components
import Logo from "../images/logo";
import * as Vanilla from "./header.css";
import { Navigation } from "./navigation";

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
    </header>
  );
};

export default Header;
