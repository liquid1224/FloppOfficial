import { style } from "@vanilla-extract/css";
import { globalParams } from "./global";

export const Layout = style({
  backgroundColor: globalParams.backgroundLight,
  color: globalParams.textColorLight,
  display: "flex",
  alignItems: "center",
  flexFlow: "column",
  minHeight: "100vh",
  transition: `background-color ${globalParams.time}`,
});

export const LayoutDark = style({
  backgroundColor: globalParams.backgroundDark,
});

export const PageHeader = style({
  //display
  width: `100%`,
  height: `90px`,
  padding: `0 6vw`,
  boxSizing: `border-box`,
  backgroundSize: `cover`,
  //alignment
  display: `flex`,
  flexDirection: `column`,
  justifyContent: `flex-end`,
  "@media": {
    [`${globalParams.pc}`]: {
      height: `150px`,
    },
  },
});

export const h1 = style({
  color: globalParams.backgroundLight,
});
