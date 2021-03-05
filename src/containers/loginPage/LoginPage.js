import React, { useState } from "react";
import Form from "react-bootstrap/Form";

import Header from '../header/Header';
import Footer from '../footer/Footer';

import GreenBtn from '../button/green-btn/green-btn';
import "./LoginPage.css";


export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function validateForm() {
    console.log(email.length > 0 && password.length > 0);
    return email.length > 0 && password.length > 0;
  }

  function handleSubmit(event) {
    event.preventDefault();
  }

  return (
    <div>
      <Header></Header>
      <div className="login-page-container">
        <div className='login-container'>
          <h1 className='login-heading'>Hello, Bookworm!</h1>
        <Form onSubmit={handleSubmit} className={!validateForm() ? 'invalid':'valid'}>
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
          <GreenBtn text="Login" block size="lg" url="/books" type="submit" disabled={!validateForm()}></GreenBtn>
        </Form>
        </div>
    </div>
    <Footer></Footer>
    </div>
  );
}