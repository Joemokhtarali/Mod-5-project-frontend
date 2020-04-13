import React from 'react'
import CateogriesContainer from './categoriesContainer'
import AddActivity from '../forms/addActivity'
import '../../src/index.css'
import HomeSlides from '../components/homeSlides'
import { connect } from 'react-redux'


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
        // console.log('homepage', this.props.history);
        
        return (
            <div className='home-page'>
                {/* <HomeSlides categories={this.props.categories} /> */}
                <h4>Browse By Category</h4>
                <br />
                <CateogriesContainer history={this.props.history}/>  
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