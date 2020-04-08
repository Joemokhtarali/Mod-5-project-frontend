import React from 'react'
import { Link } from 'react-router-dom'

class Message extends React.Component {


    render() { 
        return (
            <div>
               <img src={this.props.currentUser.image} height='30px'/>
               <p>{this.props.message.content}</p>
            </div>
        )
    }
}

export default Message