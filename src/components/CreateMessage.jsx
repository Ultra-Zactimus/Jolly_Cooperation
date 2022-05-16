import React, { useState } from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import { db, auth } from '../lib/init-firebase';
import { addDoc, collection } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';

const PostMessage = () => {

  let navigate = useNavigate();

  const [ title, setTitle ] = useState('');
  const [ platform, setPlatform ] = useState('');
  const [ description, setDescription ] = useState('');
  const [ topicMessage, setTopicMessage ] = useState('');
  const [ tags, setTags ] = useState('');
  const [game, setGame] = useState('');

  const messageCollectionRef = collection(db, "messages");

  const createMessage = async () => {
    await addDoc(messageCollectionRef, 
      { 
        title,
        game, 
        platform, 
        description, 
        topicMessage, 
        tags,
        author: { 
          name: auth.currentUser.displayName, 
          id: auth.currentUser.uid
        }
      });
      navigate("/");
  };

  return (
    <Container 
      className="justify-content-center d-flex border border-dark rounded mt-5 mb-5 pl-5 pr-5">
      <Form>
        <h3 className="mt-5">Post a New Message</h3>

        <Form.Label className="mt-5">Game</Form.Label>
        <Form.Control 
          className="mt-2"
          name="game"
          placeholder="Name of the Game"
          onChange={(e) => setGame(e.target.value)}
        />

        <Form.Label className="mt-5">Platform</Form.Label>
        <Form.Control 
          className="mt-2"
          name="platform"
          placeholder="Platform You Play This Game On"
          onChange={(e) => setPlatform(e.target.value)}
        />

        <Form.Label className="mt-5">Topic Title</Form.Label>
        <Form.Control 
          className="mt-2"
          name="title"
          placeholder="Title of Your Post"
          onChange={(e) => setTitle(e.target.value)}
        />

        <Form.Label className="mt-5">Topic Description</Form.Label>
        <Form.Control 
          className="mt-2"
          name="description"
          placeholder="Brief Description of Topic"
          onChange={(e) => setDescription(e.target.value)}
        />

        <Form.Label className="mt-5">Your Message</Form.Label>
        <Form.Control 
          className="mt-2 from-control-lg"
          as="textarea"
          name="message"
          placeholder="Type Your Message Here"
          onChange={(e) => setTopicMessage(e.target.value)}
        />

        <Form.Label className="mt-5">Your Gamer Tags</Form.Label>
        <Form.Control 
          className="mt-2"
          name="tags"
          placeholder="Your Gamer Tags"
          onChange={(e) => setTags(e.target.value)}
        />

        <Button 
          className="btn btn-success mt-5 mb-5 shadow-sm"
          type="submit"
          onClick={createMessage}>Post Message</Button>
      </Form>
    </Container>
  );
}

export default PostMessage;