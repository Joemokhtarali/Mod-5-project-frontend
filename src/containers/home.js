import React from 'react'
import CateogriesContainer from './categoriesContainer'
import '../../src/index.css'
import { connect } from 'react-redux'
import BigMap from '../components/bigMap';
// import HomeSlides from '../components/homeSlides'



function Home(props) {
    const [lat, setLat] = React.useState('');
    const [lng, setLng] = React.useState('');

    React.useEffect(() => {
        navigator.geolocation.getCurrentPosition(function (position) {
            setLat(position.coords.latitude)
            setLng(position.coords.longitude)
        });
    }, []);

    return (
        <div className='home-page'> 
            {/* <Jumbotron /> */}
            {/* <HomeSlides categories={props.categories} /> */}
            {/* <img src='https://images.pexels.com/photos/853168/pexels-photo-853168.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940' alt='image' height='700px' width='100%' /> */}
            <h4>Browse By Category</h4>
            
            <CateogriesContainer history={props.history} />
            <h3>Activities Around You</h3>
            <BigMap lat={lat} lng={lng} history={props.history} activities={props.activities}/>
        </div>
    )
}

const msp = state => {
    return {
        categories: state.categories,
        currentUser: state.currentUser,
        activities: state.activities
    }
}

export default connect(msp)(Home)