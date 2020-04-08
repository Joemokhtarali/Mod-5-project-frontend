import React from 'react'
import Activity from '../components/activity'
import ActivityPage from '../components/activityPage'
import { BrowserRouter as Route } from 'react-router-dom'

 
const ActivitiesContainer = (props) => {
    function renderActivities() {
        return props.activities.map(activitiy => <Activity activity={activitiy} key={activitiy.id}/>)
    }
    
    return (
        <div>            
            {/* <Route exact path='/:id' component={ActivityPage}/> */}
            {renderActivities()}
        </div>
    ) 
}


export default ActivitiesContainer