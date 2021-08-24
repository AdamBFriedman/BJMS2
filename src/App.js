import { useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { createBrowserHistory } from "history";
import { makeStyles, useTheme, ThemeProvider } from "@material-ui/core/styles";
import Home from "./Pages/Home";
import Meet from "./Pages/Meet";
import Services from "./Pages/Services";
import Contact from "./Pages/Contact";
import {
  AppBar,
  Toolbar,
  CssBaseline,
  useMediaQuery,
  Drawer,
  Divider,
  List,
} from "@material-ui/core";
import "./App.css";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import { GiMagicHat } from "react-icons/gi";
import SocialMedia from "./Components/SocialMedia/SocialMedia";

const drawerWidth = "30%";

const useStyles = makeStyles((theme) => ({
  link: {
    margin: theme.spacing(2),
    border: "2px solid #FFD700",
    background: "linear-gradient(to left,#bdc3c7,#2c3e50)",
    borderRadius: 5,
    fontWeight: "bold",
    textDecoration: "none",
    textTransform: "uppercase",
    textShadow: "0 5px 15px rgba(0,0,0,.3)",
    padding: theme.spacing(2, 4),
    letterSpacing: 1.5,
    color: "#FFD700",
    "&:hover": {
      border: "2px solid #3cacc8",
      transform: "translateY(20px)",
      background: "linear-gradient(to left,#bdc3c7,#2c3e50)",
      transition: ".3s",
    },
    [theme.breakpoints.up("xl")]: {
      padding: theme.spacing(4, 8),
      fontSize: "1.5em",
    },
  },
  appbar: { background: "transparent", boxShadow: "none" },
  menuButton: {
    color: "#FFD700",
  },
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    background: "linear-gradient(to left,#bdc3c7,#2c3e50)",
    width: drawerWidth,
    margin: theme.spacing(0, "auto"),
  },
  icon: {
    margin: theme.spacing(2),
    padding: 0,
    color: "#FFD700",
  },
  menuBar: {
    textAlign: "center",
  },
  menuLink: {
    textDecoration: "none",
    color: "#FFD700",
    fontWeight: 900,
  },
  menuItem: {
    padding: theme.spacing(3, 0),
  },
}));

function App() {
  const theme = useTheme();
  const classes = useStyles();
  const isMobileOrSmaller = useMediaQuery(theme.breakpoints.down("xs"));
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleClick = () => {
    setMobileOpen(!mobileOpen);
  };

  const history = createBrowserHistory();

  return (
    <Router history={history}>
      <div>
        <CssBaseline />
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
        <Drawer
          variant="temporary"
          anchor={theme.direction === "rtl" ? "right" : "left"}
          open={mobileOpen}
          onClose={handleClick}
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

        <Switch>
          <Route exact path="/">
            <ThemeProvider theme={theme}>
              <Home />
            </ThemeProvider>
          </Route>
          <Route path="/meet">
            <ThemeProvider theme={theme}>
              <Meet />
            </ThemeProvider>
          </Route>
          <Route path="/services">
            <ThemeProvider theme={theme}>
              <Services />
            </ThemeProvider>
          </Route>
          <Route path="/contact">
            <ThemeProvider theme={theme}>
              <Contact />
            </ThemeProvider>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
