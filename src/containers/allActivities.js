import React from 'react'

class AllActivities extends React.Component {
    render() {  
        return (
            <div>
               {this.props.renderActivtites()}
            </div>
        )
    }
}

export default AllActivities