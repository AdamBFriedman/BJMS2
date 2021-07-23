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
  servicesCard: {
    textAlign: 'center',
    background: 'linear-gradient(to bottom left,#bdc3c7,#2c3e50, #3cacc8)',
    width: '30%',
    height: '50%'
  }
});

function Services() {
	const classes = useStyles();

	return (
		<div className={classes.servicesContainer}>
      <div className={`${classes.servicesCard} ${classes.corporate}`}>
        Corporate
      </div>
      <div className={`${classes.servicesCard} ${classes.lessons}`}>
        Lessons
      </div>
      <div className={`${classes.servicesCard} ${classes.parties}`}>
        Parties
      </div>
		</div>
	);
}

export default Services;