import { initializeApp } from "firebase/app";
import { getAuth} from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyBag7o2W_3HfgtjnL9BdG3Sq0Sb1cFcEAA",
  authDomain: "myfirstproject-6aa1f.firebaseapp.com",
  projectId: "myfirstproject-6aa1f",
  storageBucket: "myfirstproject-6aa1f.appspot.com",
  messagingSenderId: "104052779046",
  appId: "1:104052779046:web:35ea23f5b67f51fb041ee7",
  measurementId: "G-400580B27F"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth();
export  { app, auth};