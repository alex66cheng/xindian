// [START initialize_firebase_in_sw]
// Import and configure the Firebase SDK
// These scripts are made available when the app is served or
// deployed on Firebase Hosting
// If you do not serve/host your project using Firebase Hosting
// see https://firebase.google.com/docs/web/setup

importScripts('https://www.gstatic.com/firebasejs/8.10.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.10.0/firebase-messaging.js');

firebase.initializeApp({
  apiKey: 'AIzaSyCvwHfqX0FHhsz9uqauU54SObeH8dyqk94',
  authDomain: 'xindian-f463a.firebaseapp.com',
  projectId: 'xindian-f463a',
  storageBucket: 'xindian-f463a.appspot.com',
  messagingSenderId: '227141088272',
  appId: '1:227141088272:web:91c3bed3aa609683068695'
});

const messaging = firebase.messaging();
// [END initialize_firebase_in_sw]