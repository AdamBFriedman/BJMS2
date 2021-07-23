import { makeStyles, createTheme } from '@material-ui/core/styles';
import { useMediaQuery } from '@material-ui/core';
import coin from '../img/coin.jpg';

const theme = createTheme();

const useStyles = makeStyles({
	'@keyframes tracking-in-expand-fwd-bottom': {
		'0%': {
			letterSpacing: '-0.5em',
			WebkitTransform: 'translateZ(-700px) translateY(500px)',
			transform: 'translateZ(-700px) translateY(500px)',
			opacity: '0',
		},
		'40%': {
			opacity: 0.6,
		},
		'100%': {
			WebkitTransform: 'translateZ(0) translateY(0)',
			transform: 'translateZ(0) translateY(0)',
			opacity: 1,
		},
	},
	meetContainer: {
		fontFamily: 'Roboto, sans-serif',
		backgroundImage: `url(${coin})`,
		backgroundSize: 'cover',
		backgroundRepeat: 'no-repeat',
		height: '100vh',
		display: 'flex',
		justifyContent: 'space-around',
		alignItems: 'center',
		[theme.breakpoints.down('md')]: {
			flexDirection: 'column',
		},
	},

	meetJoeyWrapper: {
		background: 'linear-gradient(to bottom left,#bdc3c7,#2c3e50, #3cacc8)',
		boxShadow: '0 0 20px 0 rgba(0, 0, 0, 0.2), 0 5px 5px 0 rgba(0, 0, 0, 0.24)',
		border: '1.5px solid #3cacc8',
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		width: '40%',
		height: '70%',
		[theme.breakpoints.down('md')]: {
			width: '90%',
			height: '40%',
			margin: 'auto',
			transform: 'translateY(30px)',
		},
		[theme.breakpoints.down('xs')]: {
			transform: 'translateY(0)',
			height: '55%',
		},
	},

	h1: {
		fontSize: '5.5em',
		fontFamily: "'Open Sans Condensed', sans-serif",
		display: 'inline-block',
		background: 'linear-gradient(to top left,#bdc3c7, #f8b500, #bdc3c7)',
		backgroundRepeat: 'no-repeat',
		WebkitBackgroundClip: 'text',
		WebkitTextFillColor: 'rgba(255,255,255,.01)',
		animation: '$tracking-in-expand-fwd-bottom 0.8s cubic-bezier(0.215, 0.610, 0.355, 1.000) both',
		margin: theme.spacing(1, 0),
		[theme.breakpoints.up('xl')]: {
			margin: theme.spacing(7, 0),
		},
		[theme.breakpoints.down('md')]: {
			margin: 0,
		},
		[theme.breakpoints.down('sm')]: {
			fontSize: '3.5em',
		},
	},
	p: {
		fontFamily: 'Open Sans Condensed, sans-serif',
		textAlign: 'left',
		color: '#fff',
		paddingLeft: '25px',
		paddingRight: '25px',
		[theme.breakpoints.up('xl')]: {
			fontSize: '2.2em',
			lineHeight: '2em',
		},
		[theme.breakpoints.down('lg')]: {
			fontSize: '1.7em',
		},
		[theme.breakpoints.down('md')]: {
			fontSize: '1.4em',
		},
		[theme.breakpoints.down('sm')]: {
			fontSize: '1.3em',
		},
		[theme.breakpoints.down('xs')]: {
			fontSize: '1em',
		},

		'&:p:first-letter': {
			float: 'left',
			fontSize: '92px',
			lineHeight: '1',
			fontWeight: 'bold',
			color: '#3cacc8',
			marginRight: '.3rem',
		},
	},
	iframe: {
		[theme.breakpoints.down('md')]: {
			marginBottom: '10px',
		},
	},
});

function Meet() {
	const classes = useStyles();
	const isXLDesktop = useMediaQuery(theme.breakpoints.up('xl'));
	const isTabletOrHigher = useMediaQuery(theme.breakpoints.up('sm'));
	const isMobile = useMediaQuery(theme.breakpoints.down('xs'));

	return (
		<div className={classes.meetContainer}>
			<div className={classes.meetJoeyWrapper}>
				<h1 className={classes.h1}>Meet Joey</h1>

				<p className={classes.p}>
					Big Joey Magic Showy is an award-winning magician specializing in close-up magic. Whether it's his
					expert sleight of hand or his jaw-dropping illusions, the audience is always left stunned. From a
					young age, he has been drawn to the art of prestidigitation (fancy word for performing magic) - and
					has continued to perfect his craft over the last 25 years. His unique style of fast-paced, comedic
					magic has been enjoyed by all - including celebrities and Fortune 500 companies. As a professional
					magician and mentalist, his ability to read an audience is as impeccable as his ability to read
					their minds.
				</p>
			</div>

			<iframe
				width={isXLDesktop ? 1200 : isTabletOrHigher ? 600 : isMobile ? 300 : 300}
				height={isXLDesktop ? 700 : isTabletOrHigher ? 400 : isMobile ? 200 : 200}
				title="Joey's Video"
				src="https://www.youtube.com/embed/PehOTBiJx6o"
				frameborder="0"
				allowfullscreen
				className={classes.iframe}
			></iframe>
		</div>
	);
}

export default Meet;
