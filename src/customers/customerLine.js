import React, { Component } from 'react';

class CustomerLine extends Component {
  render() {
      let { customer, locations } = this.props
      console.log(locations);
    return (
      <tbody>
        <tr>
            <td rowspan='2' class='text-center align-middle'>{customer.id}</td>
            <td class='align-middle'>
                <a href={`/customers/${customer.id}`}>
                    <h3>{customer.name}</h3>
                </a>
            </td>
            <td class='align-middle'>
                {customer.phone_1}
            </td>
            <td class='align-middle'>
                {customer.phone_2}
            </td>
        </tr>
        <tr class='notes-row'>
            <td colspan='9'>
                <div>Notes: {customer.notes}</div>
            </td>
        </tr>
      </tbody>
    );
  }
}

export default CustomerLine;
