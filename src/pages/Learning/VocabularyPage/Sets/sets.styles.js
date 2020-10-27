const { makeStyles } = require('@material-ui/core');

const setStyles = makeStyles({
	root: {
		marginBottom: '15px',
		minWidth: 275,
		cursor: 'pointer',
		'&:hover': {
			borderBottom: '1px solid #3f51b5',
			'& .title': {
				color: '#3f51b5',
			},
		},
	},
	bullet: {
		display: 'inline-block',
		margin: '0 2px',
		transform: 'scale(0.8)',
	},
	title: {
		fontSize: 14,
	},
});

export default setStyles;
