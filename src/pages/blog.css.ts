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
  gap: `3%`,
  //style
  textDecoration: `none`,
  color: globalParams.textColorLight,
  boxShadow: globalParams.shadowLightSmall,
  borderRadius: globalParams.borderRadius,
  overflow: `hidden`,
  //transition
  "@media": {
    "(hover: hover)": {
      ":hover": {
        boxShadow: globalParams.shadowLightSmallFloat,
        transform: globalParams.float,
      },
      ":active": {
        boxShadow: globalParams.shadowLightSmall,
        transform: globalParams.sink,
      },
    },
  },
  transition: `box-shadow ${globalParams.time}, transform ${globalParams.time}`,
});

export const Thumbnail = style({
  width: `30%`,
  aspectRatio: `16 / 9`,
});

export const TextWrapper = style({
  width: `67%`,
  margin: `0.5rem 0 auto 0`,
});

export const SeriesLink = style({
  //textDecoration: ``,
  color: globalParams.textColorLight,
});

export const Series = style({
  marginBottom: `0`,
});

export const h2 = style({
  margin: `0`,
});

export const Date = style({
  fontSize: `80%`,
  marginBottom: `0`,
});
