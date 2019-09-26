import React from 'react';
import PropTypes from 'prop-types';
import styles from './Counter.module.css';

const Counter = ({ value }) => {
  return <p className={styles.counter}>{value + 1}/12</p>;
};

Counter.propTypes = {
  value: PropTypes.number.isRequired,
};

export default Counter;
