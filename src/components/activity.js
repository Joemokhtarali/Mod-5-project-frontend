import React from 'react'
import { connect } from 'react-redux'
import Chatroom from './chatroom'
import EditActivity from '../forms/editActivity'

class Activity extends React.Component {

    state = {
        editActivity: false
    }

    switchEditActivityState = () => {
        this.setState({
            switchEditActivityState: !this.state.switchEditActivityState
        })
    }

    joinActivity = () => {
        let data = {user_id: this.props.currentUser, activity_id: this.props.activity.id}
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

                {/* {this.state.start ?
                 null : this.state.currentUser ? 
                (<div>  <Instructions /> <Button onClick={this.initiateGame}> Start New Game </Button></div>) : <Instructions />} */}

                {this.props.currentUser.id === this.props.activity.user_id ? <button onClick={this.switchEditActivityState}>Edit Activity</button> : null
                ? <EditActivity /> : <button onClick={this.switchEditActivityState}>Edit Activity</button>
                }

                {/* {this.switchEditActivityState ? <EditActivity /> : <button onClick={this.switchEditActivityState}>Edit Activity</button>} */}
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