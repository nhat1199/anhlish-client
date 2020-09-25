import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import { FormGroup, Input, Label } from "reactstrap";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    display: "flex",
    justifyContent: "center",
  },
  paper: {
    padding: theme.spacing(2),
    color: "black",
  },
}));
function ImportContentPage(props) {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid container item xs={9} spacing={3}><Grid item xs={4}>
          <Paper className={classes.paper}>New words list</Paper>
        </Grid>
        <Grid item xs={8}>
          <Paper className={classes.paper}>
            {" "}
            <FormGroup>
              <Label for="exampleText">Input Content to learn</Label>
              <Input type="textarea" name="text" id="exampleText" />
            </FormGroup>
          </Paper>
        </Grid>
        
      </Grid>
    </div>
  );
}

export default ImportContentPage;
