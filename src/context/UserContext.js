import { createContext, useState, useEffect } from "react";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  updateEmail,
  updatePassword,
  updateProfile,
  reauthenticateWithCredential,
} from "firebase/auth";
import { auth } from "../firebase-config";

export const UserContext = createContext();

export function UserContextProvider(props) {
  const [currentUser, setCurrentUser] = useState();
  const [loadingData, setLoadingData] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setCurrentUser(currentUser);
      setLoadingData(false);
    });

    return unsubscribe;
  }, []);

  const signUp = (
    email,
    pwd //envoi une requête de création de compte avec l'auth récupéré dans firebase-config
  ) => createUserWithEmailAndPassword(auth, email, pwd);

  const signIn = (
    email,
    pwd //envoi une requête de connection de compte avec l'auth récupéré dans firebase-config
  ) => signInWithEmailAndPassword(auth, email, pwd);

  return (
    <UserContext.Provider value={{ signUp, currentUser, signIn }}>
      {!loadingData && props.children}
    </UserContext.Provider>
  );
}
