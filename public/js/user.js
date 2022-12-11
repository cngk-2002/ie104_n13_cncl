const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyD65BfuDMHxtoQnOVPzlaLLk624_7AxT5U",
  authDomain: "workflow-c1e53.firebaseapp.com",
  databaseURL: "https://workflow-c1e53-default-rtdb.firebaseio.com",
  projectId: "workflow-c1e53",
  storageBucket: "workflow-c1e53.appspot.com",
  messagingSenderId: "117776249391",
  appId: "1:117776249391:web:4781c6fbad476f06d38cda",
  measurementId: "G-QCG84LJ0B4",
});

const db = firebaseApp.firestore();
const auth = firebaseApp.auth();

firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    // User is signed in, see docs for a list of available properties
    // https://firebase.google.com/docs/reference/js/firebase.User
    var uid = user.uid;
    console.log(uid);
    const email = user.email;
    console.log(email);
    const username = email.split("@")[0];
    console.log(username);
    document.getElementById("username_btn").innerHTML = username;
    // ...
  } else {
    // User is signed out
    // ...
  }
});

function openinfopage() {
  window.location.assign("baroibeo.html");
}

//username_btn dropdown
function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
// window.onclick = function(event) {
//   if (!event.target.matches('.dropbtn')) {
//     var dropdowns = document.getElementsByClassName("dropdown-content");
//     var i;
//     for (i = 0; i < dropdowns.length; i++) {
//       var openDropdown = dropdowns[i];
//       if (openDropdown.classList.contains('show')) {
//         openDropdown.classList.remove('show');
//       }
//     }
//   }
// }
