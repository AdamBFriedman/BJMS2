import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Home from "./Pages/Home";
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
            <h1>Meet Joey</h1>
          </Route>
          <Route path="/services">
            <h1>Services</h1>
          </Route>
          <Route path="/contact">
            <h1>Contact</h1>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
