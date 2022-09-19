// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-app.js";
import {
  getDatabase,
  ref,
  set,
} from "https://www.gstatic.com/firebasejs/9.10.0/firebase-database.js";

const firebaseConfig = {
  apiKey: "AIzaSyBLV6p3WqZjPy5X3mvtpiUOdKOjW-G8BB0",
  authDomain: "feederproject-ga.firebaseapp.com",
  projectId: "feederproject-ga",
  storageBucket: "feederproject-ga.appspot.com",
  messagingSenderId: "313661013571",
  appId: "1:313661013571:web:fa2164e7f9ce9366789ef6",
  databaseURL: "https://feederproject-ga-default-rtdb.firebaseio.com",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

function writeUserData(title, author, bookCoverUrl) {
  const db = getDatabase();
  set(ref(db, "Chemistry Books/" + title), {
    title: title,
    author: author,
    profile_picture: bookCoverUrl,
  });
}

writeUserData("The Lord of the Rings", "Tolkien", "sourceURL");
