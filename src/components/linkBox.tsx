import React from "react";
import { IconType } from "react-icons/lib";
import { LIconType } from "./icons";
import { globalLinks } from "../styles/global";
import * as Vanilla from "./linkBox.css";

type LinkBoxProps = {
  icon: IconType | LIconType;
  link: string;
  text: string;
  style?: string;
};
export const LinkBox = ({ icon: Icon, link, text, style }: LinkBoxProps) => {
  return (
    <a href={link} className={Vanilla.LinkBox}>
      <div className={`${Vanilla.LinkIconWrapper} ${style}`}>
        <Icon />
      </div>
      <div className={Vanilla.LinkText}>
        <h3>{text}</h3>
      </div>
    </a>
  );
};
