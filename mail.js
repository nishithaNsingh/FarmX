const firebaseConfig = {
    apiKey: "AIzaSyC2zNb4auGDluHVICTFHLBgRxL65a5w8rM",
    authDomain: "farmx-d616a.firebaseapp.com",
    databaseURL: "https://farmx-d616a-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "farmx-d616a",
    storageBucket: "farmx-d616a.appspot.com",
    messagingSenderId: "539615852553",
    appId: "1:539615852553:web:dd872b717ed933ff2de0d8"
  };
// initialize firebase
firebase.initializeApp(firebaseConfig);

//reference for database
var contactFormDB = firebase.database().ref('container');

document.getElementById('container').addEventListener("submit", submitForm);
function submitForm(e) {
    e.preventDefault(); // prevent page refresh
}

