import React, { Component } from "react";
import { Grid, Typography, Container } from "@material-ui/core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHashtag, faJs } from "@fortawesome/free-solid-svg-icons";
import "./styles.css";

export default class Skills extends Component {
  textColor = {
    color: "#f5f5f5"
  };

  iconColor = {
    color: "#2F4D65"
  };

  render() {
    return (
      <div className="skills-main">
        <Container>
          <Grid container spacing={10} direction="column" className="py-50">
            <Grid item className="skills-title my-20">
              <Typography variant="h3" style={this.textColor}>
                Skills
              </Typography>
            </Grid>
            <Grid item>
              <Grid
                container
                direction="row"
                justify="center"
                alignItems="center"
                spacing={10}
              >
                <div className="typography">
                  <Grid item sm={12} md={6} lg={3}>
                    <FontAwesomeIcon
                      style={this.iconColor}
                      icon={faHashtag}
                      size="5x"
                    />
                    <Typography variant="h6" style={this.textColor}>C#/.NET</Typography>
                  </Grid>
                  <Grid item sm={12} md={6} lg={3}>
                    <FontAwesomeIcon
                      style={this.iconColor}
                      icon={faJs}
                      size="5x"
                    />
                    <Typography variant="h6" style={this.textColor}>C#/.NET</Typography>
                  </Grid>
                </div>
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </div>
    );
  }
}
