import React from 'react'
import '../stylesheets/profile.css'
import 'typeface-roboto';




class Profile extends React.Component {

    state = {
        activities: [],
        addActivityState: false,
    }

    componentDidMount() {
        fetch(`http://localhost:3000/users/${this.props.currentUser.id}`)
            .then(resp => resp.json())
            .then(user => this.setState({ activities: user.activities }))
    }


    addActivityStateSwitch = () => {
        this.setState({ addActivityState: !this.state.addActivityState })
    }

    // renderMyActivities = () => {
    //     return this.state.currentUser? this.state.activities.map(activity => <Activity  key={activity.id} activity={activity}/> ) :null 
    // }

    // renderMarkersForActivities = () => {
    //     let lat = 40.751679
    //     let lng = 73.933356
    //     return this.state.activities.map((activity, i) => 
    //         <Marker
    //             lat={lat}
    //             lng={lng}
    //             //   name='Mocha'
    //             color='blue'
    //         />
    //     )
    // }

    render() {
        // console.log(this.props.activities);

        return (
            <div> 
                {this.state.activities ?
                    <div>
                        <div className='profile'>
                            <img src={this.props.currentUser.image} className='profile_image' alt={this.props.currentUser.name} />
                            <div className='profile_name'>{this.props.currentUser.name}</div>
                            <div className='profile_username'>{this.props.currentUser.username}</div>
                            <div className='profile_details'>{this.props.currentUser.city}</div>
                            {/* <AddActivity /> */}
                            {/* {this.state.addActivityState ? <div><AddActivity /> <br/> <button onClick={this.addActivityStateSwitch}>Close Form</button></div>: <button onClick={this.addActivityStateSwitch}>AddActivity</button>} */}
                            {/* {this.renderMyActivities()} */}
                            {/* <EditProfile /> */}
                        </div>
                        {/* <BigMap renderMarkers={this.renderMarkersForActivities} /> */}
                    </div>
                    : null}
            </div>
        )
    }
}

export default Profile 