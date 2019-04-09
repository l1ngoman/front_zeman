import React, { Component } from 'react';
import { Button } from 'react-bootstrap';


class VendorLocationCard extends Component {
  render() {
    console.log('made it');
      let { location } = this.props
    return (
          <Button variant="outline-secondary" style={this.style} href={`/vendor_locations/${location.id}`}>
              {`${location.state}`}
          </Button>
    );
  }

  style = {
    margin:'2px',
    minWidth:'25px'
  }
}

export default VendorLocationCard;
