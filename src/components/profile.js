import React from 'react'
import BigMap from './bigMap'
import '../stylesheets/profile.css'
import 'typeface-roboto';
import { Button } from '@material-ui/core';
import { connect } from 'react-redux'
import { useHistory } from "react-router-dom";



function Profile(props) {
    const history = useHistory();
    const [lat, setLat] = React.useState('');
    const [lng, setLng] = React.useState('');

    React.useEffect(() => {
        navigator.geolocation.getCurrentPosition(function (position) {
            setLat(position.coords.latitude)
            setLng(position.coords.longitude)
        });
    }, []);

    // function renderUsers(array) {
    //     return array.map(ele => <li>{ele.user_name}</li>)
    // }

    function renderActivities() {
        let myActivities = props.activities.filter(a => a.user_id === props.currentUser.id)
        return myActivities.map(activity => <div onClick={() => history.push(`/activities/${activity.id}`)}
            className='activity-pro'>
            <div className="avatar"><img className="img" style={{ "width": "150px", 'height':'100px' }} src={activity.image} alt={activity.name}/></div>
            <p>{activity.name}</p>
            <p style={{'overflow':'auto'}}>{activity.about}</p>
            
            
        </div>)
    }
    // componentDidMount() {
    //     fetch(`http://localhost:3000/users/${props.currentUser.id}`)
    //         .then(resp => resp.json())
    //         .then(user => setState({ activities: user.activities }))
    // }

    return (
        <div>
            {props.currentUser ?

                <div className='main'> 
                    <div className='left-side'>
                        <h4 className='activities-around'>Info:</h4>
                        <div className='profile-img'>
                            <img src={props.currentUser.image} className='profile_image' alt={props.currentUser.name} />
                            <div className='profile_details'>{props.currentUser.username}</div>
                            <div className='profile_details'>{props.currentUser.city}</div>
                            <Button > Edit Profile</Button>
                        </div> {/*  profile-img  */}

                        <h4 className='activities-around'>Activities Around Me:</h4>
                        <div className='map' style={{ height: '400px', width: '500px' }} >
                            <BigMap lat={lat} lng={lng} history={history} activities={props.activities} />
                        </div> {/*  map  */}
                    </div> {/*  Left Side  */}

                    <div className='right-side'>
                        <h4 className='activities-around2'> My Activities:</h4>
                        <div className='my-activities'>
                            {renderActivities()}
                        </div>
                        {/* <h4 className='activities-around2'> Activities I joined</h4>
                        <div className='joined-activities'>
                            Activities I joined
                        </div> */}
                    </div> {/*  Right Side  */}
                </div> /*  Main  */

                : null}


        </div>
    )
}

const msp = state => {
    return {
        activities: state.activities
    }
}

export default connect(msp)(Profile) 