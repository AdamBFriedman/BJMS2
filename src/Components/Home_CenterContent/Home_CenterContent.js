import { makeStyles, useTheme } from "@material-ui/core/styles";
import { useMediaQuery } from "@material-ui/core";
import SwingingFrame from "../SwingingFrame/SwingingFrame";
import TitleBJMS from "./Title_BJMS";
import SubtitleFES from "./Subtitle_FES";

const useStyles = makeStyles((theme) => ({
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
}));
export const Title = () => {
  const classes = useStyles();
  const theme = useTheme();
  const isDesktopOrLarger = useMediaQuery(theme.breakpoints.up("lg"));

  return (
    <div className={classes.centerContent}>
      <TitleBJMS />
      <SubtitleFES />
      {isDesktopOrLarger ? null : <SwingingFrame />}
    </div>
  );
};

export default Title;
