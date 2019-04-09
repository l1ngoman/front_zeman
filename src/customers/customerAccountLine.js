import React, { Component } from 'react';

class VendorAccountLine extends Component {
  render() {
      let { account } = this.props;
      account.terms = account.terms == '' ? 'N/A' : account.terms
    return (
      <tr class='font'>
          <td class='d-flex flex-column'>
            <a href={`/vendors/${account.vendor_id}`}>
              {account.vendor_name}
            </a>
            <a class='pl-4' href={`/customer_accounts/${account.id}`}>
              {account.account_number}
            </a>
          </td>
          <td class='align-middle'>
            <div class='d-flex align-items-center h-100 w-100'>
                <i class="fas fa-handshake mr-2" title='Account Terms'></i>
                <div class='w-100 text-center'>{account.terms}</div>
            </div>
          </td>
          <td class='align-middle'>
            <div class='d-flex align-items-center h-100 w-100'>
                <i class="fas fa-money-bill mr-2" title='Price Tier'></i>
                <div  class='w-100 text-center'>{account.price_level}</div>
            </div>
          </td>
          <td class='align-middle'>
            <div class='d-flex align-items-center h-100 w-100'>
                <i class="fas fa-truck mr-2" title='Freight Policy'></i>
                <div  class='w-100 text-center'>{account.freight_terms}</div>
            </div>
          </td>
      </tr>
    );
  }

}

export default VendorAccountLine;
