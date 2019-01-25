import React from 'react';
import { Card, CardHeader, CardText, Row, Col } from 'reactstrap';

const Smurf = props => {
  return (
    <Col sm="auto">
      <Card body inverse color="primary">
        <CardHeader>{props.name}</CardHeader>
        <CardText>
          <strong>{props.height} tall</strong>
          <p>{props.age} smurf years old</p>
        </CardText>
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

