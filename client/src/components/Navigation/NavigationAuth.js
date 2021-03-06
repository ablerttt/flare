import React from "react";
import * as ROUTES from "../../constants/routes";
import SignOut from "../../auth/SignOut/index";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import { withStyles } from "@material-ui/core/styles";
import styles from "./NavigationStyles";
import { Link } from "react-router-dom";

const NavigationAuth = (props) => {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.appbar}>
        <Container maxWidth="md">
          <Toolbar style={{ padding: "0" }}>
            <div
              className={classes.title}
              style={{ marginLeft: "0", paddingLeft: "0" }}
            >
              <Button
                style={{
                  backgroundColor: "rgba(0,0,0,0.0)",
                  textTransform: "none",
                  marginLeft: "0",
                  paddingLeft: "0",
                }}
                component={Link}
                to={ROUTES.HOME}
              >
                <Typography variant="h5" className={classes.titleText}>
                  <strong>benky</strong>
                </Typography>
              </Button>
            </div>
            <Button
              variant="contained"
              className={`${classes.right} ${classes.highlightButton}`}
              component={Link}
              to={"/account"}
            >
              Account
            </Button>
            <SignOut>
              <Button
                variant="contained"
                className={`${classes.right} ${classes.highlightButton}`}
              >
                Log Out
              </Button>
            </SignOut>
          </Toolbar>
        </Container>
      </AppBar>
    </div>
  );
};

export default withStyles(styles)(NavigationAuth);
