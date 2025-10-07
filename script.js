// Import Firebase SDK
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-app.js";
import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-auth.js";

// 🔥 Your Firebase Config (replace this)
const firebaseConfig = {
  apiKey: "YOUR_KEY_HERE",
  authDomain: "YOUR_APP.firebaseapp.com",
  projectId: "YOUR_APP_ID",
  storageBucket: "YOUR_BUCKET",
  messagingSenderId: "YOUR_SENDER_ID",
  appId: "YOUR_APP_ID"
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
    alert("⚠️ " + error.message);
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
