import React from 'react'
import Activity from '../components/activity' 
import '../../src/index.css'
 

class ActivitiesContainer extends React.Component {

    state = {
        startIdx: 0
    }
   

    changeIndex = () => {
        let newIndex = this.state.startIdx + 4;
        if (newIndex > this.props.activities.length - 1) {
            newIndex = 0
        }
        this.setState({
            startIdx: newIndex
        })
    }


    renderActivities() {
        let { startIdx } = this.state
        let fiveActivities = this.props.activities.slice(startIdx, startIdx + 4)
        return fiveActivities.map((activitiy, index) => <Activity history={this.props.history} activity={activitiy} key={activitiy.id} index={index} />)
    }

    render() {
// console.log('activities cont' ,this.props.history);


        return (
            <div className='activity-container'>
                {this.renderActivities()}
                <button className='next-button' color='inherit' onClick={this.changeIndex} >Next</button>
            </div>
        )
    }
}


export default ActivitiesContainer 