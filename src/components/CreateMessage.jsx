import React, { useState } from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import { db, auth } from '../lib/init-firebase';
import { addDoc, collection, Timestamp } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';

const CreateMessage = ({ gameId }) => {

  let navigate = useNavigate();

  console.log(gameId)

  const [formData, setFormData] = useState(
    {
      game: "",
      multiplayerType: "",
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
        gameId: gameId,
        multiplayerType: formData.multiplayerType,
        title: formData.title,
        platform: formData.platform,
        topic: formData.topic,
        tags: formData.tags,
        author: auth.currentUser.displayName,
        authorId: auth.currentUser.uid,
        createdAt: Timestamp.now().toDate()
      })
      navigate("/");
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
        <Form.Select
          className="mt-2"
          name="game"
          placeholder="Name of the Game"
          value={formData.game}
          required
          onChange={(e) => handleChange(e)}>
            <option>Open this select menu</option>
            <option value="Animal Crossing: New Horizons">Animal Crossing</option>
            <option value="Apex Legends">Apex Legends</option>
            <option value="Bloodborne">Bloodborne</option>
            <option value="Dark Souls Remastered">Dark Souls Remastered</option>
            <option value="Dark Souls II">Dark Souls II</option>
            <option value="Dark Souls III">Dark Souls III</option>
            <option value="Destiny">Destiny</option>
            <option value="Destiny 2">Destiny 2</option>
            <option value="Diablo">Diablo</option>
            <option value="Diablo II">Diablo II</option>
            <option value="Diablo III">Diablo III</option>
            <option value="Elden Ring">Elden Ring</option>
            <option value="Fortnite">Fortnite</option>
            <option value="Halo Infinite">Halo Infinite</option>
            <option value="Minecraft">Minecraft</option>
            <option value="MTG Arena">MTG Arena</option>
            <option value="Runescape">Runescape</option>
            <option value="World of Warcraft">World of Warcraft</option>
        </Form.Select>

        <Form.Label className="mt-5">
          <strong>Multiplayer Type</strong>
        </Form.Label>
        <Form.Select
          className="mt-2"
          name="multiplayerType"
          placeholder="Type of Multiplayer"
          value={formData.multiplayerType}
          required
          onChange={(e) => handleChange(e)}>
            <option>Open this select menu</option>
            <option value="co-op">Co-Op</option>
            <option value="pvp">PVP</option>
        </Form.Select>

        <Form.Label className="mt-5">
          <strong>Topic Title</strong>
        </Form.Label>
        <Form.Control
          className="mt-2"
          name="title"
          placeholder="Title of Your Post"
          value={formData.title}
          required
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
          required
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
          required
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
          required
          onChange={(e) => handleChange(e)}
        />

        <Button
          className="btn btn-success mt-5 mb-5 shadow-sm"
          type="submit">Post Message</Button>
      </Form>
    </Container>
  );
}

export default CreateMessage;