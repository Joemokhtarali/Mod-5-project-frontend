import React from 'react'
import CateogriesContainer from './categoriesContainer'
import AddActivity from '../forms/addActivity'

class Home extends React.Component {
    state = {
        addActivity: false
    }
    
    switchAddActivityState = () => {
        this.setState({
            addActivity: !this.state.addActivity
        })
    }

    render() {
        return (
            <div>
                {/* <h2>Slides Of Categories</h2>
                <h2>Browse By Category</h2> */}
                <CateogriesContainer /> 
                {this.state.addActivity ? <div><AddActivity /> <button onClick={this.switchAddActivityState}>Close Form</button></div> : <button onClick={this.switchAddActivityState}>Add Activity</button>}
            </div>
        )
    }
}

export default Home