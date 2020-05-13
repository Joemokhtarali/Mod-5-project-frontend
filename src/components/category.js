import React from 'react'
import ActivitiesContainerT from '../containers/ActivitiesContainer2'


class Category extends React.Component {  

    render() {
        return (
            <div className='category'>
                <h3 >{this.props.category.category_type} </h3>
                <br />
                <ActivitiesContainerT activities={this.props.activities} history={this.props.history}/>
                <br />
                <br />
            </div >
        )
    }
}


export default Category