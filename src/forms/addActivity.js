import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { connect } from 'react-redux'


class AddActivity extends React.Component {

    state = {
        name: '',
        activityType: '',
        image: '',
        about: '',
        date: new Date(),
        rating: 5,
        user_id: 1,
        category_id: 1,
        address: ''
    }

    handleChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleDateChange = selectedDate => {
        this.setState({
            date: selectedDate
        });
    };

    handleSubmit = event => {
        event.preventDefault()
        let data = { ...this.state, category_id: parseInt(this.state.category_id) }

        console.log('fetching', data)
        fetch('http://localhost:3000/activities', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        }).then(resp => resp.json())
            .then(response => { if (response.errors) { alert(response.errors) } })
    }

    // selectOptionsFunction = () => {
    //     let newSelect = document.createElement('select')
    //     newSelect.name="category_id" 
    //     newSelect.value= this.state.value
    //     newSelect.onChange= this.handleChange

    //     for (let i = 0; i <= this.props.categories; i++) {
    //         let category = this.props.categories[i]
    //         let opt = document.createElement("option");
    //         opt.value = i + 1;
    //         opt.innerText = category.name.toUpperCase(); // whatever property it has

    //         newSelect.appendChild(opt);
    //         return opt
    //     }

    // }


    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label >Name:</label>
                    <input onChange={this.handleChange} type="text" name="name" value={this.state.name}></input>
                    <label >ActivityType:</label>
                    <input onChange={this.handleChange} type="text" name="activityType" value={this.state.activityType}></input>
                    <label >Address:</label>
                    <input onChange={this.handleChange} type="text" name="address" value={this.state.address}></input>
                    <label >Image:</label>
                    <input onChange={this.handleChange} type="text" name="image" value={this.state.image}></input>
                    <label >Info:</label>
                    <input onChange={this.handleChange} type="text" name="about" value={this.state.about}></input>
                    <label >Choose a Category:</label>
                    <select name="category_id" value={this.state.value} onChange={this.handleChange}>
                        <option value="1">Theaters</option>
                        <option value="2">Sports</option>
                        <option value="3">Nature</option>
                        <option value="4">Art galleries and Museums</option>
                    </select>
                    <label >Date:</label>
                    <DatePicker selected={this.state.date} value={this.state.date} onChange={this.handleDateChange} />
                    {/* showTimeSelect dateFormat="Pp" */}
                    <button>AddActivity</button>
                </form>
            </div>
        )
    }
}

const msp = (state) => {
    return {
       categories: state.categories 
    }
}

export default connect(msp)(AddActivity)


