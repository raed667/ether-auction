import React from "react";
import { useParams } from "react-router-dom";

import {
  Typography,
  Button,
  Grid,
  TextField,
  InputAdornment
} from "@material-ui/core";
import Icon from "@material-ui/icons/AddShoppingCart";
import { makeStyles } from "@material-ui/core/styles";

import { getRate } from "../../helpers/rates";

const useStyles = makeStyles(theme => ({
  root: {},
  img: {
    width: "100%"
  },
  button: {
    marginTop: 8,
    borderRadius: 0
  }
}));

export const Article = () => {
  const classes = useStyles();
  const { id } = useParams();

  const [price, setPrice] = React.useState(0);
  const [rate, setRate] = React.useState(0);
  const [article, setArticle] = React.useState(null);

  const geArticle = async id => {
    return {
      title: "Supreme",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec scelerisque viverra lobortis.",
      image: "/supreme.jpg",
      price: 150
    };
  };

  React.useEffect(() => {
    geArticle(id).then(a => {
      setArticle(a);
      setPrice(a.price);
    });
    getRate().then(r => setRate(r));
  }, [id]);

  if (!article) return <div>loading</div>;

  return (
    <div>
      <Grid container spacing={3}>
        <Grid item md={8}>
          <img alt="title" className={classes.img} src={article.image} />
        </Grid>
        <Grid
          item
          container
          direction="column"
          justify="flex-end"
          alignItems="stretch"
          md={3}
        >
          <Typography gutterBottom variant="h5" component="h2">
            {article.title}{" "}
            <Typography
              gutterBottom
              variant="h6"
              component="span"
              color="textSecondary"
            >
              <small>{article.price} €</small>
            </Typography>
          </Typography>

          <Typography variant="body2" color="textSecondary" component="p">
            {article.description}
          </Typography>
          <TextField
            label="Bid"
            type="number"
            value={price}
            onChange={e => setPrice(e.target.value)}
            InputProps={{
              endAdornment: <InputAdornment position="end">€</InputAdornment>
            }}
            variant="filled"
          />

          <Typography variant="body1" color="textSecondary">
            <small>{(price / rate).toFixed(6)} ETH</small>
          </Typography>

          <Button
            className={classes.button}
            startIcon={<Icon />}
            variant="contained"
            color="primary"
            fullWidth
            disableElevation
          >
            Bid
          </Button>
        </Grid>
      </Grid>
    </div>
  );
};
