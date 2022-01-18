import React from 'react';
import 'semantic-ui-css/semantic.css';
import { Grid, Image } from 'semantic-ui-react';

/** Top-level layout component for this application. Called in imports/startup/client/startup.jsx. */
class App extends React.Component {
  render() {
    return (
        <Grid id='landing-page' verticalAlign='middle' textAlign='center' container>
          <Grid.Column width={4}>
            <Image size='small' circular src="/images/windows.png"/>
          </Grid.Column>
          <Grid.Column width={8}>
            <h1>Welcome to this template</h1>
            <p>Now get to work and modify this app!</p>
          </Grid.Column>
        </Grid>
    );
  }
}

export default App;
