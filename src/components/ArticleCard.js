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
  }
});

export const ArticleCard = ({ article }) => {
  const classes = useStyles();
  const { id, title, description, img } = article;

  return (
    <Card className={classes.card}>
      <CardActionArea>
        <Link
          to={"/article/" + id}
          style={{ textDecoration: "none", color: "#000" }}
        >
          <CardMedia
            component="img"
            alt={title}
            title={title}
            height="140"
            image={img}
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
