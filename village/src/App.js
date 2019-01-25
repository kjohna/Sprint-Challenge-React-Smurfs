import React, { Component } from 'react';
import API from './api.js';
import { Route, NavLink } from 'react-router-dom';

import './App.css';
import SmurfForm from './components/SmurfForm';
import Smurfs from './components/Smurfs';

const emptySmurf = {
  name: '',
  age: '',
  height: ''
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      smurfs: [],
      newSmurf: emptySmurf
    };
  }
  // add any needed code to ensure that the smurfs collection exists on state and it has data coming from the server
  // Notice what your map function is looping over and returning inside of Smurfs.
  // You'll need to make sure you have the right properties on state and pass them down to props.

  componentDidMount() {
    API.get("")
      .then(res => {
        console.log(res);
        this.setState({
          smurfs: res.data
        })
      })
      .catch(err => {
        console.log(err);
      })
  }

  handleInputChange = e => {
    e.persist();
    this.setState( prevState => {
      return { 
        newSmurf :{
          ...prevState.newSmurf,
          [e.target.name]: e.target.value 
        }
      }
    });
  };

  addSmurf = (e, smurfData) => {
    e.preventDefault();
    API.post("", smurfData)
      .then(res => {
        console.log(res);
        this.setState({
          ...this.state.smurfs,
          smurfs: res.data,
          newSmurf: emptySmurf
        })
      })
      .catch(err => {
        console.log(err);
      })
  }

  render() {
    return (
      <div className="App">
        <nav>
          <NavLink exact to="/">
            Home
          </NavLink>
          <NavLink to="/smurf-form">
            Add Smurf
          </NavLink>
        </nav>
        <Route 
          path="/smurf-form"
          render={props => <SmurfForm {...props}
            addSmurf={this.addSmurf} 
            handleInputChange={this.handleInputChange} 
            newSmurf={this.state.newSmurf} 
          />}
        />
        <Route 
          path="/"
          exact
          render={(props) => <Smurfs {...props} smurfs={this.state.smurfs} />}
        />
      </div>
    );
  }
}

export default App;
