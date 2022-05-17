import React, { useState } from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import { db } from '../lib/init-firebase';
import { addDoc, collection, Timestamp } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';

const PostMessage = () => {

  const [formData, setFormData] = useState(
    {
      game: "",
      title: "",
      platform: "",
      topic: "",
      tags: "",
      createdAt: Timestamp.now().toDate()
    });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  };

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      await addDoc(collection(db, "messages"), {
        game: formData.game,
        title: formData.title,
        platform: formData.platform,
        topic: formData.topic,
        tags: formData.tags,
        createdAt: Timestamp.now().toDate()
      })
    } catch (error) {
      console.log(error.message)
    }
  }

  return (
    <Container
      className="justify-content-center d-flex border border-dark rounded mt-5 mb-5 pl-5 pr-5">
      <Form onSubmit={handleSubmit}>
        <h3 className="mt-5">Post a New Message</h3>

        <Form.Label className="mt-5">
          <strong>Game</strong>
        </Form.Label>
        <Form.Control
          className="mt-2"
          name="game"
          placeholder="Name of the Game"
          value={formData.game}
          onChange={(e) => handleChange(e)}
        />

        <Form.Label className="mt-5">
          <strong>Topic Title</strong>
        </Form.Label>
        <Form.Control
          className="mt-2"
          name="title"
          placeholder="Title of Your Post"
          value={formData.title}
          onChange={(e) => handleChange(e)}
        />

        <Form.Label className="mt-5">
          <strong>Platform</strong>
        </Form.Label>
        <Form.Control
          className="mt-2"
          name="platform"
          placeholder="Platform You Play This Game On"
          value={formData.platform}
          onChange={(e) => handleChange(e)}
        />

        <Form.Label className="mt-5">
          <strong>Your Message</strong>
        </Form.Label>
        <Form.Control
          className="mt-2 from-control-lg"
          as="textarea"
          name="topic"
          placeholder="Type Your Message Here"
          value={formData.topic}
          onChange={(e) => handleChange(e)}
        />

        <Form.Label className="mt-5">
          <strong>Your Gamer Tags</strong>
        </Form.Label>
        <Form.Control
          className="mt-2"
          name="tags"
          placeholder="Your Gamer Tags"
          value={formData.tags}
          onChange={(e) => handleChange(e)}
        />

        <Button
          className="btn btn-success mt-5 mb-5 shadow-sm"
          type="submit">Post Message</Button>
      </Form>
    </Container>
  );
}

export default PostMessage;