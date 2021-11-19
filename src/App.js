import logo from './logo.svg';
import './App.css';
import React, {Component} from "react";
import ClientList from "./components/ClientList"
import IpComponent from "./components/Ipcomponent"
import DataComponent from "./components/VisualiseData"

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

class App extends Component {
  state = {
    clients: []
  };

  async componentDidMount() {
    const response = await fetch('/users');
    const body = await response.json();
    this.setState({clients: body});
  }

  render() {
    const {clients} = this.state;
    return (
        <div className="App">
         <Router>
           <ul>
             <li><Link to="/get-geo-loc">Get GeoLocation</Link></li>
             <li> <Link to="/client-list">ClientList</Link></li>
             <li><Link to="/visualise-data">Data</Link></li>
           </ul>
         

        

         
         <Switch>
          {/* <Route exact path="/">
          <Login />
          </Route> */}
          <Route path="/client-list"><ClientList /></Route>
          <Route path="/get-geo-loc"><IpComponent /></Route>
          <Route path="/visualise-data"><DataComponent /></Route>
          </Switch>
         </Router>
        </div>
        
    );
  }
}

export default App;


// <button >Login</button>
          
// <header className="App-header">
//   {/* <img src={logo} className="App-logo" alt="logo" /> */}
//   <div className="App-intro">
//     <h2>Clients</h2>
//     {/* {clients.map(client =>
//         <div key={client.id}>
//           {client.firstName} ({client.lastName})
//         </div>
//     )} */}
//   </div>
// </header>
// <Router>
// <div>
// <Link to="/client-list">ClientList</Link>
// </div>

// <hr />

// <Switch>
// {/* <Route exact path="/">
// <Login />
// </Route> */}
// <Route path="/client-list">
// <ClientList />
// </Route>

// </Switch>
// </Router>