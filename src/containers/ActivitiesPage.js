import React from 'react'
import { connect } from 'react-redux'
import Activity from '../components/activity'
import { render } from '@testing-library/react'
import { Link } from 'react-router-dom'
import Search from '../components/search'
import AllActivities from './allActivities'
import Filter from '../components/filter'


class ActivitiesPage extends React.Component {

    state = {
        searchTerm: '',
        searchButton: false,
        SearchedActivities: [],
        length: 0,
        filteredCategory: 'All'
    }


    changeButtonState = () => {
        this.setState({
            searchButton: !this.state.searchButton,
        })
    }

    changeSearchInput = event => {
        this.setState({
            searchTerm: event.target.value,
        })
    }

    SelectCategory = event => {
        this.setState({
            filteredCategory: event.target.value
        })
    }

    renderActivtites = () => {
        let activitiesCopy;
        switch (this.state.filteredCategory) {
            case 'All':
                activitiesCopy = [...this.props.categories]
            case 'Theaters':
                activitiesCopy = this.props.activities.filter(a => a.category_id === 1)
            case 'Sports':
                activitiesCopy = this.props.activities.filter(a => a.category_id === 2)
            case 'Nature':
                activitiesCopy = this.props.activities.filter(a => a.category_id === 3)
            case 'Art galleries and Museums':
                activitiesCopy = this.props.activities.filter(a => a.category_id === 4)
            default:
            activitiesCopy = [...this.props.activities]
        }
        this.state.searchButton ?
            activitiesCopy = this.props.activities.filter(a => a.name.toLowerCase().includes(this.state.searchTerm)) : activitiesCopy = [...this.props.activities]

        return activitiesCopy.map((activity, index) => <Activity index={index} key={activity.id} activity={activity} />)
    }

 


    render() {
        // console.log(this.props.activities);

        return (
            <div>
                <Search changeSearchInput={this.changeSearchInput} changeButtonState={this.changeButtonState} />
                <Filter SelectCategory={this.SelectCategory} />
                <AllActivities renderActivtites={this.renderActivtites} />
            </div>

        )
    }
}

const msp = state => {
    return {
        activities: state.activities,
        categories: state.categories
    }
}

export default connect(msp)(ActivitiesPage)


{/* <div className='activities'>
    <h1>ActivitiesPage</h1>
    {this.state.activities ? this.renderActivtites() : null}
</div> */}