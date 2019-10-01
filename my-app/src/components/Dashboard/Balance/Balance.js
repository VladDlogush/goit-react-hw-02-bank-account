import React from 'react';
import PropTypes from 'prop-types';
import styles from './Balance.module.css';

const Balance = ({ transactions, balance }) => {
  const handleTotalAmount = type => {
    const amount = transactions
      .filter(transaction => transaction.type === type)
      .reduce((acc, transaction) => {
        return Number(transaction.amount) + Number(acc);
      }, 0);

    return amount;
  };

  return (
    <section className={styles.balance}>
      <span role="img" aria-label="deposit" className={styles.balance__text}>
        ⬆️{handleTotalAmount('deposit')}$
      </span>
      <span role="img" aria-label="withdrawal" className={styles.balance__text}>
        ⬇️{handleTotalAmount('withdrawal')}$
      </span>
      <span className={styles.balance__text}>Balance: {balance}$</span>
    </section>
  );
};

Balance.propTypes = {
  transactions: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.number.isRequired,
      date: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
  balance: PropTypes.number.isRequired,
};

export default Balance;
