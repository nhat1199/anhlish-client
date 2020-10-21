const { makeStyles } = require('@material-ui/core');

const vocabularyStyles = makeStyles((theme) => ({
	large: {
		width: theme.spacing(10),
		height: theme.spacing(10),
	},
	container: {},
	name: {
		fontSize: '22px',
		fontWeight: '600',
	},
}));

export default vocabularyStyles;
