import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
// import IconButton from '@material-ui/core/IconButton';
// import MenuIcon from '@material-ui/icons/Menu';
import { Link } from 'react-router-dom'
import { removeCurrentUser } from '../actionCreators/actionCreater'
import { connect } from 'react-redux'
import { useHistory } from "react-router-dom";
import Avatar from '@material-ui/core/Avatar';


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
    avatars: {
        display: 'flex',
        '& > *': {
            margin: theme.spacing(1),
        },
    },
}));

function NewNavBar(props) {
    let history = useHistory();
    const classes = useStyles();
    function logOut() {
        props.removeCurrentUser()
        localStorage.clear()
        history.push("/");
    }

    return (
        <div className={classes.root}>
            <AppBar position="static">

                <Toolbar>
                    <Typography variant="h6" className={classes.title}>
                        MyActivities
                        {props.currentUser ? <Button component={Link} to='/home' color="inherit">Home</Button> : null}
                        {props.currentUser ? <Button component={Link} to='/activities' color="inherit">Activities</Button> : null}
                    </Typography>
                    {props.currentUser ?
                         <Button component={Link} to='/addactivity' color="inherit">Add Activity</Button> : null
                    }
                    {props.currentUser ?
                        <Avatar alt={props.currentUser.username} src={props.currentUser.image} onClick={logOut} /> : null
                    }
                </Toolbar>
            </AppBar>
        </div>
    );
}
export default connect(null, { removeCurrentUser })(NewNavBar)