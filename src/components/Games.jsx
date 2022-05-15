import React from 'react';
import { Container, Row } from 'react-bootstrap';

const Games = () => {
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
                <th scope="col">Platforms</th>
                <th scope="col">Genre</th>
                <th scope="col">Posts</th>
                <th scope="col" className="last-post-col">Most Recent Post</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <h5 className="mb-0 h5"><a href="#">Destiny 2</a></h5>
                </td>
                <td>
                  <div>PC, XBOX, PlayStation</div>
                </td>
                <td>
                  FPS
                </td>
                <td>
                  50
                </td>
                <td>
                  <h5 className="h6 mb-0"><a href="#">Title Name</a></h5>
                  <div>by <a href="#">username</a></div>
                </td>
              </tr>
              <tr>
                <td>
                  <h5 className="mb-0 h5"><a href="#">Warframe</a></h5>
                </td>
                <td>
                  <div>PlayStation</div>
                </td>
                <td>
                  Action
                </td>
                <td>
                  30
                </td>
                <td>
                  <h5 className="h6 mb-0"><a href="#">Title Name</a></h5>
                  <div>by <a href="#">username</a></div>
                </td>
              </tr>
              <tr>
                <td>
                  <h5 className="mb-0 h5"><a href="#">Animal Crossing: New Crossroads</a></h5>
                </td>
                <td>
                  <div>Nintendo Switch</div>
                </td>
                <td>
                  Adventure/Simulation
                </td>
                <td>
                  12
                </td>
                <td>
                  <h5 className="h6 mb-0"><a href="#">Title Name</a></h5>
                  <div>by <a href="#">username</a></div>
                </td>
              </tr>
              <tr>
                <td>
                  <h5 className="mb-0 h5"><a href="#">Dark Souls Remastered</a></h5>
                </td>
                <td>
                  <div>PC, XBOX, PlayStation, Nintendo Switch</div>
                </td>
                <td>
                  Action RPG
                </td>
                <td>
                  22
                </td>
                <td>
                  <h5 className="h6 mb-0"><a href="#">Title Name</a></h5>
                  <div>by <a href="#">username</a></div>
                </td>
              </tr>
              <tr>
                <td>
                  <h5 className="mb-0 h5"><a href="#">Street Fighter V</a></h5>
                </td>
                <td>
                  <div>PC, PlayStation</div>
                </td>
                <td>
                  Fighting
                </td>
                <td>
                  33
                </td>
                <td>
                  <h5 className="h6 mb-0"><a href="#">Title Name</a></h5>
                  <div>by <a href="#">username</a></div>
                </td>
              </tr>
              <tr>
                <td>
                  <h5 className="mb-0 h5"><a href="#">Gran Turismo 7</a></h5>
                </td>
                <td>
                  <div>PlayStation</div>
                </td>
                <td>
                  Driving Simulator
                </td>
                <td>
                  20
                </td>
                <td>
                  <h5 className="h6 mb-0"><a href="#">Title Name</a></h5>
                  <div>by <a href="#">username</a></div>
                </td>
              </tr>
              <tr>
                <td>
                  <h5 className="mb-0 h5"><a href="#">Elden Ring</a></h5>
                </td>
                <td>
                  <div>PC, XBOX, PlayStation</div>
                </td>
                <td>
                  Action RPG
                </td>
                <td>
                  44
                </td>
                <td>
                  <h5 className="h6 mb-0"><a href="#">Title Name</a></h5>
                  <div>by <a href="#">username</a></div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </Row>
    </Container>
  );
}

export default Games;