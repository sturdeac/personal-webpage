import React, { Component } from "react";
import { Grid, Typography, Container } from "@material-ui/core";
import "./styles.css";

export default class Splash extends Component {
  render() {
    return (
      <Grid className="splash-main">
        <Container>
          <Grid
            container
            direction="row"
            justify="center"
            alignItems="center"
            className="splash-container"
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
