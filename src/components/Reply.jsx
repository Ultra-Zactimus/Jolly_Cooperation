import React, { useState } from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import { auth, db } from '../lib/init-firebase';
import { doc, setDoc, getDocs, query, collection } from 'firebase/firestore';


const Reply = () => {

  const [details, setDetails] = useState(
    {
      author: "",
      authorId: "",
      message: "",
      tags: ""
    });

  const handleChange = (e) => {
    setDetails({ 
      ...details, 
      [e.target.name]: e.target.value 
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await setDoc(doc(db, "replies", auth.currentUser.uid), {
      author: auth.currentUser.displayName,
      authorId: auth.currentUser.uid,
      message: details.message,
      tags: details.tags
    });
    setDetails({
      author: "",
      authorId: "",
      message: "",
      tags: ""
    });
  }

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const q = query(collection(db, "messages"));
//     const querySnapshot = await getDocs(q);
//     const queryData = querySnapshot.docs.map((detail) => ({
//         ...detail.data(),
//         id: detail.id,
//     }));
//     console.log(queryData);
//     queryData.map(async (v) => {
//         await setDoc(doc(db, `messages/${v.id}/replies`, details.id), {
//           author: auth.currentUser.displayName,
//           authorId: auth.currentUser.uid,
//           message: details.message,
//           tags: details.tags
//         });
//     })
// };

return (
  <Container
    className="justify-content-center d-flex border border-dark rounded mt-5 mb-5 pl-5 pr-5">
    <Form onSubmit={handleSubmit}>
      <h3 className="mt-5">Reply to Post</h3>

      <Form.Label className="mt-5">
        <strong>Your Message</strong>
      </Form.Label>
      <Form.Control
        className="mt-2"
        name="message"
        placeholder="Your Message"
        value={details.message}
        as="textarea"
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
        value={details.tags}
        required
        onChange={(e) => handleChange(e)}
      />

      <Button className="btn btn-light mt-5 mb-5"
        type="submit">Submit Reply</Button>

    </Form>
  </Container>
)
}

export default Reply;