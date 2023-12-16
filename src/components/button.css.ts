import { style } from "@vanilla-extract/css";
import { globalParams } from "../styles/global";

export const Button = style({
  //alignment
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  //position
  width: "150px",
  height: "3.0rem",
  //style
  borderRadius: globalParams.borderRadius,
  "@media": {
    "(hover: hover)": {
      ":hover": {
        boxShadow: globalParams.shadowLightSmallFloat,
        transform: globalParams.float,
      },
      ":active": {
        boxShadow: globalParams.shadowLightSmall,
        transform: `none`,
      },
    },
    "(hover: none)": {
      boxShadow: globalParams.shadowLightSmallFloat,
      ":active": {
        boxShadow: globalParams.shadowLightSmall,
        transform: globalParams.sink,
      },
    },
  },
  color: `inherit`,
  textDecorationLine: "none",
  //transition
  transition: `box-shadow ${globalParams.time}, transform ${globalParams.time}`,
});

export const ButtonDark = style({
  "@media": {
    "(hover: hover)": {
      ":hover": {
        boxShadow: globalParams.shadowDarkSmallFloat,
        transform: globalParams.float,
      },
      ":active": {
        boxShadow: globalParams.shadowDarkSmall,
        transform: `none`,
      },
    },
    "(hover: none)": {
      boxShadow: globalParams.shadowDarkSmallFloat,
      ":active": {
        boxShadow: globalParams.shadowDarkSmall,
        transform: globalParams.sink,
      },
    },
  },
});

export const Title = style({
  //alignment
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  //position
  width: "100%",
  height: "100%",
});

export const ButtonPushIn = style({
  //alignment
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  //position
  width: "90%",
  height: "3.0rem",
  //style
  fontFamily: `inherit`,
  border: `none`,
  borderRadius: globalParams.borderRadius,
  boxShadow: globalParams.shadowLightSmallFloat,
  "@media": {
    "(hover: hover)": {
      boxShadow: `none`,
      ":hover": {
        boxShadow: globalParams.shadowLightSmall,
        transform: globalParams.float,
      },
      ":active": {
        boxShadow: globalParams.shadowLightSmallInDeep,
        transform: globalParams.sink,
      },
    },
  },
  color: `inherit`,
  backgroundColor: `inherit`,
  textDecorationLine: "none",
  cursor: `pointer`,
  //transition
  transition: `box-shadow ${globalParams.time}, transform ${globalParams.time}`,
});

export const ButtonPushInDark = style({
  boxShadow: globalParams.shadowDarkSmallFloat,
  "@media": {
    "(hover: hover)": {
      boxShadow: `none`,
      ":hover": {
        boxShadow: globalParams.shadowDarkSmall,
        transform: globalParams.float,
      },
      ":active": {
        boxShadow: globalParams.shadowDarkSmallInDeep,
        transform: globalParams.sink,
      },
    },
  },
});

export const Active = style({
  boxShadow: globalParams.shadowLightSmallIn,
  ":active": {
    boxShadow: globalParams.shadowLightSmallInDeep,
  },
  "@media": {
    "(hover: hover)": {
      boxShadow: globalParams.shadowLightSmallIn,
      ":active": {
        boxShadow: globalParams.shadowLightSmallIn,
        transform: globalParams.sink,
      },
    },
  },
});

export const ActiveDark = style({
  boxShadow: globalParams.shadowDarkSmallIn,
  ":active": {
    boxShadow: globalParams.shadowDarkSmallInDeep,
  },
  "@media": {
    "(hover: hover)": {
      boxShadow: globalParams.shadowDarkSmallIn,
      ":hover": {
        boxShadow: globalParams.shadowDarkSmallIn,
      },
      ":active": {
        boxShadow: globalParams.shadowDarkSmallInDeep,
        transform: globalParams.sink,
      },
    },
  },
});

export const PageSelectorWrapper = style({
  width: `100%`,
  //alignment
  display: `flex`,
  justifyContent: `center`,
  alignItems: `center`,
});
