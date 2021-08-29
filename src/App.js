import { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { createBrowserHistory } from "history";
import { ThemeProvider } from "@material-ui/core/styles";
import customTheme from "./theme";
import Home from "./Pages/Home";
import Meet from "./Pages/Meet";
import Services from "./Pages/Services";
import Contact from "./Pages/Contact";
import CssBaseline from "@material-ui/core/CssBaseline";
import "./App.css";
import CustomAppBar from "./Components/AppBar/AppBar";
import CustomDrawer from "./Components/Drawer/Drawer";

function App() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const history = createBrowserHistory();

  return (
    <Router history={history}>
      <ThemeProvider theme={customTheme}>
        <CssBaseline />
        <CustomAppBar handleClick={handleDrawerToggle} />
        <CustomDrawer onClose={handleDrawerToggle} mobileOpen={mobileOpen} />
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
