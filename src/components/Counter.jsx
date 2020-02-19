import React from 'react';
import { connect } from 'react-redux';
import { getCountState } from '../redux/selectors';

const Counter = ({ count }) => (
  <span className='count' aria-label="Total Count"> { count } </span>
)

const mapStateToProps = (state) => {
    const { counter } = state;
    const count = getCountState(state, counter);

    return { count };
};

export default connect(mapStateToProps)(Counter);