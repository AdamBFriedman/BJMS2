import React from 'react';
import { makeStyles, createTheme } from '@material-ui/core/styles';
import magic from '../../img/magic3.jpg';

const theme = createTheme();

const useStyles = makeStyles({
	'@keyframes swing': {
		'0%': { transform: 'rotate(3deg)' },
		'100%': { transform: 'rotate(-3deg)' },
	},
	'@keyframes cycle': {
		'0%': {
			top: '0px',
		},
		'4%': {
			top: '0px',
		},
		'	16%': {
			top: '0px',
			opacity: '1',
			zIndex: '0',
		},
		'	20%': {
			top: '325px',
			opacity: '0',
			zIndex: '0',
		},
		'	21%': {
			top: '-325px',
			opacity: '0',
			zIndex: '-1',
		},
		'	92%': {
			top: '-325px',
			opacity: '0',
			zIndex: '0',
		},
		'	96%': {
			top: '-325px',
			opacity: '0',
		},
		'100%': {
			top: '0px',
			opacity: '1',
		},
	},

	'@keyframes cycle2': {
		'0%': {
			top: '-325px',
			opacity: '0',
		},
		'	16%': {
			top: '-325px',
			opacity: '0',
		},
		'	20%': {
			top: '0px',
			opacity: '1',
		},
		'	24%': {
			top: '0px',
			opacity: '1',
		},
		'	36%': {
			top: '0px',
			opacity: '1',
			zIndex: '0',
		},
		'	40%': {
			top: '325px',
			opacity: '0',
			zIndex: '0',
		},
		'	41%': {
			top: '-325px',
			opacity: '0',
			zIndex: '-1',
		},
		'100%': {
			top: '-325px',
			opacity: '0',
			zIndex: '-1',
		},
	},

	'@keyframes cycle3': {
		'0%': {
			top: '-325px',
			opacity: '0',
		},
		'	36%': {
			top: '-325px',
			opacity: '0',
		},
		'	40%': {
			top: '0px',
			opacity: '1',
		},
		'	44%': {
			top: '0px',
			opacity: '1',
		},
		'	56%': {
			top: '0px',
			opacity: '1',
		},
		'	60%': {
			top: '325px',
			opacity: '0',
			zIndex: '0',
		},
		'	61%': {
			top: '-325px',
			opacity: '0',
			zIndex: '-1',
		},
		'100%': {
			top: '-325px',
			opacity: '0',
			zIndex: '-1',
		},
	},

	'@keyframes cycle4': {
		'0%': {
			top: '-325px',
			opacity: '0',
		},
		'	56%': {
			top: '-325px',
			opacity: '0',
		},
		'	60%': {
			top: '0px',
			opacity: '1',
		},
		'	64%': {
			top: '0px',
			opacity: '1',
		},
		'	76%': {
			top: '0px',
			opacity: '1',
			zIndex: '0',
		},
		'	80%': {
			top: '325px',
			opacity: '0',
			zIndex: '0',
		},
		'	81%': {
			top: '-325px',
			opacity: '0',
			zIndex: '-1',
		},
		'100%': {
			top: '-325px',
			opacity: '0',
			zIndex: '-1',
		},
	},

	'@keyframes cycle5': {
		'0%': {
			top: '-325px',
			opacity: '0',
		},
		'	76%': {
			top: '-325px',
			opacity: '0',
		},
		'	80%': {
			top: '0px',
			opacity: '1',
		},
		'	84%': {
			top: '0px',
			opacity: '1',
		},
		'	96%': {
			top: '0px',
			opacity: '1',
			zIndex: '0',
		},
		'100%': {
			top: '325px',
			opacity: '0',
			zIndex: '0',
		},
	},
	swing: {
        position: 'absolute',
        right: 10,
        top: 10,
		width: '325px',
		height: '400px',
		border: '1.5px solid #FFD700',
		animation: '$swing ease-in-out 1s infinite alternate',
		boxShadow: '5px 5px 10px rgba(0,0,0,0.5)',
		backgroundImage: `url(${magic})`,
		backgroundRepeat: 'no-repeat',
		/* string */
		'&:after': {
			content: "''",
			position: 'absolute',
			width: '11px',
			height: '11px',
			border: '1px solid #FFD700',
			top: '-6.25px',
			left: '50%',
			zIndex: 0,
			borderBottom: 'none',
			borderRight: 'none',
			transform: 'rotate(45deg)',
		},
		/* nail */
		'&:before': {
			content: "''",
			position: 'absolute',
			width: '5.5px',
			height: '5.5px',
			top: '-14px',
			left: '51%',
			zIndex: 5,
			borderRadius: '50% 50%',
			background: '#FFD700',
		},
	},
	ol: {
		listStyle: 'none',
		margin: theme.spacing(2, 0, 0),
		padding: 0,
	},
	quote: {
		fontSize: '20px',
		fontStyle: 'italic',
		color: '#FFD700',
	},
	anim1: {
		animation: '$cycle 15s linear infinite',
	},
	anim2: {
		animation: '$cycle2 15s linear infinite',
	},
	anim3: {
		animation: '$cycle3 15s linear infinite',
	},
	anim4: {
		animation: '$cycle4 15s linear infinite',
	},
	anim5: {
		animation: '$cycle5 15s linear infinite',
	},
});
export const SwingingFrame = () => {
	const classes = useStyles();

	return (
		<figure className={classes.swing}>
			<div>
				<ol className={classes.ol}>
					<li className={classes.anim1}>
						<div className={classes.quote}>"Joey was the runaway hit at our holiday party."</div>
					</li>
					<li className={classes.anim2}>
						<div className={classes.quote}>"We were all blown away by his performance. He has a gift."</div>
					</li>
					<li className={classes.anim3}>
						<div className={classes.quote}>"I still can't get over that ending!"</div>
					</li>
					<li className={classes.anim4}>
						<div className={classes.quote}>"My kids won't stop talking about his show."</div>
					</li>
					<li className={classes.anim5}>
						<div className={classes.quote}>
							"Our guests loved every moment - thank you for a stunning performance!"
						</div>
					</li>
				</ol>
			</div>
		</figure>
	);
};

export default SwingingFrame;
