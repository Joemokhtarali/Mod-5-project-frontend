import React from 'react'
import ActivitiesContainer from '../containers/ActivitiesContainer'


class Category extends React.Component { 

    render() {
        return (
            <div className='category'>
                <h3 >{this.props.category.category_type} </h3>
                <br />
                <ActivitiesContainer activities={this.props.activities} />
                <br />
                <br />
            </div >
        )
    }
}


export default Category