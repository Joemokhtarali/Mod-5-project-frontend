import React from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { useHistory } from "react-router-dom";
import { assignCurrentUser } from '../actionCreators/actionCreater'
import { connect } from 'react-redux'
import FacebookLogin from 'react-facebook-login';
import { GoogleLogin } from 'react-google-login';



const useStyles = makeStyles((theme) => ({
    root: {
        '& .MuiTextField-root': {
            margin: theme.spacing(1),
            width: '25ch',
        },
    },
}));

function SignupT(props) {
    let history = useHistory();
    const classes = useStyles();

    const [username, setusername] = React.useState('');
    const [password, setpassword] = React.useState('');
    const [city, setcity] = React.useState('');
    const [image, setimage] = React.useState('');

    const handleChange1 = (event) => {
        setusername(event.target.value);
    };
    const handleChange2 = (event) => {
        setpassword(event.target.value);
    };
    const handleChange3 = (event) => {
        setcity(event.target.value);
    };
    const handleChange4 = (event) => {
        setimage(event.target.value);
    };

    function handleSubmit(event) {

        event.preventDefault()
        let data = { username: username, password: password, image: image, city: city }
        fetch('http://localhost:3000/signup', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        }).then(resp => resp.json()).then(response => {
            if (response.errors) { alert(response.errors) } else {
                props.assignCurrentUser(response) 
                
                history.push("/categories");
                localStorage.user_id = response.id
            }
        })
    }

    const responseGoogle = (response) => {
        console.log(response);
    }

    const responseFacebook = (response) => {
        // console.log(response);
    }


    return (
        <div>
            <div>
                <FormControl className={classes.margin}>
                    <TextField
                        required
                        id="standard-required"
                        label="Username"
                        placeholder='Username'
                        value={username}
                        onChange={handleChange1}
                    />
                    <TextField
                        required
                        id="standard-password-input"
                        label="Password"
                        type="password"
                        autoComplete="current-password"
                        value={password}
                        onChange={handleChange2}
                    />
                    <TextField
                        required
                        id="standard-required"
                        label="City"
                        placeholder='City'
                        value={city}
                        onChange={handleChange3}
                    />
                    <TextField
                        required
                        id="standard"
                        label="Image Url"
                        placeholder='Image Url'
                        value={image}
                        onChange={handleChange4}
                    />
                    <Button onClick={handleSubmit}>Signup</Button>

                    <Button >Already Member</Button>
                    <div>


                        {/* <FacebookLogin
                        
                        autoLoad={true}
                        fields="name,email,picture"
                        // onClick={componentClicked}
                        callback={responseFacebook}
                        cssClass="my-facebook-button-class"
                        icon="fa-facebook"
                    /> */}

                    </div>

                </FormControl>

            </div>
            <div>
                {/* <GoogleLogin
                    
                    buttonText="Login"
                    onSuccess={responseGoogle}
                    onFailure={responseGoogle}
                    cookiePolicy={'single_host_origin'}
                /> */}
            </div>
        </div>
    );
}

export default connect(null, { assignCurrentUser })(SignupT)



// facebook funcs

//check if logged in 
// FB.getLoginStatus(function(response) {
//     statusChangeCallback(response);
// });

// function checkLoginState() {
//     FB.getLoginStatus(function(response) {
//       statusChangeCallback(response);
//     });
//   }


{/* <script>
  window.fbAsyncInit = function() {
    FB.init({
      appId      : '{your-app-id}',
      cookie     : true,
      xfbml      : true,
      version    : '{api-version}'
    });
      
    FB.AppEvents.logPageView();   
      
  };

  (function(d, s, id){
     var js, fjs = d.getElementsByTagName(s)[0];
     if (d.getElementById(id)) {return;}
     js = d.createElement(s); js.id = id;
     js.src = "https://connect.facebook.net/en_US/sdk.js";
     fjs.parentNode.insertBefore(js, fjs);
   }(document, 'script', 'facebook-jssdk'));
</script> */}