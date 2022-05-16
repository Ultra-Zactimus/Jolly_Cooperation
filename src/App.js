import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Games from './components/Games';
import PostMessage from './components/PostMessage';
import MessageDetails from './components/MessageDetails';
import EditMessage from './components/EditMessage';
import Login from './components/Login';
import MessageList from './components/MessageList';
import MessageBoard from './components/MessageBoard';
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {

  const [ isAuth, setIsAuth ] = useState(false);

  return (
    <Router style={{backgroundColor: "grey"}}>
      <Header isAuth={isAuth}/>
      <Routes>
        <Route path="/login/*" element={<Login setIsAuth={setIsAuth}/>}/>
        <Route path="/post-message/*" element={<PostMessage />}/>
        <Route path="/message-board/*" element={<MessageBoard />}/>
        <Route path="/messages/*" element={<MessageList />}/>
        <Route path="/edit-post/*" element={<EditMessage />}/>
        <Route path="/post-details/*" element={<MessageDetails />}/>
      </Routes>
    </Router>
  );
}

export default App;