import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Games from './components/Games';
import PostMessage from './components/PostMessage';
import MessageDetails from './components/MessageDetails';
import EditMessage from './components/EditMessage';
import Signin from './components/Signin';
import Register from './components/Register';
import MessageList from './components/MessageList';
import MessageBoard from './components/MessageBoard';
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {

  return (
    <Router style={{backgroundColor: "grey"}}>
      <Header />
      <Register />
      {/* <Signin /> */}
      {/* <MessageBoard />
      <PostMessage />
      <Games /> */}
      {/* <Routes>
        <Route path="/register/*" element={<Register />}/>
        <Route path="/signin/*" element={<Signin />}/>
        <Route path="/message-board/*" element={<MessageBoard />}/>
        <Route path="/messages/*" element={<MessageList />}/>
        <Route path="/edit-post/*" element={<EditMessage />}/>
        <Route path="/post-details/*" element={<MessageDetails />}/>
      </Routes> */}
    </Router>
  );
}

export default App;