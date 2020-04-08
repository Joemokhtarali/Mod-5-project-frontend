import React from 'react'
import { Link } from 'react-router-dom' 
import '../../src/index.css'

class Activity extends React.Component {


    render() {
        return (
            <div className='activity'>
                <img src={this.props.activity.image} height='250px' alt='image'></img>
                <br/>
                <Link to={`/activities/${this.props.activity.id}`}>{this.props.activity.name}</Link>
            </div>
        )
    }
}

export default Activity