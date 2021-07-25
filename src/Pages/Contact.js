import { makeStyles, createTheme } from '@material-ui/core/styles';
import stage from '../img/stage.jpg';

const theme = createTheme();

const useStyles = makeStyles({
	contactContainer: {
		fontFamily: 'Roboto, sans-serif',
		backgroundImage: `url(${stage})`,
		backgroundSize: 'cover',
		backgroundRepeat: 'no-repeat',
		height: '100vh',
		display: 'flex',
		justifyContent: 'space-around',
		alignItems: 'center',
		[theme.breakpoints.down('md')]: {
			backgroundPosition: 'center',
		},
	},
});

function Contact() {
	const classes = useStyles();

	return (
		<div className={classes.contactContainer}>

		</div>
	);
}

export default Contact;
