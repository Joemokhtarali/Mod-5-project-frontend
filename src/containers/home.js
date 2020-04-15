import React from 'react'
import CateogriesContainer from './categoriesContainer'
import '../../src/index.css'
import { connect } from 'react-redux'
import Jumbotron from '../components/Jumbotron'


class Home extends React.Component {

    switchAddActivityState = () => {
        this.setState({
            addActivity: !this.state.addActivity
        })
    }


    render() {
        // console.log('homepage', this.props.history);
        
        return (
            <div className='home-page'>
                {/* <Jumbotron /> */}
                {/* <HomeSlides categories={this.props.categories} /> */}
                <h4>Browse By Category</h4>
                <br />
                <CateogriesContainer history={this.props.history}/>  
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