import { style } from "@vanilla-extract/css";
import { globalParams } from "../styles/global";

export const Navigation = style({
  //alignment
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  //style
  padding: "5rem 2rem",
  boxSizing: "border-box",
  backgroundColor: "inherit",
  //position
  position: "fixed",
  top: "0",
  right: "0",
  left: "0",
  height: "100vh",
  //open
  opacity: "1",
  visibility: "visible",
  //transition
  transition: `opacity ${globalParams.time}, visibility 0s ease ${globalParams.time}`,
  transitionDelay: `0s`,
});

export const Closed = style({
  //close
  opacity: "0",
  visibility: "hidden",
  //transition?
  transition: `opacity ${globalParams.time}, visibility 0s ease ${globalParams.time}`,
});

export const LinkElementsWrapper = style({
  //alignment
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  textAlign: "center",
  //style
  listStyle: "none",
  gap: "1rem 0",
  //position
  width: "100%",
  maxWidth: "100%",
  padding: "0",
});

export const LinkWrapper = style({
  //alignment
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  //position
  width: "150px",
  height: "3.0rem",
  //style
  borderRadius: globalParams.borderRadius,
  ":hover": {
    boxShadow: globalParams.shadowLight332,
  },
  ":active": {
    boxShadow: globalParams.shadowLight332i,
  },
  //transition
  transition: `box-shadow ${globalParams.time}`,
});

export const Link = style({
  //alignment
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  //position
  width: "100%",
  height: "100%",
  //style
  color: "inherit",
  textDecorationLine: "none",
});
