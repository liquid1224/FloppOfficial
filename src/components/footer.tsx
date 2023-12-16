import React from "react";
import * as Vanilla from "./footer.css";

export const Footer = () => {
  //Copyright auto update
  const Copyright = () => {
    const initialYear = 2023;
    const latestYear = new Date().getFullYear();
    return (
      <div className={Vanilla.Copyright}>
        <div>©{initialYear !== latestYear ? `${initialYear}-${latestYear}` : `${latestYear}`} liquid1224</div>
        <div>all rights reserved</div>
      </div>
    );
  };
  return (
    <footer className={Vanilla.Footer}>
      <div className={Vanilla.CopyrightWrapper}>
        <Copyright />
      </div>
    </footer>
  );
};
export default Footer;
