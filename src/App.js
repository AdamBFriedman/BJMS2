import { useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { createBrowserHistory } from "history";
import { makeStyles, ThemeProvider } from "@material-ui/core/styles";
import customTheme from './theme'
import Home from "./Pages/Home";
import Meet from "./Pages/Meet";
import Services from "./Pages/Services";
import Contact from "./Pages/Contact";
import {
  CssBaseline,
  Drawer,
  Divider,
  List,
} from "@material-ui/core";
import "./App.css";
import { GiMagicHat } from "react-icons/gi";
import SocialMedia from "./Components/SocialMedia/SocialMedia";
import CustomAppBar from './Components/AppBar/AppBar'

const drawerWidth = "30%";

const useStyles = makeStyles((customTheme) => ({
  link: {
    margin: customTheme.spacing(2),
    border: "2px solid #FFD700",
    background: "linear-gradient(to left,#bdc3c7,#2c3e50)",
    borderRadius: 5,
    fontWeight: "bold",
    textDecoration: "none",
    textTransform: "uppercase",
    textShadow: "0 5px 15px rgba(0,0,0,.3)",
    padding: customTheme.spacing(2, 4),
    letterSpacing: 1.5,
    color: customTheme.palette.secondary.main,
    "&:hover": {
      border: `2px solid ${customTheme.palette.primary.main}`,
      transform: "translateY(20px)",
      background: "linear-gradient(to left,#bdc3c7,#2c3e50)",
      transition: ".3s",
    },
    [customTheme.breakpoints.up("xl")]: {
      padding: customTheme.spacing(4, 8),
      fontSize: "1.5em",
    },
  },
  appbar: { background: "transparent", boxShadow: "none" },
  menuButton: {
    color: "#FFD700",
  },
  toolbar: customTheme.mixins.toolbar,
  drawerPaper: {
    background: "linear-gradient(to left,#bdc3c7,#2c3e50)",
    width: drawerWidth,
    margin: customTheme.spacing(0, "auto"),
  },
  icon: {
    margin: customTheme.spacing(2),
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
    padding: customTheme.spacing(3, 0),
  },
}));

function App() {
  const classes = useStyles();
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleClick = () => {
    setMobileOpen(!mobileOpen);
  };

  const history = createBrowserHistory();

  return (
    <Router history={history}>
      <ThemeProvider theme={customTheme}>
        <CssBaseline />
        <CustomAppBar handleClick={handleClick} />
        <Drawer
          variant="temporary"
          anchor={customTheme.direction === "rtl" ? "right" : "left"}
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
            <ThemeProvider theme={customTheme}>
              <Home />
            </ThemeProvider>
          </Route>
          <Route path="/meet">
            <ThemeProvider theme={customTheme}>
              <Meet />
            </ThemeProvider>
          </Route>
          <Route path="/services">
            <ThemeProvider theme={customTheme}>
              <Services />
            </ThemeProvider>
          </Route>
          <Route path="/contact">
            <ThemeProvider theme={customTheme}>
              <Contact />
            </ThemeProvider>
          </Route>
        </Switch>
      </ThemeProvider>
    </Router>
  );
}

export default App;
