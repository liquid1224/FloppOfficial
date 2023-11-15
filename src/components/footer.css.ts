import { style } from "@vanilla-extract/css";
import { globalParams } from "../styles/global";

export const Footer = style({
  //style
  backgroundColor: globalParams.backgroundLight,
  borderRadius: `${globalParams.borderRadius} ${globalParams.borderRadius} 0 0`,
  boxShadow: globalParams.shadowLight332,
  //position
  width: "100%",
  height: "150px",
  marginTop: "auto",
  zIndex: "500",
  //alignment
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
});
