import React from 'react';
import './App.css';
import { connect } from 'react-redux'
import { fetchCateogriesCreator, fetchActivitiesCreator, assignCurrentUser } from './actionCreators/actionCreater'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Home from './containers/home'
import Profile from './components/profile';
import ActivitiesPage from './containers/ActivitiesPage';
import MainPage from './containers/mainPage'
import ActivityPage from './components/activityPage';
import NewNavBar from './containers/newNavbar';
import AddActivityT from './forms/addActivity2';




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
            this.props.history.push('/')
          } else {
            this.props.assignCurrentUser(response)

          }
        })
    }
  }




  render() {
    return (
      <Router>
        <NewNavBar currentUser={this.props.currentUser}/>
        <Route exact path='/addactivity' render={() => <AddActivityT currentUser={this.props.currentUser}/>} />
        <Route exact path='/home' component={Home} />
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