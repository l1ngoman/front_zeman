import React, { Component } from 'react';

class VendorLine extends Component {
  render() {
      let { vendor, locations } = this.props
      console.log(locations);
    return (
      <tbody>
        <tr>
            <td rowspan='2' scope='col-3' class='align-middle text-center'>
                <a href={`/vendors/${vendor.id}`}>
                    <h3>{vendor.name}</h3>
                </a>
                <div>
                    {vendor.phone}
                </div>
            </td>
            <td scope='col-3'>{vendor.hours}</td>
            <td scope='col-3'>{`${locations[0].city}, ${locations[0].state} (${locations[0].country}`})</td>
        </tr>
        <tr class='notes-row'>
            <td colspan='9'>
                <div>Notes: {vendor.notes}</div>
            </td>
        </tr>
      </tbody>
    );
  }
}

export default VendorLine;
