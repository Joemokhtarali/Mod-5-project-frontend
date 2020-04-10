import React from 'react'
import CateogriesContainer from './categoriesContainer'
import AddActivity from '../forms/addActivity'
import '../stylesheets/home.css'
import HomeSlides from '../components/homeSlides'
import { connect } from 'react-redux'

console.log(process.env.REACT_APP_GOOGLE_API_KEY)

class Home extends React.Component {
    state = {
        addActivity: false,

    }

    switchAddActivityState = () => {
        this.setState({
            addActivity: !this.state.addActivity
        })
    }


    render() {
        return (
            <div className='home-page'>
                {/* <HomeSlides categories={this.props.categories} /> */}
                <h4>Browse By Category</h4>
                <br />
                <CateogriesContainer /> 
                {this.state.addActivity ? <div><AddActivity /> <button onClick={this.switchAddActivityState}>Close Form</button></div> : <button onClick={this.switchAddActivityState}>Add Activity</button>}
            </div>
        )
    }
}

const msp = state => {
    return {
        categories: state.categories
    }
}

export default connect(msp)(Home)