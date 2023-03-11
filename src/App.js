import React from "react";
import * as Components from './Components';
import { v4 as uuidv4 } from 'uuid'

function App() {
  const [signIn, toggle] = React.useState(true);
  const [showPasswordMismatchAlert, setShowPasswordMismatchAlert] = React.useState(false);

  const signUpFormId = uuidv4();
  const confirmPasswordId = uuidv4();
  const affiliateNumberId = uuidv4();

  const handleConfirmPasswordChange = (e) => {
    const password = document.getElementById('password').value;
    const confirmPassword = e.target.value;
    if (password !== confirmPassword) {
      setShowPasswordMismatchAlert(true);
    } else {
      setShowPasswordMismatchAlert(false);
    }
  }

  return(
    <Components.Container>
      <Components.SignUpContainer signinIn={signIn}>
        <Components.Form id={signUpFormId}>
          <Components.Title>Create Account</Components.Title>
          <Components.Input type='text' placeholder='Name' />
          <Components.Input type='email' placeholder='Email' />
          <Components.Input type='password' id='password' placeholder='Password'/>
          <Components.Input type='password' id={confirmPasswordId} placeholder='Confirm Password' onChange={handleConfirmPasswordChange} />
          {showPasswordMismatchAlert && <Components.Paragraph style={{color: 'red'}}>Passwords do not match</Components.Paragraph>}
          <Components.Input type='text' id={affiliateNumberId} placeholder='Affiliate Number' />
          <Components.Button>Sign Up</Components.Button>
        </Components.Form>
      </Components.SignUpContainer>

      <Components.SignInContainer signinIn={signIn}>
        <Components.Form>
          <Components.Title>Sign in</Components.Title>
          <Components.Input type='email' placeholder='Email' />
          <Components.Input type='password' placeholder='Password' />
          <Components.Anchor href='#'>Forgot your password?</Components.Anchor>
          <Components.Button>Sigin In</Components.Button>
        </Components.Form>
      </Components.SignInContainer>

      <Components.OverlayContainer signinIn={signIn}>
        <Components.Overlay signinIn={signIn}>

          <Components.LeftOverlayPanel signinIn={signIn}>
            <Components.Title>Welcome Back!</Components.Title>
            <Components.Paragraph>
              To keep connected with us please login with your personal info
            </Components.Paragraph>
            <Components.GhostButton onClick={() => toggle(true)}>
              Sign In
            </Components.GhostButton>
          </Components.LeftOverlayPanel>

          <Components.RightOverlayPanel signinIn={signIn}>
            <Components.Title>Hello, Friend!</Components.Title>
            <Components.Paragraph>
              Enter Your personal details and start journey with us
            </Components.Paragraph>
            <Components.GhostButton onClick={() => toggle(false)}>
              Sigin Up
            </Components.GhostButton> 
          </Components.RightOverlayPanel>

        </Components.Overlay>
      </Components.OverlayContainer>
    </Components.Container>
  )
}

export default App;
