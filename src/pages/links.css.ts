import { style } from "@vanilla-extract/css";
import { globalParams } from "../styles/global";

export const MenuWrapper = style({
  //display
  width: `80%`,
  padding: `30px 5vw 0.5rem 5vw`,
  boxSizing: `border-box`,
  //alignment
  display: `grid`,
  gridTemplateColumns: `repeat(auto-fit, minmax(65px, 1fr))`,
  gap: `10px`,
  justifyContent: `center`,
  justifyItems: `center`,
  alignItems: `center`,
});

export const Menu = style({
  //dispaly
  width: `100%`,
  //style
  textDecoration: `none`,
  fontSize: `1.1rem`,
  color: `inherit`,
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
      backgroundColor: `currentcolor`,
      transition: `width ${globalParams.time}, color ${globalParams.time}`,
    },
    [`&:hover::after`]: {
      width: `100%`,
    },
    [`&:hover`]: {
      color: globalParams.accentColor1,
    },
  },
});

export const Separator = style({
  width: `90vw`,
  height: `1px`,
  backgroundColor: `currentcolor`,
});

export const LinksSectionsWrapper = style({
  //display
  width: `100%`,
  padding: `60px 5vw 1.0rem 5vw`,
  boxSizing: `border-box`,
  //alignment
  display: `flex`,
  flexDirection: `column`,
  gap: `60px`,
});

export const LinksSection = style({
  //display
  width: `100%`,
  padding: `60px 0.5rem 0.5rem 0.5rem`,
  marginTop: `-60px`,
  boxSizing: `border-box`,
  //alignment
  display: `flex`,
  flexDirection: `column`,
  gap: `30px`,
  //style
  borderRadius: globalParams.borderRadius,
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
      backgroundColor: `currentcolor`,
    },
  },
});

export const LinksWrapper = style({
  //display
  width: `100%`,
  //alignment
  display: `grid`,
  gridTemplateColumns: `repeat(auto-fill, minmax(250px, 1fr))`,
  gap: `30px`,
});

export const LinkBox = style({
  //display
  width: `100%`,
  //alignment
  display: `flex`,
  alignItems: `center`,
  //style
  color: `inherit`,
  textDecoration: `none`,
  borderRadius: globalParams.borderRadius,
  overflow: `hidden`,
  boxShadow: globalParams.shadowLight,
  //transition
  "@media": {
    "(hover: hover)": {
      ":hover": {
        transform: globalParams.float,
        boxShadow: globalParams.shadowLightFloat,
      },
      ":active": {
        transform: globalParams.sink,
        boxShadow: globalParams.shadowLight,
      },
    },
  },
  transition: `transform ${globalParams.time}, box-shadow ${globalParams.time} `,
});

export const LinkIconWrapper = style({
  //display
  width: `100px`,
  height: `100px`,
  //alignment
  display: `flex`,
  justifyContent: `center`,
  alignItems: `center`,
  //style
  color: `white`,
});

export const LinkIcon = style({
  //display
  width: `100%`,
});

export const LinkText = style({
  //alignment
  display: `flex`,
  flexDirection: `column`,
  justifyContent: `center`,
  //display
  width: `calc(100% - 100px)`,
  height: `100%`,
  padding: `0 0.5rem`,
  boxSizing: `border-box`,
});
