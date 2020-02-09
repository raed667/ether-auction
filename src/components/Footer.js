import React from "react";
import { Link, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  footer: {
    marginTop: 16
  }
});

export const Footer = () => {
  const classes = useStyles();
  return (
    <Typography
      className={classes.footer}
      variant="body2"
      color="textSecondary"
      align="center"
    >
      {"Copyright © "}
      <Link color="inherit" href="https://github.com/RaedsLab/ether-auction">
        Raed Chammam
      </Link>{" "}
      {new Date().getFullYear()}
    </Typography>
  );
};
