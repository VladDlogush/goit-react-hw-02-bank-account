import React, { Component } from 'react';
import styles from './Dashboard.module.css';
import Controls from './Controls/Controls';
import Balance from './Balance/Balance';
import TransactionHistory from './TransactionHistory/TransactionHistory';

class Dashboard extends Component {
  state = {
    transactions: [],
    balance: 0,
  };

  handleTransaction = transaction => {
    this.setState(prevState => {
      return {
        transactions: [...prevState.transactions, transaction],
        balance:
          transaction.type === 'withdrawal'
            ? prevState.balance - transaction.amount
            : prevState.balance + transaction.amount,
      };
    });
  };

  render() {
    const { transactions, balance } = this.state;
    return (
      <div className={styles.dashboard}>
        <Controls
          handleTransaction={this.handleTransaction}
          balance={balance}
        />
        <Balance transactions={transactions} balance={balance} />
        <TransactionHistory transactions={transactions} />
      </div>
    );
  }
}

export default Dashboard;
