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
        boxShadow: globalParams.shadowLightSmallFloat,
        transform: globalParams.float,
      },
      ":active": {
        boxShadow: globalParams.shadowLightSmall,
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

export const ButtonPushIn = style({
  //alignment
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  //position
  width: "90%",
  height: "3.0rem",
  //style
  border: `none`,
  borderRadius: globalParams.borderRadius,
  "@media": {
    "(hover: hover)": {
      ":hover": {
        boxShadow: globalParams.shadowLightSmall,
        transform: globalParams.float,
      },
      ":active": {
        boxShadow: globalParams.shadowLightSmallInDeep,
        transform: globalParams.sink,
      },
    },
  },
  color: `inherit`,
  backgroundColor: globalParams.backgroundLight,
  textDecorationLine: "none",
  cursor: `pointer`,
  //transition
  transition: `box-shadow ${globalParams.time}, transform ${globalParams.time}`,
});

export const Active = style({
  boxShadow: globalParams.shadowLightSmallIn,
  "@media": {
    "(hover: hover)": {
      ":hover": {
        boxShadow: globalParams.shadowLightSmallIn,
        transform: `none`,
      },
      ":active": {
        boxShadow: globalParams.shadowLightSmallInDeep,
        transform: globalParams.sink,
      },
    },
  },
});
