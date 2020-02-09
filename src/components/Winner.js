import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import SuccessIcon from "@material-ui/icons/CheckCircleOutline";

import { Typography } from "@material-ui/core";

const useStyles = makeStyles({
  text: {
    display: "flex",
    alignItems: "center"
  }
});

export const Winner = () => {
  const classes = useStyles();

  return (
    <Typography
      className={classes.text}
      variant="subtitle1"
      color="secondary"
      component="p"
    >
      <SuccessIcon color="secondary" /> You're the current winner
    </Typography>
  );
};
