import React from 'react'
import { connect } from 'react-redux'
import { fetchDeleteActivityCreator } from '../actionCreators/actionCreater'
import EditActivity from '../forms/editActivity'
import { Link } from 'react-router-dom'
import Map from './map'
import ChatRoomT from './chatRoomTest'





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
        // debugger
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

    renderParticipants = () => {
        return this.state.participants.map(p => <Link><image src={p.image} height='100px' alt='' /></Link>)
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
                }
            })
    }


    render() {
        // console.log('location', this.state.activity.address);
        return (

            <div>
                {this.state.activity && this.state.host ?
                    <div>
                        <h3>{this.state.activity.name}</h3>
                        <h5>Happening on:{this.state.activity.date}</h5>
                        <h4>Created By: {this.state.host.name}</h4>
                        <img src={this.state.activity.image} height='400px'></img>
                        <h6>Address:{this.state.activity.address}</h6>
                        <p><strong>About: </strong><br />{this.state.activity.about}</p>

                        {this.props.currentUser.id === this.state.host.id ?
                            <div><button onClick={this.switchEditActivityState}>Edit Activity</button> <button onClick={this.deleteActivity}>Delete Activity</button></div> : null
                        }
                        {this.state.editActivityState ? <div><EditActivity activity={this.state.activity} /> <button onClick={this.switchEditActivityState}>Close Form</button> </div> : null}
                        {this.props.currentUser.id === this.state.host.id || this.state.users.some(user => user.id === this.props.currentUser.id) ? null : <button onClick={this.joinActivity}>Join Activity</button>}
                        <br />
                        {this.state.chatroom ? <ChatRoomT chatroom={this.state.chatroom} currentUser={this.props.currentUser} participants={this.state.participants}/> : <button onClick={this.startChatFunc}>Start Chat</button>}

                        <div height='400' width='400'>
                            <Map activity={this.state.activity} />
                        </div>
                    </div>
                    : <h2>'Loading!!!'</h2>
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


