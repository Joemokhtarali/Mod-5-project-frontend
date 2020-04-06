import React from 'react'
import Category from '../components/category'
import { connect } from 'react-redux'



class CateogriesContainer extends React.Component {

    state = {
        showActivities: false,
        selectedCategory: null
    }

    changeShowActivities = (id) => {
        this.setState({
            showActivities: !this.state.showActivities,
            selectedCategory: id
        })
    }
    renderCategories = () => {
        return this.props.categories.map(cat => <Category changeView={this.changeShowActivities} key={cat.id} category={cat} activities={this.props.activities.filter(act => act.category_id === cat.id)} />)
    }

    showActivitiyFunction = () => {
        let selectedCat = this.props.categories.filter(category => category.id === this.state.selectedCategory)
        return <div>hi</div>
    }

    render() {


        return (
            <div>
                {this.state.showActivities === true ? <div>{this.showActivitiyFunction}Hi </div> :   <div>
                        <h1> CateogriesContainer </h1>
                        {this.renderCategories()}
                    </div>
                }
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