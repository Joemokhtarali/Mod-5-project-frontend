import React from 'react';
import '../stylesheets/mainPage.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import SignupT from '../forms/signup2';
import Login2 from '../forms/login2';
// import Login from '../forms/login';


class MainPage extends React.Component {

    state = {
        signup: false
    }

    changeSingupState = () => {
        this.setState({
            signup: !this.state.signup
        })
    }


    render() {
        console.log(this.state.signup);
        
        return (
            <div className='main-page'>
                
                <video id='video1' autoPlay muted loop >
                    <source src='https://vod-progressive.akamaized.net/exp=1586918597~acl=%2A%2F1496953608.mp4%2A~hmac=f160bbf7e0c94ae3813ca89e3dd0c1e7a870e18db7e303dbd52f0efbdd4b5f73/vimeo-prod-skyfire-std-us/01/2747/14/363737105/1496953608.mp4' type='video/mp4' />
                </video>
                {this.state.signup ? <SignupT changeSingupState={this.changeSingupState}/> : <Login2 changeSingupState={this.changeSingupState}/>}

            </div>
        )
    }
}


export default MainPage


// {this.state.signup ? <div className='signup-combo'> <Signup history={this.props.history} /> <h6 className='h6-after-signup'>Member Already</h6> <button className='button-after-signup' onClick={this.changeSingupState}>Login</button></div> :
//                     <div> <Login /> <div className='login-combo' ><h6 className='h6-after-login'>New Member</h6> <button className='button-after-login' onClick={this.changeSingupState}>Sign Up</button> </div>} </div>}