//Default Components
import React from "react";
//Author Components
import { Button } from "./button";
import * as Vanilla from "./navigation.css";
import { Link } from "gatsby";

type NavigationProps = {
  isOpen: boolean;
};

export const NavigationContents = () => {
  //LinkElement
  type LinkElementProps = {
    title: string;
    link: string;
  };
  const LinkElement = ({ title, link }: LinkElementProps) => {
    return (
      <li>
        <Button link={link} title={title} />
      </li>
    );
  };
  return (
    <div className={Vanilla.NavigationSectionsWrapper}>
      <div className={Vanilla.NavigationSection}>
        <h3 className={Vanilla.h3}>Know</h3>
        <div className={Vanilla.NavigationMenusWrapper}>
          <Link to="/about" className={`${Vanilla.Link} ${Vanilla.HoverFX}`}>
            About
          </Link>
          <Link to="/works" className={`${Vanilla.Link} ${Vanilla.HoverFX}`}>
            Works
          </Link>
          <Link to="/links" className={`${Vanilla.Link} ${Vanilla.HoverFX}`}>
            Links
          </Link>
        </div>
      </div>
      <div className={Vanilla.NavigationSection}>
        <h3 className={Vanilla.h3}>Listen</h3>
        <div className={Vanilla.NavigationMenusWrapper}>
          <Link to="" className={`${Vanilla.Link} ${Vanilla.HoverFX}`}>
            Streams
          </Link>
          <Link to="" className={`${Vanilla.Link} ${Vanilla.HoverFX}`}>
            Stores
          </Link>
          <Link to="" className={`${Vanilla.Link} ${Vanilla.HoverFX}`}>
            YouTube
          </Link>
        </div>
      </div>
      <div className={Vanilla.NavigationSection}>
        <h3 className={Vanilla.h3}>Read</h3>
        <div className={Vanilla.NavigationMenusWrapper}>
          <Link to="" className={`${Vanilla.Link} ${Vanilla.HoverFX}`}>
            Blog
          </Link>
          <Link to="" className={`${Vanilla.Link} ${Vanilla.HoverFX}`}>
            traP
          </Link>
        </div>
      </div>
      <div className={Vanilla.NavigationSection}>
        <h3 className={Vanilla.h3}>Connect</h3>
        <div className={Vanilla.NavigationMenusWrapper}>
          <Link to="" className={`${Vanilla.Link} ${Vanilla.HoverFX}`}>
            Twitter
          </Link>
          <Link to="" className={`${Vanilla.Link} ${Vanilla.HoverFX}`}>
            Instagram
          </Link>
          <Link to="/contact" className={`${Vanilla.Link} ${Vanilla.HoverFX}`}>
            Contact
          </Link>
        </div>
      </div>
    </div>
  );
};

export const Navigation = ({ isOpen }: NavigationProps) => {
  //Navigation open/close
  const classNavigation = `${Vanilla.Navigation} ${isOpen ? "" : Vanilla.Closed}`;

  return (
    <nav className={classNavigation}>
      <NavigationContents />
    </nav>
  );
};

/*<ul className={Vanilla.LinkElementsWrapper}>
      <LinkElement title="About" link="/about" />
      <LinkElement title="Works" link="/works" />
      <LinkElement title="Links" link="/links" />
      <LinkElement title="Contact" link="/contact" />
  </ul>*/
