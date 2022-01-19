import React from 'react';
import 'semantic-ui-css/semantic.css';
import { Grid, Image, Container, Input, Button } from 'semantic-ui-react';

/** Top-level layout component for this application. Called in imports/startup/client/startup.jsx. */
document.body.style = 'background: url(\'images/365LogScreenEdit2.PNG\');';

class App extends React.Component {
  render() {
    return (
      <Container>
        <Container id='SignCont'>
          <Grid id='SignInBox'>
            <Image src="https://logincdn.msauth.net/shared/1.0/content/images/microsoft_logo_ee5c8d9fb6248c938fd0dc19370e90bd.svg"/>
          </Grid>
          <Grid id='SignText'>
            <p>
              Sign in
            </p>
          </Grid>
          <Grid id='SignInput'>
            <Input transparent placeholder='Email, phone, or Skype'/>
          </Grid>
          <hr/>
          <Grid id='NewAccount'>
            <p>
              No account?
              <a id='NewAccountLink' href="https://signup.live.com/signup?wa=wsignin1.0&rpsnv=13&ct=1642617872&rver=7.0.6737.0&wp=MBI_SSL&wreply=https%3a%2f%2foutlook.live.
              com%2fowa%2f%3fnlp%3d1%26RpsCsrfState%3deb6efa4c-ced2-7c89-2b19-dc39ac1aae75&id=292841&aadredir=1&whr=gmail.com&CBCXT=out&lw=1&fl=dob%2cfl
              name%2cwld&cobrandid=90015&contextid=3AA020549F5DEF0F&bk=1642617872&uiflavor=web&lic=1&mkt=EN-US&lc=1033&uaid=ad8b285563c149bb82c976c86dc63cec">Create one!</a>
            </p>
          </Grid>
          <Grid id='SecurityKey'>
            <a href="https://login.live.com/#">Sign in with a security key</a>
            <Image src="https://logincdn.msauth.net/shared/1.0/content/images/documentation_bcb4d1dc4eae64f0b2b2538209d8435a.svg"/>
          </Grid>
          <Grid id='NextBtn'>
            <Button color='blue' floated="right">Next</Button>
          </Grid>
        </Container>
        <Container id='btmBar'>
          <Image src="https://logincdn.msauth.net/shared/1.0/content/images/signin-options_4e48046ce74f4b89d45037c90576bfac.svg"/>
          <p>
            Sign-in options
          </p>
        </Container>
      </Container>
    );
  }
}

export default App;
