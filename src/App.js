import React from 'react';
import './App.css';
import { connect } from 'react-redux'
import { fetchCateogriesCreator, fetchActivitiesCreator, assignCurrentUser, removeCurrentUser } from './actionCreators/actionCreater'
import Navbar from '../src/containers/Navbar'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Home from './containers/home'
import Profile from './components/profile';
import ActivitiesPage from './containers/ActivitiesPage';
import MainPage from './containers/mainPage'
import ActivityPage from './components/activityPage';
import AllActivities from './containers/allActivities';
import activityPage from './components/activityPage';



class App extends React.Component {
  componentDidMount() {
    this.props.fetchCategories()
    this.props.fetchActivities()
    // const user_id = localStorage.user_id

    // if (user_id) {
    //   fetch('http://localhost:3000/auto_login', {
    //     headers: {
    //       'Authorization': user_id
    //     }
    //   }).then(resp => resp.json()).then(response => {
    //     if (response.errors) {
    //       alert(response.errors)
    //     } else {
    //       this.setState({ currentUser: response })
    //     }
    //   })
    // }
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
    <Router>
      <Navbar setUser={this.setUser} logout={this.logout} />
      <Route exact path='/Home' component={Home} />
      <Route exact path='/' component={MainPage} />
      <Route path='/activities/:id' component={ActivityPage} />
      <Route exact path='/activities' component={ActivitiesPage} />
      <Route path='/myprofile' render={()=> <Profile currentUser={this.props.currentUser}/>} />
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
const mdp = dispatch => {
  return {

    fetchCategories: () => dispatch(fetchCateogriesCreator()),
    fetchActivities: () => dispatch(fetchActivitiesCreator()),
    assignCurrentUser: () => dispatch(assignCurrentUser()),
    removeCurrentUser: () => dispatch(removeCurrentUser())
  }
}

export default connect(msp, mdp)(App)