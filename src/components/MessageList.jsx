import React, { useState, useEffect } from 'react';
import { Container, Row } from 'react-bootstrap';
import { getDocs, collection } from 'firebase/firestore';
import { db } from '../lib/init-firebase';


const MessageList = () => {
  const [messageList, setMessageList] = useState([]);
  const messagesCollectionRef = collection(db, "messages");

  useEffect(() => {
    const getMessages = async () => {
      const data = await getDocs(messagesCollectionRef);
      setMessageList(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    getMessages();
  }, []);

  return (
    <Container>
      <Row>
        <div className="col-12 col-xl-9">
          <h3 className="h4 mb-0 p-4 rounded-top ">Posts</h3>
          <table className="table table-striped table-bordered table-responsive table-dark">
            <thead>
              <tr>
                <th scope="col" className="forum-col">
                  <h4>Message Title</h4>
                </th>
                <th scope="col">Game</th>
                <th scope="col">Platform</th>
                <th scope="col">Multiplayer Type</th>
                <th scope="col">Replies</th>
                <th scope="col">Date Posted</th>
                <th scope="col" className="last-post-col">Posted By</th>
              </tr>
            </thead>
            <tbody>

              {
              messageList.map((message) => {
                return (
                  <tr key={message.id}>
                    <td>
                      <h5 className="mb-0 h5">
                        <a href="/message-details">{message.title}</a>
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
                      <div>3</div>
                    </td>
                    <td>
                      <div>{Date(message.createdAt.seconds*1000)}</div>
                    </td>
                    <td>
                      <div>{message.author}</div>
                    </td>
                  </tr>
                );
              })}

            </tbody>
          </table>
        </div>
      </Row>
    </Container>
  );
}

export default MessageList;