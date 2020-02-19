import React from 'react';
import { connect } from 'react-redux';
import { incrimentCount } from '../redux/actions';

import Button from 'react-bootstrap/Button';

const AddCount = (props) => (
    <Button className="ml-2" aria-label="Incriment Count" onClick={() => props.incrimentCount()}> + </Button>
)

export default connect(
    null,
    { incrimentCount }
)(AddCount)