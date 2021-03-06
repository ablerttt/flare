import React from "react";
import styles from "../constants/styles";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import { EditLink } from "../components/EditList";

const EmptySet = (props) => {
  const { id } = props;
  return (
    <div>
      <Typography gutterBottom variant="h6">
        Looks like your set is empty!
      </Typography>
      <Typography gutterBottom variant="body1">
        Consider adding a few terms.
      </Typography>
      <br />
      <EditLink id={id} color="b3f0a7" />
    </div>
  );
};

export default withStyles(styles)(EmptySet);
