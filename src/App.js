import React from 'react';

import TableRow from './TableRow';

const customers = [
  { id: 0, name: 'John Smith' },
  { id: 1, name: 'Bill Wilson' },
  { id: 3, name: 'Anna Houston' }
];

class App extends React.Component {
  constructor(...args) {
    super(...args);

    this.state = {
      customers: [],
    };
  }

  buttonClickHandler = () => {
    this.setState({ customers: this.state.customers.length > 0 ? [] : [...customers] });
  }
  render() {
    const rows = this.state.customers.map((customer, index) => (
      <TableRow customer={customer} key={index}/>
    ));

    return (
      <>
        <button onClick={this.buttonClickHandler}>
          Click-me
        </button>

        <table>
          <thead>
            <tr>
              <th>Id</th>
              <th>Name</th>
            </tr>
          </thead>
          <tbody>
            {rows}
          </tbody>
        </table>
      </>
    );
  }
}

export default App;
