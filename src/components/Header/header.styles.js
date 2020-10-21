const {fade, makeStyles } = require("@material-ui/core");

const headerStyles = makeStyles((theme) => ({
	root: {
		display: 'flex',
		'& button': {
			outline: 'none !important',
		},
	},
	menuButton: {
		marginLeft: theme.spacing(2),
	},
	title: {
		color: 'white',
		flexGrow: 0,
	},
	search: {
		margin: '0 0 0 30px',
		position: 'relative',
		borderRadius: theme.shape.borderRadius,
		backgroundColor: fade(theme.palette.common.white, 0.15),
		'&:hover': {
			backgroundColor: fade(theme.palette.common.white, 0.25),
		},
		marginLeft: theme.spacing(1),

		[theme.breakpoints.up('sm')]: {
			marginLeft: theme.spacing(1),
			width: 'auto',
		},
	},
	searchIcon: {
		padding: theme.spacing(0, 2),
		height: '100%',
		position: 'absolute',
		pointerEvents: 'none',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
	},
	inputRoot: {
		color: 'inherit',
	},
	inputInput: {
		padding: theme.spacing(1, 1, 1, 0),
		// vertical padding + font size from searchIcon
		paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
		transition: theme.transitions.create('width'),
		width: '100%',
		[theme.breakpoints.up('sm')]: {
			width: '12ch',
			'&:focus': {
				width: '20ch',
			},
		},
	},
	moreIcon: {
		marginLeft: 'auto',
		display: 'none',
		[theme.breakpoints.down('xs')]: {
			display: 'block',
		},
	},
	itemFixed: {
		display: 'block',
		[theme.breakpoints.down('xs')]: {
			display: 'none',
		},
	},
}));

export default headerStyles;