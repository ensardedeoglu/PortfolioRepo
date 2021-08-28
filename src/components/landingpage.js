import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';


class Landing extends Component {
  render() {
    return(
      <div style={{width: '100%', margin: 'auto'}}>
        <Grid className="landing-grid">
          <Cell col={12}>
            

            <div className="banner-text">
              <h1>Full Stack Web Developer</h1>

            <hr/>

          <p>JavaScript | React | NodeJS | Express | PostgreSQL | HTML/CSS | Bootstrap | Git - GitHub</p>

        <div className="social-links">

          {/* LinkedIn */}
          <a href="http://www.linkedin.com/in/ensar-dedeoglu" rel="noopener noreferrer" target="_blank">
            <i className="fa fa-linkedin-square" aria-hidden="true" />
          </a>

          {/* Github */}
          <a href="https://github.com/ensardedeoglu" rel="noopener noreferrer" target="_blank">
            <i className="fa fa-github-square" aria-hidden="true" />
          </a>

        </div>
            </div>
          </Cell>
        </Grid>
       
      </div>
    )
  }
}

export default Landing;
