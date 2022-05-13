import '../App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Header';
import Games from './Games';
import PostMessage from './PostMessage';
import MessageDetails from './MessageDetails';
import EditMessage from './EditMessage';
import Signin from './Signin';
import Register from './Register';
import MessageList from './Messages';
import MessageBoard from './MessageBoard';
import firebase from "firebase/compat/app";
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


const App = () => {
  // eslint-disable-next-line
  // const [ user, setUser ] = useState(null);
  // useEffect(() => {
  //   firebase.auth().onAuthStateChanged(async(userData) => {
  //     if (userData) {
  //       setUser(userData);
  //     } else {
  //       setUser(null);
  //     }
  //   });
  // }, []);

  return (
    <Router>
      <Header />
      <Games />
      {/* <Routes>
        <Route path="/register/*" element={<Register />}/>
        <Route path="/signin/*" element={<Signin />}/>
        <Route path="/message-board/*" element={<MessageBoard />}/>
        <Route path="/messages/*" element={<Messages />}/>
        <Route path="/edit-post/*" element={<EditMessage />}/>
        <Route path="/post-details/*" element={<MessageDetails />}/>
      </Routes> */}
    </Router>
  );
}

export default App;