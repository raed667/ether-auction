import React from "react";
import { Link } from "react-router-dom";
import { AppBar, Toolbar, Typography, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1
  }
}));

export const TopBar = ({ accounts }) => {
  const classes = useStyles();
  const connect = async () => {
    try {
      await window.ethereum.enable();
      window.location.reload();
    } catch (error) {
      console.log("error", error);
    }
  };
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            <Link to="/" style={{ textDecoration: "none", color: "#FFF" }}>
              λ Auctions
            </Link>
          </Typography>

          <Button color="inherit" onClick={connect}>
            {accounts.length ? accounts[0].substring(0, 6) : "Login"}
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
};
