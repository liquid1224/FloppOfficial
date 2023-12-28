import { style } from "@vanilla-extract/css";
import { globalParams } from "../styles/global";

/* ImageFrame */
export const ImageFrame = style({
  //display
  position: `relative`,
  width: `100%`,
  height: `100%`,
  //style
  borderRadius: globalParams.borderRadius,
  boxShadow: globalParams.shadowLight,
  overflow: `hidden`,
  transition: `box-shadow ${globalParams.time}, transform ${globalParams.time}`,
});
export const Dark = style({
  boxShadow: globalParams.shadowDark,
});

export const Float = style({
  "@media": {
    "(hover: hover)": {
      ":hover": {
        boxShadow: globalParams.shadowLightFloat,
        transform: globalParams.float,
      },
      ":active": {
        boxShadow: globalParams.shadowLight,
        transform: globalParams.sink,
      },
    },
  },
});
export const FloatDark = style({
  "@media": {
    "(hover: hover)": {
      ":hover": {
        boxShadow: globalParams.shadowDarkFloat,
        transform: globalParams.float,
      },
      ":active": {
        boxShadow: globalParams.shadowDark,
        transform: globalParams.sink,
      },
    },
  },
});

/* ImageFrame Small */
export const ImageFrameSmall = style({
  //display
  position: `relative`,
  //style
  borderRadius: globalParams.borderRadius,
  boxShadow: globalParams.shadowLightSmall,
  overflow: `hidden`,
  transition: `box-shadow ${globalParams.time}`,
});
export const DarkSmall = style({
  boxShadow: globalParams.shadowDarkSmall,
});

export const FloatSmall = style({
  "@media": {
    "(hover: hover)": {
      ":hover": {
        boxShadow: globalParams.shadowLightSmallFloat,
        transform: globalParams.float,
      },
      ":active": {
        boxShadow: globalParams.shadowLightSmall,
        transform: globalParams.sink,
      },
    },
  },
});
export const FloatSmallDark = style({
  "@media": {
    "(hover: hover)": {
      ":hover": {
        boxShadow: globalParams.shadowDarkSmallFloat,
        transform: globalParams.float,
      },
      ":active": {
        boxShadow: globalParams.shadowDarkSmall,
        transform: globalParams.sink,
      },
    },
  },
});
