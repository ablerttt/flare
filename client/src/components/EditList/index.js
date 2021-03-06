import React from "react";
import EditContainer from "./EditContainer";
import Button from "@material-ui/core/Button";
import styles from "./styles";
import { withStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import { withAuthorization } from "../../auth/Session";

const EditList = (props) => <EditContainer id={props.match.params.id} />;

class EditLinkBase extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <div>
        <Button
          component={Link}
          to={`/set/${this.props.id}`}
          className={classes.primaryLightLimitedButton}
          variant="contained"
        >
          Edit
        </Button>
      </div>
    );
  }
}

const condition = (authUser) => !!authUser;

export default withAuthorization(condition)(EditList);

const EditLink = withStyles(styles)(EditLinkBase);

export { EditLink };
