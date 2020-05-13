import React from 'react';
import ReactDOM from 'react-dom';
import GoogleLogin from 'react-google-login';
import { GoogleLogin } from 'react-google-login';
const API = process.env.REACT_APP_GOOGLE_LOGIN_API_KEY


const responseGoogle = (response) => {
    console.log(response); 
}

ReactDOM.render(
    <GoogleLogin 
        clientId={API}
        onSuccess={responseGoogle}
        isSignedIn={true}
        render={renderProps => (
            <button onClick={renderProps.onClick} disabled={renderProps.disabled}>This is my custom Google button</button>
        )}
        buttonText="Login"
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
        cookiePolicy={'single_host_origin'}
    />,
    document.getElementById('googleButton')
);