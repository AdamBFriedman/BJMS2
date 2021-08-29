import React from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import { useMediaQuery } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  iframe: {
    border: `3px solid ${theme.palette.primary.main}`,
    [theme.breakpoints.down("md")]: {
      marginBottom: "10px",
    },
  },
}));
export const JoeyIframe = () => {
  const classes = useStyles();
  const theme = useTheme();
  const isXLDesktop = useMediaQuery(theme.breakpoints.up("xl"));
  const isTabletOrHigher = useMediaQuery(theme.breakpoints.up("sm"));
  const isMobile = useMediaQuery(theme.breakpoints.down("xs"));

  return (
    <iframe
      width={isXLDesktop ? 1200 : isTabletOrHigher ? 600 : isMobile ? 300 : 300}
      height={isXLDesktop ? 700 : isTabletOrHigher ? 400 : isMobile ? 200 : 200}
      title="Joey's Video"
      src="https://www.youtube.com/embed/PehOTBiJx6o"
      allowfullscreen
      className={classes.iframe}
    ></iframe>
  );
};

export default JoeyIframe;
