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
  zIndex: `750`,
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
