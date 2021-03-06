import React from 'react';
import '../stylesheets/mainPage.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import SignupT from '../forms/signup2';
import LoginT from '../forms/login2';
import Button from '@material-ui/core/Button';
import Ballon from '../media/airballoon1.mp4'
import { connect } from 'react-redux'

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

                {!this.props.currentUser ?
                    <div style={{ 'marginLeft': '6%' }}>
                        {(this.state.signupState) ?
                            <div>
                                <SignupT />
                                <Button onClick={this.changeSingupState}>Alread Member</Button>
                            </div>
                            : <div>
                                <LoginT />
                                <Button onClick={this.changeSingupState}>New Member</Button>
                            </div>}

                    </div>
                    : null}
                <div className='intro'>
                    <h4 className='h4'>Welcome to My Activities!</h4>
                    <h4 className='h4'>Join current Activities or Create one!</h4>
                    <h4 className='h4'>Meet people and make friends!</h4>
                </div>
                <div>

                </div>

            </div>

        )
    }
}

const msp = (state) => {
    return {
        currentUser: state.currentUser
    }
}

export default connect(msp)(MainPage)


// {this.state.signup ? <div className='signup-combo'> <Signup history={this.props.history} /> <h6 className='h6-after-signup'>Member Already</h6> <button className='button-after-signup' onClick={this.changeSingupState}>Login</button></div> :
//                     <div> <Login /> <div className='login-combo' ><h6 className='h6-after-login'>New Member</h6> <button className='button-after-login' onClick={this.changeSingupState}>Sign Up</button> </div>} </div>}