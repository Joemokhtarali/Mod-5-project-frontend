import React from 'react'
import Activity from '../components/activity' 
import '../../src/index.css'
 

class ActivitiesContainer extends React.Component {

    state = {
        startIdx: 0
    }
   

    changeIndex = () => {
        let newIndex = this.state.startIdx + 5;
        if (newIndex > this.props.activities.length - 1) {
            newIndex = 0
        }
        this.setState({
            startIdx: newIndex
        })
    }


    renderActivities() {
        let { startIdx } = this.state
        let fiveActivities = this.props.activities.slice(startIdx, startIdx + 5)
        return fiveActivities.map((activitiy, index) => <Activity activity={activitiy} key={activitiy.id} index={index} />)
    }

    render() {


        return (
            <div className='activity-container'>
                {this.renderActivities()}
                <button className='next-button' color='inherit' onClick={this.changeIndex} >Next</button>
            </div>
        )
    }
}


export default ActivitiesContainer