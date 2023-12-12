import { style } from "@vanilla-extract/css";
import { globalParams } from "../styles/global";

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

export const ArtistIconWrapper = style({
  borderRadius: globalParams.borderRadius,
  boxShadow: globalParams.shadowLight,
  overflow: `hidden`,
});

export const ArtistIcon = style({
  width: `100%`,
});

export const Separator = style({
  width: `2px`,
  height: `100%`,
  backgroundColor: globalParams.textColorLight,
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
});

export const EnvironmentWrapper = style({
  width: `100%`,
  padding: `0 5vw`,
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

export const h3 = style({
  marginBottom: `0`,
});

export const MiniSeparator = style({
  width: `100%`,
  height: `1px`,
  backgroundColor: globalParams.textColorLight,
});

export const ul = style({
  paddingInlineStart: `20px`,
});
