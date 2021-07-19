import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

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
	move: {
		position: "absolute",
		transform: "translate(0,100px)"
	},
	animated_H1: {
		fontFamily: "'PT Serif', sans-serif",
		fontSize: "3em",
		textShadow: "0 5px 15px rgba(0,0,0,.3)",
		textTransform: "uppercase",
		lineHeight: "3.5",
		marginRight: "125px",
		marginLeft: "10px",
		position: "relative",
		transform: "translate(120px, 270px)"
	},
	animated_H1_span: {
		position: "relative",
	display: "inline-block",
	background: "linear-gradient(to left,#fceabb,#f8b500)",
	backgroundRepeat: "no-repeat",
	animation: "nav 2.25s linear",
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
	},
	}
});

export const Home = () => {
	const classes = useStyles();

	return <>
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

    <h2 class="h2main">Family Entertainment Specialist</h2>
  </div>
	</>;
};

export default Home;
