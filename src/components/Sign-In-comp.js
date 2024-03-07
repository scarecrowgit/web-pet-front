import './Sign-In-comp.css';
import React from 'react';

class SignInComp extends React.Component {
    render() {
      return (
        <body>
            <div className='mainContainer'>
                <div className='heading-container'>
                    <h1 id="heading">SIGN IN</h1>
                </div>
                <div className='InputFieldsContainer'>
                    <div className='usernameField'>
                        <div className='userIField'>
                            <p id="usernamePlaceholder">username</p>
                        </div>
                    </div>
                    <div className='passwordField'>
                        <div className='passwordIField'>
                            <p id="passwordPlaceholder">password</p>
                        </div>
                    </div>
                </div>
            </div>
        </body>
      );
    }
  }

  export default SignInComp;