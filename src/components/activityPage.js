import React from 'react'
import { connect } from 'react-redux'
import { fetchDeleteActivityCreator } from '../actionCreators/actionCreater'
import EditActivityT from '../forms/editActivity2'
import Map from './map'
import Chatroom from './chatroom'
import { Link } from 'react-router-dom'
import Button from '@material-ui/core/Button';
import './activityPage.css'
import ChatroomT from './chatroom2'


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
        this.props.history.push('/activities')
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
        console.log(this.props.match.params.id, 'this.props.match.params.id');
        console.log(this.state.host);


        return (
            <div className='main' id='1'>

                {this.state.activity ?
                    <div id='2'>

                        {this.state.host ?
                            <div className='profile'>
                                <img className='image' src={this.state.activity.image}></img>
                                <div className='name'>{this.state.activity.name}</div>
                                <div className='address'>Address: {this.state.activity.address}</div>
                                <div className='date'>Happening on:{this.state.activity.date}</div>
                                <div className='date'>Created By: {this.state.host.username}</div>
                                <div className='date'>About: {this.state.activity.about}</div>
                                <div className='buttons'>

                                    {this.state.editActivityState ? <div><EditActivityT activity={this.state.activity} currentUser={this.props.currentUser} /> <Button onClick={this.switchEditActivityState}>Go Back</Button> </div> : null}
                                    {this.props.currentUser && this.props.currentUser.id === this.state.host.id ?
                                        <div><Button onClick={this.switchEditActivityState} >Edit Activity</Button>  <Button onClick={this.deleteActivity}>Delete Activity</Button></div> : null}
                                </div>
                            </div>
                            : <div></div>}
                        <div className='profile'>
                            <Map activity={this.state.activity} />
                        </div>
                        <div className='profile'>
                            {this.state.chatroom ? <Chatroom chatroom={this.state.chatroom} currentUser={this.props.currentUser} participants={this.state.participants} /> : <Button onClick={this.startChatFunc}>Start Chat</Button>}
                        </div>
                            {/* <ChatroomT chatroom={this.state.chatroom} currentUser={this.props.currentUser} participants={this.state.participants} /> */}
                    </div>


                    : <div></div>
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


