import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from "firebase/auth";
import { AuthContext } from "./AuthContext";
import { auth } from "../../firebase.config";
import { useEffect, useState } from "react";

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const signUpWithEmail = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const signInWithEmail = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const updateUserProfile = (userInfo) => {
    return updateProfile(auth.currentUser, userInfo);
  };

  const logout = () => {
    return signOut(auth);
  };
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      console.log(currentUser);
    });
    return () => unsubscribe();
  });
  const userInfo = {
    signUpWithEmail,
    signInWithEmail,
    updateUserProfile,
    logout,
    user,
  };
  return (
    <AuthContext.Provider value={userInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
