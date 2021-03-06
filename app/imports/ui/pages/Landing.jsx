import React from 'react';
import { Grid, Image } from 'semantic-ui-react';

/** A simple static component to render some text for the landing page. */
class Landing extends React.Component {
  render() {
    return (
      <div className="phish-landing-background">
        <Grid id='landing-page' verticalAlign='middle' container>
          <Grid.Column width={4}>
            <Image size='small' circular src="/images/windows.png"/>
          </Grid.Column>
          <Grid.Column width={8}>
            <h1>Welcome to this template</h1>
            <p>Now get to work and modify this app!</p>
          </Grid.Column>
        </Grid>
      </div>
    );
  }
}

export default Landing;
