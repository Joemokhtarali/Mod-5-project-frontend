import React from 'react'
import AddActivity from '../forms/addActivity';
import '../stylesheets/profile.css'
import 'typeface-roboto';




class Profile extends React.Component {
    
    state = {
        addActivityState: false,
        activities: []
    }

    // componentDidMount() {
    //     fetch('http://localhost:3000/users/1')
    //     .then(resp => resp.json())
    //     .then(user => console.log(user);
    //     )
    //     .then(user => this.setState({activities: user.activities}))
    // }


    addActivityStateSwitch = () => {
        this.setState({addActivityState: !this.state.addActivityState})
    }   

    // renderMyActivities = () => {
    //     return this.state.currentUser? this.state.activities.map(activity => <Activity  key={activity.id} activity={activity}/> ) :null 
    // }

    render() {
        console.log(this.props.activities);
        
        return (
            <div className='profile'>
                <img src={this.props.currentUser.image} className='profile_image'  alt={this.props.currentUser.name}/>
                <div className='profile_name'>{this.props.currentUser.name}</div>
                <div className='profile_username'>{this.props.currentUser.username}</div>
                <div className='profile_details'>{this.props.currentUser.city}</div>
                <AddActivity />
                
                {/* {this.state.addActivityState ? <div><AddActivity /> <br/> <button onClick={this.addActivityStateSwitch}>Close Form</button></div>: <button onClick={this.addActivityStateSwitch}>AddActivity</button>} */}
                {/* {this.renderMyActivities()} */}
                {/* <EditProfile /> */}
            </div>
        )
    }
}

export default Profile 