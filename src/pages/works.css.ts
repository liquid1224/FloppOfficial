import { style } from "@vanilla-extract/css";
import { globalParams } from "../styles/global";

export const Buttons = style({
  //display
  width: `100%`,
  //alignment
  display: `flex`,
});

export const ButtonsSectionsWrapper = style({
  //display
  width: `100%`,
  margin: `1.0rem 5vw`,
  padding: `1rem`,
  boxSizing: `border-box`,
  //style
  borderRadius: globalParams.borderRadius,
  boxShadow: globalParams.shadowLight,
  //alignment
  display: `flex`,
  flexDirection: `column`,
  gap: `20px`,
});

export const ButtonsSectionsWrapperDark = style({
  //style
  boxShadow: globalParams.shadowDark,
});

export const ButtonsSection = style({
  //display
  width: `100%`,
  //alignment
  display: `flex`,
  flexDirection: `column`,
  justifyContent: `center`,
  gap: `20px`,
  "@media": {
    [`${globalParams.pc}`]: {
      display: `flex`,
      flexDirection: `row`,
      justifyContent: `center`,
      gap: `20px`,
    },
  },
});

export const ButtonsSectionTitle = style({
  //display
  width: `80px`,
  //alignment
  display: `flex`,
  justifyContent: `center`,
  alignItems: `center`,
});

export const ButtonsWrapper = style({
  //display
  width: `100%`,
  //alignment
  display: `grid`,
  gridTemplateColumns: `repeat(auto-fill, minmax(150px, 1fr))`,
  justifyItems: `center`,
  gap: `30px`,
});

export const ButtonsSectionsSeparator = style({
  width: `100%`,
  height: `1px`,
  backgroundColor: `currentcolor`,
});

export const WorksListWrapper = style({
  //display
  width: `100%`,
  padding: `1.0rem 5vw`,
  boxSizing: `border-box`,
});

export const WorksWrapper = style({
  //display
  width: `100%`,
  //alignment
  display: `grid`,
  gridTemplateColumns: `repeat(auto-fill, minmax(250px, 1fr))`,
  gap: `30px`,
});

export const WorkBox = style({
  //display
  position: `relative`,
  paddingTop: `100%`,
  //style
  borderRadius: globalParams.borderRadius,
  overflow: `hidden`,
  boxShadow: globalParams.shadowLight,
  //transition
  transform: `none`,
  transition: `transform ${globalParams.time}`,
});

export const WorkBoxDark = style({
  boxShadow: globalParams.shadowDark,
});

export const WorkBoxHover = style({
  "@media": {
    "(hover: hover)": {
      ":hover": {
        transform: globalParams.float,
      },
      ":active": {
        transform: `none`,
      },
    },
  },
});

export const Image = style({
  //display
  width: `101%`,
  height: `101%`,
  position: `absolute`,
  top: `50%`,
  left: `50%`,
  transform: `translate(-50%, -50%)`,
});

export const Link = style({
  textDecoration: `none`,
});

export const WorkBoxDescription = style({
  //display
  width: `101%`,
  height: `101%`,
  position: `absolute`,
  top: `50%`,
  left: `50%`,
  transform: `translate(-50%, -50%)`,
  padding: `0.5rem`,
  boxSizing: `border-box`,
  //alignment
  display: `flex`,
  flexDirection: `column`,
  justifyContent: `flex-end`,
  //style
  backgroundColor: "rgb(15,15,15,0)",
  opacity: `0`,
  //transition
  "@media": {
    "(hover: hover)": {
      ":hover": {
        backgroundColor: "rgb(15,15,15,0.6)",
        opacity: "1",
      },
    },
  },
  transition: `background-color ${globalParams.time}, opacity ${globalParams.time} `,
});

export const ResetH = style({
  margin: `0`,
  marginBlock: `0`,
  padding: `0`,
  fontSize: `inherit`,
  color: globalParams.backgroundLight,
  textDecoration: `none`,
});

export const h3 = style({
  fontWeight: `inherit`,
});
