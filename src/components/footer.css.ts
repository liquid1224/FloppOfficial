import { style } from "@vanilla-extract/css";

export const Footer = style({
  //style
  backgroundColor: `inherit`,
  //position
  width: "100%",
  marginTop: "auto",
  zIndex: "500",
  //alignment
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
});

export const Copyright = style({
  width: `100%`,
  margin: `30px 0`,
  display: `flex`,
  justifyContent: `center`,
  alignItems: `center`,
});
