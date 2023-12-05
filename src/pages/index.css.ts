import { style, keyframes } from "@vanilla-extract/css";
import { globalParams } from "../styles/global";

export const HeroWrapper = style({
  //style
  width: `100%`,
  height: `calc(100vh - 60px)`,
  padding: `0.5rem 5vw 0 5vw`,
  boxSizing: `border-box`,
  //alignment
  display: `flex`,
  flexDirection: `column`,
  justifyContent: `center`,
  alignItems: `center`,
});

export const HeroContents = style({
  //alignment
  display: `flex`,
  justifyContent: `space-between`,
  alignItems: `center`,
  //style
  width: `100%`,
  height: `100%`,
});

export const HeroInfo = style({
  //alignment
  display: `flex`,
  flexDirection: `column`,
  justifyContent: `center`,
  alignItems: `end`,
  //style
  width: `45%`,
  gap: globalParams.gap,
});

export const HeroPoem = style({
  width: `45%`,
});

export const HeroPoemSentence = style({
  textAlign: `justify`,
});

export const Separator = style({
  //style
  width: `2px`,
  height: `90%`,
  backgroundColor: globalParams.textColorLight,
});

export const HeroWorks = style({
  //style
  width: `100%`,
  //alignment
  display: `grid`,
  gridTemplateColumns: `repeat(2, 1fr)`,
  gridTemplateRows: `repeat(2, 1fr)`,
  gridGap: globalParams.gap,
});

export const HeroWorkImg = style({
  //position
  width: `100%`,
  //style
  borderRadius: globalParams.borderRadius,
  overflow: `hidden`,
  ":hover": {
    boxShadow: globalParams.shadowLight,
    transform: globalParams.float,
  },
  ":active": {
    boxShadow: globalParams.shadowLightIn,
    transform: `none`,
  },
  //transition
  transition: `box-shadow ${globalParams.time}, transform ${globalParams.time} `,
});

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
