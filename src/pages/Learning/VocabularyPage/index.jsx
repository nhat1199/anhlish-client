import { Avatar, Grid } from '@material-ui/core';
import React from 'react';
import Sets from './Sets';
import vocabularyStyles from './vocabulary.styles';

function VocabularyPage(props) {
	const classes = vocabularyStyles();
	return (
		<div className="d-flex justify-content-center ">
			<Grid container item xs={10} md={9} lg={8} direction="column" className={classes.container}>
				<div className="d-flex align-items-center mb-5">
					<Avatar alt="" src="/static/images/avatar/1.jpg" className={classes.large} />
					<span className={classes.name + ' ml-3'}>Bui Minh Dat</span>
				</div>

				<Sets/> 
				<Sets/> 
				 	
				
			</Grid>
		</div>
	);
}

export default VocabularyPage;
