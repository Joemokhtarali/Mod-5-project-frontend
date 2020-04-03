import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

class Login extends React.Component {

    state = {
        username: '',
        password: '',
        confirmPassword: '',
    }
    
    handleChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = event => {
        event.preventDefault()

        }
        


    render() {
        
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label >Username:</label>
                    <input onChange={this.handleChange} type="text" name="username" value={this.state.username}></input><br></br>
                    <label >Password:</label>
                    <input onChange={this.handleChange} type="password" name="password" value={this.state.password}></input><br></br>
                    <label >Confirm Password:</label>
                    <input onChange={this.handleChange} type="password" name="password" value={this.state.confirmPassword}></input><br></br>
                    <button>Login</button>
                </form>
            </div>
        )
    }
}

export default Login


