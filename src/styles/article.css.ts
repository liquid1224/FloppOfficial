import { style } from "@vanilla-extract/css";

export const Body = style({
  width: `100%`,
  padding: `0.5rem 5vw`,
  boxSizing: `border-box`,
});

export const BlogHeader = style({
  //display
  width: `100%`,
  height: `100%`,
  position: `relative`,
});

export const BlogHeaderImage = style({
  width: `100%`,
});

export const BlogHeaderOverlay = style({
  width: `100%`,
  height: `100%`,
  padding: `0 5vw`,
  boxSizing: `border-box`,
  position: `absolute`,
  top: `0%`,
  left: `0%`,
  backgroundColor: "rgb(15,15,15,0.6)",
  display: `flex`,
  flexDirection: `column`,
  justifyContent: `flex-end`,
});

export const BlogTitle = style({
  color: `white`,
  margin: `0`,
});
