import { style } from "@vanilla-extract/css";

export const Header = style({
  backgroundColor: `red`, //beta
  position: `sticky`,
  top: `0`,
  width: `100%`,
  height: `36px`,
  padding: `5px`,
  zIndex: `500`,
  display: `flex`,
  flexDirection: `column`,
});

export const Scrolled = style({
  backgroundColor: `blue`, //beta
});

export const LogoWrapper = style({
  zIndex: `1000`,
  height: `100%`,
});
