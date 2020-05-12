import React, { useState, useEffect } from 'react'
import '../stylesheets/chatroom.css'
import { connect } from 'react-redux';

function useMergeState(initialState) {
    const [state, setState] = useState(initialState);
    const setMergedState = newState =>
        setState(prevState => Object.assign({}, prevState, newState)
        );
    return [state, setMergedState];
}

function ChatroomT(props) {

    const [userRequest, setUserRequest] = useMergeState({
        chatroom: {},
        messages: [],
    });

    const [textValue, changeTextValue] = React.useState('')

    useEffect(() => {
        if (props.chatroom) {
            fetch(`http://localhost:3000/chatrooms/${props.chatroom.id}`).then(resp => resp.json()).then(data => setUserRequest({ chatroom: data, messages: data.messages }))      //{changeChatroom(data) && changeMessages(data.messages)})
        }

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

    }, []);

    const { chatroom, messages } = userRequest;


    const postMessage = (event) => {
        event.preventDefault()
        let ul = document.getElementById('ul')
        let data = { content: textValue, chatroom_id: chatroom.id, user_id: props.currentUser.id, user_name: props.currentUser.username }
        console.log(data)
        
        fetch('http://localhost:3000/messages', {
            method: 'Post',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                // 'Authorization': localStorage.user_id
            },
            body: JSON.stringify(data)
        })
            .then(resp => resp.json())
            .then(data => {
                setUserRequest({ messages: [...messages, data] })
            }).then(() => 
            cleanScreen())
            // .then(() =>
            //     scrollTop = container.scrollHeight
            // )
            
           

    }


    function cleanScreen() {
        changeTextValue('')
    }

    function formatAMPM(date1) {
        let date = date1.split('-')
        let newDate = date[0] + '/' + date[1] + '/' + date[2].slice(0, 2)
        return newDate.toString()
    }

    function renderMessages() {
        return messages.map(function (msg, i) {
            if (msg.user_id === props.currentUser.id) {
                return (
                    <li style={{ "width": "100%" }}>
                        {console.log(msg)}
                        <div className="msj macro">
                            <div className="avatar"><img className="img-circle" style={{ "width": "100%" }} src="https://scontent-lga3-1.xx.fbcdn.net/v/t1.0-9/71000419_531421064288637_8191439997199450112_n.jpg?_nc_cat=111&_nc_sid=7aed08&_nc_ohc=LjaGLtgohSUAX_1Po4C&_nc_ht=scontent-lga3-1.xx&oh=4475aa15dcadd81ebc8aa883b9724825&oe=5EB43E3B" /></div>
                            <div className="text text-l">
                                <p>{msg.content}</p>
                                <p><small>{formatAMPM(msg.created_at)}</small></p>
                            </div>
                        </div>
                    </li>
                )
            } else {
                return (
                    <li style={{ "width": "100%" }}>

                        <div className="msj-rta macro">
                            <div className="text text-l">
                                <p>{msg.content}</p>
                                <p><small>{formatAMPM(msg.created_at)}</small></p>
                            </div>
                            <div className="avatar"><img className="img-circle" style={{ "width": "100%" }} src="https://scontent-lga3-1.xx.fbcdn.net/v/t1.0-9/71000419_531421064288637_8191439997199450112_n.jpg?_nc_cat=111&_nc_sid=7aed08&_nc_ohc=LjaGLtgohSUAX_1Po4C&_nc_ht=scontent-lga3-1.xx&oh=4475aa15dcadd81ebc8aa883b9724825&oe=5EB43E3B" /></div>

                        </div>
                    </li>
                )
            }
        })
    }


    function keyPressed(event) {
        if (event.key === "Enter") {
            postMessage()
        }
    }

    const ul = document.getElementById('ul')
    ul.scrollTop = ul.scrollHeight

    
    return (
        <div class="col-sm-3 col-sm-offset-4 frame">
            <ul id='ul'>{renderMessages()}</ul>
            <div>
                <div class="msj-rta macro">
                    <div class="text text-r" style={{ 'background': 'whitesmoke !important' }}>
                        <input value={textValue} class="mytext" placeholder="Type a message" onChange={e => changeTextValue(e.target.value)}/>
                    </div>

                </div>
                <div style={{ 'padding': '10px' }}>
                    <span class="glyphicon glyphicon-share-alt"></span>
                    <button onClick={postMessage}>Send</button>
                </div>
            </div>
        </div>
    )
}

const msp = state => {
    return {
        currentUser: state.currentUser
    }
}
export default connect(msp)(ChatroomT)