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

    render() {
        console.log(this.state.messages);

        return (
            <div>
                <div>
                    {this.renderMessages()}
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