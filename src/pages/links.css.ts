import { style } from "@vanilla-extract/css";
import { globalParams } from "../styles/global";

export const MenuWrapper = style({
  //display
  width: `100%`,
  padding: `1.0rem 5vw 0 5vw`,
  //alignment
  display: `flex`,
  gap: `10px`,
  justifyContent: `center`,
  alignItems: `center`,
});

export const Menu = style({
  //dispaly
  width: `65px`,
  //style
  textDecoration: `none`,
  color: globalParams.textColorLight,
  //alignment
  display: `flex`,
  flexDirection: `column`,
  justifyContent: `center`,
  alignItems: `center`,
  transition: `color ${globalParams.time}`,
  selectors: {
    [`&::after`]: {
      content: ``,
      width: `0`,
      height: `1px`,
      backgroundColor: globalParams.accentColor1,
      transition: `width ${globalParams.time}`,
    },
    [`&:hover::after`]: {
      width: `100%`,
    },
    [`&:hover`]: {
      color: globalParams.accentColor1,
    },
  },
});

export const LinksSectionsWrapper = style({
  //display
  width: `100%`,
  padding: `0 5vw 1.0rem 5vw`,
  boxSizing: `border-box`,
  //alignment
  display: `flex`,
  flexDirection: `column`,
  gap: `20px`,
});

export const LinksSection = style({
  //display
  width: `100%`,
  padding: `0.5rem`,
  boxSizing: `border-box`,
  //alignment
  display: `flex`,
  flexDirection: `column`,
  gap: `30px`,
  //style
  borderRadius: globalParams.borderRadius,
  transition: `box-shadow ${globalParams.time}, transform ${globalParams.time}`,
});

export const LinkSectionH2 = style({
  margin: `0.5rem 0 0 0`,
  //alignment
  display: `flex`,
  flexDirection: `column`,
  //separator
  selectors: {
    [`&::after`]: {
      content: ``,
      width: `100%`,
      height: `1px`,
      backgroundColor: globalParams.textColorLight,
    },
  },
});

export const LinksWrapper = style({
  //display
  width: `100%`,
  //alignment
  display: `grid`,
  gridTemplateColumns: `repeat(auto-fill, minmax(250px, 1fr))`,
  gap: `30px`,
});

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

export const LinkIcon = style({
  //display
  width: `100%`,
});

export const Spotify = style({
  backgroundColor: `#1db26b`,
});

export const AppleMusic = style({
  backgroundColor: `#ef5667`,
});

export const AmazonMusic = style({
  backgroundColor: `#25d1da`,
});

export const YouTube = style({
  backgroundColor: `#ff0000`,
});

export const LineMusic = style({
  backgroundColor: `#0be071`,
});

export const Bandcamp = style({
  backgroundColor: `#1ca0c3`,
});

export const Booth = style({
  backgroundColor: `#fc4d50`,
});

export const Suzuri = style({
  backgroundColor: `#027bbb`,
});

export const Twitter = style({
  backgroundColor: `#000000`,
});

export const Instagram = style({
  background: "linear-gradient(to top left, #ff0089, rgb(255, 0, 118, 0), #6c11ff), linear-gradient(to top right, #ffc600, rgb(255, 0, 118, 0), magenta) rgba(255, 153, 150, 1)",
});

export const Mastodon = style({
  backgroundColor: `#6364ff`,
});

export const Niconico = style({
  backgroundColor: `#252525`,
});

export const Bilibili = style({
  backgroundColor: `#09adeb`,
});

export const SoundCloud = style({
  backgroundColor: `#ff5600`,
});

export const Skeb = style({
  backgroundColor: `#32aa8f`,
});

export const Mail = style({
  backgroundColor: globalParams.accentColor1,
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
