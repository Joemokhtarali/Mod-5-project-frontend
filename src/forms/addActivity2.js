import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';
import NativeSelect from '@material-ui/core/NativeSelect';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { useHistory } from "react-router-dom";
import { connect } from 'react-redux'
import balloon from '../media/airballon2.mp4'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import '../stylesheets/mainPage.css'


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
    const [name, setname] = React.useState('');
    const [image, setimage] = React.useState('https://www.brainfacts.org/-/media/Brainfacts2/Icons-3,-d-,0/Activity_Icon.png');
    const [about, setabout] = React.useState('');
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
        if (name && address) { 
            event.preventDefault()
            

            let data = { name: name, image: image, date: selectedDate, address: address, about: about, category_id: parseInt(category_id), user_id: props.currentUser.id, lat: userRequest.lat, lng: userRequest.lng }

            fetch('http://localhost:3000/activities', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            }).then(resp => resp.json()).then(response => {
                props.addActivity(response)
                history.push(`/activities/${response.id}`)

            })
            // props.fetchPostActivityCreator(data)
            // history.push(`/activities`)

        } else {
            window.alert('Please make sure Address and Name are valid')
        }
    }

    function noMember(){
        if(!props.currentUser){
            window.alert('Please Login to add a new Activity!')
        }
    }
    // console.log(userRequest);

    return (
        <div className='main-page'>
            {/* <Alert severity="warning" style={{ textAlign: 'center' }}>Due to Covid-19, Add an activity on your own risk!</Alert> */}
            <video id='video1' autoPlay muted loop >
                <source src={balloon} type='video/mp4' />
            </video>
            {props.currentUser ? 
            <div className='form' >

                <FormControl className={classes.margin} style={{'margin-left':'100px'}}>
                    {/* <Button onClick={() => history.push('/activities')}>Back</Button> */}
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
                        placeholder='Zip Code'
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
            : <div style={{'margin':'20px'}}> {noMember} <h4 style={{'textAlign':'center'}}> Please Login to add Activity</h4> </div>}
            <h4 className='add-new-activity'>Add Activity to meet new people and have fun!!</h4>
        </div >
    );
}

const msp = state =>{ 
    return {
        currentUser: state.currentUser 
    }
}

const mdp = (dispatch) => {
    return {
        addActivity: (data) => dispatch({ type: 'ADD_ACTIVITY', payload: data })
    };
}
export default connect(msp, mdp)(AddActivityT)

