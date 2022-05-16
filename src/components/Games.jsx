import React, { useState, useEffect } from 'react';
import { Container, Row } from 'react-bootstrap';
import { getDocs, collection } from 'firebase/firestore';
import { db } from '../lib/init-firebase';


const Games = () => {
  const [gameList, setGameList] = useState([]);
  const gamesCollectionsRef = collection(db, "games");

  useEffect(() => {
    const getGames = async () => {
      const data = await getDocs(gamesCollectionsRef);
      setGameList(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    getGames();
  }, []);

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
                <th scope="col">Posts</th>
                <th scope="col" className="last-post-col">Most Recent Post</th>
              </tr>
            </thead>
            <tbody>

              {gameList.map((game) => {
                return (
                  <tr key={game.id}>
                    <td>
                      <h5 className="mb-0 h5">
                        <a href="/message-list">{game.title}</a>
                      </h5>
                    </td>
                    <td>
                      TBA
                    </td>
                    <td>
                      <h5 className="h6 mb-0"><a href="/message-details">Title Name</a></h5>
                      <div>by username</div>
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

export default Games;