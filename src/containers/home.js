import React from 'react'
import CateogriesContainer from './categoriesContainer'
import '../../src/index.css'
import { connect } from 'react-redux' 
// import HomeSlides from '../components/homeSlides'



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
                {/* <img src='https://images.pexels.com/photos/853168/pexels-photo-853168.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940' alt='image' height='700px' width='100%' /> */}
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