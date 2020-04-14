import React, { useState, useEffect } from 'react'
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import Chip from '@material-ui/core/Chip';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Avatar from '@material-ui/core/Avatar';



const useStyles = makeStyles((theme) => ({
    root: {
        margin: '50px',
        padding: theme.spacing(3, 2)
    },
    flex: {
        display: 'flex',
        alignItems: 'center'
    },
    chatwindow: {
        width: '100%',
        height: '300px',
        padding: '20px',
        overflow: 'auto'

    },
    chatbox: {
        width: '85%'
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
        let data = { content: textValue, chatroom_id: chatroom.id, user_id: props.currentUser.id, user_name: props.currentUser.username }

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
    }


    function cleanScreen() {
        changeTextValue('')
    }

    function renderMessages() {
        return messages.map((msg, i) => (
            <div className={classes.flex} key={i}>
                <Chip label={msg.user_name} className={classes.chip} />
                <Typography variant='p'> {msg.content} </Typography>
            </div>
        ))
    }

    function keyPressed(event) {
        if (event.key === "Enter") {
            postMessage()
        }
    }
    

    function renderParticipants() {
        return props.participants.map(p => <Avatar alt={p.name} src={p.image} onClick={() => { }} />)
    }

    return (
        <div>
            <Paper className={classes.root}>
                <Typography variant='h5' component='h5'>
                    Chat Room
                </Typography>

                <div className={classes.flex}>
                    <div className={classes.chatwindow}>
                        <List>
                            {renderMessages()}
                        </List>
                    </div>
                    {/* <div style={{ float: "left", clear: "both" }}
                        ref={(el) => { messagesEndRef = el; }}>
                    </div> */}
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

            <Paper className={classes.root}>
                <Typography variant='h4' component='h4'>
                    Participants
                </Typography>
                <div className={classes.avatars}>
                        {renderParticipants()}
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