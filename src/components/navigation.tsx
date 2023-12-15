//Default Components
import React from "react";
//Author Components
import * as Vanilla from "./navigation.css";
import { Link } from "gatsby";
import { globalLinks } from "../styles/global";
import { useIsDarkModeContext } from "../styles/context";

//Navigation Contents
type NavigationContentsProps = {
  isOpen?: boolean;
  setIsOpen?: React.Dispatch<React.SetStateAction<boolean>>;
};
export const NavigationContents = ({ isOpen, setIsOpen }: NavigationContentsProps) => {
  const isDarkMode = useIsDarkModeContext();

  type NavigationSectionProps = {
    title: string;
    children: React.ReactElement;
  };
  const NavigationSection = ({ title, children }: NavigationSectionProps) => {
    return (
      <div className={`${Vanilla.NavigationSection} ${isDarkMode ? Vanilla.NavigationSectionDark : ""}`}>
        <h3 className={Vanilla.h3}>{title}</h3>
        <div className={Vanilla.NavigationMenusWrapper}>{children}</div>
      </div>
    );
  };

  return (
    <>
      <NavigationSection title="Know">
        <>
          <Link
            to="/about"
            className={`${Vanilla.Link} ${Vanilla.HoverFX}`}
            onClick={() => {
              setIsOpen !== undefined ? setIsOpen(!isOpen) : null;
            }}
          >
            About
          </Link>
          <Link
            to="/works"
            className={`${Vanilla.Link} ${Vanilla.HoverFX}`}
            onClick={() => {
              setIsOpen !== undefined ? setIsOpen(!isOpen) : null;
            }}
          >
            Works
          </Link>
          <Link
            to="/links"
            className={`${Vanilla.Link} ${Vanilla.HoverFX}`}
            onClick={() => {
              setIsOpen !== undefined ? setIsOpen(!isOpen) : null;
            }}
          >
            Links
          </Link>
        </>
      </NavigationSection>
      <NavigationSection title="Listen">
        <>
          <Link
            to="/links#music"
            className={`${Vanilla.Link} ${Vanilla.HoverFX}`}
            onClick={() => {
              setIsOpen !== undefined ? setIsOpen(!isOpen) : null;
            }}
          >
            Music
          </Link>
          <Link
            to="/links#store"
            className={`${Vanilla.Link} ${Vanilla.HoverFX}`}
            onClick={() => {
              setIsOpen !== undefined ? setIsOpen(!isOpen) : null;
            }}
          >
            Stores
          </Link>
          <a href={globalLinks.youtubeChannel} className={`${Vanilla.Link} ${Vanilla.HoverFX}`}>
            YouTube
          </a>
        </>
      </NavigationSection>
      <NavigationSection title="Read">
        <>
          <Link
            to="/blog"
            className={`${Vanilla.Link} ${Vanilla.HoverFX}`}
            onClick={() => {
              setIsOpen !== undefined ? setIsOpen(!isOpen) : null;
            }}
          >
            Blog
          </Link>
          <a href={globalLinks.trap} target="_blank" className={`${Vanilla.Link} ${Vanilla.HoverFX}`}>
            traP
          </a>
        </>
      </NavigationSection>
      <NavigationSection title="Connect">
        <>
          <a href={globalLinks.twitter} className={`${Vanilla.Link} ${Vanilla.HoverFX}`}>
            Twitter(X)
          </a>
          <a href={globalLinks.instagram} className={`${Vanilla.Link} ${Vanilla.HoverFX}`}>
            Instagram
          </a>
          <Link
            to="/contact"
            className={`${Vanilla.Link} ${Vanilla.HoverFX}`}
            onClick={() => {
              setIsOpen !== undefined ? setIsOpen(!isOpen) : null;
            }}
          >
            Contact
          </Link>
        </>
      </NavigationSection>
    </>
  );
};

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
        <NavigationContents isOpen={isOpen} setIsOpen={setIsOpen} />
      </div>
    </nav>
  );
};
