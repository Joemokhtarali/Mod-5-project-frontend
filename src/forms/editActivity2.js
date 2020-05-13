import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';
import NativeSelect from '@material-ui/core/NativeSelect';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { useHistory } from "react-router-dom";
import { fetchPatchActivityCreator } from '../actionCreators/actionCreater'
import { connect } from 'react-redux'
import DatePicker from "react-datepicker";
import '../stylesheets/mainPage.css'


const useStyles = makeStyles((theme) => ({
    root: {
        '& .MuiTextField-root': {
            margin: theme.spacing(1),
            width: '25ch',
        },
    },
}));

function EditActivityT(props) { 
    let history = useHistory();
    const classes = useStyles();
    const [name, setname] = React.useState(props.activity.name);
    const [activityType, setactivityType] = React.useState('');
    const [image, setimage] = React.useState(props.activity.image);
    const [about, setabout] = React.useState(props.activity.about);
    const [address, setaddress] = React.useState(props.activity.address);
    const [category_id, setcategory_id] = React.useState(props.activity.category_id);
    const [selectedDate, setSelectedDate] = React.useState(new Date(props.activity.date));

    const handleDateChange = (date) => {
        setSelectedDate(date);
    };


    const handleChange1 = (event) => {
        setname(event.target.value);
    };
    const handleChange2 = (event) => {
        setactivityType(event.target.value);
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
        let data = { name, image: image, date: selectedDate, address: address, about: about, category_id: parseInt(category_id)}
        let id = props.activity.id
        props.fetchPatchActivityCreator(id, data)
        history.push(`/activities/${id}`)
    }

    
    return (
        <div>
            <FormControl className={classes.margin}>
                <Button onClick={() => history.push('/activities')}>Back</Button>
                <TextField
                    required
                    id="standard-required5"
                    label="name"
                    placeholder='name'
                    value={name}
                    onChange={handleChange1}
                />
                <TextField
                    required
                    id="standard-required4"
                    label="activity type"
                    type="activity type"
                    value={activityType}
                    onChange={handleChange2}
                />
                <TextField
                    required
                    id="standard-required3"
                    label="image"
                    placeholder='image'
                    value={image}
                    onChange={handleChange3}
                />
                <TextField
                    required
                    id="standard-required2"
                    label="About"
                    placeholder='About'
                    value={about}
                    onChange={handleChange4}
                />
                <NativeSelect
                    id="demo-customized-select-native"
                    placeholder='Select Category'
                    value={category_id}
                    onChange={handleChange7}
                >
                    <option aria-label="None" value="" />
                    <option value={1}>Theaters</option>
                    <option value={2}>Sports</option>
                    <option value={3}>Nature</option>
                    <option value={4}>Arts And Museumes</option>
                </NativeSelect>
                <TextField
                    required
                    id="standard-required1"
                    label="address"
                    placeholder='address'
                    value={address}
                    onChange={handleChange6}
                />
                <DatePicker selected={selectedDate} value={selectedDate} onChange={handleDateChange} />
            <Button onClick={handleSubmit}>Edit Activity</Button>
            </FormControl>

        </div>
    );
}

export default connect(null, { fetchPatchActivityCreator })(EditActivityT)