import { style } from "@vanilla-extract/css";
import { globalParams } from "../styles/global";

export const Button = style({
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
    boxShadow: globalParams.shadowLight,
  },
  ":active": {
    boxShadow: globalParams.shadowLightIn,
  },
  color: `inherit`,
  textDecorationLine: "none",
  //transition
  transition: `box-shadow ${globalParams.time}`,
});

export const Title = style({
  //alignment
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  //position
  width: "100%",
  height: "100%",
});
