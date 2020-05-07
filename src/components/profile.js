import React from 'react'
import BigMap from './bigMap'
import '../stylesheets/profile.css'
import 'typeface-roboto';
import { useMouseAction, useMouseDown, useMouseUp } from "use-mouse-action"

function Profile(props) {
    // state = {
    //     activities: [],
    //     addActivityState: false,
    //     lat: '',
    //     lng: ''
    // }
    const [lat, setLat] = React.useState('');
    const [lng, setLng] = React.useState('');
    const [addActivityState, setAddActivityState] = React.useState(false);

    React.useEffect(() => {
        navigator.geolocation.getCurrentPosition(function (position) {
            setLat(position.coords.latitude)
            setLng(position.coords.longitude)
        });
    }, []);
    // componentDidMount() {
    //     fetch(`http://localhost:3000/users/${props.currentUser.id}`)
    //         .then(resp => resp.json())
    //         .then(user => setState({ activities: user.activities }))
    // }


    function addActivityStateSwitch() {
        setAddActivityState(!addActivityState)
    }

    // renderMyActivities = () => {
    //     return state.currentUser? state.activities.map(activity => <Activity  key={activity.id} activity={activity}/> ) :null 
    // }

    // renderMarkersForActivities = () => {
    //     let lat = 40.751679
    //     let lng = 73.933356
    //     return state.activities.map((activity, i) => 
    //         <Marker
    //             lat={lat}
    //             lng={lng}
    //             //   name='Mocha'
    //             color='blue'
    //         />
    //     )
    // }



    return (
        <div>

            <div>
                {props.currentUser ?
                    <div className='profile'>
                        <img src={props.currentUser.image} className='profile_image' alt={props.currentUser.name} />
                        <div className='profile_name'>{props.currentUser.name}</div>
                        <div className='profile_username'>{props.currentUser.username}</div>
                        <div className='profile_details'>{props.currentUser.city}</div>
                        {/* <AddActivity /> */}
                        {/* {state.addActivityState ? <div><AddActivity /> <br/> <button onClick={addActivityStateSwitch}>Close Form</button></div>: <button onClick={addActivityStateSwitch}>AddActivity</button>} */}
                        {/* {renderMyActivities()} */}
                        {/* <EditProfile /> */}
                    </div> : null}

            </div>
      
            {/* <BigMap lat={lat} lng={lng}/> */}
        </div>
    )
}

export default Profile 