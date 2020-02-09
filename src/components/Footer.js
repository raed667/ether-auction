import React from "react";
import { Link, Typography } from "@material-ui/core";

export const Footer = () => {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://github.com/Raedslab">
        Raed
      </Link>{" "}
      {new Date().getFullYear()}
    </Typography>
  );
};
