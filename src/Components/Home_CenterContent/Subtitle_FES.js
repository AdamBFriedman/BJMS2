import { makeStyles } from "@material-ui/core/styles";

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
export const SubtitleFES = () => {
  const classes = useStyles();

  return (
    <h2 className={classes.animated_H2}>Family Entertainment Specialist</h2>
  );
};

export default SubtitleFES;
