import React, { Component } from "react";
import { Grid, Typography, Container } from "@material-ui/core";
import "./styles.css";

export default class Experience extends Component {
  textColor = {
    color: "white"
  };

  render() {
    return (
      <div className="exp-main">
        <Container>
          <Grid container spacing={10} direction="column" className="py-50">
            <Grid item className="exp-title my-20">
              <Typography variant="h3" style={this.textColor}>
                Experience
              </Typography>
            </Grid>
            <Grid item>
              <Grid container direction="row" justify="center" spacing={10}>
                <Grid item xs={12} md={6}>
                  <Typography variant="h6" style={this.textColor}>
                    Blackbaud
                  </Typography>
                  <Typography variant="body1" style={this.textColor}>
                    Software Engineer Intern
                  </Typography>
                  <Typography variant="body2" style={this.textColor}>
                    June 2019 - August 2019
                  </Typography>
                  <Typography variant="caption" style={this.textColor}>
                    This is some text about the job that I did when I worked
                    there. I want to make this text wrap so I am going to keep
                    writing to see what happens.
                  </Typography>
                </Grid>
                <Grid item xs={12} md={6}>
                  <Typography variant="h6" style={this.textColor}>
                    Blackbaud
                  </Typography>
                  <Typography variant="body1" style={this.textColor}>
                    Software Engineer Intern
                  </Typography>
                  <Typography variant="body2" style={this.textColor}>
                    June 2019 - August 2019
                  </Typography>
                  <Typography variant="caption" style={this.textColor}>
                    This is some text about the job that I did when I worked
                    there.
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </div>
    );
  }
}
