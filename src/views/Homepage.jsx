import React from 'react';

import Row from 'react-bootstrap/Row';

import Counter from '../components/Counter';
import AddCount from '../components/AddCount';
import SubtractCount from '../components/SubtractCount';

import '../styles/homepage.scss';

const Homepage = () => (
  <Row className="todo-app d-flex justify-content-center">
      <SubtractCount />
      <Counter />
      <AddCount />
  </Row>
)

export default Homepage;