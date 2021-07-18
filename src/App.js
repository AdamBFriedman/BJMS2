import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { makeStyles, createTheme } from '@material-ui/core/styles';
import Home from './Pages/Home';
import Meet from './Pages/Meet';
import Services from './Pages/Services';
import Contact from './Pages/Contact';
import { AppBar, Toolbar, CssBaseline } from '@material-ui/core';
import './App.css';
const theme = createTheme();

const useStyles = makeStyles({
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
		transition: ".3s"
	  }
	},
	appbar: { background: 'transparent', boxShadow: 'none'}
});

function App() {
	const classes = useStyles();
	return (
		<Router>
			<div>
				<CssBaseline />
				<AppBar position="sticky" className={classes.appbar}>
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
