import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Navbar from '../src/containers/Navbar'
import Signup from './forms/signup'
import Login from './forms/login'


// import ActivitiesContainer from './containers/ActivitiesContainer';
// import Chatroom from './components/chatroom'

function App() {
  return (
    <div className="App">
       <Navbar />
       <Signup />
       <Login />
    </div>
  );
}

export default App;
