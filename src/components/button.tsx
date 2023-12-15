import { Link } from "gatsby";
import React, { useState } from "react";
import * as Vanilla from "./button.css";
import { useIsDarkModeContext } from "../styles/context";

type ButtonProps = {
  link: string;
  title: string;
  onClick?: () => void;
};
export const Button = ({ link, title, onClick }: ButtonProps) => {
  const isDarkMode = useIsDarkModeContext();
  return (
    <Link to={link} className={`${Vanilla.Button} ${isDarkMode ? Vanilla.ButtonDark : ""}`} onClick={onClick}>
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
  const isDarkMode = useIsDarkModeContext();
  return (
    <button
      className={`${Vanilla.ButtonPushIn} ${isDarkMode ? Vanilla.ButtonPushInDark : ""} ${isPushed && !isDarkMode ? Vanilla.Active : ""} ${isPushed && isDarkMode ? Vanilla.ActiveDark : ""}`}
      onClick={onClick}
    >
      <div className={Vanilla.Title}>{title}</div>
    </button>
  );
};

type PageSelectorProps = {
  numPage: number;
  setNumPage: React.Dispatch<React.SetStateAction<number>>;
};
export const PageSelector = ({ numPage, setNumPage }: PageSelectorProps) => {
  return (
    <div className={Vanilla.PageSelectorWrapper}>
      {numPage > 1 && <button title="<" onClick={() => setNumPage(numPage - 1)} />}
      {numPage}
      <button title=">" onClick={() => setNumPage(numPage + 1)} />
    </div>
  );
};
