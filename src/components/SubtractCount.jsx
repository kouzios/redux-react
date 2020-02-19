import React from 'react';
import { connect } from 'react-redux';
import { decrimentCount } from '../redux/actions';

import Button from 'react-bootstrap/Button';

const SubtractCount = (props) => (
    <Button className="mr-2" aria-label="Incriment Count" onClick={() => props.decrimentCount()}> - </Button>
)

export default connect(
    null,
    { decrimentCount }
)(SubtractCount)