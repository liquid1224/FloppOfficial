import { style } from "@vanilla-extract/css";
import { globalParams } from "../styles/global";

export const LinkBox = style({
  //display
  width: `100%`,
  //alignment
  display: `flex`,
  alignItems: `center`,
  //style
  color: globalParams.textColorLight,
  textDecoration: `none`,
  borderRadius: globalParams.borderRadius,
  overflow: `hidden`,
  boxShadow: globalParams.shadowLight,
  //transition
  "@media": {
    "(hover: hover)": {
      ":hover": {
        transform: globalParams.float,
        boxShadow: globalParams.shadowLightFloat,
      },
      ":active": {
        transform: globalParams.sink,
        boxShadow: globalParams.shadowLight,
      },
    },
  },
  transition: `transform ${globalParams.time}, box-shadow ${globalParams.time} `,
});

export const LinkIconWrapper = style({
  //display
  width: `100px`,
  height: `100px`,
  //alignment
  display: `flex`,
  justifyContent: `center`,
  alignItems: `center`,
  //style
  color: `white`,
});

export const LinkText = style({
  //alignment
  display: `flex`,
  flexDirection: `column`,
  justifyContent: `center`,
  //display
  width: `calc(100% - 100px)`,
  height: `100%`,
  padding: `0 0.5rem`,
  boxSizing: `border-box`,
});