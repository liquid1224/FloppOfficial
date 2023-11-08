import { style } from "@vanilla-extract/css";
import { globalParams } from "../styles/global";

export const Svg = style({
  width: "100%",
  height: "100%",
  fillRule: "evenodd",
  clipRule: "evenodd",
  strokeLinejoin: "round",
  strokeMiterlimit: "2",
});

export const Sho = style({
  fill: globalParams.textColorLight,
  fillRule: "nonzero",
});

export const Den = style({
  fill: globalParams.textColorLight,
  fillRule: "nonzero",
});

export const Hatsu = style({
  fill: globalParams.textColorLight,
  fillRule: "nonzero",
});

export const Ryoku = style({
  fill: globalParams.textColorLight,
  fillRule: "nonzero",
});

export const Ka = style({
  fill: globalParams.accentColor1,
  fillRule: "nonzero",
});
