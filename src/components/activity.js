import React from 'react'
import { connect } from 'react-redux'
import Chatroom from './chatroom'
import EditActivity from '../forms/editActivity'
import { fetchDeleteActivityCreator } from '../actionCreators/actionCreater'
import { Link } from 'react-router-dom'

class Activity extends React.Component {

    componentDidMount() {
        if (!this.props.activity.chatrooms) {
            console.log(this.props.activity.chatrooms);
        } else {
            console.log(this.props.activity.chatrooms);
        }
    }

    state = {
        editActivityState: false
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
        // debugger
        let id = this.props.activity.id
        this.props.fetchDeleteActivityCreator(id)
    }


    render() {

        return (
            <div className='activity'>
                <Link key={this.props.id} to={`/activities/${this.props.activity.id}`}>{this.props.activity.name}</Link>
                {/* <Link to=`/activities/${}`><p>{this.props.activity.name}</p></Link> */}
                {/* <Chatroom /> */}
                {this.props.currentUser.id === this.props.activity.user_id ? null : <button onClick={this.joinActivity} >Join Activity</button>}

                {this.props.currentUser.id === this.props.activity.user_id ? <div><button onClick={this.switchEditActivityState}>Edit Activity</button> <button onClick={this.deleteActivity}>Delete Activity</button></div> : null}
                {this.state.editActivityState ? <div><EditActivity activity={this.props.activity} /> <button onClick={this.switchEditActivityState}>Close Form</button> </div> : null}
            </div>
        )
    }
}

const msp = (state) => {
    return {
        currentUser: state.currentUser
    }
}

export default connect(msp, { fetchDeleteActivityCreator })(Activity)