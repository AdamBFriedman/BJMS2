import { useState } from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { Modal, Fade, Backdrop, useMediaQuery } from '@material-ui/core';
import smoke from '../img/smoke.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBuilding, faBirthdayCake, faChalkboardTeacher } from '@fortawesome/free-solid-svg-icons';

const useStyles = makeStyles(theme => ({
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
		[theme.breakpoints.down('xs')]: {
			flexDirection: 'column',
			justifyContent: 'center',
		},
	},
	servicesCard: {
		color: '#fff',
		textSlign: 'left',
		fontFamily: "'Open Sans Condensed', sans-serif",
		fontSize: '16px',
		letterSpacing: '1px',
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		flexDirection: 'column',
		background: 'linear-gradient(to bottom left,#bdc3c7,#2c3e50, #3cacc8)',
		cursor: 'pointer',
		border: '1.5px solid #3cacc8',
		width: '30%',
		height: '50%',
		[theme.breakpoints.down('xs')]: {
			width: '80%',
			height: '25%',
			'&:nth-child(2)': {
				margin: theme.spacing(3, 0),
			},
		},
	},
	title: {
		display: 'flex',
		alignItems: 'flex-end',
		fontSize: '4em',
		paddingBottom: '10px',
		fontFamily: "'Open Sans Condensed', sans-serif",
		background: 'linear-gradient(to top left,#bdc3c7, #f8b500, #bdc3c7) !important',
		WebkitBackgroundClip: 'text !important',
		WebkitTextFillColor: 'rgba(255,255,255,.01) !important',
		letterSpacing: '5px',
		[theme.breakpoints.up('xl')]: {
			fontSize: '5em',
		},
		[theme.breakpoints.down('md')]: {
			fontSize: '3em',
		},
		[theme.breakpoints.down('sm')]: {
			fontSize: '2em',
		},
	},
	icon: {
		width: '200px',
	},
	modal: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
	},
	paper: {
		backgroundColor: theme.palette.background.paper,
		border: '2px solid #BDC3C7',
		boxShadow: theme.shadows[5],
		padding: theme.spacing(2, 4, 3),
		width: '50%',
		height: '50%',
		[theme.breakpoints.down('xs')]: {
			width: '90%',
		},
	},
}));

function Services() {
	const classes = useStyles();
	const theme = useTheme();
	const isXLDesktop = useMediaQuery(theme.breakpoints.up('xl'));
	const isTabletOrHigher = useMediaQuery(theme.breakpoints.up('sm'));
	const isMobile = useMediaQuery(theme.breakpoints.down('xs'));
	const [openCorporate, setOpenCorporate] = useState(false);
	const [openLessons, setOpenLessons] = useState(false);
	const [openParties, setOpenParties] = useState(false);

	const handleOpenCorporate = () => {
		setOpenCorporate(true);
	};

	const handleCloseCorporate = () => {
		setOpenCorporate(false);
	};

	const handleOpenLessons = () => {
		setOpenLessons(true);
	};

	const handleCloseLessons = () => {
		setOpenLessons(false);
	};

	const handleOpenParties = () => {
		setOpenParties(true);
	};

	const handleCloseParties = () => {
		setOpenParties(false);
	};

	return (
		<div className={classes.servicesContainer}>
			<div className={`${classes.servicesCard} ${classes.corporate}`} onClick={handleOpenCorporate}>
				<h1 className={classes.title}>Corporate</h1>
				<FontAwesomeIcon
					size={isXLDesktop ? '10x' : isTabletOrHigher ? '6x' : isMobile ? '3x' : '3x'}
					icon={faBuilding}
				/>
			</div>
			<Modal
				className={classes.modal}
				open={openCorporate}
				onClose={handleCloseCorporate}
				closeAfterTransition
				BackdropComponent={Backdrop}
				BackdropProps={{
					timeout: 500,
				}}
			>
				<Fade in={openCorporate}>
					<div className={classes.paper}>
						<h2 id="transition-modal-title">Corporate</h2>
						<p id="transition-modal-description">
							Looking for breathtaking entertainment to make your next event truly memorable? As an
							experienced corporate magician and mentalist, BJMS knows how to strike that perfect balance
							of show-stopping feats accompanied with friendly humor and custom illusions. Whether it’s in
							an office or banquet hall, BJMS offers "Strolling Entertainment" where he performs close-up
							magic to bring your guests together to help facilitate interaction in a uniquely captivating
							way.
						</p>
					</div>
				</Fade>
			</Modal>

			<div className={`${classes.servicesCard} ${classes.lessons}`} onClick={handleOpenLessons}>
				<h1 className={classes.title}>Lessons</h1>

				<FontAwesomeIcon
					size={isXLDesktop ? '10x' : isTabletOrHigher ? '6x' : isMobile ? '3x' : '3x'}
					icon={faChalkboardTeacher}
				/>
			</div>
			<Modal
				className={classes.modal}
				open={openLessons}
				onClose={handleCloseLessons}
				closeAfterTransition
				BackdropComponent={Backdrop}
				BackdropProps={{
					timeout: 500,
				}}
			>
				<Fade in={openLessons}>
					<div className={classes.paper}>
						<h2 id="transition-modal-title">Lessons</h2>
						<p id="transition-modal-description">
							Are you ready to learn magic? Big Joe offers private lessons that are hand-tailored to fit
							the student's age, skills, and most importantly - personality. All lessons include any
							materials that are needed (special decks, sponge balls, etc.). The lessons are one on one -
							but if you are interested in learning with a friend or two, we have special rates for that.
							Topics covered will include: Coins & Cards, Rings & Ropes, Presentation & Manipulation,
							Sleight of Hand, and everything in between.
						</p>
					</div>
				</Fade>
			</Modal>

			<div className={`${classes.servicesCard} ${classes.parties}`} onClick={handleOpenParties}>
				<h1 className={classes.title}>Parties</h1>
				<FontAwesomeIcon
					size={isXLDesktop ? '10x' : isTabletOrHigher ? '6x' : isMobile ? '3x' : '3x'}
					className={classes.icon}
					icon={faBirthdayCake}
				/>
			</div>

			<Modal
				className={classes.modal}
				open={openParties}
				onClose={handleCloseParties}
				closeAfterTransition
				BackdropComponent={Backdrop}
				BackdropProps={{
					timeout: 500,
				}}
			>
				<Fade in={openParties}>
					<div className={classes.paper}>
						<h2 id="transition-modal-title">Parties</h2>
						<p id="transition-modal-description">
							You've booked the venue, ordered the food, and checked off the final guest list. You are now
							missing one thing: a performance guaranteed to create memories to last long after the final
							dessert plate has been cleared away. From birthdays and bar mitzvahs all the way to weddings
							and grand openings, prepare to hang off the edge of your seats in both laughter and
							suspense. These interactive shows are created to involve audience members and leave a
							lasting impression.
						</p>
					</div>
				</Fade>
			</Modal>
		</div>
	);
}

export default Services;
