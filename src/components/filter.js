import React from 'react'
import DatePicker from "react-datepicker";
import Button from '@material-ui/core/Button';

class Filter extends React.Component {
    // value={this.state.value} onChange={this.handleChange}
    state = {
        selectedDate: new Date()
    }

    render() {
        return (
            <div style={{'margin-right':'120px', 'margin-left':'200px'}}>
                <Button>Filter:</Button>
                <select onChange={this.props.SelectCategory}>
                    <option value="All">All</option>
                    <option value="Beach">Beach</option>
                    <option value="Sports">Sports</option>
                    <option value="Nature">Nature</option>
                    <option value="Art galleries and Museums">Art galleries and Museums</option>
                </select>
                <Button>Pick Date:</Button>
                <DatePicker selected={this.selectedDate} value={this.selectedDate} onChange={this.props.handleDateChange} />

            </div>
        )
    }
}

export default Filter