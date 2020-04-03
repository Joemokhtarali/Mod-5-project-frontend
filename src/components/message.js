import React from 'react'

class Message extends React.Component {

    state = {

    }

    render() {
        console.log(this.props.content);
        
        return (
            <div>
               <p>this.props.message</p>
            </div>
        )
    }
}

export default Message