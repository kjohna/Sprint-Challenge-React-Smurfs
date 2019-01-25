import React, { Component } from 'react';
import API from './api.js';

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
        <SmurfForm 
          addSmurf={this.addSmurf} 
          handleInputChange={this.handleInputChange} 
          newSmurf={this.state.newSmurf} 
        />
        <Smurfs smurfs={this.state.smurfs} />
      </div>
    );
  }
}

export default App;
