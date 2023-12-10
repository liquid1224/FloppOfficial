import { style } from "@vanilla-extract/css";
import { globalParams } from "../styles/global";

export const MenuWrapper = style({
  //display
  width: `100%`,
  padding: `1.0rem 5vw 0 5vw`,
  //alignment
  display: `flex`,
  gap: `10px`,
  justifyContent: `center`,
  alignItems: `center`,
});

export const Menu = style({
  //dispaly
  width: `55px`,
  //style
  textDecoration: `none`,
  color: globalParams.textColorLight,
  //alignment
  display: `flex`,
  flexDirection: `column`,
  justifyContent: `center`,
  alignItems: `center`,
  transition: `color ${globalParams.time}`,
  selectors: {
    [`&::after`]: {
      content: ``,
      width: `0`,
      height: `1px`,
      backgroundColor: globalParams.accentColor1,
      transition: `width ${globalParams.time}`,
    },
    [`&:hover::after`]: {
      width: `100%`,
    },
    [`&:hover`]: {
      color: globalParams.accentColor1,
    },
  },
});

export const LinksSectionsWrapper = style({
  //display
  width: `100%`,
  padding: `1.0rem 5vw`,
  boxSizing: `border-box`,
  //alignment
  display: `flex`,
  flexDirection: `column`,
  gap: `20px`,
});

export const LinksSection = style({
  //display
  width: `100%`,
  padding: `0.5rem`,
  boxSizing: `border-box`,
  //alignment
  display: `flex`,
  flexDirection: `column`,
  //style
  borderRadius: globalParams.borderRadius,
  //transition
  "@media": {
    "(hover: hover)": {
      ":hover": {
        boxShadow: globalParams.shadowLight,
        transform: globalParams.float,
      },
    },
  },
  transition: `box-shadow ${globalParams.time}, transform ${globalParams.time}`,
});

export const LinkSectionH2 = style({
  margin: `0.5rem 0 0 0`,
  //alignment
  display: `flex`,
  flexDirection: `column`,
  //separator
  selectors: {
    [`&::after`]: {
      content: ``,
      width: `100%`,
      height: `1px`,
      backgroundColor: globalParams.textColorLight,
    },
  },
});

export const LinksWrapper = style({
  //display
  width: `100%`,
  //alignment
  display: `grid`,
  gridTemplateColumns: `repeat(2, minmax(250px, 1fr))`,
  gap: `30px`,
});

export const LinkBox = style({
  //display
  width: `100%`,
  //alignment
  display: `flex`,
  alignItems: `center`,
});

export const Separator = style({
  width: `100%`,
  height: `2px`,
  backgroundColor: globalParams.textColorLight,
});
