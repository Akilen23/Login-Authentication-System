// Import Firebase SDK
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-app.js";
import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-auth.js";


 const firebaseConfig = {
    apiKey: "AIzaSyBSxp7qagnbNBef4SJ7cocaMYeMRQv_jNY",
    authDomain: "project1-f2326.firebaseapp.com",
    projectId: "project1-f2326",
    storageBucket: "project1-f2326.firebasestorage.app",
    messagingSenderId: "731173190641",
    appId: "1:731173190641:web:d7af8eca9daf0400b1a250",
    measurementId: "G-CHVJTTFJQL"

};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

// Elements
const loginBtn = document.getElementById("googleLogin");
const logoutBtn = document.getElementById("logout");
const userDetails = document.getElementById("userDetails");
const userPic = document.getElementById("userPic");
const userName = document.getElementById("userName");
const userEmail = document.getElementById("userEmail");

// Login
loginBtn.addEventListener("click", async () => {
  try {
    await signInWithPopup(auth, provider);
  } catch (error) {
    alert("⚠ " + error.message);
  }
});

// Logout
logoutBtn.addEventListener("click", () => signOut(auth));

// Watch auth state
onAuthStateChanged(auth, (user) => {
  if (user) {
    loginBtn.classList.add("hidden");
    userDetails.classList.remove("hidden");
    userPic.src = user.photoURL;
    userName.textContent = user.displayName;
    userEmail.textContent = user.email;
  } else {
    loginBtn.classList.remove("hidden");
    userDetails.classList.add("hidden");
  }
});



