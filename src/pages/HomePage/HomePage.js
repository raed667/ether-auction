import React from "react";
import { Link } from "react-router-dom";
import AddIcon from "@material-ui/icons/Add";
import { Typography, Grid, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import { ArticleCard } from "../../components/ArticleCard";

const useStyles = makeStyles(theme => ({
  root: {},
  img: {},
  button: {
    marginTop: 8,
    borderRadius: 0
  }
}));

export const HomePage = ({ articles }) => {
  const classes = useStyles();

  return (
    <div className="homepage">
      {articles.length === 0 && (
        <Typography variant="h6" color="textSecondary" align="center">
          <div>
            <img alt="empty" style={{ height: 350 }} src="/empty.svg" />
          </div>
          No articles found
        </Typography>
      )}
      <Grid
        container
        direction="row"
        justify="space-between"
        alignItems="flex-start"
      >
        {articles.map(article => (
          <Grid item key={article.id}>
            <ArticleCard article={article} />
          </Grid>
        ))}
      </Grid>
      <Grid container justify="center">
        <Grid item>
          <Button
            className={classes.button}
            startIcon={<AddIcon />}
            variant="contained"
            color="primary"
            disableElevation
            component={Link}
            to="/add"
          >
            List an article
          </Button>
        </Grid>
      </Grid>
    </div>
  );
};
