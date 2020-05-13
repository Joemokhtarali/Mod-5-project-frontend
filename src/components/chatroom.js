import React, { useState, useEffect } from 'react'
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Avatar from '@material-ui/core/Avatar';
import '../stylesheets/chatroom.css'


const useStyles = makeStyles((theme) => ({
    root: {
        margin: '50px',
        padding: theme.spacing(3, 2)
    },
    flex: {
        display: 'flex',
        alignItems: 'center',
        // 'text-align': 'right'
    },
    chatwindow: {
        width: '100%',
        height: '400px',
        padding: '20px',
        overflow: 'auto',
        'background-color': 'rgb(240, 241, 242)',

    },
    chatbox: {
        width: '85%',
    },
    button: {
        width: '15%'
    },
    avatars: {
        display: 'flex',
        '& > *': {
            margin: theme.spacing(1),
        }, 
    },
}));

function useMergeState(initialState) {
    const [state, setState] = useState(initialState);
    const setMergedState = newState =>
        setState(prevState => Object.assign({}, prevState, newState)
        );
    return [state, setMergedState];
}

export default function Chatroom(props) {
    const classes = useStyles();

    const [userRequest, setUserRequest] = useMergeState({
        chatroom: {},
        messages: [],
    });

    const [textValue, changeTextValue] = React.useState('')

    useEffect(() => {
        fetch(`http://localhost:3000/chatrooms/${props.chatroom.id}`).then(resp => resp.json()).then(data => setUserRequest({ chatroom: data, messages: data.messages }))      //{changeChatroom(data) && changeMessages(data.messages)})


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
        // event.preventDefault()
        let data = { content: textValue, chatroom_id: chatroom.id, user_id: props.currentUser.id, user_name: props.currentUser.username, user_image: props.currentUser.image}

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
            }).then(() => cleanScreen())
            // debugger
    }


    function cleanScreen() {
        changeTextValue('')
    }

    function formatAMPM(date1) {
        let date = date1.split('-')
        let newDate = date[0] + '/' + date[1] + '/' + date[2].slice(0, 2)
        return newDate.toString()
    }

    console.log(props.currentUser);

    function renderMessages() {
        return messages.map(function (msg, i) {
            if (msg.user_id === props.currentUser.id) {
                return ( 
                    <li style={{ "width": "100%" }}>
                        <div className="msj macro">
                            <Avatar alt={msg.user_name} src={props.currentUser.image} />
                            {/* <div className="avatar"><img className="img-circle" style={{ "width": "25%", 'height':'80%' }} alt={msg.user_name} src={props.currentUser.image}/></div> */}
                            <div className="text text-l">
                                <p style={{ 'textAlign': 'left', 'color':'black', 'marginLeft': '25px'}}>{msg.content}</p>
                                {msg ? <div> <p style={{ 'textAlign': 'right', 'margin':'5px', 'color':'#0e218b', 'opacity':'60%' }}><small>{formatAMPM(msg.created_at)}</small></p></div> : <div> <p style={{ 'textAlign': 'right' }}><small>{msg.created_at}</small></p></div>}
                            </div>
                        </div>
                    </li>
                )
            } else {
                return (
                    <li style={{ "width": "100%" }}>

                        <div className="msj-rta macro"  >
                            <div className="text text-r">
                                <p className='pr'>{msg.content}</p>
                                <p style={{ 'textAlign': 'left' }}><small>{formatAMPM(msg.created_at)}</small></p>
                            </div>
                            <Avatar src={msg.user_image}  />

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


    

    return (
        
        <div style={{'overflow': 'auto'}}>
            <Paper className={classes.root}>
                <Typography variant='h5' component='h5'>
                    Chat Room
                </Typography>

                <div className={classes.flex}>
                    <div class="col-md-12 col-md-offset-12 frame" >
                        <ul>
                            {renderMessages()}
                        </ul>
                    </div>

                </div>

                <div className={classes.flex}>
                    <TextField
                        // id="standard-multiline-flexible"
                        label="Send a message"
                        className={classes.chatbox}
                        value={textValue}
                        onChange={e => changeTextValue(e.target.value)}
                        onKeyPress={keyPressed}
                    // multiline
                    // rowsMax={4}
                    />
                    <Button onClick={postMessage} variant="contained" color="primary">
                        Send
                    </Button>
                </div>

            </Paper>
        </div>
    )
}




// const messagesEndRef = React.createRef()
    // function scrollToBottom() {
    //     messagesEndRef.scrollIntoView({ behavior: "smooth" })
    //   }

    //   componentDidMount() {
    //     scrollToBottom();
    //   }

    //   componentDidUpdate() {
    //     scrollToBottom();
    //   }

    // console.log(messages[0]);