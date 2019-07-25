import React, { Component } from "react";
import { Grid, Typography, Container } from "@material-ui/core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHashtag } from "@fortawesome/free-solid-svg-icons";
import { faJsSquare, faAngular, faHtml5, faCss3Alt, faNodeJs, faJava, faPython } from "@fortawesome/free-brands-svg-icons";
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
              <Grid container justify="center" alignItems="center" spacing={10}>
                <Grid item sm={6} md={3} className="typography">
                  <FontAwesomeIcon
                    style={this.iconColor}
                    icon={faHashtag}
                    size="5x"
                  />
                  <Typography variant="h6" style={this.textColor}>
                    C#/.NET
                  </Typography>
                </Grid>
                <Grid item sm={6} md={3} className="typography">
                  <FontAwesomeIcon
                    style={this.iconColor}
                    icon={faJsSquare}
                    size="5x"
                  />
                  <Typography variant="h6" style={this.textColor}>
                    Javascript
                  </Typography>
                </Grid>
                <Grid item sm={6} md={3} className="typography">
                  <FontAwesomeIcon
                    style={this.iconColor}
                    icon={faNodeJs}
                    size="5x"
                  />
                  <Typography variant="h6" style={this.textColor}>
                    NodeJS
                  </Typography>
                </Grid>
                <Grid item sm={6} md={3} className="typography">
                  <FontAwesomeIcon
                    style={this.iconColor}
                    icon={faAngular}
                    size="5x"
                  />
                  <Typography variant="h6" style={this.textColor}>
                    AngularJS
                  </Typography>
                </Grid>
                <Grid item sm={6} md={3} className="typography">
                  <FontAwesomeIcon
                    style={this.iconColor}
                    icon={faHtml5}
                    size="5x"
                  />
                  <Typography variant="h6" style={this.textColor}>
                    HTML5
                  </Typography>
                </Grid>
                <Grid item sm={6} md={3} className="typography">
                  <FontAwesomeIcon
                    style={this.iconColor}
                    icon={faCss3Alt}
                    size="5x"
                  />
                  <Typography variant="h6" style={this.textColor}>
                    CSS
                  </Typography>
                </Grid>
                <Grid item sm={6} md={3} className="typography">
                  <FontAwesomeIcon
                    style={this.iconColor}
                    icon={faJava}
                    size="5x"
                  />
                  <Typography variant="h6" style={this.textColor}>
                    Java
                  </Typography>
                </Grid>
                <Grid item sm={6} md={3} className="typography">
                  <FontAwesomeIcon
                    style={this.iconColor}
                    icon={faPython}
                    size="5x"
                  />
                  <Typography variant="h6" style={this.textColor}>
                    Python
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
