import { style } from "@vanilla-extract/css";
import { globalParams } from "../styles/global";

export const LinkBox = style({
  color: globalParams.textColorLight,
  width: globalParams.iconSize,
  height: globalParams.iconSize,
  padding: "1.0rem",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  borderRadius: globalParams.borderRadius,
  transition: `box-shadow ${globalParams.time}`,
  "@media": {
    "hover: hover": {
      ":hover": {
        boxShadow: globalParams.shadowLight,
      },
      ":active": {
        boxShadow: globalParams.shadowLightIn,
      },
    },
  },
});

export const IconSvg = style({
  stroke: "currentcolor",
  fill: "currentcolor",
  width: "100%",
  height: "auto",
});
