import React from 'react'
import Message from './message'

class Chatroom extends React.Component {

    state = {
        message: '',
        messages: []
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    postMessage = () => {
        let data = { content: this.state.message, chatroom_id: 1, user_id: 1 }
        fetch('http://localhost:3000/messages', {
            method: 'Post',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        }).then(resp => resp.json())
            .then(response => {
                if (response.errors) { alert(response.errors) }
                else {
                    this.setState({
                        messages: [...this.state.messages, response]
                    })
                }
            })
    }

    // componentDidMount() {
    //     fetch('http://localhost:3000/chatrooms/1').then(resp => resp.json()).then(data => this.setState({ chatroom: data, messages: data.messages }))
    // }

    renderMessages = () => {
        this.state.messages.map(m => <Message key={m.id} message={m} />)
    }


    
     createChatRoomWebsocketConnection = (event, chatRoomId) => {
    
        // Creates the new websocket connection
        let socket = new WebSocket('ws://localhost:3000/cable');
    
            // When the connection is 1st created, this code runs subscribing the clien to a specific chatroom stream in the ChatRoomChannel
            socket.onopen = function(event) {
                console.log('WebSocket is connected.');
    
                const msg = {
                    command: 'subscribe',
                    identifier: JSON.stringify({
                        id: chatRoomId,
                        channel: 'ChatroomChannel'
                    }),
                };
        
                socket.send(JSON.stringify(msg));
            };
            
            // When the connection is closed, this code is run
            socket.onclose = function(event) {
            console.log('WebSocket is closed.');
            };
    
            // When a message is received through the websocket, this code is run
            socket.onmessage = function(event) {            
                const response = event.data;
                const msg = JSON.parse(response);
                
                // Ignores pings
                if (msg.type === "ping") {
                    return;
                } 
    
                console.log("FROM RAILS: ", msg);
                
                // Renders any newly created messages onto the page
                if (msg.message) {
                    // renderMessage(msg.message)
                }
                
              };
            
            // When an error occurs through the websocket connection, this code is run printing the error message
            socket.onerror = function(error) {
                console.log('WebSocket Error: ' + error);
            };
    }
    

    render() {

        return (
            <div>
                <div>
                    <button onClick={(event) => this.createChatRoomWebsocketConnection(event, 1)} >Butoon</button>
                    {/* {this.renderMessages()} */}
                </div>
                <form onSubmit={this.postMessage}>
                    <label>Mocha:</label>
                    <input onChange={this.handleChange} name='message' value={this.state.message} placeholder='write a message'></input>
                    <button>Send</button>
                </form>
            </div>
        )
    }
}

export default Chatroom


{/* <div id="chat-room-div">
            <form id="new-message-form" style="display: none">
                <label>New Message: </label><br>
                <input type="text">
                <button type="submit">Send Message</button>
                <br><br>
            </form>
            <div id="messages-list">

            </div>
        </div> */}