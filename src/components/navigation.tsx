//Default Components
import React from "react";
import { Link } from "gatsby";
//Author Components
import * as Vanilla from "./navigation.css";

type NavigationProps = {
  isOpen: boolean;
};

export const Navigation = ({ isOpen }: NavigationProps) => {
  //LinkElement
  type LinkElementProps = {
    title: string;
    link: string;
  };
  const LinkElement = ({ title, link }: LinkElementProps) => {
    return (
      <li className={Vanilla.LinkWrapper}>
        <Link to={link} className={Vanilla.Link}>
          {title}
        </Link>
      </li>
    );
  };

  //Navigation open/close
  const classNavigation = `${Vanilla.Navigation} ${isOpen ? "" : Vanilla.Closed}`;

  return (
    <nav className={classNavigation}>
      <ul className={Vanilla.LinkElementsWrapper}>
        <LinkElement title="About" link="/about" />
        <LinkElement title="Works" link="/works" />
        <LinkElement title="Links" link="/links" />
        <LinkElement title="Contact" link="/contact" />
      </ul>
    </nav>
  );
};
