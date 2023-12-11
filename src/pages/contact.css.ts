import { style } from "@vanilla-extract/css";
import { globalParams } from "../styles/global";

export const SectionsWrapper = style({
  //display
  width: `100%`,
  padding: `30px 5vw`,
  boxSizing: `border-box`,
  //alignment
  display: `flex`,
  flexDirection: `column`,
});

export const Section = style({
  //display
  width: `100%`,
  //alignment
  display: `flex`,
  flexDirection: `column`,
});

export const h2 = style({
  //style
  marginBottom: `0`,
});

export const Separator = style({
  width: `100%`,
  height: `1px`,
  backgroundColor: globalParams.textColorLight,
});
