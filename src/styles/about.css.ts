import { style } from "@vanilla-extract/css";
import { globalParams } from "./global";

export const AboutWrapper = style({
  //style
  width: `100%`,
  padding: `30px 5vw 0 5vw`,
  boxSizing: `border-box`,
  //alignment
  display: `flex`,
  flexDirection: `column`,
  justifyContent: `center`,
  alignItems: `center`,
  gap: `10px`,
  //Desktop
  "@media": {
    [`${globalParams.pc}`]: {
      height: `calc(100vh - 210px)`,
    },
  },
});

export const ProfileWrapper = style({
  width: `100%`,
  //alignment
  display: `flex`,
  flexDirection: `column`,
  alignItems: `center`,
  gap: `30px`,
  "@media": {
    [`${globalParams.pc}`]: {
      height: `calc( 100vh - 210px )`,
      flexDirection: `row`,
      justifyContent: `center`,
      gap: `2.5%`,
    },
  },
});

export const IconSection = style({
  //display
  width: `100%`,
  //alignment
  display: `flex`,
  flexDirection: `column`,
  justifyContent: `center`,
  alignItems: `center`,
  //media query
  "@media": {
    [`${globalParams.pc}`]: {
      width: `38%`,
    },
  },
});

export const ArtistSectionWrapper = style({
  width: `100%`,
  maxWidth: `300px`,
  display: `flex`,
  flexDirection: `column`,
  justifyContent: `center`,
  alignItems: `center`,
});

export const ArtistIcon = style({
  width: `100%`,
});

export const ProfileSection = style({
  width: `100%`,
  gridColumn: `1fr`,
  "@media": {
    [`${globalParams.pc}`]: {
      width: `57%`,
      gridColumn: `2fr`,
    },
  },
  textAlign: `justify`,
});

export const EnvironmentSection = style({
  width: `100%`,
  padding: `0 5vw`,
  boxSizing: `border-box`,
});

export const EnvironmentWrapper = style({
  width: `100%`,
  boxSizing: `border-box`,
  display: `grid`,
  gridTemplateColumns: `1fr`,
  gap: `30px`,
  "@media": {
    [`${globalParams.pc}`]: {
      gridTemplateColumns: `repeat(2, 1fr)`,
    },
  },
});

export const h2 = style({
  marginBottom: `0`,
});

export const h3 = style({
  margin: `0`,
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

export const ul = style({
  paddingInlineStart: `20px`,
});
