import { style } from "@vanilla-extract/css";
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

export const HeroInfo = style({
  //style
  width: `45%`,
  //alignment
  display: `grid`,
  gridTemplateColumns: `repeat(2, 1fr)`,
  gridTemplateRows: `repeat(2, 1fr)`,
  gridGap: `10px`,
});

export const HeroInfoImg = style({
  width: `100%`,
  borderRadius: globalParams.borderRadius,
  overflow: `hidden`,
  boxShadow: globalParams.shadowLight,
});

export const HeroScrollWrapper = style({
  height: `90px`,
  width: `100%`,
});
