import React, { Component } from 'react';
import axios from 'axios';


export default class Instructions extends Component {

  
  render() {

    const findGeoLocation = () => {
      const ipaddress = document.getElementById('ip-address').value
      const geolocation = document.getElementById('geolocation').value

      alert(ipaddress)

      var data = {
        'ip-address':ipaddress
      }

      axios.post('/find-ip', data)
      .then(response => {
        document.getElementById('geolocation').value = response.data
      });

    }
  

    return(
      <>
        <h1>Find Geo Location</h1>
        <input type ="text" placeholder="Enter Ipaddress" id="ip-address"/>
        <button onClick={findGeoLocation}>Submit</button>
        <h3>Geo Location:</h3> <input type="text" id="geolocation" disabled/>
      </>
    )
  }
}