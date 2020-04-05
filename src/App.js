import React from 'react';
import './App.css';
import { connect } from 'react-redux'
import { fetchCateogriesCreator, fetchActivitiesCreator } from './actionCreators/actionCreater'
import CateogriesContainer from './containers/categoriesContainer'


class App extends React.Component {

  componentDidMount() {
    this.props.fetchCategories()
    this.props.fetchActivities()
  }

  render() {
    return (
      <div className="App">
        <CateogriesContainer  />
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