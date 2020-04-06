import React from 'react'
import ActivitiesContainer from '../containers/ActivitiesContainer'
{/* <ActivitiesContainer /> */ }

class Category extends React.Component {

    state = {
        showActivities: false
    }


    renderActivities = () => {
        //    debugger
        return this.props.activities.filter(a => a.category_id === this.props.category.id)

    }

    changeState = () => {
        this.setState({ showActivities: !this.state.showActivities })
    }
    render() {
        return (
            <div>
                {this.state.showActivities ?  <ActivitiesContainer activities={this.renderActivities()} /> :

                    <div className='category'>
                        <p onClick={this.changeState}>Category: {this.props.category.category_type} </p>
                        <img src={this.props.category.image} height='100px'></img>
                    </div >
                }
            </div>

        )

    }
}



export default Category