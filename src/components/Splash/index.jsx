import React, { Component } from "react";
import { Grid, Typography, Container } from "@material-ui/core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDoubleDown } from "@fortawesome/free-solid-svg-icons";
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
                <Grid container direction="column" spacing={10}>
                  <Grid item>
                    <Typography variant="overline">
                      <i>Hello, my name is</i>
                    </Typography>
                    <Typography variant="h3">Andrew Sturdevant</Typography>
                    <Typography variant="caption">
                      Bachelor of Science, Computer Engineering, Rose-Hulman
                      Institue of Technology
                    </Typography>
                  </Grid>
                  <Grid item>
                    <Typography>
                      <FontAwesomeIcon icon={faAngleDoubleDown} size="3x" />
                    </Typography>
                  </Grid>
                </Grid>
              </div>
            </Grid>
          </Grid>
        </Container>
      </Grid>
    );
  }
}
