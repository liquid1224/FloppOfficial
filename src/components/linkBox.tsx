import React from "react";
import { IconType } from "react-icons/lib";
import { LIconType } from "./icons";
import * as Vanilla from "./linkBox.css";
import { useIsDarkModeContext } from "../styles/context";

type LinkBoxProps = {
  icon: IconType | LIconType;
  link: string;
  text: string;
  style?: string;
};
export const LinkBox = ({ icon: Icon, link, text, style }: LinkBoxProps) => {
  const isDarkMode = useIsDarkModeContext();
  return (
    <a href={link} target="_blank" className={`${Vanilla.LinkBox} ${isDarkMode ? Vanilla.LinkBoxDark : ""}`}>
      <div className={`${Vanilla.LinkIconWrapper} ${style}`}>
        <Icon />
      </div>
      <div className={Vanilla.LinkText}>
        <h3>{text}</h3>
      </div>
    </a>
  );
};
