import React, { Component, PropTypes } from 'react';

// Task component - represents a single todo item
export default class Transaction extends Component {
  render() {
    return (
      <li>{this.props.transaction.text}</li>
    );
  }
}

Transaction.propTypes = {
  // This component gets the task to display through a React prop.
  // We can use propTypes to indicate it is required
  transaction: PropTypes.object.isRequired,
};
