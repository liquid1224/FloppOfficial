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
  fill: `currentcolor`,
  fillRule: "nonzero",
});

export const Den = style({
  fill: `currentcolor`,
  fillRule: "nonzero",
});

export const Hatsu = style({
  fill: `currentcolor`,
  fillRule: "nonzero",
});

export const Ryoku = style({
  fill: `currentcolor`,
  fillRule: "nonzero",
});

export const Ka = style({
  fill: globalParams.accentColor,
  fillRule: "nonzero",
});
