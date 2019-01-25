import React, { Component } from 'react';
import API from './api.js';
import { Route, Link } from 'react-router-dom';
import { Navbar, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';

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
        });
        this.props.history.push('/');
      })
      .catch(err => {
        console.log(err);
      })
  }

  deleteSmurf = (e, smurfId) =>{
    console.log("delete smurf ", smurfId);
    API.delete(`/${smurfId}`)
      .then(res => {
        this.setState({
          smurfs: res.data
        })
      })
      .catch(err => {
        console.log(err);
      })
  }

  render() {
    return (
      <div className="App">
        <Navbar color="primary" style={{color: 'white'}} light expand="md">
          <NavbarBrand>
            Smurf Village
          </NavbarBrand>
          <Nav tabs className="ml-auto" navbar>
            <NavItem>
              <NavLink 
                tag={Link} 
                exact 
                to="/" 
                style={{color: 'white'}}
              >
                Home
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink 
                tag={Link} 
                to="/smurf-form"
                style={{color: 'white'}}
              >
                Add Smurf
              </NavLink>
            </NavItem>
          </Nav>
        </Navbar>
        <nav>
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
          render={(props) => <Smurfs {...props} 
            smurfs={this.state.smurfs} 
            deleteSmurf={this.deleteSmurf}  
          />}
        />
      </div>
    );
  }
}

export default App;
