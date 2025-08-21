import React, { useEffect, useState } from 'react';
import AuthContext from './AuthContext';
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import auth from '../Firebase/firebase.init';

const AuthProvider = ({children}) => {
  const [user,setUser]=useState(null);
  const [loading,setLoading]=useState(true);

  const provider = new GoogleAuthProvider();

  const createNewUser = (email,password) =>{
    setLoading(true);
    return createUserWithEmailAndPassword(auth,email,password);
  }

  const signInUser = (email,password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth,email,password);
  }

  const signInWithGoogle = () => {
    setLoading(true);
    return signInWithPopup(auth,provider);
  }

  const signOutUser = () => {
    setLoading(true);
    return signOut(auth);
  }

  useEffect(()=>{
    const unsubscribe = onAuthStateChanged(auth,currentUser=>{
      setUser(currentUser);
      console.log('State captured',currentUser);
      setLoading(false);
    })
    return ()=>{
      unsubscribe();
    }
  },[])

  const authInfo = {
    user,
    loading,
    createNewUser,
    signInUser,
    signInWithGoogle,
    signOutUser,
  }

  return (
    <AuthContext.Provider value={authInfo}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;