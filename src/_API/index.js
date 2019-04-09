import AuthService from './auth_service';
const auth = new AuthService();

const BASE = "http://localhost:3000"

let getVendors = function() {

    return fetch(BASE + '/vendors')
    .then((resp) => {
      if(resp.errors) {
        console.log(resp);
      }
      let json = resp.json()
      console.log(json);
      return json
    })
  }

let getVendor = function(id) {

    return fetch(BASE + `/vendors/${id}`)
    .then((resp) => {
      if(resp.errors) {
        console.log(resp);
      }
      let json = resp.json()
      console.log(json);
      return json
    })
  }

  let getCustomers = function() {

    return fetch(BASE + '/customers')
    .then((resp) => {
      if(resp.errors) {
        console.log(resp);
      }
      let json = resp.json()
      console.log(json);
      return json
    })
  }

  let getCustomer = function(id) {

    return fetch(BASE + `/customers/${id}`)
    .then((resp) => {
      if(resp.errors) {
        console.log(resp);
      }
      let json = resp.json()
      console.log(json);
      return json
    })
  }

  export { getVendors, getVendor, getCustomers, getCustomer }