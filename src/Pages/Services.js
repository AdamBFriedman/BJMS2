import { makeStyles, createTheme } from '@material-ui/core/styles';
import smoke from '../img/smoke.jpg';

const theme = createTheme();

const useStyles = makeStyles({
	servicesContainer: {
		fontFamily: 'Roboto, sans-serif',
		backgroundImage: `url(${smoke})`,
    backgroundPosition: 'center',
		backgroundSize: 'cover',
		backgroundRepeat: 'no-repeat',
		height: '100vh',
		display: 'flex',
		justifyContent: 'space-around',
		alignItems: 'center',
		// [theme.breakpoints.down('md')]: {
		// 	flexDirection: 'column',
		// },
	},
});

function Services() {
	const classes = useStyles();

	return (
		<div className={classes.servicesContainer}>

		</div>
	);
}

export default Services;