import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../src/index.css'

class Signup extends React.Component {

    state = {
        username: '',
        name: '',
        password: '',
        email: '',
        image: '',
        city: ''
    }

    handleChange = event => {
        this.setState({ [event.target.name]: event.target.value })
    }

    handleSubmit = event => {
        event.preventDefault()

        fetch('http://localhost:3000/signup', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(this.state)
        }).then(resp => resp.json()).then(response => {
            if (response.errors) { alert(response.errors) } else {
                this.props.setUser(response)
                this.props.history.push('/home')
            }
        })
    }



    render() {
        return (
            <div className='form-box'>
                <div className='wrapper'>
                    <form onSubmit={this.handleSubmit}>
                        <input onChange={this.handleChange} placeholder='Name' type="text" name="name" value={this.state.name}></input><br />
                        <input onChange={this.handleChange} placeholder='Username' type="text" name="username" value={this.state.username}></input><br />
                        <input onChange={this.handleChange} placeholder='City' type="text" name="city" value={this.state.city}></input><br />
                        <input onChange={this.handleChange} placeholder='Password' type="password" name="password" value={this.state.password}></input><br />
                        <input onChange={this.handleChange} placeholder='Email' type="text" name="email" value={this.state.email}></input><br />
                        <input onChange={this.handleChange} placeholder='Image' type="text" name="image" value={this.state.image}></input><br />
                        <button style={{margin:'4px'}}>Signup</button>
                    </form>
                </div>
            </div>
        )
    }
}

export default Signup


