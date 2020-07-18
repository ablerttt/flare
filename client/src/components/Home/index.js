import React from "react";
import "./home.css";
import { withAuthorization } from "../Session";
import { SignUpLink } from "../SignUp";
import { NewSetMessage } from "../NewSet";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Option from "./test";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Link from "@material-ui/core/Link";
import * as ROUTES from "../../constants/routes";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  control: {
    padding: theme.spacing(2),
  },

  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  card: {
    width: "300px",
    // margin: "30px 0",
    // display: "inline"
  },
  option: {
    margin: "10px",
  },
}));

function HomePage(props) {
  const classes = useStyles();
  const [spacing] = React.useState(2);
  const options = ["Create a new set.", "Review.", "Test."];
  const links = [ROUTES.NEW_SET, ROUTES.NEW_SET, ROUTES.NEW_SET];

  return (
    <div class="container">
      <h1>Welcome back.</h1>
      <p>What great thing will you do today?</p>
      <br />
      <Grid container className={classes.root} spacing={2}>
        <Grid item xs={12}>
          <Grid container justify="center" spacing={spacing}>
            {[0, 1, 2].map((value) => (
              <Grid key={value} className={classes.option}>
                <Option title={options[value]} className={classes.paper} connect={links[value]} />
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}

const condition = (authUser) => !!authUser;

export { useStyles };

export default withAuthorization(condition)(HomePage);
