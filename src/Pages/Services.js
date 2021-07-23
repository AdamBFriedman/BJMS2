import { makeStyles, createTheme } from '@material-ui/core/styles';
import smoke from '../img/smoke.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBuilding, faBirthdayCake, faChalkboardTeacher } from '@fortawesome/free-solid-svg-icons'

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
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    background: 'linear-gradient(to bottom left,#bdc3c7,#2c3e50, #3cacc8)',
    width: '30%',
    height: '50%'
  },
  title: {
    display: 'flex',
    alignItems: 'flex-end'
  }
});

function Services() {
	const classes = useStyles();

	return (
		<div className={classes.servicesContainer}>
      <div className={`${classes.servicesCard} ${classes.corporate}`}>
      <p>Looking for breathtaking entertainment to make your next event truly memorable? As an experienced
				corporate magician and mentalist, BJMS knows how to strike that perfect balance of show-stopping feats
				accompanied with friendly humor and custom illusions. Whether it’s in an office or banquet hall, BJMS
				offers "Strolling Entertainment" where he performs close-up magic to bring your guests together to help
				facilitate interaction in a uniquely captivating way.</p>
        <h1 className={classes.title}>Corporate</h1>
        <FontAwesomeIcon icon={faBuilding} />
      </div>
      <div className={`${classes.servicesCard} ${classes.lessons}`}>
      <p>
				Are you ready to learn magic? Big Joe offers private lessons that are hand-tailored to fit the student's
				age, skills, and most importantly - personality. All lessons include any materials that are needed
				(special decks, sponge balls, etc.). The lessons are one on one - but if you are interested in learning
				with a friend or two, we have special rates for that. Topics covered will include: Coins & Cards, Rings
				& Ropes, Presentation & Manipulation, Sleight of Hand, and everything in between.
			</p>
      <h1 className={classes.title}>Lessons</h1>

        <FontAwesomeIcon icon={faChalkboardTeacher} />
      </div>
      <div className={`${classes.servicesCard} ${classes.parties}`}>
      <p>
				You've booked the venue, ordered the food, and checked off the final guest list. You are now missing one
				thing: a performance guaranteed to create memories to last long after the final dessert plate has been
				cleared away. From birthdays and bar mitzvahs all the way to weddings and grand openings, prepare to
				hang off the edge of your seats in both laughter and suspense. These interactive shows are created to
				involve audience members and leave a lasting impression.
			</p>
      <h1 className={classes.title}>Parties</h1>
        <FontAwesomeIcon icon={faBirthdayCake} />
      </div>
		</div>
	);
}

export default Services;