import { style } from "@vanilla-extract/css";
import { globalParams } from "../styles/global";

export const Layout = style({
  backgroundColor: globalParams.backgroundLight,
  display: "flex",
  alignItems: "center",
  flexFlow: "column",
  minHeight: "100vh",
});
