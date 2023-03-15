import { initializeApp } from "firebase/app";
import { getFirestore, serverTimestamp } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCr3pBNJ8FTQx8Crl2zG3FzJZ4-I15XP8o",
  authDomain: "trello-board-53f0a.firebaseapp.com",
  projectId: "trello-board-53f0a",
  storageBucket: "trello-board-53f0a.appspot.com",
  messagingSenderId: "894220154538",
  appId: "1:894220154538:web:fd81f43c73a23e0a9b82d3",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore();
const timestamp = serverTimestamp();

export { db, app, timestamp };
