import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Games from './components/Games';
import PostMessage from './components/PostMessage';
import MessageDetails from './components/MessageDetails';
import EditMessage from './components/EditMessage';
import Login from './components/Login';
import MessageList from './components/MessageList';
import MessageBoard from './components/MessageBoard';
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { signOut } from 'firebase/auth';
import { auth } from './lib/init-firebase';
import { Navbar, Container } from 'react-bootstrap';


const App = () => {

  const [ isAuth, setIsAuth ] = useState(false);

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
    <Router style={{backgroundColor: "grey"}}>
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

          { !isAuth 
            ? 
            <button 
              className="btn btn-success me-2"
              onClick={signingIn}>Login</button> 
            : 
            <button 
              className="btn btn-success me-2"
              onClick={signOutUser}>Logout</button> }

        </Container>
      </Navbar>
      <Routes>
        <Route path="/login" element={<Login setIsAuth={setIsAuth}/>}/>
        <Route path="/post-message" element={<PostMessage />}/>
        <Route path="/" element={<MessageBoard />}/>
        <Route path="/messages" element={<MessageList />}/>
        <Route path="/games" element={<Games />}/>
        <Route path="/edit-post" element={<EditMessage />}/>
        <Route path="/post-details" element={<MessageDetails />}/>
      </Routes>
    </Router>
  );
}

export default App;