import { style } from "@vanilla-extract/css";
import { globalParams } from "../styles/global";

export const Navigation = style({
  //alignment
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  //style
  padding: "60px 5vw",
  boxSizing: "border-box",
  backgroundColor: "inherit",
  overflow: `hidden`,
  //position
  position: "fixed",
  top: "0",
  right: "0",
  left: "0",
  width: `100vw`,
  height: "100vh",
  zIndex: `750`,
  //open
  opacity: "1",
  visibility: "visible",
  //transition
  transition: `opacity ${globalParams.time}, visibility 0s ease ${globalParams.time}`,
  transitionDelay: `0s`,
  "@media": {
    [`${globalParams.pc}`]: {
      padding: "5rem 10vw",
    },
  },
});

export const Closed = style({
  //close
  opacity: "0",
  visibility: "hidden",
  //transition?
  transition: `opacity ${globalParams.time}, visibility 0s ease ${globalParams.time}`,
});

export const NavigationSectionsWrapper = style({
  //display
  width: `100%`,
  height: `80%`,
  //alignment
  display: `grid`,
  gridTemplateColumns: `repeat(2, minmax(100px, 1fr))`,
  gap: globalParams.gap,
  "@media": {
    [`${globalParams.pc}`]: {
      gridTemplateColumns: `repeat(2, minmax(250px, 1fr))`,
    },
  },
});

export const NavigationSection = style({
  //style
  borderRadius: globalParams.borderRadius,
  "@media": {
    "(hover: hover)": {
      ":hover": {
        boxShadow: globalParams.shadowLight,
        transform: `translate(0, -5px)`,
      },
    },
  },
  //display
  width: `100%`,
  padding: globalParams.borderRadius,
  boxSizing: `border-box`,
  //alignment
  display: `flex`,
  flexDirection: `column`,
  //transition
  transition: `box-shadow ${globalParams.time}, transform ${globalParams.time}`,
});

export const NavigationSectionDark = style({
  "@media": {
    "(hover: hover)": {
      ":hover": {
        boxShadow: globalParams.shadowDark,
        transform: `translate(0, -5px)`,
      },
    },
  },
});

export const h3 = style({
  //alignment
  display: `flex`,
  flexDirection: `column`,
  //style
  margin: `0.5rem 0`,
  selectors: {
    [`&::after`]: {
      content: ``,
      width: `100%`,
      height: `2px`,
      backgroundColor: `currentcolor`,
    },
  },
});

export const NavigationMenusWrapper = style({
  //display
  width: `100%`,
  height: `100%`,
  padding: `0 0 0 5%`,
  boxSizing: `border-box`,
  //alignment
  display: `flex`,
  flexDirection: `column`,
  gap: `20px`,
});

export const Link = style({
  //style
  color: `inherit`,
  textDecoration: `none`,
  display: `flex`,
  flexDirection: `column`,
});

export const HoverFX = style({
  transition: `color ${globalParams.time}`,
  selectors: {
    [`&::after`]: {
      content: ``,
      width: `0`,
      height: `1px`,
      backgroundColor: `currentcolor`,
      transition: `width ${globalParams.time}, color ${globalParams.time} `,
    },
    [`&:hover::after`]: {
      width: `100%`,
    },
    [`&:hover`]: {
      color: globalParams.accentColor,
    },
  },
});
