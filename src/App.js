import React from 'react';
import './App.css';
import { connect } from 'react-redux'
import { fetchCateogriesCreator, fetchActivitiesCreator, assignCurrentUser } from './actionCreators/actionCreater'
// import { Redirect, useHistory } from "react-router-dom"
import Navbar from '../src/containers/Navbar'
// import AddActivity from './forms/addActivity'
import Login from './forms/login';
import Signup from './forms/signup';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Home from './containers/home'


class App extends React.Component {

  state = {
    currentUser: null 
  }

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
      <Route exact path='/' component={Home} />
      <Route path='/login' render={()=><Login setUser={this.setUser}/>} />
      <Route path='/signup' component={Signup} />
    </Router> 
  );
}

}

const mdp = dispatch => {
  return {

    fetchCategories: () => dispatch(fetchCateogriesCreator()),
    fetchActivities: () => dispatch(fetchActivitiesCreator()),
    assignCurrentUser: () => dispatch(assignCurrentUser())
  }
}

export default connect(null, mdp)(App)