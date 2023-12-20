import React from "react";
import * as Vanilla from "./scrollIndicator.css";

export const ScrollIndicator = () => {
  return (
    <div className={Vanilla.HeroScrollWrapper}>
      <svg className={Vanilla.ArrowsWrapper}>
        <path className={Vanilla.Path1} d="M0 0 L20 21 L40 0"></path>
        <path className={Vanilla.Path2} d="M0 15 L20 36 L40 15"></path>
        <path className={Vanilla.Path3} d="M0 30 L20 51 L40 30"></path>
      </svg>
    </div>
  );
};
