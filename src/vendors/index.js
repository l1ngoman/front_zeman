// vendors.js

import React, { Component } from 'react';
import { Spinner,Table } from 'react-bootstrap';
import{ getVendors } from '../_API'
import VendorLine from './vendorLine'

class Vendors extends Component {
    constructor(props){
        super(props)
        this.state = {
            vendor_info: [],
            isLoading: true
        }
    }
  render() {
      let { isLoading } = this.state;
      let vendors = this.state.vendor_info.map((el,i) => {
          return <VendorLine key={i} vendor={el.vendor} locations={el.locations} contacts={el.contacts}/>
      })
    return (
      <main class='container fluid'>
            <h1 class='text-center'>Vendors</h1>
            <Table striped bordered>
                {vendors}
            </Table>
                {isLoading && <Spinner animation="border" variant="primary" />}
      </main>
    );
  }


  componentDidMount() {
    getVendors()
    .then(APIvendors => {
      console.log(APIvendors);
      this.setState({vendor_info: APIvendors, isLoading: false})
    })
  }

}



export default Vendors;