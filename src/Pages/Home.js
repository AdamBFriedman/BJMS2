import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { useMediaQuery } from '@material-ui/core';
import suit from '../img/suit.jpg';
import SwingingFrame from '../Components/SwingingFrame/SwingingFrame';
import SocialMedia from '../Components/SocialMedia/SocialMedia';
import CenterContent from '../Components/Home_CenterContent/Home_CenterContent';

const useStyles = makeStyles((theme) => ({
	'@keyframes jump': {
		'0%': {
			transform: 'translateY(0px) rotate(0deg)',
		},
		'40%': {
			transform: 'translateY(0px) rotate(0deg)',
		},
		'50%': {
			transform: 'translateY(-100px) rotate(180deg)',
		},
		'60%': {
			transform: 'translateY(0px) rotate(360deg)',
		},
		'100%': {
			transform: 'translateY(0px) rotate(360deg)',
		},
	},
	'@keyframes swirl-in': {
		'0%': {
			WebkitTransform: 'rotate(-540deg) scale(0)',
			transform: 'rotate(-540deg) scale(0)',
			opacity: 0,
		},
		'100%:': {
			WebkitTransform: 'rotate(0) scale(1)',
			transform: 'rotate(0) scale(1)',
			opacity: 1,
		},
	},
	homeWrapper: {
		fontFamily: 'sans-serif',
		textAlign: 'center',
		backgroundImage: `url(${suit})`,
		backgroundRepeat: 'no-repeat',
		backgroundSize: 'cover',
		height: '100vh',
		overflowY: 'hidden',
		[theme.breakpoints.down('sm')]: {
			backgroundPosition: 'center',
		},
	},
}));

export const Home = () => {
	const classes = useStyles();
	const theme = useTheme();
	const isDesktopOrLarger = useMediaQuery(theme.breakpoints.up('lg'));
	const isMobileOrSmaller = useMediaQuery(theme.breakpoints.down('xs'));

	return (
		<div className={classes.homeWrapper}>
			{isMobileOrSmaller ? null : <SocialMedia />}
			{isDesktopOrLarger ? <SwingingFrame /> : null}
			<CenterContent />
		</div>
	);
};

export default Home;
