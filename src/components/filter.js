import React from 'react'
import Button from '@material-ui/core/Button';
// import DatePicker from "react-datepicker";

class Filter extends React.Component {

    state = {
        selectedDate: new Date()
    }

    render() {
        return (
            <div style={{ 'margin-right': '120px', 'margin-left': '100px' }}>
                <Button >Filter</Button>
                <select onChange={this.props.SelectCategory}>
                    <option value="All">All</option>
                    <option value="Beach">Beach</option>
                    <option value="Sports">Sports</option>
                    <option value="Nature">Nature</option>
                    <option value="Art galleries and Museums">Art galleries and Museums</option>
                </select> 
                {/* <Button onClick={() => {}}>Pick Date</Button>
                <DatePicker selected={this.selectedDate} value={this.selectedDate} onChange={this.props.handleDateChange} /> */}

            </div>
        )
    }
}

export default Filter