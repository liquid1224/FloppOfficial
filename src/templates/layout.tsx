//Default Components
import React from "react";
import { Link } from "gatsby";
//Author Components
import * as Vanilla from "./layout.css";
import Header from "../components/header";
import Footer from "../components/footer";

type layoutProps = {
  children: React.ReactNode;
};

export const Layout = ({ children }: layoutProps) => {
  return (
    <div className={Vanilla.Layout}>
      <Header />
      {children}
      <Footer />
    </div>
  );
};
