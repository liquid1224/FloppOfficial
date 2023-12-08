import { style } from "@vanilla-extract/css";
import { globalParams } from "../styles/global";

export const Layout = style({
  backgroundColor: globalParams.backgroundLight,
  display: "flex",
  alignItems: "center",
  flexFlow: "column",
  minHeight: "100vh",
});

export const PageHeader = style({
  //display
  width: `100%`,
  height: `150px`,
  padding: `0 5vw`,
  boxSizing: `border-box`,
  backgroundColor: `purple`, //beta
  //alignment
  display: `flex`,
  flexDirection: `column`,
  justifyContent: `end`,
});
