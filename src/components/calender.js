import React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
 
// CSS Modules, react-datepicker-cssmodules.css
// import 'react-datepicker/dist/react-datepicker-cssmodules.css';
 
class Calender extends React.Component {
  state = {
    startDate: new Date()
  };
 
  handleChange = date => {
    this.setState({
      startDate: date
    });
  };
 
  render() {
    return (
      <div>
      <DatePicker
        selected={this.state.startDate}
        onChange={this.handleChange}
        // showTimeSelect
        // dateFormat="Pp"
      />
      <button onSubmit={()=>{}}>Submit</button>
      </div>
    );
  }
}

export default Calender