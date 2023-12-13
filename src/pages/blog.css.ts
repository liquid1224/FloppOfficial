import { style } from "@vanilla-extract/css";
import { globalParams } from "../styles/global";

export const BlogWrapper = style({
  width: `100%`,
  padding: `30px 5vw`,
  boxSizing: `border-box`,
  //alignment
  display: `flex`,
  justifyContent: `center`,
  alignItems: `center`,
});

export const ArticlesWrapper = style({
  width: `100%`,
  display: `flex`,
  flexDirection: `column`,
  justifyContent: `center`,
  alignItems: `center`,
  gap: `30px`,
});

export const Link = style({
  //display
  width: `100%`,
  //alignment
  display: `flex`,
  gap: `5%`,
  //style
  textDecoration: `none`,
  color: globalParams.textColorLight,
  boxShadow: globalParams.shadowLightSmallFloat,
  borderRadius: globalParams.borderRadius,
  overflow: `hidden`,
});

export const Thumbnail = style({
  width: `28%`,
  aspectRatio: `16 / 9`,
});

export const TextWrapper = style({
  width: `67%`,
  marginBottom: `auto`,
});
