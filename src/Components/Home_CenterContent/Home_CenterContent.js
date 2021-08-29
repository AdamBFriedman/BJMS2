import { makeStyles, useTheme } from "@material-ui/core/styles";
import { useMediaQuery } from "@material-ui/core";
import SwingingFrame from "../SwingingFrame/SwingingFrame";
import TitleBJMS from "./Title_BJMS";

const useStyles = makeStyles((theme) => ({
  "@keyframes swirl-in": {
    "0%": {
      WebkitTransform: "rotate(-540deg) scale(0)",
      transform: "rotate(-540deg) scale(0)",
      opacity: 0,
    },
    "100%:": {
      WebkitTransform: "rotate(0) scale(1)",
      transform: "rotate(0) scale(1)",
      opacity: 1,
    },
  },
  centerContent: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    width: "80%",
    margin: theme.spacing(0, "auto"),
    transform: "translateY(-150%)",
    [theme.breakpoints.up("xl")]: {
      transform: "translateY(-120%)",
    },
    [theme.breakpoints.down("xs")]: {
      width: "100vw",
      transform: "translateY(50%)",
    },
  },
  animated_H2: {
    fontFamily: "'Playfair Display', sans-serif",
    fontSize: "1.6rem",
    textTransform: "uppercase",
    letterSpacing: 1,
    background: theme.palette.primary.main,
    textShadow: `-2px -2px ${theme.palette.secondary.main}`,
    backgroundRepeat: "no-repeat",
    animation: "$swirl-in 2s 1s ease-out both",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "rgba(255,255,255,.01)",
    [theme.breakpoints.up("xl")]: {
      fontSize: "4em",
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: "1.4em",
    },
  },
}));
export const Title = () => {
  const classes = useStyles();
  const theme = useTheme();
  const isDesktopOrLarger = useMediaQuery(theme.breakpoints.up("lg"));

  return (
    <div className={classes.centerContent}>
      <TitleBJMS />
      <h2 className={classes.animated_H2}>Family Entertainment Specialist</h2>
      {isDesktopOrLarger ? null : <SwingingFrame />}
    </div>
  );
};

export default Title;
