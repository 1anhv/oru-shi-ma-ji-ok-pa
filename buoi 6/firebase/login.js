import { auth } from "./config.js";
import { signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.3.1/firebase-auth.js";
import { signInAnonymously } from "https://www.gstatic.com/firebasejs/10.3.1/firebase-auth.js";


const username = document.getElementById("username");
const pass = document.getElementById("password");
const loginBtn = document.getElementById("login-btn");
const anonyBtn = document.getElementById("anonymous-btn")
const handleLoginAnon = () => {
  signInAnonymously(auth)
  .then(() => {
    window.location = "./index.html"
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ...
  });
}

const HandleLogin = () => {
  const email = username.value;
  const password = pass.value;
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in 
      const user = userCredential.user;
        alert(user.email)
        window.location = './index.html'
    })
    .catch((error) => {
      const errorCode = error.code;
      alert(errorCode)
    });
};

loginBtn.addEventListener("click", HandleLogin);
anonyBtn.addEventListener("click", handleLoginAnon);
