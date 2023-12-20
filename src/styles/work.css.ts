import { style } from "@vanilla-extract/css";
import { globalParams } from "./global";

export const WorksPageTemplateWrapper = style({
  width: `100%`,
  padding: `20px 5vw`,
  boxSizing: `border-box`,
  display: `flex`,
  flexDirection: `column`,
  justifyContent: `center`,
  alignItems: `center`,
  gap: `30px`,
});

export const WorksDescriptionsWrapper = style({
  width: `100%`,
  display: `flex`,
  flexDirection: `column`,
  gap: `20px`,
  "@media": {
    [`${globalParams.pc}`]: {
      flexDirection: `row`,
    },
  },
});

export const DescriptionsWrapper = style({
  width: `100%`,
  margin: `20px 20px 0 0`,
  padding: `10px 0 0 0`,
});

export const Item = style({
  margin: `0 0 0.5rem 5%`,
});

export const Copy = style({
  display: `flex`,
  flexDirection: `column`,
  //alignItems: `center`,
});

export const LinksWrapper = style({
  //display
  width: `100%`,
  margin: `20px 0`,
  padding: `0 0.5rem`,
  boxSizing: `border-box`,
  //alignment
  display: `grid`,
  gridTemplateColumns: `repeat(auto-fill, minmax(250px, 1fr))`,
  gap: `30px`,
});

export const Gallery = style({
  width: `100%`,
  display: `grid`,
  gridTemplateColumns: `repeat(auto-fill, minmax(250px, 1fr))`,
  gap: `10px`,
});

export const Embed = style({
  width: `100%`,
  height: `450px`,
  border: `none`,
  borderRadius: globalParams.borderRadius,
});

export const Section = style({
  width: `100%`,
});

export const NoMargin = style({
  margin: `0`,
});

export const Underline = style({
  //alignment
  display: `flex`,
  flexDirection: `column`,
  //underline
  selectors: {
    [`&::after`]: {
      content: ``,
      width: `100%`,
      height: `1px`,
      backgroundColor: `currentcolor`,
    },
  },
});
