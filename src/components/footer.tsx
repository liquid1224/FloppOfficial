import React from "react";
import * as Vanilla from "./footer.css";

export const Footer = () => {
  //Copyright auto update
  const Copyright = () => {
    const initialYear = 2023;
    const latestYear = new Date().getFullYear();
    return <>©{initialYear !== latestYear ? `${initialYear}-${latestYear}` : `${latestYear}`} liquid1224 all rights reserved</>;
  };
  return (
    <footer className={Vanilla.Footer}>
      <div className={Vanilla.Copyright}>
        <Copyright />
      </div>
    </footer>
  );
};
export default Footer;
