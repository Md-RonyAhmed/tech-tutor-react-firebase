import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBJ0sIgvWJ6nT0uHXwtWn7PG6vSmirlEFM",
  authDomain: "tech-tutor-d11fb.firebaseapp.com",
  projectId: "tech-tutor-d11fb",
  storageBucket: "tech-tutor-d11fb.appspot.com",
  messagingSenderId: "137399162406",
  appId: "1:137399162406:web:f9a392658537aabb74b8e7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;