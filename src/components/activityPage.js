import React from 'react'
import { connect } from 'react-redux'
import { fetchDeleteActivityCreator } from '../actionCreators/actionCreater'
import EditActivityT from '../forms/editActivity2'
import Map from './map'
import Chatroom from './chatroom'
import { Link } from 'react-router-dom'
import Button from '@material-ui/core/Button';


class ActivityPage extends React.Component {

    state = {
        activity: null,
        location: {},
        host: null,
        participants: [], // represnts the user from user_id of that join
        editActivityState: false,
        users: [],
        chatroom: null,
        startChat: false
    }


    componentDidMount() {
        fetch(`http://localhost:3000/activities/${this.props.match.params.id}`)
            .then(resp => resp.json())
            .then(data => this.setState({ activity: data, host: data.user, participants: data.participants, users: data.users, chatroom: data.chatroom }))
    }


    switchEditActivityState = () => {
        this.setState({
            editActivityState: !this.state.editActivityState
        })
    }

    joinActivity = () => {
        fetch('http://localhost:3000/participants', {
            method: 'Post',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ user_id: this.props.currentUser.id, activity_id: this.state.activity.id })
        }).then(resp => resp.json())
            .then(response => {
                if (response.errors) { alert(response.errors) } else {
                    this.setState({ users: [...this.state.users, this.props.currentUser] })
                }
            })
    }

    deleteActivity = () => {
        let id = this.state.activity.id
        this.props.fetchDeleteActivityCreator(id)
        this.props.history.push('/home')
    }



    startChatFunc = () => {
        this.setState({ startChat: !this.state.startChat })
        fetch('http://localhost:3000/chatrooms', {
            method: 'Post',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ activity_id: this.state.activity.id })
        }).then(resp => resp.json())
            .then(response => {
                if (response.errors) { alert(response.errors) } else {
                    this.setState({ chatroom: response })
                    console.log('response', response)

                }
            })
    }


    render() {
        return (
            <div>

                {this.state.activity ?
                    <div>
                        <h3>{this.state.activity.name}</h3>
                        <h5>Happening on:{this.state.activity.date}</h5>
                        <h4>Created By: {this.state.host.name}</h4>
                        <img src={this.state.activity.image} height='400px'></img>
                        <h6>{this.state.activity.address}</h6>
                        <p><strong>About: </strong><br />{this.state.activity.about}</p>

                        {this.props.currentUser && this.props.currentUser.id === this.state.host.id ?
                        <div><Button onClick={this.switchEditActivityState} >Edit Activity</Button>  <Button onClick={this.deleteActivity}>Delete Activity</Button></div> : null
                            // <div><button onClick={this.switchEditActivityState}>Edit Activity</button> <button onClick={this.deleteActivity}>Delete Activity</button></div> : null
                        }
                    
                        {this.state.editActivityState ? <div><EditActivityT activity={this.state.activity} currentUser={this.props.currentUser} /> <Button onClick={this.switchEditActivityState}>Go Back</Button> </div> : null}
                        {this.props.currentUser.id === this.state.host.id || this.state.users.some(user => user.id === this.props.currentUser.id) ? null : <button onClick={this.joinActivity}>Join Activity</button>}
                        <br />
                        {this.state.chatroom ? <Chatroom chatroom={this.state.chatroom} currentUser={this.props.currentUser} participants={this.state.participants} /> : <button onClick={this.startChatFunc}>Start Chat</button>}

                        <div height='400' width='400'>
                            <Map activity={this.state.activity} />
                        </div>
                    </div>
                    : <h2>'Please Login or Signup first to see!!!'</h2>
                }
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


