import React, { Component } from 'react';

import Transaction from './Transaction.jsx';

export default class App extends Component {
  getTransactions() {
    return [
      {
        _id: 1,
        text: 'This is transaction 1'
      }, {
        _id: 2,
        text: 'This is transaction 2'
      }, {
        _id: 3,
        text: 'This is transaction 3'
      }
    ];
  }

  renderTransactions() {
    return this.getTransactions().map(transaction => (
      <Transaction key={transaction._id} transaction={transaction} />
    ));
  }

  render() {
    return (
      <div className="container">
        <header>
          <h1>Todo List</h1>
        </header>

        <ul>
          {this.renderTransactions()}
        </ul>
      </div>
    );
  }
}
