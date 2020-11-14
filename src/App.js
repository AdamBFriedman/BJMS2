import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Home from "./Pages/Home";
import Meet from "./Pages/Meet";
import Services from "./Pages/Services";
import Contact from "./Pages/Contact";
import { AppBar, Toolbar, CssBaseline } from "@material-ui/core";
import "./App.css";

const useStyles = makeStyles({
  link: {
    color: "white",
    marginRight: "8px",
    textDecoration: "none",
  },
});

function App() {
  const classes = useStyles();
  return (
    <Router>
      <div>
        <CssBaseline />
        <AppBar position="sticky">
          <Toolbar>
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
          </Toolbar>
        </AppBar>

        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/meet">
            <Meet />
          </Route>
          <Route path="/services">
            <Services />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
