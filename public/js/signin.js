
const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyD65BfuDMHxtoQnOVPzlaLLk624_7AxT5U",
  authDomain: "workflow-c1e53.firebaseapp.com",
  databaseURL: "https://workflow-c1e53-default-rtdb.firebaseio.com",
  projectId: "workflow-c1e53",
  storageBucket: "workflow-c1e53.appspot.com",
  messagingSenderId: "117776249391",
  appId: "1:117776249391:web:4781c6fbad476f06d38cda",
  measurementId: "G-QCG84LJ0B4"
});

const db = firebaseApp.firestore();
const auth = firebaseApp.auth();

const signUp = () => {

  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  firebase.auth().createUserWithEmailAndPassword(email, password)
  .then((result) => {
    // Signed in 
    document.write("you are signed up");
    console.log(result);
    // lay user name tu email
    // var username = email.substring(0, email.indexOf("@")-1)
    // ...
  })
  .catch((error) => {
    console.log(error.code);
    console.log(error.message);
    // ..
  });
}

const signIn = () =>{
  const email = document.getElementById("emaillogin").value;
  const password = document.getElementById("passwordlogin").value;
  //login
  firebase.auth().signInWithEmailAndPassword(email, password)
    .then((result)=>{
      
      console.log(result.user)
      console.log('login success')
      alert('login success');
      window.location.assign("user2.html");

    })
    .catch((e)=>{
      alert("its not an account");
      console.log(e)
    })
}




