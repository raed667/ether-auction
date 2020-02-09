import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";

import {
  Typography,
  CardMedia,
  CardContent,
  CardActionArea,
  Card
} from "@material-ui/core";

const useStyles = makeStyles({
  card: {
    marginBottom: 16,
    maxWidth: 260,
    minWidth: 100
  },
  link: { textDecoration: "none", color: "#000" }
});

export const ArticleCard = ({ article }) => {
  const classes = useStyles();
  const { id, title, description, img } = article;

  return (
    <Card className={classes.card}>
      <CardActionArea>
        <Link to={"/article/" + id} className={classes.link}>
          <CardMedia
            alt={title}
            title={title}
            image={img}
            component="img"
            height="140"
          />

          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {title}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {description.substr(0, 100)}...
            </Typography>
          </CardContent>
        </Link>
      </CardActionArea>
    </Card>
  );
};
