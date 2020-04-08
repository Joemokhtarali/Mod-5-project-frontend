import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

class Login extends React.Component {

    state = {
        username: '',
        password: '',
    }

    handleChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = event => {
        event.preventDefault()
        fetch('http://localhost:3000/login', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify(this.state)

        }).then(res => res.json())
            .then(response => {
                if (response.errors) {
                    alert(response.errors)
                } else {
                    this.props.setUser(response)
                    this.props.history.push('/home')
                }
            })
        this.setState({ username: '', password: '' })
    }



    render() {

        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label >Username:</label>
                    <input onChange={this.handleChange} type="text" name="username" value={this.state.username}></input><br></br>
                    <label >Password:</label>
                    <input onChange={this.handleChange} type="password" name="password" value={this.state.password}></input><br></br>
                    <button>Login</button>
                </form>
            </div>
        )
    }
}

export default Login


