import React from 'react'
import AddActivity from '../forms/addActivity';
import Activity from './activity';


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
            <div>
                <h2>{this.props.currentUser.name}</h2>
                <img src={this.props.currentUser.image} height='200px'/>
                <br/>
                {this.state.addActivityState ? <div><AddActivity /> <br/> <button onClick={this.addActivityStateSwitch}>Close Form</button></div>: <button onClick={this.addActivityStateSwitch}>AddActivity</button>}
                <br/><h3>My Activities: </h3>
                {/* {this.renderMyActivities()} */}
                {/* <EditProfile /> */}
            </div>
        )
    }
}

export default Profile 