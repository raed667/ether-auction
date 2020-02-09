import React from "react";
import { Link } from "react-router-dom";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Snackbar
} from "@material-ui/core";
import Alert from "@material-ui/lab/Alert";

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
  const [isError, setError] = React.useState(null);
  const classes = useStyles();
  const connect = async () => {
    setError(false);
    try {
      await window.ethereum.enable();
      window.location.reload();
    } catch (error) {
      setError(true);
      console.warn(error);
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

      <Snackbar
        open={isError}
        autoHideDuration={6000}
        onClose={() => setError(false)}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
      >
        <Alert
          elevation={6}
          variant="filled"
          onClose={() => setError(false)}
          severity="error"
        >
          You need to connect to your account.
        </Alert>
      </Snackbar>
    </div>
  );
};
