import React from 'react'
import ActivitiesContainerT from '../containers/ActivitiesContainer2'
import ActivitiesContainer from '../containers/ActivitiesContainer'


class Category extends React.Component {  

    render() {
        return (
            <div className='category'>
                <h3 >{this.props.category.category_type} </h3>
                <br />
                <ActivitiesContainerT activities={this.props.activities} history={this.props.history}/>
                {/* <ActivitiesContainer activities={this.props.activities} history={this.props.history}/> */}
                <br />
                <br />
            </div >
        )
    }
}


export default Category