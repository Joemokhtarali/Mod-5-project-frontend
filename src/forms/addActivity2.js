import React from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';
import NativeSelect from '@material-ui/core/NativeSelect';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Alert from '@material-ui/lab/Alert';
import { useHistory } from "react-router-dom";
import { fetchPostActivityCreator } from '../actionCreators/actionCreater'
import { connect } from 'react-redux'
import '../stylesheets/mainPage.css'
import balloon from './airballon2.mp4'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";






const useStyles = makeStyles((theme) => ({
    root: {
        '& .MuiTextField-root': {
            margin: theme.spacing(1),
            width: '25ch',
        },
    },
}));
function useMergeState(initialState) {
    const [state, setState] = React.useState(initialState);
    const setMergedState = newState =>
        setState(prevState => Object.assign({}, prevState, newState)
        );
    return [state, setMergedState];
}

function AddActivityT(props) {
    let history = useHistory();
    const classes = useStyles();
    const [newId, setNewId] = React.useState(0);
    const [name, setname] = React.useState('');
    const [image, setimage] = React.useState('');
    const [about, setabout] = React.useState('');
    // const [date, setdate] = React.useState(new Date());
    const [address, setaddress] = React.useState('');
    const [category_id, setcategory_id] = React.useState(1);
    const [selectedDate, setSelectedDate] = React.useState(new Date());
    const [userRequest, setUserRequest] = useMergeState({
        lat: '',
        lng: '',
    });

    const handleDateChange = (date) => {
        setSelectedDate(date);
    };


    const handleChange1 = (event) => {
        setname(event.target.value);
    };
    const handleChange3 = (event) => {
        setimage(event.target.value);
    };
    const handleChange4 = (event) => {
        setabout(event.target.value);
    };

    const handleChange6 = (event) => {
        setaddress(event.target.value);
    };
    const handleChange7 = (event) => {
        setcategory_id(event.target.value);
    };


    function handleSubmit(event) {
        event.preventDefault()
        fetch(`https://maps.googleapis.com/maps/api/geocode/json?address='${address}'&key=AIzaSyD4X3Xez83U_L3WZm6Fny8zsSxN_G4s1a4`)
        .then(resp => resp.json())
        .then(data => 
               setUserRequest({ lat: data.results[0].geometry.location.lat, lng: data.results[0].geometry.location.lng })
            //    setLat(data.results[0].geometry.location.lat), setLng(data.results[0].geometry.location.lng)
        )
        console.log(userRequest);
        
        let data = { name: name, image: image, date: selectedDate, address: address, about: about, category_id: parseInt(category_id), user_id: props.currentUser.id, lat: userRequest.lat, lng: userRequest.lng }
        fetch('http://localhost:3000/activities', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        }).then(resp => resp.json()).then(response => {
            props.addActivity()
            setNewId(response.id)
            console.log('newId');
            console.log(newId);
            history.push(`/activities/${response.id}`)
            
        })
        // props.fetchPostActivityCreator(data)
        // history.push(`/activities`)

    }
    // console.log(userRequest);

    return (
        <div className='main-page'>
            <Alert severity="warning" style={{ textAlign: 'center' }}>Due to Covid-19, Add an activity on your own risk!</Alert>
            <video id='video1' autoPlay muted loop >
                <source src={balloon} type='video/mp4' />
            </video>

            <div className='form' >

                <FormControl className={classes.margin}>
                    <Button onClick={() => history.push('/activities')}>Back</Button>
                    <TextField
                        required
                        id="standard-required"
                        label="name"
                        placeholder='name'
                        value={name}
                        onChange={handleChange1}
                    />
                    <NativeSelect
                        id="demo-customized-select-native"
                        placeholder='Select Category'
                        value={category_id}
                        onChange={handleChange7}
                    >
                        <option aria-label="None" value="" />
                        <option value={1}>Beach</option>
                        <option value={2}>Sports</option>
                        <option value={3}>Nature</option>
                        <option value={4}>Arts And Museumes</option>
                    </NativeSelect>
                    <TextField
                        required
                        id="standard"
                        label="address"
                        placeholder='address'
                        value={address}
                        onChange={handleChange6}
                    />
                    <TextField
                        required
                        id="standard-required"
                        label="image"
                        placeholder='image'
                        value={image}
                        onChange={handleChange3}
                    />
                    <TextField
                        required
                        id="standard"
                        label="About"
                        placeholder='About'
                        value={about}
                        onChange={handleChange4}
                    />

                    {/* <ReactDatePicker /> */}
                    <DatePicker selected={selectedDate} value={selectedDate} onChange={handleDateChange} />
                    <Button onClick={handleSubmit}>Add Activity</Button>
                </FormControl>
            </div>

        </div >
    );
}

const mdp = (dispatch) => {
    return {
        addActivity: () => {
            dispatch({ type: 'ADD_ACTIVITY' })
        }
    };
}
export default connect(null, mdp)(AddActivityT)