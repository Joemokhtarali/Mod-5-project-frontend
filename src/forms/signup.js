import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

class Signup extends React.Component {

    state = {
        username: '',
        name: '',
        password: '',
        email: '',
        image: ''
    }
    
    handleChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = event => {
        event.preventDefault()
        
        fetch('http://localhost:3000/users', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(this.state)
        }).then(resp => resp.json()).then(response => {if(response.errors){alert(response.errors)}})}
        


    render() {
        console.log(this.state);
        
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label >Name:</label>
                    <input onChange={this.handleChange} type="text" name="name" value={this.state.name}></input><br></br>
                    <label >Username:</label>
                    <input onChange={this.handleChange} type="text" name="username" value={this.state.username}></input><br></br>
                    <label >Password:</label>
                    <input onChange={this.handleChange} type="password" name="password" value={this.state.password}></input><br></br>
                    <label >Email:</label>
                    <input onChange={this.handleChange} type="text" name="email" value={this.state.email}></input><br></br>
                    <label >Image:</label>
                    <input onChange={this.handleChange} type="text" name="image" value={this.state.image}></input><br></br>
                    <button>Signup</button>
                </form>
            </div>
        )
    }
}

export default Signup


