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
  "@media": {
    "(hover: hover)": {
      ":hover": {
        boxShadow: globalParams.shadowLightSmall,
        transform: globalParams.float,
      },
      ":active": {
        boxShadow: globalParams.shadowLightSmallIn,
        transform: `none`,
      },
    },
  },
  color: `inherit`,
  textDecorationLine: "none",
  //transition
  transition: `box-shadow ${globalParams.time}, transform ${globalParams.time}`,
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
