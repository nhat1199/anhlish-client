const { makeStyles } = require("@material-ui/core");

const styles = makeStyles((theme) => ({
  root: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginTop: "auto",
    backgroundColor: "white",
    padding: "10px",
  },

  copyright: {
    color: "gray",
    fontSize: "15px",
  },
}));

export const useStyles = styles;
