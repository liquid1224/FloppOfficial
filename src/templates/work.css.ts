import { style } from "@vanilla-extract/css";
import { globalParams } from "../styles/global";

export const WorksPageTemplateWrapper = style({
  width: `100%`,
  padding: `0 5vw`,
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
  gap: `10px`,
  "@media": {
    [`${globalParams.pc}`]: {
      flexDirection: `row`,
    },
  },
});

export const JacketWrapper = style({
  width: `100%`,
});

export const Jacket = style({
  borderRadius: globalParams.borderRadius,
  boxShadow: globalParams.shadowLight,
  margin: `20px`,
});

export const DescriptionsWrapper = style({
  width: `100%`,
  margin: `20px 20px 0 0`,
  padding: `10px 0 0 0`,
});

export const item = style({
  margin: `0 0 0.5rem 5%`,
});

export const Separator = style({
  width: `100%`,
  height: `1px`,
  backgroundColor: globalParams.textColorLight,
});

export const Copy = style({
  display: `flex`,
  flexDirection: `column`,
  //alignItems: `center`,
});

export const LinksWrapper = style({
  //display
  width: `100%`,
  //alignment
  display: `grid`,
  gridTemplateColumns: `repeat(auto-fill, minmax(250px, 1fr))`,
  gap: `30px`,
});

export const Spotify = style({
  backgroundColor: `#1db26b`,
});