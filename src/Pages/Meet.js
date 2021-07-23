import { makeStyles, createTheme } from '@material-ui/core/styles';
import coin from '../img/coin.jpg';
import MeetJoey from '../Components/MeetJoey/MeetJoey';
import JoeyIframe from '../Components/JoeyIframe/JoeyIframe';

const theme = createTheme();

const useStyles = makeStyles({
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
});

function Meet() {
	const classes = useStyles();

	return (
		<div className={classes.meetContainer}>
      <MeetJoey />
      <JoeyIframe />
		</div>
	);
}

export default Meet;
