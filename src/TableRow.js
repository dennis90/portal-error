import React from 'react';

import PortalComponent from './PortalComponent';

export default class TableRow extends React.Component {
  render() {
    return [
      <PortalComponent open={false} key={0}/>,
      <tr key={1}>
        <td>
          {this.props.customer.id}
        </td>

        <td>
          {this.props.customer.name}
        </td>
      </tr>
    ];
  }
}
