import React from 'react'
import Message from './message'

class Chatroom extends React.Component {

    state = {
        chatroom: null,
        messages: []
    }

    componentDidMount() {
        fetch('http://localhost:3000/chatrooms/1').then(resp => resp.json()).then(data => this.setState({ chatroom: data, messages: data.messages }))
    }

    renderMessages = () => {
        this.state.messages.map(m => <Message key={m.id} message={m} />)
    }

    render() {
        console.log(this.state.messages);

        return (
            <div>

                {this.renderMessages()}

            </div>
        )
    }
}

export default Chatroom