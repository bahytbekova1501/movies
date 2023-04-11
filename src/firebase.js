import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyCCryGxskVmkO9N9Z518P5XhhZ5hs8JKYQ",
  authDomain: "movies-h-293e6.firebaseapp.com",
  projectId: "movies-h-293e6",
  storageBucket: "movies-h-293e6.appspot.com",
  messagingSenderId: "190821899483",
  appId: "1:190821899483:web:dc2eeefae6c0574f3240fe",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
