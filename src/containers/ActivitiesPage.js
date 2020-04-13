import React from 'react'
import { connect } from 'react-redux'
import Activity from '../components/activity'
import { render } from '@testing-library/react'
import { Link } from 'react-router-dom'
import Search from '../components/search'
import AllActivities from './allActivities'
import Filter from '../components/filter'
import ActivitiesContainer from './ActivitiesContainer'


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
        console.log('category', this.state.filteredCategory);

    }

    renderActivtites = () => {
        let activitiesCopy;
        console.log(this.state.filteredCategory)
        switch (this.state.filteredCategory) {
            case 'All':
                console.log("hitting all")
                activitiesCopy = [...this.props.activities]
                break;
            case 'Theaters':
                console.log("hitting Theaters")
                activitiesCopy = this.props.activities.filter(a => a.category_id === 1)
                break;
            case 'Sports':
                console.log("hitting Sports")
                activitiesCopy = this.props.activities.filter(a => a.category_id === 2)
                break;
            case 'Nature':
                console.log("hitting Nature")
                activitiesCopy = this.props.activities.filter(a => a.category_id === 3)
                break;
            case 'Art galleries and Museums':
                console.log("hitting Museums")
                activitiesCopy = this.props.activities.filter(a => a.category_id === 4)
                break;
            default:
                // activitiesCopy = [...this.props.activities]

        }
        // console.log(activitiesCopy);

        // this.state.searchButton || this.state.filteredCategory ?
        //     activitiesCopy = this.props.activities.filter(a => a.name.toLowerCase().includes(this.state.searchTerm)) : activitiesCopy = [...this.props.activities]

        return activitiesCopy.map((activity, index) => <Activity index={index} key={activity.id} activity={activity} history={this.props.history} />)
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