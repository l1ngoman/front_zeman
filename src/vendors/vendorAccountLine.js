import React, { Component } from 'react';

class VendorAccountLine extends Component {
  render() {
      let { account } = this.props;
    return (
      <tr>
          <td class='d-flex flex-column'>
            <a href={`/customers/${account.customer_id}`}>
              {account.customer_name}
            </a>
            <a class='pl-4' href={`/customer_accounts/${account.id}`}>
              {account.account_number}
            </a>
          </td>
          <td>
            <div>{account.phone_1}</div>
            <div>{account.phone_2}</div>
          </td>
      </tr>
    );
  }

}

export default VendorAccountLine;
