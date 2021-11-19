import React, { useState } from "react";
import  {Redirect} from "react-router-dom"
import {Form} from "react-bootstrap";
import {Button} from "react-bootstrap";
import {Container} from "react-bootstrap";
import { ClientList } from "./components/ClientList";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

// import "./Login.css";

export default function Login() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function validateForm() {
    
    return email.length > 0 && password.length > 0;
   

  }

  function handleSubmit(event) {
    event.preventDefault();
    <Router>
    <Route path="/user/:username"  />
   </Router>
  }

  return (
    <Container fluid>
      <h3>Login</h3>
        <div className="Login">
      <Form onSubmit={handleSubmit}>
        <Form.Group size="lg" controlId="email">
          <Form.Label>Email</Form.Label>
          <Form.Control
            autoFocus
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>
        <Form.Group size="lg" controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>
        <Button block size="lg" type="submit" disabled={!validateForm()}>
          Login
        </Button>
        <Link to="/client-list">ClientList</Link>
      </Form>
    </div>
    </Container>
  
  );
}