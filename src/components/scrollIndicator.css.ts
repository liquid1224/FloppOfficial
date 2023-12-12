import { keyframes, style } from "@vanilla-extract/css";
import { globalParams } from "../styles/global";

export const HeroScrollWrapper = style({
  //position
  width: `100%`,
  height: `60px`,
  //alignment
  display: `flex`,
  justifyContent: `center`,
  alignItems: `center`,
});

export const ArrowsWrapper = style({
  width: `40px`,
  height: `60px`,
});

const ArrowsAnimation = keyframes({
  "0%": { opacity: `0` },
  "40%": { opacity: `1` },
  "80%": { opacity: `0` },
  "100%": { opacity: `0` },
});

export const Path1 = style({
  stroke: globalParams.accentColor1,
  fill: `transparent`,
  strokeWidth: `1px`,
  animation: `${ArrowsAnimation} 2s infinite`,
  animationDelay: `-1s`,
});

export const Path2 = style({
  stroke: globalParams.accentColor1,
  fill: `transparent`,
  strokeWidth: `1px`,
  animation: `${ArrowsAnimation} 2s infinite`,
  animationDelay: `-0.5s`,
});

export const Path3 = style({
  stroke: globalParams.accentColor1,
  fill: `transparent`,
  strokeWidth: `1px`,
  animation: `${ArrowsAnimation} 2s infinite`,
  animationDelay: `0s`,
});
