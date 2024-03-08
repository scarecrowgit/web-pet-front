import './Sign-In-comp.css';
import React, {useState} from 'react';


const SignInComp = () => {
    const [username, setusername] = useState('');
    const [password, setpassword] = useState('');

    const handleUsernameChange = (e) => {
        setusername(e.target.value);
      };

    const handlePasswordChange = (e) => {
        setpassword(e.target.value);
    };
    
    
    return (
    <body>
        <div className='mainContainer'>
            <div className='heading-container'>
                <h1 id="heading">SIGN IN</h1>
            </div>
            <div className='InputFieldsContainer'>
                <div className='usernameField'>
                    <div className='userIField'>
                        <input type="text" value = { username } id="username" onChange={handleUsernameChange}/>
                        {username === '' && (
                            <p id="usernamePlaceholder">{'username'}</p>
                        )}
                    </div>
                </div>
                <div className='passwordField'>
                    <div className='passwordIField'>
                        <input type="text" value = { password } id="password" onChange={handlePasswordChange}/>
                        {password === '' && (
                            <p id="passwordPlaceholder">{'password'}</p>
                        )}
                    </div>
                </div>
            </div>
            <div className='buttonContainer'>
                
            </div>
        </div>
    </body>
    );
  }

  export default SignInComp;