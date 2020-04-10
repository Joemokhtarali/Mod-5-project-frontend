import React from 'react'
import { connect } from 'react-redux'
import Activity from '../components/activity'

class ActivitiesPage extends React.Component {

    state = {
        searchTerm: ''
    }
    filter = () => {

    }

    sort = () => {

    }

    searchTermChangeInput = event => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    searchForm = event => {
        event.preventDefault()
    }

    renderActivtites = () => {
        return this.props.activities.map((activity, index) => <Activity index={index} key={activity.id} activity={activity} />)
    }


    render() {
        return (
            <div>
                <form onSubmit={this.searchForm}>
                    <input onChange={this.searchTermChangeInput}type='text' name='searchTerm' value={this.state.searchTerm} />
                    <button>Search</button>
                </form>
                <div className='activities'>
                    <h1>ActivitiesPage</h1>
                    {this.renderActivtites()}
                </div>
            </div>

        )
    }
}

const msp = state => {
    return {
        activities: state.activities
    }
}

export default connect(msp)(ActivitiesPage)