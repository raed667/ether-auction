import React from "react";
import { Link } from "react-router-dom";
import { Typography, Grid, Button } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
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

export const HomePage = () => {
  const classes = useStyles();
  const [articles, setArticles] = React.useState([]);

  const getAllArticles = async () => {
    /* Get all articles here */
    const dummyArticle = {
      id: "b934dbe0-296b-464c-9d6d-2737bc76af70",
      ipfsData: "QmZkRSVbfgQa9ZQYZs8skSnsSGuUcvMGGVG7RnjWm3D84c",
      ipfsImage: "QmcANGfjm6vPCpxTtVRPGgzWXvZkCSVxqzHeyGwQnhyPJc"
    };

    setArticles([dummyArticle]);
  };

  React.useEffect(() => {
    getAllArticles();
  }, []);

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
