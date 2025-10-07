Login Authentication System

A simple web application that provides user authentication using Google Sign-In, with Firebase as the backend and database.

Features

Sign in using Google account

Secure authentication with Firebase

User data stored in Firebase Realtime Database / Firestore

Easy integration into any web application

Technology Stack

Frontend: HTML, CSS, JavaScript

Backend & Authentication: Firebase Authentication

Database: Firebase Realtime Database / Firestore

Setup Instructions

Clone the repository

Create a Firebase Project:

Go to Firebase Console

Click Add Project and follow the steps

Enable Google Authentication under Authentication > Sign-in Method

Create a Firestore Database or Realtime Database for storing user data

Add Firebase Config:

Copy your Firebase config from the project settings

Replace the placeholder in firebase-config.js:

const firebaseConfig = { apiKey: "YOUR_API_KEY", authDomain: "YOUR_PROJECT_ID.firebaseapp.com", projectId: "YOUR_PROJECT_ID", storageBucket: "YOUR_PROJECT_ID.appspot.com", messagingSenderId: "YOUR_MESSAGING_SENDER_ID", appId: "YOUR_APP_ID" };

Install Dependencies (if any backend):

npm install

Run the Application:

npm start

Access the App:

Open your browser and go to http://localhost:3000 (or configured port)

Usage

Click Sign in with Google

On successful login, user details are stored in Firebase

User can now access protected content

Folder Structure /project-root │ ├── index.html # Main HTML page ├── style.css # Styling ├── app.js # Frontend JS with Firebase integration ├── firebase-config.js # Firebase configuration ├── backend/ # Optional backend scripts (Node.js/Express) └── README.md

License

This project is open source and free to use.
