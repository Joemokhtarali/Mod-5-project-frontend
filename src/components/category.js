import React from 'react'
import ActivitiesContainer from '../containers/ActivitiesContainer'
{/* <ActivitiesContainer /> */ }

class Category extends React.Component {

    state = {
        showActivities: false
    }

    handleClick = () => {
        this.setState({showActivities: !this.state.showActivities})
    }
    //    function renderActivities(){
    //     //    debugger
    //         // let categoryActivities = props.activities.select(a => a.category_id === props.category.id)

    //     }
    render() {
        console.log(this.state.showActivities);
        
        return (
            <div className='category'>
                    <p >Category: {this.props.category.category_type} </p>
                    <img src={this.props.category.image} height='100px'></img>
                    <ActivitiesContainer activities={this.props.activities}/>
                    <button onClick={this.handleClick}></button>

                </div>
        )

    }
}



export default Category