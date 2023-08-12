let firebaseConfig = {
  apiKey: "AIzaSyBw1kG0NSCcaqQi79J0KpLrD45aniJr8-k",
  authDomain: "blogging-website-d8de4.firebaseapp.com",
  projectId: "blogging-website-d8de4",
  storageBucket: "blogging-website-d8de4.appspot.com",
  messagingSenderId: "572826338222",
  appId: "1:572826338222:web:fab78665a2fdcc514cfe3f",
};

firebase.initializeApp(firebaseConfig);

let db = firebase.firestore();