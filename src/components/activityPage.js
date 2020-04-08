import React from 'react'
import { connect } from 'react-redux'

class ActivityPage extends React.Component {

    state = {
        activity: null,
        host: null
    }
    componentDidMount() {
        fetch(`http://localhost:3000/activities/${this.props.match.params.id}`)
            .then(resp => resp.json())
            .then(data => this.setState({ activity: data, host: data.user }))
    }
    // const {name, image, activityType, about, date, user_id, category_id, address} = this.state.activity

    render() {
        console.log(this.state);
        
        return (
            <div>
                {this.state.activity && this.state.host?
                    <div>

                        <h3>{this.state.activity.name}</h3>
                        <h5>Happening on:{this.state.activity.date}</h5>

                        <img src={this.state.activity.image} height='400px' ></img>
                        <h4>Created By: {this.state.host.name}</h4> <img src={this.state.host.image} height='100px' ></img>

                    </div>
                    : <h2>'Loading!!!'</h2>}
            </div>
        )
    }
}


export default ActivityPage

