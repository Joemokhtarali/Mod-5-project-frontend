import React from 'react'
import { connect } from 'react-redux'
import { fetchDeleteActivityCreator } from '../actionCreators/actionCreater'
import EditActivity from '../forms/editActivity'
import { Link } from 'react-router-dom' 

class ActivityPage extends React.Component {

    state = {
        activity: null,
        host: null,
        participants: [],
        editActivityState: false,
    }
    componentDidMount() {
        fetch(`http://localhost:3000/activities/${this.props.match.params.id}`)
            .then(resp => resp.json())
            .then(data => this.setState({ activity: data, host: data.user, participants: data.participants}))
    }

    switchEditActivityState = () => {
        this.setState({
            editActivityState: !this.state.editActivityState
        })
    }

    joinActivity = () => {
        let data = { user_id: this.props.currentUser, activity_id: this.props.activity.id }
        fetch('http://localhost:3000/participants', {
            method: 'Post',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        }).then(resp => resp.json())
            .then(response => { if (response.errors) { alert(response.errors) } })
    }

    deleteActivity = () => {
        let id = this.state.activity.id
        this.props.fetchDeleteActivityCreator(id)
        this.props.history.push('/home')
    }

    render() {
        console.log(this.state);
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
                        <p><strong>About: </strong><br />{this.state.activity.about}</p>
                        {this.props.currentUser.id === this.state.host.id ? <div><button onClick={this.switchEditActivityState}>Edit Activity</button> <button onClick={this.deleteActivity}>Delete Activity</button></div> : null}
                        {this.state.editActivityState ? <div><EditActivity activity={this.state.activity} /> <button onClick={this.switchEditActivityState}>Close Form</button> </div> : null}

                    </div>
                    : <h2>'Loading!!!'</h2>}
            </div>
        )
    }
}
const msp = (state) => {
    return {
        currentUser: state.currentUser
    }
}

export default connect(msp, { fetchDeleteActivityCreator })(ActivityPage)


