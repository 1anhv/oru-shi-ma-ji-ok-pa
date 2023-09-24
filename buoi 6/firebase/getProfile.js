import { auth } from "./config.js";
import { updateProfile, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.3.1/firebase-auth.js";

const name = document.getElementById("fullname")
const email = document.getElementById("email")
const avt = document.getElementById("avt")

const handleProfile1 = () => {
    onAuthStateChanged(auth, (user) =>{
      if (user){
        console.log(user)
        name.textContent = user.displayName
        email.textContent = user.email
        avt.textContent = user.photoURL
      }
    })
  }
  handleProfile1()