import React from 'react';
import './App.css';
import { connect } from 'react-redux'
import { fetchCateogriesCreator, fetchActivitiesCreator, assignCurrentUser } from './actionCreators/actionCreater'
import Navbar from '../src/containers/Navbar'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Home from './containers/home'
import Profile from './components/profile';
import ActivitiesPage from './containers/ActivitiesPage';
import MainPage from './containers/mainPage'
import ActivityPage from './components/activityPage';




class App extends React.Component {


  componentDidMount() {
    this.props.fetchCateogriesCreator()
    this.props.fetchActivitiesCreator()

    const user_id = localStorage.user_id
    if (user_id) {
      fetch('http://localhost:3000/auto_login', {
        headers: {
          'Authorization': user_id
        }
      })
        .then(resp => resp.json())
        .then(response => {
          if (response.errors) {
            alert(response.errors)
          } else {
            this.props.assignCurrentUser(response)

          }
        })
    }
  }




  render() {
    console.log('currentUser', this.props.currentUser);
    
    return (
      <Router>
        <Navbar currentUser={this.props.currentUser}/>
        <Route exact path='/Home' component={Home} />
        <Route exact path='/' component={MainPage} />
        <Route path='/activities/:id' component={ActivityPage} />
        <Route exact path='/activities' component={ActivitiesPage} />
        <Route path='/myprofile' render={() => <Profile currentUser={this.props.currentUser} />} />
      </Router>
    );
  }

}

const msp = state => {
  return {
    activities: state.activities,
    currentUser: state.currentUser
  }
}

export default connect(msp, { assignCurrentUser, fetchCateogriesCreator, fetchActivitiesCreator })(App)