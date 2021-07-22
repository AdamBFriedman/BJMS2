import React from 'react';
import { makeStyles, createTheme } from '@material-ui/core/styles';
import { FaFacebook, FaYoutube, FaTwitter, FaInstagram } from 'react-icons/fa';

const theme = createTheme();

const useStyles = makeStyles({
	list: {
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'flex-end',
		listStyleType: 'none',
		margin: theme.spacing(0, 3),
		padding: 0,
		transform: 'translateY(50%)',
	},
	listItem: {
		width: '60px',
		height: '60px',
		textAlign: 'center',
		lineHeight: '60px',
		fontSize: '35px',
		borderRadius: '50%',
		background: 'black',
		position: 'relative',
		'&:hover': {
			transform: 'translateX(20px)',
			transition: '.3s',
		},
	},
	icon: {
		color: '#fff',
		position: 'absolute',
		top: '50%',
		left: '50%',
		transform: 'translate(-50%, -50%)',
	},
	facebook: {
		background: '#4267b2',
		marginTop: '25px',
		marginBottom: '25px',
	},
	linkedin: {
		background: '#0077b5',
		marginTop: '25px',
		marginBottom: '25px',
	},
	youtube: {
		background: '#ED3833',
		marginTop: '25px',
		marginBottom: '25px',
	},
	instagram: {
		background:
			'radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%, #d6249f 60%, #285AEB 90%)',
		marginTop: '25px',
		marginBottom: '25px',
	},
});
export const SocialMedia = () => {
	const classes = useStyles();

	return (
		<ul className={classes.list}>
			<li className={`${classes.listItem} ${classes.facebook}`}>
				<a href="https://www.facebook.com/joeydp8trow/" target="_blank" rel="noreferrer">
					<FaFacebook className={classes.icon} />{' '}
				</a>
			</li>
			<li className={`${classes.listItem} ${classes.youtube}`}>
				<a href="https://www.youtube.com/channel/UC4ePL-afZ7oPyiW075k0AJA" target="_blank" rel="noreferrer">
					<FaYoutube className={classes.icon} />{' '}
				</a>
			</li>
			<li className={`${classes.listItem} ${classes.linkedin}`}>
				<a href="https://www.linkedin.com/in/joseph-dipietro-aa398b171/" target="_blank" rel="noreferrer">
					<FaTwitter className={classes.icon} />
				</a>
			</li>
			<li className={`${classes.listItem} ${classes.instagram}`}>
				<a href="https://www.instagram.com/bigjoeymagicshowy/" target="_blank" rel="noreferrer">
					<FaInstagram className={classes.icon} />{' '}
				</a>
			</li>
		</ul>
	);
};

export default SocialMedia;
