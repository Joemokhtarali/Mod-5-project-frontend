import React from 'react'
import Category from '../components/category'
import { connect } from 'react-redux'

class CateogriesContainer extends React.Component {

 

    renderCategories = () => {
        return this.props.categories.map(category => <Category key={category.id} category={category} activities={this.props.activities.filter(activity => activity.category_id === category.id)}/>)
    }

    render() {
        return (
            <div>
                {this.renderCategories()}
            </div>

        )
    }
}

const msp = state => {
    return {
        categories: state.categories,
        activities: state.activities
    }
}

export default connect(msp)(CateogriesContainer)