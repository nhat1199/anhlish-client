const { makeStyles } = require("@material-ui/core");

const flashStyle = makeStyles((theme) => ({
  flashContainer: {},
  left: {
    width: '100%',
    "& button": {
      outline: "none !important",
    },
  },
  right: {
    width: '100%',
  },
  cardRight: {
    padding: "20px",
    height: "100%",
    cursor: "pointer",
    "&:hover": {
      borderBottom: "1px solid #3f51b5",
    },
  },
  front: {},
  back: {},
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  textSize18: {
    fontSize: "18px",
  },
}));

export default flashStyle;
