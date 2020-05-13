import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { useHistory } from "react-router-dom";
import { assignCurrentUser } from '../actionCreators/actionCreater'
import { connect } from 'react-redux'

const useStyles = makeStyles((theme) => ({
    root: {
        '& .MuiTextField-root': {
            margin: theme.spacing(1),
            width: '25ch',
        },
    },
}));

function LoginT(props) {
    let history = useHistory();
    const classes = useStyles();
    const [username, setusername] = React.useState('');
    const [password, setpassword] = React.useState('');

    const handleChange1 = (event) => {
        setusername(event.target.value);
    };
    const handleChange2 = (event) => {
        setpassword(event.target.value);
    };


    function handleSubmit(event) {
        event.preventDefault()
        let data = { username: username, password: password }
        
        fetch('http://localhost:3000/login', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify(data)
 
        }).then(res => res.json())
            .then(response => {
                if (response.errors) {
                    alert(response.errors)
                } else {
                    props.assignCurrentUser(response)
                    history.push("/activities");
                    localStorage.user_id = response.id
                }
            })
    }
    return (
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
                <Button onClick={handleSubmit}>Login</Button>
                
            </FormControl>
        </div>
    );
}

export default connect(null, { assignCurrentUser })(LoginT)