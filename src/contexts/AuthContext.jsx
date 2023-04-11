import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from "firebase/auth";
import React, { useEffect, useReducer } from "react";
import { useContext } from "react";
import { createContext } from "react";
import { auth } from "../firebase";
// import { auth } from "../../firebase";

import { ACTIONS, ADMINS } from "../utils/consts";

const initState = {
  user: null,
};

const authContext = createContext();
export function useAuthContext() {
  return useContext(authContext);
}

function reducer(state, action) {
  switch (action.type) {
    case ACTIONS.user:
      return { ...state, user: action.payload };

    default:
      return state;
  }
}

function AuthContext({ children }) {
  const [state, dispatch] = useReducer(reducer, initState);
  async function register({ email, password, displayName, photoURL }) {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      await updateProfile(auth.currentUser, { displayName, photoURL });
    } catch (error) {
      console.log(error.code);
    }
  }

  async function login({ email, password }) {
    try {
      await signInWithEmailAndPassword(auth, email, password);
    } catch (error) {
      console.log(error.code);
    }
  }

  async function logout() {
    try {
      await signOut(auth);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      dispatch({
        type: ACTIONS.user,
        payload: user,
      });
    });
  }, []);

  function isAdmin() {
    if (state.user) {
      const bool = ADMINS.includes(state.user.email);
      return bool;
    }
  }

  const value = {
    user: state.user,
    register,
    login,
    logout,
    isAdmin,
  };
  return <authContext.Provider value={value}>{children}</authContext.Provider>;
}

export default AuthContext;
