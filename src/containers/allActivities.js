import React from 'react'
import { Link } from 'react-router-dom'
import Activity from '../components/activity'

class AllActivities extends React.Component {

    // renderActivtites = () => {
    //     return this.props.activities.map((activity, index) => <Activity index={index} key={activity.id} activity={activity} />)
    // }

    render() { 
        return (
            <div>
               {this.props.renderActivtites()}
            </div>
        )
    }
}

export default AllActivities