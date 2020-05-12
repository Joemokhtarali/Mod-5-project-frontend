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
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography'
import Avatar from '@material-ui/core/Avatar';
import { makeStyles } from '@material-ui/core/styles';



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
    parseDate = (input) => {
        // var parts = input.match(/(\d+)/g);
        // // new Date(year, month [, date [, hours[, minutes[, seconds[, ms]]]]])
        // return new Date(parts[0], parts[1]-1, parts[2]); // months are 0-based
        let date = input.split('-')
        if (date.length > 1) {
            return date[0] + '/' + date[1] + '/' + date[2].slice(0, 2)
        }
        return input
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

    renderParticipants = () => {
        return this.state.participants.map(p => <Avatar alt={p.name} src={p.image} />)
    }


    render() {
        return (
            this.props.currentUser ?
                <div className='main' id='1'>

                    {this.state.activity ?
                        <div id='2'>

                            {this.state.host ?
                                <div className='profile'>
                                    <img className='image' src={this.state.activity.image}></img>
                                    <div className='name'>{this.state.activity.name}</div>
                                    <div className='address'>Address: {this.state.activity.address}</div>
                                    <div className='date'>Happening on:{this.parseDate(this.state.activity.date)}</div>
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
                                <Paper >
                                    <Typography variant='54' component='h5' >
                                        Participants
                            </Typography >
                                    <div style={{ 'display': 'flex', 'flexDirection': 'row', 'marginLeft': '30px'}}>
                                        {this.renderParticipants()}

                                    </div>

                                </Paper>
                            </div>
                            <div className='profile'>
                                {this.state.chatroom ? <Chatroom chatroom={this.state.chatroom} currentUser={this.props.currentUser} participants={this.state.participants} /> : <Button onClick={this.startChatFunc}>Start Chat</Button>}
                            </div>
                        </div>


                        : <div></div>
                    }
                </div> : <div> Please Login first to see Activity </div>
        )
    }
}
const msp = (state) => {
    return {
        currentUser: state.currentUser
    }
}

export default connect(msp, { fetchDeleteActivityCreator })(ActivityPage)


