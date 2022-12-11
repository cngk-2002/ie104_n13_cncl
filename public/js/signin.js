
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

// import { collection, getDocs } from "firebase/firestore"; 



const db = firebaseApp.firestore();
const auth = firebaseApp.auth();

const signUp = () => {

  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  firebase.auth().createUserWithEmailAndPassword(email, password)
    .then((result) => {
      // Signed in 
      // document.write("you are signed up");
      console.log(result);
      setTimeout(()=>{
        window.location.reload()
      }, 1000)
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

const login = document.querySelectorAll('[data-login]')
console.log(login)
firebase.auth().onAuthStateChanged((user)=>{
  if(user){
    login[0].innerHTML = ""
    login[1].classList.remove('hidden')
    const email = user.email;
        console.log(email);
        const username = email.split('@')[0];
        console.log(username);
        document.getElementById("username_btn").innerHTML=username;
  }
  else{
    document.getElementById('notification').classList.add('hidden')
    login[0].classList.remove('hidden')
    login[1].classList.add('hidden')
  }
})

const signIn = async () => {
  const email = document.getElementById("emaillogin").value;
  const password = document.getElementById("passwordlogin").value;
  //login
  await firebase.auth().signInWithEmailAndPassword(email, password)
    .then((result) => {
      console.log(result.user)
      console.log('login success')
      alert('login success');
      setTimeout(()=>{
        window.location.reload()
      }, 1500)
    })
    .catch((e) => {
      alert("its not an account");
      console.log(e)
    })

  //neu la admin chuyen adminpage
  await firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      db.collection("users").doc('admin').get().then((doc) => {
        if (doc.exists) {
          const user = doc.data();
          console.log(user);
          if(user.email == email) {
            // window.location.assign("thankyou.html");
          }
          else{
            // window.location.assign("user2.html");
          }
        }
      })
    } else {
      // User is signed out
      // ...
    }
  });
}

const logoutButton = document.getElementById('logout-btn')

logoutButton.addEventListener('click', () =>{
  SignOut();
})

const SignOut = () =>{
  auth.signOut()
  setTimeout(()=>{
    window.location.reload()
  }, 1000)
}

//add admin feature




