import './styles/styles.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Games from './components/Games';
import CreateMessage from './components/CreateMessage';
import MessageDetails from './components/MessageDetails';
import Login from './components/Login';
import MessageList from './components/MessageList';
import MessageBoard from './components/MessageBoard';
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { signOut } from 'firebase/auth';
import { auth } from './lib/init-firebase';
import { Navbar, Container } from 'react-bootstrap';


const App = () => {

  const [ isAuth, setIsAuth ] = useState(false);

  useEffect(() => {
    auth.onAuthStateChanged(user => {
        if(user) {
            setIsAuth(true)
        } else {
            setIsAuth(false)
        }
    })
  }, [isAuth])

  const signOutUser = () => {
    signOut(auth).then(() => {
      localStorage.clear()
      setIsAuth(false);
      window.location.pathname = "/login";
    }).catch((error) => {
      console.log(error.message)
    });
  };

  const signingIn = () => {
    window.location.pathname = "/login"
  };

  return (
    <Router>
      <Navbar bg="dark" variant="dark">
        <Container>
          <div className="d-flex justify-content-start mx-4">
            <img 
              src={require("./images/bros.png")} 
              alt="sun"
            />
          </div>
          <Navbar.Brand
            href="/"
            className="mr-5">Jolly Cooperation</Navbar.Brand>

            { 
              !isAuth 
              ? 
              <button 
                className="btn btn-success me-2"
                onClick={signingIn}>Login</button> 
              : 
              <button 
                className="btn btn-success me-2"
                onClick={signOutUser}>Logout</button> 
            }
            
        </Container>
      </Navbar>
      <Routes>
        <Route path="/login" element={<Login setIsAuth={setIsAuth}/>}/>
        <Route path="/create-message" element={<CreateMessage />}/>
        <Route path="/" element={<MessageBoard />}/>
        <Route path="/message-list" element={<MessageList />}/>
        <Route path="/games" element={<Games />}/>
        <Route path="/post-details" element={<MessageDetails />}/>
      </Routes>
    </Router>
  );
}

export default App;