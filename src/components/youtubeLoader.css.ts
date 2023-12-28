import { style } from "@vanilla-extract/css";
import { globalParams } from "../styles/global";

export const YouTubeWrapper = style({
  //display
  width: `100%`,
  aspectRatio: `16/9`,
  //styles
  boxShadow: `none`,
  borderRadius: globalParams.borderRadius,
  overflow: `hidden`,
  "@media": {
    "(hover: hover)": {
      ":hover": {
        boxShadow: globalParams.shadowLightSmall,
        transform: globalParams.float,
      },
    },
  },
  //transition
  transition: `box-shadow ${globalParams.time}, transform ${globalParams.time} `,
});

export const Dark = style({
  "@media": {
    "(hover: hover)": {
      ":hover": {
        boxShadow: globalParams.shadowDark,
        transform: globalParams.float,
      },
    },
  },
});

export const YouTube = style({
  width: "100%",
  height: "100%",
});

export const Contents = style({
  border: `none`,
});

export const PlaceHolder = style({
  backgroundColor: `currentcolor`,
});
