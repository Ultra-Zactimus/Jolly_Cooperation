import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Header';
import Post from './Post';
import PostDetails from './PostDetails';
import EditPost from './EditPost';
import Signin from './Signin';
import Register from './Register';
import Profile from './Profile';
import Messages from './Messages';
import MessageBoard from './MessageBoard';
import firebase from "firebase/compat/app";
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {
  // eslint-disable-next-line
  const [ user, setUser ] = useState(null);
  useEffect(() => {
    firebase.auth().onAuthStateChanged(async(userData) => {
      if (userData) {
        setUser(userData);
      } else {
        setUser(null);
      }
    });
  }, []);

  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/register/*" element={<Register />}/>
        <Route path="/signin/*" element={<Signin />}/>
        <Route path="/profile/*" element={<Profile />}/>
        <Route path="/messages/*" element={<Messages />}/>
        <Route path="/message-board/*" element={<MessageBoard />}/>
        <Route path="/post/*" element={<Post />}/>
        <Route path="/edit-post/*" element={<EditPost />}/>
        <Route path="/post-details/*" element={<PostDetails />}/>
      </Routes>
    </Router>
  );
}

export default App;