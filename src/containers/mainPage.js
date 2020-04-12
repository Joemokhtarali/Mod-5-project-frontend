import React from 'react';
import '../stylesheets/mainPage.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Signup from '../forms/signup';
import Login from '../forms/login';


class MainPage extends React.Component {

    state = {
        signup: true
    }

    changeSingupState = () => {
        this.setState({
            signup: !this.state.signup
        })
    }

    
    render() {
        return (
            <div className='main-page'>
                <p>MyActivities is here to help members all over the world to try new things with members who could be locals or tourists</p>
                <p>The World is waiting...Let's Do Activities</p>
                {this.state.signup ? <div className='signup-combo'> <Signup /> <h6 className='h6-after-signup'>Member Already</h6> <button className='button-after-signup' onClick={this.changeSingupState}>Login</button></div> : 
                <div> <Login /> <div className='login-combo' ><h6 className='h6-after-login'>New Member</h6> <button className='button-after-login' onClick={this.changeSingupState}>Sign Up</button> </div>} </div>}
                
            </div>
        )
    }
}


export default MainPage


