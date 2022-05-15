import React, { useState } from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../lib/init-firebase'

const Register = () => {
  const [ email, setEmail ] = useState('');
  const [ password, setPassword ] = useState('');

  async function handleSubmit() {
    try {
      const docRef = await addDoc(collection(db, "users"), {
        email: email,
        password: password
      });
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
}

  return (
    <Container className="justify-content-center d-flex">
      <Form className="mt-5">

        <div className="mt-4 mb-5">
          <h1>Registration</h1>
        </div>

        <Form.Label className="mt-4">Enter Your Email</Form.Label>
        <Form.Control
          className="mt-2"
          title="email"
          name="email"
          placeholder="Enter your Email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          required
        />

        <Form.Label className="mt-4">Enter Your Password</Form.Label>
        <Form.Control
          className="mt-2"
          title="password"
          type="password"
          name="password"
          placeholder="Enter your Password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          required
        />

        <Form.Label className="mt-4">Confirm Your Password</Form.Label>
        <Form.Control
          className="mt-2"
          title="confirm"
          type="password"
          name="confirm"
          placeholder="Confirm your Password"
          required
        />

        <Button
          className="btn btn-success mt-5"
          onClick={handleSubmit}
        >
          Submit
        </Button>

      </Form>
    </Container>
  );
}

export default Register;