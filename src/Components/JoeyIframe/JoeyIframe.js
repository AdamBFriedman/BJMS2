import React from 'react';
import { makeStyles, createTheme } from '@material-ui/core/styles';
import { useMediaQuery } from '@material-ui/core';


const theme = createTheme();

const useStyles = makeStyles({
    iframe: {
		[theme.breakpoints.down('md')]: {
			marginBottom: '10px',
		},
    }
});
export const JoeyIframe = () => {
	const classes = useStyles();
	const isXLDesktop = useMediaQuery(theme.breakpoints.up('xl'));
	const isTabletOrHigher = useMediaQuery(theme.breakpoints.up('sm'));
	const isMobile = useMediaQuery(theme.breakpoints.down('xs'));

	return (
		<iframe
				width={isXLDesktop ? 1200 : isTabletOrHigher ? 600 : isMobile ? 300 : 300}
				height={isXLDesktop ? 700 : isTabletOrHigher ? 400 : isMobile ? 200 : 200}
				title="Joey's Video"
				src="https://www.youtube.com/embed/PehOTBiJx6o"
				frameborder="0"
				allowfullscreen
				className={classes.iframe}
			></iframe>
	);
};

export default JoeyIframe;
