import React, { useState } from 'react';
import { collection, addDoc } from 'firebase/firestore';
import { auth, provider } from '../lib/init-firebase';
import { signInWithPopup } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

const Login = ({ setIsAuth }) => {

  let navigate = useNavigate();

  const signInWithGoogle = () => {
    signInWithPopup(auth, provider).then((result) => {
      localStorage.setItem("isAuth", true);
      setIsAuth(true);
      navigate("/");
    });
  };


  return (
    <>
      <div>
        <small>Please Sign In with Google to Continue</small>
        <button onClick={signInWithGoogle}>Sign in with Google</button>
      </div>
    </>
  );
}

export default Login;