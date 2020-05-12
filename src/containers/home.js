import React from 'react'
import CateogriesContainer from './categoriesContainer'
import '../../src/index.css'
import { connect } from 'react-redux'
import BigMap from '../components/bigMap';
// import HomeSlides from '../components/homeSlides'

const mapClass = {

}

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
        props.currentUser ?
            <div className='home-page'>
                <h4>Browse By Category</h4>
                <CateogriesContainer history={props.history} />

                {/* <h3>Activities Around You</h3>
                <div style={{ height: '50vh', width: '50%' }}>
                    <BigMap lat={lat} lng={lng} history={props.history} activities={props.activities} />
                </div> */}
            </div> : <div> {props.history.push('/')} </div>
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