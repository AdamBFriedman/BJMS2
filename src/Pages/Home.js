import React from 'react';
import { makeStyles, createTheme } from '@material-ui/core/styles';
import 'font-awesome/css/font-awesome.min.css';
import { FaFacebook, FaYoutube, FaTwitter, FaInstagram } from 'react-icons/fa';
import suit from '../img/suit.jpg'

const theme = createTheme();

const useStyles = makeStyles({
	"@keyframes jump": {
		"0%": {
			transform: "translateY(0px) rotate(0deg)"
		},
		"40%": {
			transform: "translateY(0px) rotate(0deg)"
		},
		"50%": {
			transform: "translateY(-100px) rotate(180deg)"
		},
		"60%": {
			transform: "translateY(0px) rotate(360deg)"
		},
		"100%": {
			transform: "translateY(0px) rotate(360deg)"
		}
	},
	"@keyframes swirl-in": {
"0%": {
			WebkitTransform: "rotate(-540deg) scale(0)",
					transform: "rotate(-540deg) scale(0)",
			opacity: 0,
		  },
		  "100%:": {
			WebkitTransform: "rotate(0) scale(1)",
					transform: "rotate(0) scale(1)",
			opacity: 1,
		  }
	  },
	  homeWrapper: {
		fontFamily: "sans-serif",
		textAlign: "center",
		backgroundImage: `url(${suit})`,
		backgroundRepeat: "no-repeat",
		backgroundSize: "cover",
		height: '100vh !important',
		// position: 'absolute',
		// top: 0,
		// right: 0,
		// bottom: 0,
		// left: 0,
		[theme.breakpoints.down('sm')]: {
			backgroundPosition: "center",

			// backgroundSize: "contain",
		}
	},
	move: {
		display: 'flex',
		flexDirection: 'column',
		// justifyContent: 'center',
		// alignItems: 'center',
		margin: theme.spacing(0, 4),
		// width: '30vw',
		// height: '90vh'
	},
	animated_H1: {
		fontFamily: "'PT Serif', sans-serif",
		fontSize: "3em",
		textShadow: "0 5px 15px rgba(0,0,0,.3)",
		textTransform: "uppercase",
		lineHeight: "3.5",
		letterSpacing: theme.spacing(2)
	},
	animated_H1_span: {
		position: "relative",
	display: "inline-block",
	background: "linear-gradient(to left,#fceabb,#f8b500)",
	backgroundRepeat: "no-repeat",
	WebkitBackgroundClip: "text",
	WebkitTextFillColor: "rgba(255,255,255,.01)",
	"&:nth-child(1)": {
		animation: "$jump 3s"
	},
	"&:nth-child(2)": {
		animation: "$jump 3s .1s",
	},
	"&:nth-child(3)": {
		animation: "$jump 3s .2s",
	},
	"&:nth-child(4)": {
		animation: "$jump 3s .3s",
	},
	"&:nth-child(5)": {
		animation: "$jump 3s .4s",
	},
	"&:nth-child(6)": {
		animation: "$jump 3s .5s",
	},
	"&:nth-child(7)": {
		animation: "$jump 3s .6s",
	},
	"&:nth-child(8)": {
		animation: "$jump 3s .7s",
	},
	"&:nth-child(9)": {
		animation: "$jump 3s .8s",
	},
	"&:nth-child(10)": {
		animation: "$jump 3s .9s",
	},
	"&:nth-child(11)": {
		animation: "$jump 3s 1s",
	},
	"&:nth-child(12)": {
		animation: "$jump 3s 1.1s",
	},
	"&:nth-child(13)": {
		animation: "$jump 3s 1.2s",
	},
	"&:nth-child(14)": {
		animation: "$jump 3s 1.3s",
	},
	"&:nth-child(15)": {
		animation: "$jump 3s 1.4s",
	},
	"&:nth-child(16)": {
		animation: "$jump 3s 1.5s",
	},
	"&:nth-child(17)": {
		animation: "$jump 3s 1.6s",
	}
	},
	animated_H2: {
		fontFamily: "'Playfair Display', sans-serif",
		fontSize: "1.6rem",
		textTransform: "uppercase",
		letterSpacing: 1,
		background: "linear-gradient(to left,#bdc3c7, #f8b500, #2c3e50)",
		backgroundRepeat: "no-repeat",
		animation: "$swirl-in 2s 1s ease-out both",
		WebkitBackgroundClip: "text",
		WebkitTextFillColor: "rgba(255,255,255,.01)",
	},
	list: {
		display: "flex",
		flexDirection: "column",
		listStyleType: "none",
		margin: 0,
	},
	listItem: {
		width: "60px",
		height: "60px",
		textAlign: "center",
		lineHeight: "60px",
		fontSize: "35px",
		borderRadius: "50%",
		background: "black",
		position: "relative",
		"&:hover": {
		  transform: "translateX(20px)",
	  	  transition: ".3s",
		}
	},
	icon: {
		color: "#fff",
		position: "absolute",
   top: "50%",
   left: "50%",
   transform: "translate(-50%, -50%)"
	},
	socialMedia: {
		// transform: "translateY(50vh)",
		[theme.breakpoints.down('sm')]: {
			transform: "none",
		}
		// display: "flex",
		// justifyContent: "center",
		// alignItems: "center",
		// margin: 0,
		// padding: 0
	},
	facebook: {
		background: "#4267b2",
		marginTop: "25px",
		marginBottom: "25px"
	},
	linkedin: {
		background: "#0077b5",
		marginTop: "25px",
		marginBottom: "25px"
	},
	youtube: {
		background: "#ED3833",
		marginTop: "25px",
		marginBottom: "25px",
	},
	instagram: {
		background: "radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%, #d6249f 60%, #285AEB 90%)",
		marginTop: "25px",
		marginBottom: "25px"
	}
});

export const Home = () => {
	const classes = useStyles();

	return <div className={classes.homeWrapper}>
		<div className={classes.socialMedia}>
  <ul className={classes.list}>
  <li className={`${classes.listItem} ${classes.facebook}`}><a href="https://www.facebook.com/joeydp8trow/" target="_blank" rel="noreferrer"><FaFacebook className={classes.icon} /> </a></li>
      <li className={`${classes.listItem} ${classes.youtube}`}><a href="https://www.youtube.com/channel/UC4ePL-afZ7oPyiW075k0AJA" target="_blank" rel="noreferrer"><FaYoutube className={classes.icon} /> </a></li>
      <li className={`${classes.listItem} ${classes.linkedin}`}><a href="https://www.linkedin.com/in/joseph-dipietro-aa398b171/" target="_blank" rel="noreferrer"><FaTwitter className={classes.icon} /></a></li>
      <li className={`${classes.listItem} ${classes.instagram}`}><a href="https://www.instagram.com/bigjoeymagicshowy/" target="_blank" rel="noreferrer"><FaInstagram className={classes.icon} /> </a></li>
  </ul>
</div>
	<div className={classes.move}>
    
    <h1 className={classes.animated_H1}>
        <span className={classes.animated_H1_span}>B</span>
        <span className={classes.animated_H1_span}>I</span>
        <span className={classes.animated_H1_span}>G</span> 
        <span className={classes.animated_H1_span}>J</span>
        <span className={classes.animated_H1_span}>O</span>
        <span className={classes.animated_H1_span}>E</span>
        <span className={classes.animated_H1_span}>Y</span> 
        <span className={classes.animated_H1_span}>M</span>
        <span className={classes.animated_H1_span}>A</span>
        <span className={classes.animated_H1_span}>G</span>
        <span className={classes.animated_H1_span}>I</span>
        <span className={classes.animated_H1_span}>C</span> 
        <span className={classes.animated_H1_span}>S</span>
        <span className={classes.animated_H1_span}>H</span>
        <span className={classes.animated_H1_span}>O</span>
        <span className={classes.animated_H1_span}>W</span>
        <span className={classes.animated_H1_span}>Y</span>
    </h1>

    <h2 className={classes.animated_H2}>Family Entertainment Specialist</h2>
  </div>

  
	</div>;
};

export default Home;