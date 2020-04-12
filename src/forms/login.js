import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../src/index.css'

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
            <div className='login-form'>
                <div className='wrapper'>
                    <form onSubmit={this.handleSubmit}>
                        <input onChange={this.handleChange} placeholder='Username' type="text" name="username" value={this.state.username} /><br />
                        <input onChange={this.handleChange} placeholder='Passowrd' type="password" name="password" value={this.state.password} /><br />
                        <button>Login</button>
                    </form>
                </div>
            </div >
        )
    }
}

export default Login


