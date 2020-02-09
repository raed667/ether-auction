import React from "react";
import axios from "axios";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";

import {
  Typography,
  CardMedia,
  CardContent,
  CardActionArea,
  Card
} from "@material-ui/core";
import { IPFS_URL } from "../helpers/ipfs";

const useStyles = makeStyles({
  card: {
    marginBottom: 16,
    maxWidth: 260,
    minWidth: 100
  }
});

export const ArticleCard = ({ article }) => {
  const classes = useStyles();
  const { id, ipfsData, ipfsImage } = article;
  const [data, setData] = React.useState({ title: "", description: "" });

  React.useEffect(() => {
    axios.get(IPFS_URL + ipfsData).then(response => setData(response.data));
  }, [ipfsData]);

  return (
    <Card className={classes.card}>
      <CardActionArea>
        <Link
          to={"/article/" + id}
          style={{ textDecoration: "none", color: "#000" }}
        >
          <CardMedia
            component="img"
            alt={data.title}
            title={data.title}
            height="140"
            image={IPFS_URL + ipfsImage}
          />

          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {data.title}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {data.description.substr(0, 100)}...
            </Typography>
          </CardContent>
        </Link>
      </CardActionArea>
    </Card>
  );
};
