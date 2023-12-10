//Default Components
import React from "react";
//Author Components
import { Button } from "./button";
import * as Vanilla from "./navigation.css";
import { Link } from "gatsby";

type NavigationProps = {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
};
export const Navigation = ({ isOpen, setIsOpen }: NavigationProps) => {
  //Navigation open/close
  const classNavigation = `${Vanilla.Navigation} ${isOpen ? "" : Vanilla.Closed}`;

  return (
    <nav className={classNavigation}>
      <div className={Vanilla.NavigationSectionsWrapper}>
        <div className={Vanilla.NavigationSection}>
          <h3 className={Vanilla.h3}>Know</h3>
          <div className={Vanilla.NavigationMenusWrapper}>
            <Link to="/about" className={`${Vanilla.Link} ${Vanilla.HoverFX}`} onClick={() => setIsOpen(!isOpen)}>
              About
            </Link>
            <Link to="/works" className={`${Vanilla.Link} ${Vanilla.HoverFX}`} onClick={() => setIsOpen(!isOpen)}>
              Works
            </Link>
            <Link to="/links" className={`${Vanilla.Link} ${Vanilla.HoverFX}`} onClick={() => setIsOpen(!isOpen)}>
              Links
            </Link>
          </div>
        </div>
        <div className={Vanilla.NavigationSection}>
          <h3 className={Vanilla.h3}>Listen</h3>
          <div className={Vanilla.NavigationMenusWrapper}>
            <Link to="/links#music" className={`${Vanilla.Link} ${Vanilla.HoverFX}`} onClick={() => setIsOpen(!isOpen)}>
              Music
            </Link>
            <Link to="/links#store" className={`${Vanilla.Link} ${Vanilla.HoverFX}`} onClick={() => setIsOpen(!isOpen)}>
              Stores
            </Link>
            <Link to="https://youtube.com/@liquid1224" className={`${Vanilla.Link} ${Vanilla.HoverFX}`}>
              YouTube
            </Link>
          </div>
        </div>
        <div className={Vanilla.NavigationSection}>
          <h3 className={Vanilla.h3}>Read</h3>
          <div className={Vanilla.NavigationMenusWrapper}>
            <Link to="/blog" className={`${Vanilla.Link} ${Vanilla.HoverFX}`} onClick={() => setIsOpen(!isOpen)}>
              Blog
            </Link>
            <a href="https://trap.jp/author/liquid1224/" className={`${Vanilla.Link} ${Vanilla.HoverFX}`}>
              traP
            </a>
          </div>
        </div>
        <div className={Vanilla.NavigationSection}>
          <h3 className={Vanilla.h3}>Connect</h3>
          <div className={Vanilla.NavigationMenusWrapper}>
            <a href="https://twitter.com/liquid1224" className={`${Vanilla.Link} ${Vanilla.HoverFX}`}>
              Twitter
            </a>
            <a href="https://www.instagram.com/liquid1224.flopp/" className={`${Vanilla.Link} ${Vanilla.HoverFX}`}>
              Instagram
            </a>
            <Link to="/contact" className={`${Vanilla.Link} ${Vanilla.HoverFX}`} onClick={() => setIsOpen(!isOpen)}>
              Contact
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

/*<ul className={Vanilla.LinkElementsWrapper}>
      <LinkElement title="About" link="/about" />
      <LinkElement title="Works" link="/works" />
      <LinkElement title="Links" link="/links" />
      <LinkElement title="Contact" link="/contact" />
  </ul>*/
