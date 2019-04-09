import React, { Component } from 'react';
import { Button } from 'react-bootstrap';


class CustomerLocationCard extends Component {
  render() {
    console.log('made it');
      let { id,address_1,address_2,city,state,zip } = this.props.location
      address_2 = address_2 != null ? address_2 : '';
      zip = zip != null ? zip : '';
    return (
          <Button variant="outline-secondary" style={this.style} href={`/customer_locations/${id}`}>
              <div>{address_1}</div>
              <div>{address_2}</div>
              <div>{`${city}, ${state} ${zip}`}</div>
          </Button>
    );
  }

  style = {
    margin:'2px',
    minWidth:'25px'
  }
}

export default CustomerLocationCard;
