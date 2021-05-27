import React from 'react';
import { createContext, useContext } from "react";
import firebase from "../lib/firebase";
import { useRouter } from 'next/router'

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = React.useState(null);
  const [loading, setLoading] = React.useState(true);
  const Router = useRouter();
  // const Context = useContext(AuthContext);

  // if(!Context) {
  //     throw new Error('Context auth not implemented')
  // };

  const signin = React.useCallback(() => {
    try {
      setLoading(true);
      return firebase
        .auth()
        .signInWithPopup(new firebase.auth.GithubAuthProvider())
        .then((res) => {
          setUser(res.user);
          Router.push("/dashboard");
        });
    } finally {
      setLoading(false);
    }
  }, [firebase, Router]);
  const signout = React.useCallback(() => {
      try{
        setLoading(true);
        Router.push('/');

        return firebase
            .auth()
            .signOut()
            .then(() => setUser(false))
      } finally {
        setLoading(false);
      }
  }, [firebase, Router]);

  return (
    <AuthContext.Provider
      value={{
        user,
        loading,
        signin,
        signout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const AuthConsumer = AuthContext.Consumer;

export default AuthContext;
