import React, { Component } from "react";
import { Grid, Typography, Container } from "@material-ui/core";
import "./styles.css";

export default class Experience extends Component {
  textColor = {
    color: "#f5f5f5"
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
              <Grid container direction="row" spacing={10}>
                <Grid item xs={12} md={6}>
                  <Typography variant="h6" style={this.textColor}>
                    Blackbaud
                  </Typography>
                  <Typography variant="body1" style={this.textColor}>
                    Software Engineer Intern
                  </Typography>
                  <Typography variant="body2" style={this.textColor}>
                    Summer 2019
                  </Typography>
                  <Typography variant="caption" style={this.textColor}>
                    <ul>
                      <li>
                        Learned the .NET framework by developing API endpoints
                        and webservices in C#.
                      </li>
                      <li>
                        Learned AngularJS by developing single page applications
                        that interfaced with a .NET api.
                      </li>
                      <li>
                        Created unit tests using mocking libraries in JS and C#.
                      </li>
                    </ul>
                  </Typography>
                </Grid>
                <Grid item xs={12} md={6}>
                  <Typography variant="h6" style={this.textColor}>
                    Neoteric Hovercraft Inc.
                  </Typography>
                  <Typography variant="body1" style={this.textColor}>
                    Software Engineer
                  </Typography>
                  <Typography variant="body2" style={this.textColor}>
                    May 2018 - May 2019
                  </Typography>
                  <Typography variant="caption" style={this.textColor}>
                    <ul>
                      <li>
                        Created a majority of their website that is currently in
                        development.
                      </li>
                      <li>
                        Built an Android application with Java to clock
                        employees in and out.
                      </li>
                    </ul>
                  </Typography>
                </Grid>
                <Grid item xs={12} md={6}>
                  <Typography variant="h6" style={this.textColor}>
                    NinjaZone
                  </Typography>
                  <Typography variant="body1" style={this.textColor}>
                    Software Engineer intern
                  </Typography>
                  <Typography variant="body2" style={this.textColor}>
                    Summer 2017
                  </Typography>
                  <Typography variant="caption" style={this.textColor}>
                    <ul>
                      <li>
                        Worked on their WordPress website to create a better
                        user experience for the customers.
                      </li>
                      <li>
                        Upgraded and created custom plugins to make back end
                        processes more efficient.
                      </li>
                    </ul>
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
