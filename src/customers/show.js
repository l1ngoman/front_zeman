// customer.js

import React, { Component } from 'react';
import { Spinner,Card,Table,ListGroup } from 'react-bootstrap';
import{ getCustomer } from '../_API'
import CustomerLocationCard from './customerLocationCard'
import CustomerContactCard from './customerContactCard'
import CustomerAccountLine from '../customers/customerAccountLine'

class Customer extends Component {
    constructor(props){
        super(props)
        this.state = {
            customer_info: [{
                customer: {},
                contacts: [{}],
                locations: [{}],
                accounts: [{}]
            }],
            isLoading: false
        }
    }
  render() {
      let { isLoading } = this.state;
      const { customer, contacts, locations, accounts } = this.state.customer_info[0];
      let customerLocations = locations.map((el,i) => {
        return <CustomerLocationCard key={i} location={el}/>
      });
    //   let customerContacts = contacts.map((el,i) => {
    //     return <CustomerContactCard key={i} contact={el} />
    //   });
      let customerAccounts = accounts.map((el,i) => {
        return <CustomerAccountLine key={i} account={el} />
      });
    return (
      <main class='container fluid'>
            <h1 class='ml-4 text-center'>{customer.name}</h1>
            <section id='CustomerInfo' class='d-flex flex-wrap justify-content-around align-items-center'>
                <div class='d-flex align-items-center'>
                    <i class="fas fa-phone mr-2"></i>
                    <div class=''>{`${customer.phone_1}`}</div>
                </div>
                <div class='d-flex align-items-center'>
                    <i class="fas fa-phone mr-2"></i>
                    <div class=''>{`${customer.phone_2}`}</div>
                </div>
            </section>
            <hr class='w-100'/>
            <div class='d-flex flex-wrap justify-content-center'>
                <div class='w-lg-100 mr-lg-2'>
                    <section id='CustomerLocations' class='my-2'>
                        <Card border="dark" class='w-100'>
                            <Card.Header style={{display:'flex', justifyContent:'space-between'}}>
                                <div class='d-flex align-items-center'>
                                    <i class="fas fa-warehouse mr-2" title='Customer Locations'></i>
                                </div>
                                <a href={`/customer_locations/new`} title='Add Location'><i class="fas fa-plus"></i></a>
                            </Card.Header>
                            <Card.Body class='d-flex flex-wrap align-items-center justify-content-around p-2'>
                                {customerLocations}
                            </Card.Body>
                        </Card>
                    </section>
                    <section id='CustomerContacts' class='my-2'>
                        <Card border="dark" class='w-100'>
                        <Card.Header style={{display:'flex', justifyContent:'space-between'}}>
                                <div class='d-flex align-items-center'>
                                    <i class="fas fa-user-friends mr-2" title='Customer Contacts'></i>
                                </div>
                                <a href={`/customer_contacts/new`} title='Add Contact'><i class="fas fa-plus"></i></a>
                            </Card.Header>
                            <Card.Body class='d-flex flex-wrap align-items-center justify-content-around p-2'>
                                
                            </Card.Body>
                        </Card>
                    </section>
                    <section id='CustomerRecentOrders' class='my-2'>
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
                                        <td class='text-center'>Confirmation Number</td>
                                    </tr>
                                </tbody>
                            </Table>
                        </Card>
                    </section>
                </div>
                <section id='CustomerAccountsSection' class='d-flex mt-2'>
                    <Card border='dark' class='p-2'>
                        <Card.Header style={{display:'flex',minWidth:'100%'}}>
                            <div class='d-flex align-items-center'>
                                <i class="fas fa-list mr-2" title='Customer Accounts'></i>
                            </div>
                        </Card.Header>
                        <Table responsive-lg striped bordered hover>
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
    getCustomer(this.props.match.params.id)
    .then(APIcustomer => {
      console.log(APIcustomer);
      this.setState({customer_info: APIcustomer, isLoading: true})
    })
  }

}



export default Customer;