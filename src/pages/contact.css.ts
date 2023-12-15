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
  gap: `30px`,
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

export const LinksWrapper = style({
  //display
  width: `100%`,
  //alignment
  display: `grid`,
  gridTemplateColumns: `repeat(auto-fill, minmax(250px, 1fr))`,
  gap: `30px`,
});

export const ul = style({
  padding: "0",
  margin: "0 0 0 1.5rem",
});

export const Separator = style({
  width: `100%`,
  height: `1px`,
  backgroundColor: `currentcolor`,
});

export const InlineLink = style({
  textDecoration: `underline`,
  textDecorationColor: `rgb(0,0,0,0)`,
  color: globalParams.accentColor1,
  "@media": {
    "(hover: hover)": {
      ":hover": {
        textDecorationColor: `currentcolor`,
      },
    },
  },
  transition: `text-decoration-color ${globalParams.time}`,
});
