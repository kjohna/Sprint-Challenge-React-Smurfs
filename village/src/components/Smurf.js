import React from 'react';
import { Card, CardHeader, CardText, Col, Button } from 'reactstrap';

const Smurf = props => {
  return (
    <Col sm="auto">
      <Card body inverse color="primary">
        <CardHeader>{props.name}</CardHeader>
        <CardText>
          {props.height} tall<br/>
          {props.age} smurf years old
        </CardText>
        <Button 
          inverse 
          color="danger"
          onClick={e => props.deleteSmurf(e, props.id)}  
        >
          Delete Smurf
        </Button>
      </Card>
    </Col>
  );
};

Smurf.defaultProps = {
  name: '',
  height: '',
  age: ''
};

export default Smurf;

