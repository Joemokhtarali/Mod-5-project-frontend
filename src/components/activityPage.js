import React from 'react'
import { connect } from 'react-redux'

class ActivityPage extends React.Component {
    // componentDidMount() {
    //     fetch(`http://localhost:3000/activities/${this.props.match.params.id}`)
    //     .then(resp => resp.json())
    //     .then(activity => console.log(activity))
    // }


    render() {
        console.log(this.props)
        // console.log('activities', this.props.activites)
        // console.log('RouterProps', this.props)
        return (
            <div></div>
        )
    }
}


export default ActivityPage

