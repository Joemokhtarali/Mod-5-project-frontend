import React from 'react'
import Chatroom from './chatroom'

class Activity extends React.Component {

    state = {
        name: '',
        activityType: '',
        image: '',
        about: '',
        date: new Date(),
        rating: 5,
        user_id: 1,
        category_id: 1,
        address: ''

    }

    joinActivity = () => {
        let data = {user_id: 2, activity_id: 1}
        fetch('http://localhost:3000/participants', {
            method: 'Post',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        }).then(resp => resp.json())
        .then(response => { if (response.errors) { alert(response.errors) } })
        }


    render() {
        return (
            <div className='activity'>
                <p>{this.props.activity.name}</p>
                {/* <Chatroom /> */}
                <button onClick={this.joinActivity} >Join Activity</button>
            </div>
        )
    }
}

export default Activity