import React from 'react'
import Activity from '../components/activity'
import './ActivitiesPage.css'

class AllActivities extends React.Component {

    renderActivities = () => {
        return (
            <div className='activities-page'> 
                {this.props.activities.map((activity, index) =>
                    <div className='activity-box' >
                        <Activity index={index} key={activity.id} activity={activity} history={this.props.history} />
                    </div>
                )}
            </div>
        )
    }
    render() {
        return (
            <div> {this.props.activities ?
                <div>{this.renderActivities()}</div> : null}</div>

        )
    }
}

export default AllActivities