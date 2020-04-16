import React from 'react'
import { connect } from 'react-redux'
// import Activity from '../components/activity'
import Search from '../components/search'
import AllActivities from './allActivities'
import Filter from '../components/filter'
import './ActivitiesPage.css'




class ActivitiesPage extends React.Component {

    state = {
        searchTerm: '',
        searchButton: true,
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

    getActivtites = () => {
        let activitiesCopy;

        switch (this.state.filteredCategory) {
            case 'All':

                activitiesCopy = [...this.props.activities]
                break;
            case 'Theaters':

                activitiesCopy = this.props.activities.filter(a => a.category_id === 1)
                break;
            case 'Sports':

                activitiesCopy = this.props.activities.filter(a => a.category_id === 2)
                break;
            case 'Nature':

                activitiesCopy = this.props.activities.filter(a => a.category_id === 3)
                break;
            case 'Art galleries and Museums':

                activitiesCopy = this.props.activities.filter(a => a.category_id === 4)
                break;
            default:

        }
        if (this.state.searchButton) {
            activitiesCopy = this.props.activities.filter(activity => activity.name.toLowerCase().includes(this.state.searchTerm))
        }
        return activitiesCopy
        
    }




    render() {
        return (
            <div>
                <Search changeSearchInput={this.changeSearchInput} changeButtonState={this.changeButtonState} />
                <Filter SelectCategory={this.SelectCategory} />
                <div activities-container>
                    <AllActivities activities={this.getActivtites()} />
                </div>
            </div>
        )
    }
}

const msp = state => {
    return {
        activities: state.activities,
        categories: state.categories,
        currentUser: state.currentUser
    }
}

export default connect(msp)(ActivitiesPage)
