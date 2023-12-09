import { style } from "@vanilla-extract/css";
import { globalParams } from "../styles/global";
import headerBackgroundImage from "../images/headerImage.jpg";

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
  padding: `0 6vw`,
  boxSizing: `border-box`,
  backgroundSize: `cover`,
  //alignment
  display: `flex`,
  flexDirection: `column`,
  justifyContent: `end`,
});

export const h1 = style({
  color: globalParams.backgroundLight,
});
