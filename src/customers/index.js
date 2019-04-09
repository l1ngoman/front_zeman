// customers.js

import React, { Component } from 'react';
import { Spinner,Table } from 'react-bootstrap';
import{ getCustomers } from '../_API'
import CustomerLine from './customerLine'

class Customers extends Component {
    constructor(props){
        super(props)
        this.state = {
            customer_info: [{
                customer: {},
                locations: {}
            }],
            isLoading: true
        }
    }
  render() {
      let { isLoading } = this.state;
      let customers = this.state.customer_info.map((el,i) => {
          return <CustomerLine key={i} customer={el.customer} locations={el.locations}/>
      })
    return (
      <main class='container fluid'>
            <h1 class='text-center'>Customers</h1>
            <Table striped bordered>
                {customers}
            </Table>
            {isLoading && <Spinner animation="border" variant="primary" />}
      </main>
    );
  }


  componentDidMount() {
    getCustomers()
    .then(APIcustomers => {
      console.log(APIcustomers);
      this.setState({customer_info: APIcustomers, isLoading: false})
    })
  }

}



export default Customers;