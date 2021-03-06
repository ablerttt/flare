import React from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import styles from "../../constants/styles";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

function getAllIndexes(arr, val) {
  var indexes = [];
  var i = -1;
  while ((i = arr.indexOf(val, i + 1)) !== -1) {
    indexes.push(i);
  }
  return indexes;
}

const SubmitVerification = (props) => {
  if (props.unanswered.length > 0) {
    return (
      <Typography component={"span"}>
        There are still <strong>{props.unanswered.length}</strong> unanswered
        questions. Go back and check again!
      </Typography>
    );
  } else if (props.unanswered.length === 1) {
    return (
      <Typography component={"span"}>
        There is still <strong>{props.unanswered.length}</strong> unanswered
        question. Go back and check again!
      </Typography>
    );
  } else {
    return (
      <Typography component={"span"}>
        Have you double and triple checked?
      </Typography>
    );
  }
};

const SubmitDialog = (props) => {
  const { classes, showDialog, answers } = props;
  const unansweredIndices = getAllIndexes(answers, -1);
  return (
    <div>
      <Button
        variant="contained"
        className={classes.submitButton}
        onClick={() => props.openDialog()}
      >
        Submit
      </Button>
      <Dialog
        onEscapeKeyDown={props.closeDialog}
        open={showDialog}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title" className={classes.dialog}>
          {"Confirm Submission"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            <SubmitVerification unanswered={unansweredIndices} />
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button
            onClick={() => props.closeDialog()}
            className={classes.primaryLightButton}
            variant="contained"
          >
            Cancel
          </Button>
          {unansweredIndices.length === 0 && (
            <Button
              onClick={() => props.onSubmit()}
              className={classes.primaryLightButton}
              variant="contained"
            >
              Submit
            </Button>
          )}
          {unansweredIndices.length > 0 && (
            <Button
              onClick={() => props.onSubmit()}
              className={classes.highlightButton}
              variant="contained"
            >
              Submit Anyway
            </Button>
          )}
        </DialogActions>
      </Dialog>
    </div>
  );
};

// export default compose(withRouter, withStyles(styles))(SubmitDialog);
export default withStyles(styles)(SubmitDialog);
