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

    render() {
        console.log(this.state.host);

        return (
            <div>
                {this.state.activity && this.state.host ?
                    <div>

                        <h3>{this.state.activity.name}</h3>
                        <h5>Happening on:{this.state.activity.date}</h5>
                        <h4>Created By: {this.state.host.name}</h4>
                        {/* <img src={this.state.host.image} alt='image'></img> */}

                        <img src={this.state.activity.image} height='400px'></img>
                        <h6>Address:{this.state.activity.address}</h6>
                        <p><strong>About: </strong><br/>{this.state.activity.about}</p>


                    </div>
                    : <h2>'Loading!!!'</h2>}
            </div>
        )
    }
}


export default ActivityPage

