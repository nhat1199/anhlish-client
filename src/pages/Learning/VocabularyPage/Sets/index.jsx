import React from 'react';
import PropTypes from 'prop-types';
import setStyles from './sets.styles';
import { Card, CardContent, Typography } from '@material-ui/core';

Sets.propTypes = {};

function Sets(props) {
	const classes = setStyles();
	return (
		<Card className={classes.root}>
			<CardContent>
				<Typography className={classes.title} color="textSecondary" gutterBottom>
					570 Term
				</Typography>
				<Typography variant="h5" component="h2">
					Name of sets
				</Typography>
			</CardContent>
		</Card>
	);
}

export default Sets;
