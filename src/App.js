import React from 'react';
import './App.css';
import { connect } from 'react-redux'
import { fetchCateogriesCreator, fetchActivitiesCreator } from './actionCreators/actionCreater'
import CateogriesContainer from './containers/categoriesContainer'
// import { Redirect, useHistory } from "react-router-dom"
import Navbar from '../src/containers/Navbar'
import AddActivity from './forms/addActivity'


class App extends React.Component {

  state = {
    currentUser: null
  }

  componentDidMount() {
    this.props.fetchCategories()
    this.props.fetchActivities()
    const user_id = localStorage.user_id

    if (user_id) {
      fetch('http://localhost:3000/auto_login', {
        headers: {
          'Authorization': user_id
        }
      }).then(resp => resp.json()).then(response => {
        if (response.errors) {
          alert(response.errors)
        } else {
          this.setState({ currentUser: response })
        }
      })
    }
  }


setUser = (user) => {
  this.setState({
    currentUser: user
  }, () => {
    localStorage.user_id = user.id
    this.props.history.push('/')
  })
}

logout = () => {
  this.setState({
    currentUser: null
  }, () => {
    localStorage.removeItem('user_id')
    this.props.history.push('/')
  }
  )
}

render() {
  return (
    <div className="App">
      <Navbar setUser={this.setUser} logout={this.logout} />
      <div className='slides'> Slides </div>
      <h2>Browse By Category: </h2>
      <CateogriesContainer />
      <h2>Recently Viewd: </h2>
      <div className='recently-viewed'> Views</div>
      <AddActivity />
    </div>
  );
}

}

const mdp = dispatch => {
  return {

    fetchCategories: () => dispatch(fetchCateogriesCreator()),
    fetchActivities: () => dispatch(fetchActivitiesCreator()),
  }
}

export default connect(null, mdp)(App)