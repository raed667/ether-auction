import React from "react";

import {
  Typography,
  TextField,
  Button,
  CircularProgress
} from "@material-ui/core";
import Alert from "@material-ui/lab/Alert";
import { makeStyles } from "@material-ui/core/styles";
import { DropzoneArea } from "material-ui-dropzone";
import CloudUploadIcon from "@material-ui/icons/CloudUpload";

import { listArticle } from "../../data";

const useStyles = makeStyles(theme => ({
  root: {
    "& > *": {
      marginBottom: theme.spacing(1)
    }
  },
  button: {
    textAlign: "center"
  },
  buttonProgress: {
    position: "absolute",
    top: "50%",
    left: "50%",
    marginTop: -12,
    marginLeft: -12
  }
}));

export const AddArticle = ({ accounts }) => {
  const classes = useStyles();
  const user = accounts[0];

  const [title, setTitle] = React.useState("");
  const [description, setDescription] = React.useState("");
  const [image, setImage] = React.useState(null);

  const [submitting, setSubmitting] = React.useState(false);
  const [status, setStatus] = React.useState(null);

  const onFileChange = async files => {
    if (files && files[0]) {
      const reader = new window.FileReader();
      reader.readAsArrayBuffer(files[0]);
      reader.onloadend = async () => {
        const bufferImage = await Buffer.from(reader.result);
        setImage(bufferImage);
      };
    }
  };

  const onSubmit = async e => {
    e.preventDefault();
    if (!title || !description || !image) {
      return;
    }
    setSubmitting(true);
    try {
      const result = await listArticle(title, description, image, user);
      if (result.transactionHash) {
        setStatus({
          status: "success",
          message: "Listing success: " + result.transactionHash
        });
      }
    } catch (err) {
      setStatus({ status: "error", message: err.message });
    }
    setSubmitting(false);
  };

  return (
    <div>
      {!!status && <Alert severity={status.status}>{status.message}</Alert>}
      <Typography variant="h6" gutterBottom>
        Sell an item
      </Typography>
      <form
        className={classes.root}
        noValidate
        autoComplete="off"
        onSubmit={onSubmit}
      >
        <TextField
          label="Title"
          value={title}
          onChange={e => setTitle(e.target.value)}
          variant="filled"
          fullWidth
          required
          disabled={submitting}
        />
        <TextField
          label="Description"
          value={description}
          onChange={e => setDescription(e.target.value)}
          variant="filled"
          fullWidth
          multiline
          rows="4"
          rowsMax="6"
          required
          disabled={submitting}
        />

        <DropzoneArea
          acceptedFiles={["image/*"]}
          filesLimit={1}
          onChange={onFileChange}
          disabled={submitting}
        />

        <div className={classes.button}>
          <Button
            startIcon={<CloudUploadIcon />}
            variant="contained"
            color="primary"
            size="large"
            disableElevation
            type="submit"
            disabled={submitting}
          >
            Publish
          </Button>
          {submitting && (
            <CircularProgress size={24} className={classes.buttonProgress} />
          )}
        </div>
      </form>
    </div>
  );
};
