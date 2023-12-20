import { style, keyframes } from "@vanilla-extract/css";
import { globalParams } from "./global";

export const HeroWrapper = style({
  //style
  width: `100%`,
  padding: `30px 5vw 0 5vw`,
  boxSizing: `border-box`,
  //alignment
  display: `flex`,
  flexDirection: `column`,
  justifyContent: `center`,
  alignItems: `center`,
  //Desktop
  "@media": {
    [`${globalParams.pc}`]: {
      height: `calc(100vh - 60px)`,
    },
  },
});

export const HeroContents = style({
  //alignment
  display: `flex`,
  flexDirection: `column`,
  alignItems: `center`,
  //style
  width: `100%`,
  height: `100%`,
  gap: `30px`,
  //Desktop
  "@media": {
    [`${globalParams.pc}`]: {
      flexDirection: `row`,
      justifyContent: `space-between`,
      gap: `unset`,
    },
  },
});

export const HeroInfo = style({
  //alignment
  display: `flex`,
  flexDirection: `column`,
  justifyContent: `center`,
  alignItems: `flex-end`,
  //style
  width: `100%`,
  gap: `30px`,
  //Desktop
  "@media": {
    [`${globalParams.pc}`]: {
      width: `45%`,
    },
  },
});

export const HeroPoem = style({
  width: `100%`,
  //Desktop
  "@media": {
    [`${globalParams.pc}`]: {
      width: `45%`,
    },
  },
});

export const HeroPoemSentence = style({
  textAlign: `justify`,
});

export const HeroPoemLink = style({
  //alignment
  display: `flex`,
  flexDirection: `column`,
  justifyContent: `center`,
  alignItems: `flex-end`,
  //style
  width: `100%`,
});

export const Separator = style({
  //style
  height: `2px`,
  width: `100%`,
  backgroundColor: `currentcolor`,
  //Desktop
  "@media": {
    [`${globalParams.pc}`]: {
      width: `2px`,
      height: `95%`,
    },
  },
});

export const HeroWorks = style({
  //style
  width: `100%`,
  //alignment
  display: `grid`,
  gridTemplateColumns: `repeat(2, 1fr)`,
  gridTemplateRows: `repeat(2, 1fr)`,
  gridGap: `30px`,
});

export const MoviesWrapper = style({
  //display
  width: `100%`,
  //alignment
  display: `flex`,
  flexDirection: `column`,
  justifyContent: `center`,
  alignItems: `center`,
  gap: `10px`,
  "@media": {
    [`${globalParams.pc}`]: {
      width: `37%`,
    },
  },
});

export const h2 = style({
  margin: `0`,
});

export const MusicTextWrapper = style({
  width: `100%`,
  display: `flex`,
  flexDirection: `column`,
  "@media": {
    [`${globalParams.pc}`]: {
      width: `60%`,
    },
  },
});

export const MusicDescriptionsWrapper = style({
  width: `100%`,
  display: `grid`,
  gridTemplateColumns: `repeat(auto-fill, minmax(240px, 1fr))`,
  gap: `20px`,
  "@media": {
    [`${globalParams.pc}`]: {
      gridTemplateColumns: `repeat(auto-fill, minmax(270px, 1fr))`,
    },
  },
});

export const MusicDescription = style({
  textAlign: `justify`,
});

export const Section = style({
  //display
  width: `100%`,
  padding: `1.0rem 5vw`,
  boxSizing: `border-box`,
  //alignment
  display: `flex`,
  flexDirection: `column`,
  gap: `30px`,
  "@media": {
    [`${globalParams.pc}`]: {
      flexDirection: `row`,
      gap: `3%`,
    },
  },
});

export const SectionElementsInversion = style({
  flexDirection: `column-reverse`,
});

export const SectionSeparator = style({
  height: `2px`,
  width: `90vw`,
  backgroundColor: `currentcolor`,
});
