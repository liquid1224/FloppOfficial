import { Link } from "gatsby";
import React from "react";
import * as Vanilla from "./button.css";

type ButtonProps = {
  link: string;
  title: string;
};
export const Button = ({ link, title }: ButtonProps) => {
  return (
    <Link to={link} className={Vanilla.Button}>
      <div className={Vanilla.Title}>{title}</div>
    </Link>
  );
};

type ButtonPushInProps = {
  title: string;
  isPushed: boolean;
  onClick?: () => void;
};
export const ButtonPushIn = ({ title, isPushed, onClick }: ButtonPushInProps) => {
  return (
    <button className={`${Vanilla.ButtonPushIn} ${isPushed ? Vanilla.Active : ""}`} onClick={onClick}>
      <div className={Vanilla.Title}>{title}</div>
    </button>
  );
};
