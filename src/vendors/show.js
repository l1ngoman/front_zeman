// vendor.js

import React, { Component } from 'react';
import { Spinner,Card,Table,ListGroup } from 'react-bootstrap';
import{ getVendor } from '../_API'
import VendorLocationCard from './vendorLocationCard'
import VendorContactCard from './vendorContactCard'
import VendorAccountLine from './vendorAccountLine'

class Vendor extends Component {
    constructor(props){
        super(props)
        this.state = {
            vendor_info: [{
                vendor: {},
                contacts: [{}],
                locations: [{}],
                accounts: [{}]
            }],
            isLoading: false
        }
    }
  render() {
      let { isLoading } = this.state;
      const { vendor, contacts, locations, accounts } = this.state.vendor_info[0];
      let vendorLocations = locations.map((el,i) => {
        return <VendorLocationCard key={i} location={el}/>
      });
      let vendorContacts = contacts.map((el,i) => {
        return <VendorContactCard key={i} contact={el} />
      });
      let customerAccounts = accounts.map((el,i) => {
        return <VendorAccountLine key={i} account={el} />
      });
      console.log(vendorLocations);
    return (
        <main class='container fluid'>
            <h1 class='ml-4 text-center'>{vendor.name}</h1>
            <section id='VendorInfo' class='d-flex flex-wrap justify-content-around align-items-center'>
                <div class='d-flex align-items-center'>
                    <i class="fas fa-phone mr-2"></i>
                    <div class=''>{`${vendor.phone}`}</div>
                </div>
                <div class='d-flex align-items-center'>
                    <i class="fas fa-hourglass mr-2"></i>
                    <div class=''>{`${vendor.hours}`}</div>
                </div>
                <div class='d-flex align-items-center'>
                    <i class="fas fa-globe mr-2"></i>
                    <a href={vendor.website} title='Visit Website'>{`${vendor.website}`}</a>
                </div>
            </section>
            <hr class='w-100'/>
            <div class='d-flex flex-wrap justify-content-center w-100'>
                <div class='mr-lg-2'>
                    <section id='VendorLocations' class='my-1'>
                        <Card border="dark" class='w-100'>
                            <Card.Header style={{display:'flex', justifyContent:'space-between'}}>
                                <div class='d-flex align-items-center'>
                                    <i class="fas fa-warehouse mr-2" title='Warehouse Locations'></i>
                                </div>
                                <a href={`/vendor_locations/new`} title='Add Location'><i class="fas fa-plus"></i></a>
                            </Card.Header>
                            <Card.Body class='d-flex flex-wrap align-items-center justify-content-around py-2'>
                                {vendorLocations}
                            </Card.Body>
                        </Card>
                    </section>
                    <section id='VendorContacts' class='my-2'>
                        <Card border="dark" class='w-100'>
                        <Card.Header style={{display:'flex', justifyContent:'space-between'}}>
                                <div class='d-flex align-items-center'>
                                    <i class="fas fa-user-friends mr-2" title='Vendor Contacts'></i>
                                </div>
                                <a href={`/vendor_contacts/new`} title='Add Contact'><i class="fas fa-plus"></i></a>
                            </Card.Header>
                            <Card.Body class='d-flex flex-wrap align-items-center justify-content-around p-2'>
                                {this.state.vendor_info.contacts != null
                                    && vendorContacts}
                                {this.state.vendor_info.contacts == null
                                    && 'There are no vendor contacts setup.'}
                            </Card.Body>
                        </Card>
                    </section>
                    <section id='VenderRecentOrders' class='my-2'>
                        <Card border='dark' class='w-100'>
                            <Card.Header style={{display:'flex'}}>
                                <div class='d-flex align-items-center'>
                                    <i class="fas fa-clipboard mr-2" title='Order History'></i>
                                </div>
                            </Card.Header>
                            <Table striped bordered hover>
                                <thead>
                                    <tr>
                                        <th class='text-center'>Date</th>
                                        <th class='text-center'>Name</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td class='text-center'>Apr 30</td>
                                        <td class='text-center'>All Home Medical Supply</td>
                                    </tr>
                                </tbody>
                            </Table>
                        </Card>
                    </section>
                </div>
                <section id='CustomerAccountsSection' class='d-flex mt-2'>
                    <Card border='dark' class='p-2'>
                        <Card.Header style={{display:'flex'}}>
                            <div class='d-flex align-items-center'>
                                <i class="fas fa-list mr-2"></i>
                                <h6 class='mb-0'>{`${vendor.name} Accounts`}</h6>
                            </div>
                        </Card.Header>
                        <Table responsive-lg striped bordered hover>
                            <thead>
                                <tr>
                                    <th class='text-center'>Account</th>
                                    <th class='text-center'>Phone</th>
                                </tr>
                            </thead>
                            <tbody>
                                {customerAccounts}
                            </tbody>
                        </Table>
                    </Card>
                </section>
            </div>

            {!isLoading && <Spinner animation="border" variant="primary" />}
        </main>
    );
  }


  componentDidMount() {
    getVendor(this.props.match.params.id)
    .then(APIvendor => {
      console.log(APIvendor);
      this.setState({vendor_info: APIvendor, isLoading: true})
    })
  }

}



export default Vendor;