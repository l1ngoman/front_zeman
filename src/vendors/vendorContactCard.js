import React, { Component } from 'react';
import { Button } from 'react-bootstrap';


class VendorContactCard extends Component {
  render() {
      let { contact } = this.props
    return (
      <h4>
          <Button variant="secondary" href={`/vendor_locations/${contact.id}`}>
              {`${contact.first_name} - ${contact.role} - ${contact.phone}`}
          </Button>
      </h4>
    );
  }
}

export default VendorContactCard;
