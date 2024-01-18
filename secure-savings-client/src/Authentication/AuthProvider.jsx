/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";
import auth from "./firebase.config";
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, updateProfile } from "firebase/auth";

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
   const [user, setUser] = useState({});
   const [loading, setLoading] = useState(true)

   // createUserWithEmailAndPassword
   const createUser = (auth, email, password) => {
      setLoading(true)
      return createUserWithEmailAndPassword(auth, email, password)
   }

   // update user profile
   const updateUserProfile = (name, photo) => {
      setLoading(true);
      return updateProfile(auth.currentUser, {
         displayName: name,
         photoURL: photo
      })
   }

   // get current user
   useEffect(() => {
      const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
         setUser(currentUser);
         setLoading(false)
      })
      return () => {
         unsubscribe()
      }
   }, [])

   // signInWithEmailAndPassword
   const login = (auth, email, password) => {
      setLoading(true)
      return signInWithEmailAndPassword(auth, email, password)
   }

   const authInfo = { user, loading, createUser, login, updateUserProfile }

   return (
      <>
         <AuthContext.Provider value={authInfo}>
            {children}
         </AuthContext.Provider>
      </>
   );
};

export default AuthProvider;