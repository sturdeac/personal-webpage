import React, { Component } from "react";
import { Grid, Typography, Container } from "@material-ui/core";
import "./styles.css";

export default class Splash extends Component {
  message = "Hello Wrld";

  render() {
    return (
      <Grid className="main">
        <Container>
          <Grid
            container
            direction="row"
            justify="center"
            alignItems="center"
            className="container"
          >
            <Grid item>
              <div className="typography">
                <Typography variant="overline">
                  <i>Hello, my name is</i>
                </Typography>
                <Typography variant="h3">Andrew Sturdevant</Typography>
              </div>
            </Grid>
          </Grid>
        </Container>
      </Grid>
    );
  }
}
