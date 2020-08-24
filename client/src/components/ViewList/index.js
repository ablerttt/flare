import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import api from "../../api";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import CardActions from "@material-ui/core/CardActions";
import { EditLink } from "../EditList";
import styles from "../../constants/styles";
import RemoveList from "../RemoveList";
import { PracticeLink } from "../PracticeList";

class ViewList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
    };
  }

  componentDidMount = async () => {
    await api.getAllStudySets().then((res) => {
      var items = res.data.data;
      this.setState({
        items,
      });
    });
  };

  createCard = (item, classes) => {
    return (
      <div>
        <Grid key={item} className={classes.listCard}>
          <Card className={classes.listCard}>
            <CardContent>
              <Typography variant="h5">{item.title}</Typography>
            </CardContent>
          </Card>
        </Grid>
      </div>
    );
  };

  handleRemoveSet = (keyVal) => {
    console.log(`handle remove set for key ${keyVal}`);
    let current = [...this.state.items];
    current.splice(keyVal, 1);
    this.setState({ items: current });
  };

  render() {
    const { items } = this.state;
    const { classes } = this.props;

    return (
      <Container component="main" maxWidth="lg">
        <div className={classes.root}>
          <Typography variant="h3" className={classes.intro}>
            Your Lists
          </Typography>
          <br />
          <Grid container spacing={3}>
            {items.map((item, val) => {
              return (
                <Grid item xs={12} sm={6} md={4} key={val}>
                  <Card className={classes.listCard}>
                    <CardContent>
                      <Typography variant="h5">{item.title}</Typography>
                      <br />
                      <Typography variant="body2">
                        Last modified {item.updatedAt}
                      </Typography>
                    </CardContent>
                    <CardActions>
                      <EditLink id={item._id} />
                      <PracticeLink id={item._id} />
                      <RemoveList
                        id={item._id}
                        onRemoveSet={this.handleRemoveSet}
                        onChange={this.handleRemoveSet}
                        keyVal={val}
                      />
                    </CardActions>
                  </Card>
                </Grid>
              );
            })}
          </Grid>
        </div>
      </Container>
    );
  }
}

export default withStyles(styles)(ViewList);
