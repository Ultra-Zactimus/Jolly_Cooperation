import React from 'react';
import Post from './Post';
import { Container, Row } from 'react-bootstrap';

const MessageBoard = () => {
  return (
    <Container>
      <Row>
        <div className="col-12 col-xl-9">
          <h3 className="h4 mb-0 p-4 rounded-top ">Placeholder 1</h3>
          <table className="table table-striped table-bordered table-responsive">
            <thead>
              <tr>
                <th scope="col" className="forum-col">Forum</th>
                <th scope="col">Topics</th>
                <th scope="col">Posts</th>
                <th scope="col" className="last-post-col">Last Post</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <h3 className="mb-0 h5"><a href="#">Forum Name</a></h3>
                  <p className="mb-0">lorem ipsum lorem ipsum lorem ipsum</p>
                </td>
                <td>
                  <div>9</div>
                </td>
                <td>
                  30
                </td>
                <td>
                  <h4 className="h6 mb-0"><a href="#">Post Name</a></h4>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </Row>
    </Container>
  );
}

export default MessageBoard;