import React from 'react'

class AllActivities extends React.Component {

    // renderActivtites = () => {
    //     return this.props.activities.map((activity, index) => <Activity index={index} key={activity.id} activity={activity} />)
    // }

    render() { 
        // console.log(this.props);
        
        return (
            <div>
               {this.props.renderActivtites()}
            </div>
        )
    }
}

export default AllActivities