import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Publication from './Publication/Publication';
import Controls from './Controls/Controls';
import Counter from './Counter/Counter';
import styles from './Reader.module.css';

class Reader extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: 0,
    };
  }

  handleDecrement = () => {
    this.setState(state => ({
      value: state.value - 1,
    }));
  };

  handleIncrement = () => {
    this.setState(state => ({
      value: state.value + 1,
    }));
  };

  render() {
    const { items } = this.props;
    const { value } = this.state;

    return (
      <div className={styles.reader}>
        <Publication
          id={items[value].id}
          text={items[value].text}
          title={items[value].title}
        />
        <Counter value={value} />
        <Controls
          handleDecrement={this.handleDecrement}
          handleIncrement={this.handleIncrement}
          value={value}
        />
      </div>
    );
  }
}

Reader.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default Reader;
