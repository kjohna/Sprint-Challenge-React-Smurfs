import React, { Component } from 'react';
import { Container } from 'reactstrap';

import Smurf from './Smurf';

class Smurfs extends Component {
  render() {
    return (
      <div>
        <h1>Smurf Village</h1>
        <Container className="Smurfs">
          {this.props.smurfs.map(smurf => {
            return (
              <Smurf
                name={smurf.name}
                id={smurf.id}
                age={smurf.age}
                height={smurf.height}
                key={smurf.id}
                deleteSmurf={this.props.deleteSmurf}
              />
            );
          })}
        </Container>
      </div>
    );
  }
}

Smurf.defaultProps = {
 smurfs: [],
};

export default Smurfs;
