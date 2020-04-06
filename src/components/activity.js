import React from 'react'
import { connect } from 'react-redux'
import Chatroom from './chatroom'
import EditActivity from '../forms/editActivity'

class Activity extends React.Component {

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


    render() {
        
        return (
            <div className='activity'>
                <p>{this.props.activity.name}</p>
                {/* <Chatroom /> */}
                {this.props.currentUser.id === this.props.activity.user_id ? null : <button onClick={this.joinActivity} >Join Activity</button>}

                {this.props.currentUser.id === this.props.activity.user_id ? <button onClick={this.switchEditActivityState}>Edit Activity</button> : null}
                {this.state.editActivityState ? <div><EditActivity activity={this.props.activity}/> <button onClick={this.switchEditActivityState}>Close Form</button> </div>: null}
            </div>
        )
    }
}

const msp = (state) => {
    return {
        currentUser: state.currentUser
    }
}

export default connect(msp)(Activity)