import React from 'react'
import Activity from '../components/activity'
import '../../src/index.css'

 
const ActivitiesContainer = (props) => {
    function renderActivities() {
        return props.activities.map(activitiy => <Activity activity={activitiy} key={activitiy.id}/>)
    }
    
    return (
        <div className='belt'>            
            {renderActivities()}
        </div>
    ) 
}


export default ActivitiesContainer