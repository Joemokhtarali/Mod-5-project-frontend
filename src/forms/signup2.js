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

                history.push("/activities");
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
                        label="Zip code"
                        placeholder='Zipcode'
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
                </FormControl>

            </div>

        </div>
    );
}

export default connect(null, { assignCurrentUser })(SignupT)
// note