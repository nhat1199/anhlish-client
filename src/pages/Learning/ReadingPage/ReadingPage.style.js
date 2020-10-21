const { makeStyles } = require("@material-ui/core");

const styles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      display: "flex",
      justifyContent: "center",
    },
    paper: {
      padding: theme.spacing(2),
      color: "black",
    },
    areaMinHeight: {
      minHeight: "200px",
    },
    listNewWord: {
      width: "100%",
      maxWidth: 360,
      backgroundColor: theme.palette.background.paper,
    },
    outlineNone: {
      outline: "none",
    },
    flexColumn: {
      display: "flex",
      flexFlow: "column",
    },
    flexRow: {
      justifyContent: "spaceAround",
    },
    listNewWordMobileSize: {
      width:"100%",
      margin:"10px",
    },
  }));

  export const useStyles = styles;