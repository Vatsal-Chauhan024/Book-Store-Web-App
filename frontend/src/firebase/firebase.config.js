// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCFYHWcz7xohmeqegtlyC1pEvXthQjUPe8",
  authDomain: "book-store-app-e7df1.firebaseapp.com",
  projectId: "book-store-app-e7df1",
  storageBucket: "book-store-app-e7df1.appspot.com",
  messagingSenderId: "797974468994",
  appId: "1:797974468994:web:99b06e88e1dab66115d79b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;