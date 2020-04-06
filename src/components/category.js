import React from 'react'
import ActivitiesContainer from '../containers/ActivitiesContainer'
import AddActivity from '../forms/addActivity'

class Category extends React.Component {
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
            <div className='category'>
                <h3 >{this.props.category.category_type} </h3>
                <ActivitiesContainer activities={this.props.activities} />
                {this.state.addActivity ? <div><AddActivity /> <button onClick={this.switchAddActivityState}>Close Form</button></div> : <button onClick={this.switchAddActivityState}>Add Activity</button>}
                
            </div >
        )
    }
}


export default Category