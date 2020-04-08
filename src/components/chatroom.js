import React from 'react'
import Message from './message'
import { Button, Input } from '@material-ui/core';
// import { Paper } from '@material-ui/core'
// import { makeStyles } from '@material-ui/core/styles';




class Chatroom extends React.Component {

    state = {
        message: '',
        messages: [],
        // firstTime: true
    }
    componentDidMount(){
        fetch('http://localhost:3000/chatrooms/1').then(resp => resp.json()).then(data => this.setState({ chatroom: data, messages: data.messages }))

            // Creates the new websocket connection
            let socket = new WebSocket('ws://localhost:3000/cable');
    
            // When the connection is 1st created, this code runs subscribing the clien to a specific chatroom stream in the ChatRoomChannel
            socket.onopen = function (event) {
                console.log('WebSocket is connected.');
    
                const msg = {
                    command: 'subscribe',
                    identifier: JSON.stringify({
                        id: 1,
                        channel: 'ChatroomChannel'
                    }),
                };
    
                socket.send(JSON.stringify(msg));
            };
    
            // When the connection is closed, this code is run
            socket.onclose = function (event) {
                console.log('WebSocket is closed.');
            };
    
            // When a message is received through the websocket, this code is run
            socket.onmessage = function (event) {
                const response = event.data;
                const msg = JSON.parse(response);
    
                // Ignores pings
                if (msg.type === "ping") {
                    return;
                }
    
                console.log("FROM RAILS: ", msg);
    
                // Renders any newly created messages onto the page
                if (msg.message) {
                   
                }
    
            };
    
            // When an error occurs through the websocket connection, this code is run printing the error message
            socket.onerror = function (error) {
                console.log('WebSocket Error: ' + error);
            };
        }
    
    // }
    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    postMessage = (event) => {
        event.preventDefault()
        let data = { content: this.state.message, chatroom_id: 1, user_id: 1 }
        console.log('message', data);

        fetch('http://localhost:3000/messages', {
            method: 'Post',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        }).then(response => {
                this.setState({
                    messages: [...this.state.messages, response]
                })
            })
    }   

    renderMessages = () => {
        return this.state.messages.map(m => <Message key={m.id} currentUser={this.props.currentUser} message={m} />)
    }

    
    render() {
        // console.log(this.props.currentUser);
        return (
            
            <div>
                <form id="new-message-form">
                    <label>New Message: </label>
                    <Input onChange={this.handleChange} name='message' value={this.state.message} /> 
                    <Button onClick={this.postMessage}variant="contained" color="gray" style={{position: "relative", top: 0, left: 10, width: 90}}>Send</Button>
                </form>
                <div id='chatbox' size='200px'>
                    {this.renderMessages()}
                </div>
            </div>
        )
    }
}

export default Chatroom