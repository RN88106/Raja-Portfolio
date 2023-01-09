import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDOYA42fErZ5GQp_f0j0gkaBw17CWzvddU",
  authDomain: "officialrn-portfolio-raja.firebaseapp.com",
  projectId: "officialrn-portfolio-raja",
  storageBucket: "officialrn-portfolio-raja.appspot.com",
  messagingSenderId: "614628926625",
  appId: "1:614628926625:web:6c1c8eee163f11a4d73ce0"
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore()
