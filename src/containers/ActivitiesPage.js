import React from 'react'
import { connect } from 'react-redux'
import Search from '../components/search'
import AllActivities from './allActivities'
import Filter from '../components/filter'
import '../stylesheets/ActivitiesPage.css'




class ActivitiesPage extends React.Component {

    state = {
        searchTerm: '',
        searchButton: false,
        SearchedActivities: [],
        length: 0,
        filteredCategory: 'All',
        filteredDate: new Date()
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

    parseDate = (input) => {
        var parts = input.match(/(\d+)/g);
        // new Date(year, month [, date [, hours[, minutes[, seconds[, ms]]]]])
        return new Date(parts[0], parts[1] - 1, parts[2]); // months are 0-based
    }

    getActivtites = () => {
        let activitiesCopy;

        switch (this.state.filteredCategory) {
            case 'All':

                activitiesCopy = [...this.props.activities]
                break;
            case 'Beach':

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
            activitiesCopy = this.props.activities.filter(activity =>
                activity.name && activity.name.toLowerCase().includes(this.state.searchTerm))
        }

        return activitiesCopy
        //.filter((activity) =>
        //  this.parseDate(activity.date).getTime() === this.state.filteredDate
        //);

    }

    handleDateChange = (date) => {
        this.setState({
            filteredDate: date
        })
    }

    formatAMPM = (date1) => {
        let date = date1.split('-')
        let newDate = date[0] + '/' + date[1] + '/' + date[2].slice(0, 2)
        return newDate.toString()
    }

    render() {
        // console.log(this.state.filteredDate);
        return (
            this.props.currentUser ?
                <div>
                    <div style={{'display':'flex'}}>
                        <Search changeSearchInput={this.changeSearchInput} changeButtonState={this.changeButtonState} />
                        <Filter SelectCategory={this.SelectCategory} handleDateChange={this.handleDateChange} />
                    </div>
                    <div activities-container>
                        <AllActivities activities={this.getActivtites()} />
                    </div>
                </div>
                : <div>  </div>
            //<h4 style={{'margin': '20px'}}>Please Login First </h4> 
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
