import { style } from "@vanilla-extract/css";
import { globalParams } from "../styles/global";

export const Buttons = style({
  //display
  width: `100%`,
  //alignment
  display: `flex`,
});

export const ButtonsSectionsWrapper = style({
  //display
  width: `100%`,
  margin: `1.0rem 5vw`,
  padding: `1rem`,
  boxSizing: `border-box`,
  //style
  borderRadius: globalParams.borderRadius,
  boxShadow: globalParams.shadowLight,
  //alignment
  display: `flex`,
  flexDirection: `column`,
  gap: `20px`,
});

export const ButtonsSection = style({
  //display
  width: `100%`,
  //alignment
  display: `flex`,
  justifyContent: `center`,
});

export const ButtonsSectionTitle = style({
  //display
  width: `80px`,
  //alignment
  display: `flex`,
  justifyContent: `center`,
  alignItems: `center`,
});

export const ButtonsWrapper = style({
  //display
  width: `100%`,
  //alignment
  display: `grid`,
  gridTemplateColumns: `repeat(auto-fill, minmax(150px, 1fr))`,
  justifyItems: `center`,
  gap: `10px`,
});

export const ButtonsSectionsSeparator = style({
  width: `100%`,
  height: `1px`,
  backgroundColor: globalParams.textColorLight,
});
