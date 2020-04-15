import React from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import NativeSelect from '@material-ui/core/NativeSelect';
import InputBase from '@material-ui/core/InputBase';
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

                history.push("/home");
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
                <Button onclick={props.changeSingupState}>Already a Member</Button>
            </FormControl>


            {/* <FormControl className={classes.margin}>
        <InputLabel id="demo-customized-select-label">username</InputLabel>
        <Select
          labelId="demo-customized-select-label"
          id="demo-customized-select"
          value={username}
          onChange={handleChange}
          input={<BootstrapInput />}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>
      <FormControl className={classes.margin}>
        <InputLabel htmlFor="demo-customized-select-native">Age</InputLabel>
        <NativeSelect
          id="demo-customized-select-native"
          value={username}
          onChange={handleChange}
          input={<BootstrapInput />}
        >
          <option aria-label="None" value="" />
          <option value={10}>Ten</option>
          <option value={20}>Twenty</option>
          <option value={30}>Thirty</option>
        </NativeSelect>
      </FormControl> */}
        </div>
    );
}

export default connect(null, { assignCurrentUser })(SignupT)