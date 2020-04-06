import React from 'react'
import AddActivity from '../forms/addActivity'
import Activity from '../components/activity'

 
const ActivitiesContainer = (props) => {
    function renderActivities() {
        return props.activities.map(activitiy => <Activity activity={activitiy} key={activitiy.id}/>)
    }
    return (
        <div>
            
            {renderActivities()}

        </div>
    )
}


export default ActivitiesContainer