import React from "react";
import { Link } from "react-router-dom";
import { useStyles } from "./footer.style";

function Copyright(classes) {
  return (
    <span className={classes.copyright}>
      {"© Powered by "}
      <Link to="/home">Anhlish Team </Link>
      {"Since"} {new Date().getFullYear()}
    </span>
  );
}

export default function Footer() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <i>Learn English easier</i>&nbsp;|&nbsp;
      {Copyright(classes)}
    </div>
  );
}
