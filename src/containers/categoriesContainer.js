import React from 'react'
import Category from '../components/category'
import { connect } from 'react-redux'

class CateogriesContainer extends React.Component {


    renderCategories = () => {
        return this.props.categories.map(cat => <Category key={cat.id} category={cat} activities={this.props.activities.filter(act => act.category_id === cat.id)} />)
    }

    render() {
        return (
            <div>
                <h1> CateogriesContainer </h1>
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