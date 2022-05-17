import React from 'react';
import { Container, Row } from 'react-bootstrap';
import { getDocs, collection } from 'firebase/firestore';
import { db } from '../lib/init-firebase';


const Message = () => {

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
                <th scope="col">Message/Replies</th>
                <th scope="col">User</th>
                <th scope="col">User</th>
              </tr>
            </thead>
            <tbody>

              <tr>
                <td>
                  <h5 className="mb-0 h5">title</h5>
                </td>
                <td>
                  <p>message body</p>
                </td>
                <td>
                  <div>username</div>
                </td>
                <td>
                  <button>Reply</button>
                </td>
              </tr>

            </tbody>
          </table>
        </div>
      </Row>
    </Container>
  );
}

export default Message;