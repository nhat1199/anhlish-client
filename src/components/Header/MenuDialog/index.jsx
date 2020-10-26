import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Dialog from "@material-ui/core/Dialog";
import ListItemText from "@material-ui/core/ListItemText";
import ListItem from "@material-ui/core/ListItem";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import CloseIcon from "@material-ui/icons/Close";
import Slide from "@material-ui/core/Slide";
import MenuIcon from "@material-ui/icons/Menu";
import { useHistory } from "react-router-dom";
import { learningLink, HOME_LINK } from "helper/RouterLink.data";

const useStyles = makeStyles((theme) => ({
  root: {
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
  appBar: {
    position: "relative",
    "& button": {
      outline: "none !important",
    },
  },
  title: {
    color: "white",
    marginLeft: theme.spacing(2),
    flex: 1,
  },
}));

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function MenuDialog() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const history = useHistory();

  const goToReading = () => {
    history.push(learningLink.readingLink);
    handleClose();
  };
  const goToVocabulary = () => {
    history.push(learningLink.vocabularyLink);
    handleClose();
  };
  const goHome = () => {
    history.push(HOME_LINK);
    handleClose();
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <MenuIcon onClick={handleClickOpen} />

      <Dialog
        fullScreen
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}
        className={classes.root}
      >
        <AppBar className={classes.appBar}>
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              onClick={handleClose}
              aria-label="close"
            >
              <CloseIcon />
            </IconButton>
            <Typography variant="h6" className={classes.title}>
              LOGO
            </Typography>
          </Toolbar>
        </AppBar>
        <List>
          {" "}
          <ListItem button onClick={goHome}>
            <ListItemText primary="Home" secondary="Best practice" />
          </ListItem>
          <ListItem button onClick={goToReading}>
            {/* <Link to="/learning/import-content" className="text-white p-3"> */}
            <ListItemText primary="Reading" secondary="AI generator" />
            {/* </Link> */}
          </ListItem>
          <ListItem button onClick={goToVocabulary}>
            <ListItemText
              primary="Vocabulary"
              secondary="Excelent AI generator"
            />
          </ListItem>
          <Divider />
          <ListItem button>
            <ListItemText primary="My Profile" secondary="" />
          </ListItem>
          <ListItem button>
            <ListItemText primary="Logout" secondary="" />
          </ListItem>
        </List>
      </Dialog>
    </div>
  );
}
