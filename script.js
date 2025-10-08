// Import Firebase SDK
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-app.js";
import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-auth.js";


 const firebaseConfig = {
  apiKey: "AIzaSyB9ExdEa9XqUy-em9NQhkpvaxhVHpGCgE4",
  authDomain: "login-authentication-sys-6873c.firebaseapp.com",
  projectId: "login-authentication-sys-6873c",
  storageBucket: "login-authentication-sys-6873c.firebasestorage.app",
  messagingSenderId: "766224014223",
  appId: "1:766224014223:web:927175c2b1865521c809fa",
  measurementId: "G-CNR5D15X91"
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

