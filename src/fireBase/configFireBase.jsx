import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCkJyIsFVBQjeoFRog5g-Wj78vPBMtl0ao",
  authDomain: "travel-app-87568.firebaseapp.com",
  projectId: "travel-app-87568",
  storageBucket: "travel-app-87568.appspot.com",
  messagingSenderId: "209060878484",
  appId: "1:209060878484:web:d83a88e01d0aab8a97bc81",
  measurementId: "G-J35P0FWKHS",
};

const app = initializeApp(firebaseConfig);

export const firebaseConnection = () => app;
