//Default Components
import React from "react";
import { Link } from "gatsby";
//Author Components
import { Button } from "./button";
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
      <li>
        <Button link={link} title={title} />
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
