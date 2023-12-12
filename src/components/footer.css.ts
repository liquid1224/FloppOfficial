import { style } from "@vanilla-extract/css";
import { globalParams } from "../styles/global";

export const Footer = style({
  //style
  backgroundColor: globalParams.backgroundLight,
  //position
  width: "100%",
  marginTop: "auto",
  zIndex: "500",
  //alignment
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
});

export const Separator = style({
  width: `100%`,
  height: `2px`,
  backgroundColor: globalParams.textColorLight,
});

export const NavigationWrapper = style({
  //display
  width: `100%`,
  padding: `30px 5vw`,
  boxSizing: `border-box`,
  //alignment
  display: `grid`,
  gridTemplateColumns: `repeat(auto-fit, minmax(100px, 1fr))`,
  gap: globalParams.gap,
  "@media": {
    [`${globalParams.pc}`]: {
      padding: `30px 40vw 30px 5vw`,
      gridTemplateColumns: `repeat(2, minmax(250px, 1fr))`,
    },
  },
});

export const Copyright = style({
  width: `100%`,
  margin: `30px 0`,
  display: `flex`,
  justifyContent: `center`,
  alignItems: `center`,
});
