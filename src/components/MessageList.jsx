import React, { useState, useEffect } from 'react';
import { Container, Row, Button } from 'react-bootstrap';
import { getDocs, collection } from 'firebase/firestore';
import { db } from '../lib/init-firebase';
import { useNavigate } from 'react-router-dom';


const MessageList = () => {

  let navigate = useNavigate();
  const [messageList, setMessageList] = useState([]);
  const messagesCollectionRef = collection(db, "messages");

  useEffect(() => {
    const getMessages = async () => {
      const data = await getDocs(messagesCollectionRef);
      setMessageList(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    }
    getMessages();
  }, []);



  const handleClick = () => {
    navigate("/reply")
  }

  const goToCreateForm = () => {
    navigate("/create-message")
  }

  return (
    <Container>
      <Row>
        <div className="col-12 col-xl-9">
          <h3 className="h4 mb-0 p-4 rounded-top ">Games</h3>
          <table className="table table-striped table-bordered table-responsive table-dark">
            <thead>
              <tr>
                <th scope="col" className="forum-col">
                  <h4>Title</h4>
                </th>
                <th scope="col">Game</th>
                <th scope="col">Platform</th>
                <th scope="col" className="col-width">MulitplayerType</th>
                <th scope="col" className="last-post-col">Message</th>
                <th scope="col">Tags</th>
                <th scope="col">Author</th>
                <th scope="col" className="forum-col">Reply</th>
              </tr>
            </thead>
            <tbody>

              {messageList.map((message) => {
                return (
                  <tr key={message.id}>
                    <td>
                      <h5 className="mb-0 h5">
                        {message.title}
                      </h5>
                    </td>
                    <td>
                      <div>{message.game}</div>
                    </td>
                    <td>
                      <div>{message.platform}</div>
                    </td>
                    <td>
                      <div>{message.multiplayerType}</div>
                    </td>
                    <td>
                      <div>{message.topic}</div>
                    </td>
                    <td>
                      <div>{message.tags}</div>
                    </td>
                    <td>
                      <div>{message.author}</div>
                    </td>
                    <td>
                      <div>
                        <p><span onClick={handleClick}>Click To Reply</span></p>
                      </div>
                    </td>
                  </tr>
                );
              })}

            </tbody>
          </table>
        </div>
      </Row>
      <Button className="btn btn-light mt-3 mb-5"
        onClick={goToCreateForm}>Create a New Post</Button>
    </Container>
  );

}

export default MessageList;