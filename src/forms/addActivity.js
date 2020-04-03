import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

class AddActivity extends React.Component {

    state = {
        name: '',
        activityType: '',
        image: '',
        rating: 5,
        user_id: 1,
        category_id: 1
    }
    
    handleChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = event => {
        event.preventDefault()
        
        fetch('http://localhost:3000/activities', {
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
                    <input onChange={this.handleChange} type="text" name="name" value={this.state.name}></input>
                    <label >activityType:</label>
                    <input onChange={this.handleChange} type="text" name="activityType" value={this.state.activityType}></input>
                    <label >Image:</label>
                    <input onChange={this.handleChange} type="text" name="image" value={this.state.image}></input>
                    <button>AddActivity</button>
                </form>
            </div>
        )
    }
}

export default AddActivity


