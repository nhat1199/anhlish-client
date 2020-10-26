import React from "react";
import setStyles from "./sets.styles";
import { Card, CardContent, Typography } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import { learningLink } from "helper/RouterLink.data";
Sets.propTypes = {};

function Sets(props) {
  const classes = setStyles();
  const history = useHistory();
  const viewSetsCard = () => {
    history.push(learningLink.setsCard);
  };
  return (
    <Card className={classes.root} onClick={viewSetsCard}>
      <CardContent>
        <Typography
          className={classes.title}
          color="textSecondary"
          gutterBottom
        >
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
