 // Import the functions you need from the SDKs you need
 import { initializeApp } from "https://www.gstatic.com/firebasejs/9.16.0/firebase-app.js";
 import { getAuth, createUserWithEmailAndPassword} from "https://www.gstatic.com/firebasejs/9.16.0/firebase-auth.js";
 import { getDatabase } from "https://www.gstatic.com/firebasejs/9.16.0/firebase-auth.js";

 // TODO: Add SDKs for Firebase products that you want to use
 // https://firebase.google.com/docs/web/setup#available-libraries

 // Your web app's Firebase configuration
 const firebaseConfig = {
   apiKey: "AIzaSyBEtXZZxlOmc5DhUGahSB1ENDr4HIf7jIM",
   authDomain: "lasuauth.firebaseapp.com",
   databaseURL: "https://lasuauth-default-rtdb.firebaseio.com",
   projectId: "lasuauth",
   storageBucket: "lasuauth.appspot.com",
   messagingSenderId: "694095833984",
   appId: "1:694095833984:web:9301bfa8da34511453af65"
 };



 // Initialize Firebase
 const app = initializeApp(firebaseConfig);
 const auth = getAuth();
 const database = getDatabase();

 function register() {
    email = document.getElementById('email').value;
    password = document.getElementById('password').value;
    username = document.getElementById('username').value;


    if(validateEmail(email) === false || validatePassword(password) === false){
        alert('Check your Email or Password')
        return
    }

    if(validateFeild(username) === false){
        alert('Username cannot be empty ')
    }

    auth.createUserWithEmailAndPassword(email, password)
    .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;

        const databaseRef = database.ref()

        const userData = {
            email: email,
            username: username,
            last_login: Date.now( )
        }

        databaseRef.child('users/' + user.uid).set(userData)
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
        alert(errorMessage)
      });

 }


function validateEmail(email){
    expression = /^[^@]+@\w+(\.\w+)+\w$/;
    if(expression.test(email) == true){
        return true
    } else {
        return false
    }
}

function validatePassword(password){
    if(password.length < 7){
        return false
    }else {
        return true
    }

}

function validateFeild(feild){
    if(feild == null){
        return false
    }

    if(feild.length <= 0){
        return false
    } else{
        return true
    }
}


console.log(email);