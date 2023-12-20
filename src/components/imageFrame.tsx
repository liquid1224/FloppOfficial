import React from "react";
import * as Vanilla from "./imageFrame.css";
import { useIsDarkModeContext } from "../styles/context";

type ImageFrameProps = {
  children: React.ReactElement;
  isSmall: boolean;
  isFloat: boolean;
};
export const ImageFrame = ({ children, isSmall, isFloat }: ImageFrameProps) => {
  const isDarkMode = useIsDarkModeContext();
  if (!isSmall)
    return <div className={`${Vanilla.ImageFrame} ${isDarkMode ? Vanilla.Dark : ""} ${!isDarkMode && isFloat ? Vanilla.Float : ""} ${isDarkMode && isFloat ? Vanilla.FloatDark : ""}`}>{children}</div>;
  else
    return (
      <div className={`${Vanilla.ImageFrameSmall} ${isDarkMode ? Vanilla.DarkSmall : ""} ${!isDarkMode && isFloat ? Vanilla.FloatSmall : ""} ${isDarkMode && isFloat ? Vanilla.FloatSmallDark : ""}`}>
        {children}
      </div>
    );
};
