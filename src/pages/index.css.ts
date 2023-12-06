import { style, keyframes } from "@vanilla-extract/css";
import { globalParams } from "../styles/global";

export const HeroWrapper = style({
  //style
  width: `100%`,
  padding: `0.5rem 5vw 0 5vw`,
  boxSizing: `border-box`,
  //alignment
  display: `flex`,
  flexDirection: `column`,
  justifyContent: `center`,
  alignItems: `center`,
  //Desktop
  "@media": {
    "screen and (min-width: 768px)": {
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
  gap: `0.5rem`,
  //Desktop
  "@media": {
    "screen and (min-width: 768px)": {
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
  alignItems: `end`,
  //style
  width: `100%`,
  gap: globalParams.gap,
  //Desktop
  "@media": {
    "screen and (min-width: 768px)": {
      width: `45%`,
    },
  },
});

export const HeroPoem = style({
  width: `100%`,
  //Desktop
  "@media": {
    "screen and (min-width: 768px)": {
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
  alignItems: `end`,
  //style
  width: `100%`,
});

export const Separator = style({
  //style
  height: `2px`,
  width: `100%`,
  backgroundColor: globalParams.textColorLight,
  //Desktop
  "@media": {
    "screen and (min-width:768px)": {
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

export const MusicMoviesWrapper = style({
  //display
  width: `37%`,
  //alignment
  display: `flex`,
  flexDirection: `column`,
  justifyContent: `center`,
  alignItems: `center`,
  gap: `10px`,
});

export const YouTubeWrapper = style({
  //display
  width: `100%`,
  aspectRatio: `16/9`,
  //styles
  borderRadius: globalParams.borderRadius,
  overflow: `hidden`,
  "@media": {
    "(hover: hover)": {
      ":hover": {
        boxShadow: globalParams.shadowLight,
        transform: globalParams.float,
      },
    },
  },
  //transition
  transition: `box-shadow ${globalParams.time}, transform ${globalParams.time} `,
});

export const YouTube = style({
  width: "100%",
  height: "100%",
  border: `none`,
});

export const MusicTextWrapper = style({
  width: `58%`,
  display: `flex`,
  flexDirection: `column`,
});

export const MusicDescriptionsWrapper = style({
  width: `100%`,
  display: `grid`,
  gridTemplateColumns: `repeat(auto-fill, minmax(250px, 1fr))`,
  gap: `10px`,
});

export const MusicDescription = style({
  textAlign: `justify`,
});

export const Section = style({
  //display
  width: `100%`,
  padding: `0.5rem 5vw`,
  boxSizing: `border-box`,
  //alignment
  display: `flex`,
  gap: `5%`,
});

export const SectionSeparator = style({
  height: `2px`,
  width: `90vw`,
  backgroundColor: globalParams.textColorLight,
});
