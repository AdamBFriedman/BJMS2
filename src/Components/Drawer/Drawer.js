import React from "react";
import { Link } from "react-router-dom";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import Divider from "@material-ui/core/Divider";
import List from "@material-ui/core/List";
import { GiMagicHat } from "react-icons/gi";
import SocialMedia from "../SocialMedia/SocialMedia";

const drawerWidth = "30%";

const useStyles = makeStyles((theme) => ({
  drawerPaper: {
    background: `linear-gradient(to left, ${theme.palette.primary.main}, ${theme.palette.grey.main})`,
    width: drawerWidth,
    margin: theme.spacing(0, "auto"),
  },
  icon: {
    margin: theme.spacing(2),
    padding: 0,
    color: theme.palette.secondary.main,
  },
  menuBar: {
    textAlign: "center",
  },
  menuLink: {
    textDecoration: "none",
    color: theme.palette.secondary.main,
    fontWeight: 900,
  },
  menuItem: {
    padding: theme.spacing(3, 0),
  },
}));

export const CustomDrawer = ({ onClose, mobileOpen }) => {
  const classes = useStyles();
  const theme = useTheme();

  return (
    <Drawer
      variant="temporary"
      anchor={theme.direction === "rtl" ? "right" : "left"}
      open={mobileOpen}
      onClose={onClose}
      classes={{
        paper: classes.drawerPaper,
      }}
      ModalProps={{
        keepMounted: true, // Better open performance on mobile.
      }}
    >
      <div className={classes.menuBar}>
        <GiMagicHat size={50} className={classes.icon} />
        <Divider />
        <Link to="/" className={classes.menuLink}>
          <List className={classes.menuItem}>Home</List>
        </Link>
        <Divider />
        <Link to="/meet" className={classes.menuLink}>
          <List className={classes.menuItem}>Meet Joey</List>
        </Link>
        <Divider />
        <Link to="/services" className={classes.menuLink}>
          <List className={classes.menuItem}>Services</List>
        </Link>
        <Divider />
        <Link to="/contact" className={classes.menuLink}>
          <List className={classes.menuItem}>Contact</List>
        </Link>
        <Divider />
        <SocialMedia />
      </div>
    </Drawer>
  );
};

export default CustomDrawer;
