import React from 'react';
import PropTypes from 'prop-types';
import styles from './Controls.module.css';

const Controls = ({ handleDecrement, handleIncrement, value }) => {
  return (
    <section className={styles.controls}>
      <button
        disabled={value === 0}
        type="button"
        className={styles.button}
        onClick={handleDecrement}
      >
        Назад
      </button>
      <button
        disabled={value === 11}
        type="button"
        className={styles.button}
        onClick={handleIncrement}
      >
        Вперед
      </button>
    </section>
  );
};

Controls.propTypes = {
  handleDecrement: PropTypes.func.isRequired,
  handleIncrement: PropTypes.func.isRequired,
  value: PropTypes.number.isRequired,
};

export default Controls;
