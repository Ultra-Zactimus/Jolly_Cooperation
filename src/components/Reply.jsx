import React, { useState, useEffect } from 'react';
import { Container, Form, Button } from 'react-bootstrap';


const Reply = () => {

  const [formData, setFormData] = useState({

  });

  useEffect(() => {

  },[]);

  const handleChange = (e) => {

  }

  const handleSubmit = () => {

  }

  return (
    <Container
      className="justify-content-center d-flex border border-dark rounded mt-5 mb-5 pl-5 pr-5">
      <Form onSubmit={() => {}}>
        <h3 className="mt-5">Reply to Post</h3>
        <Form.Label className="mt-5">
          <strong>Your Message</strong>
        </Form.Label>
        <Form.Control
          className="mt-2"
          name="message"
          placeholder="Your Message"
          value={formData.message}
          as="textarea"
          required
          onChange={(e) => handleChange(e)}
        />
        <Button className="btn btn-light mt-5 mb-5">Submit Reply</Button>
      </Form>
    </Container>
  )
}

export default Reply;