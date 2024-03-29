import React from 'react';
import { Link } from "react-router-dom";
import { makeStyles, useTheme } from '@material-ui/core/styles';
import {
    AppBar,
    Toolbar,
    useMediaQuery,
  } from "@material-ui/core";
  import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";

const useStyles = makeStyles(theme => ({
    link: {
        margin: theme.spacing(2),
        border: `2px solid ${theme.palette.secondary.main}`,
        background: `linear-gradient(to left, ${theme.palette.primary.main}, ${theme.palette.grey.main})`,
        borderRadius: 5,
        fontWeight: "bold",
        textDecoration: "none",
        textTransform: "uppercase",
        textShadow: "0 5px 15px rgba(0,0,0,.3)",
        padding: theme.spacing(2, 4),
        letterSpacing: 1.5,
        color: theme.palette.secondary.main,
        "&:hover": {
          border: `2px solid ${theme.palette.primary.main}`,
          color: theme.palette.primary.main,
          transform: "translateY(20px)",
          background: `linear-gradient(to left, ${theme.palette.grey.main}, ${theme.palette.secondary.main})`,
          transition: ".3s",
        },
        [theme.breakpoints.up("xl")]: {
          padding: theme.spacing(4, 8),
          fontSize: "1.5em",
        },
      },
      appbar: { background: "transparent", boxShadow: "none" },
      menuButton: {
        color: theme.palette.secondary.main,
      },
}));

export const CustomAppBar = ({handleClick}) => {
	const classes = useStyles();
    const theme = useTheme()
  const isMobileOrSmaller = useMediaQuery(theme.breakpoints.down("xs"));

	return (
		<AppBar className={classes.appbar}>
          <Toolbar>
            {isMobileOrSmaller ? (
              <IconButton
                onClick={handleClick}
                edge="start"
                className={classes.menuButton}
                color="inherit"
                aria-label="menu"
              >
                <MenuIcon />
              </IconButton>
            ) : (
              <>
                <Link className={classes.link} to="/">
                  Home
                </Link>
                <Link className={classes.link} to="/meet">
                  Meet Joey
                </Link>
                <Link className={classes.link} to="/services">
                  Services
                </Link>
                <Link className={classes.link} to="/contact">
                  Contact
                </Link>
              </>
            )}
          </Toolbar>
        </AppBar>
	);
};

export default CustomAppBar;