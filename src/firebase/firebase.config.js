// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA0mXAQ1Z3YnxWSMvxX-dCz6qGWRNMi220",
  authDomain: "module-51-second-practice.firebaseapp.com",
  projectId: "module-51-second-practice",
  storageBucket: "module-51-second-practice.appspot.com",
  messagingSenderId: "955218001326",
  appId: "1:955218001326:web:9712cd4439bb34fc419c3f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;