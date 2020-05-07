import React from 'react';
import '../stylesheets/mainPage.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import SignupT from '../forms/signup2';
import LoginT from '../forms/login2';
import Button from '@material-ui/core/Button';
// import Login from '../forms/login';
import Ballon from './airballoon1.mp4'
import { GoogleLogin } from 'react-google-login';

class MainPage extends React.Component {

    state = {
        signupState: true
    }

    changeSingupState = () => {
        this.setState({
            signupState: !this.state.signupState
        })
    }


    render() {
        return (
            <div className='main-page'>

                <video id='video1' autoPlay muted loop >
                    <source src={Ballon} type='video/mp4' />
                </video>
                <div style={{'marginLeft':'6%'}}>
                    {this.state.signupState ? <SignupT /> : <LoginT />}
                    {/* <button onclick={this.changeSingupState}>New Member</button> */}
                </div>
                
                
            </div>

        ) 
    }
}


export default MainPage


// {this.state.signup ? <div className='signup-combo'> <Signup history={this.props.history} /> <h6 className='h6-after-signup'>Member Already</h6> <button className='button-after-signup' onClick={this.changeSingupState}>Login</button></div> :
//                     <div> <Login /> <div className='login-combo' ><h6 className='h6-after-login'>New Member</h6> <button className='button-after-login' onClick={this.changeSingupState}>Sign Up</button> </div>} </div>}