import { auth } from "./config.js";
import { updateProfile, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.3.1/firebase-auth.js";


const username = document.getElementById("name")
const photo = document.getElementById("photo")
const Submitbtn = document.getElementById("submit-btn")
const name = document.getElementById("name1")


const handleProfile = () => {

    updateProfile(auth.currentUser, {
      displayName: username.value, photoURL: photo.value
    }).then(() => {
      alert("Update success!")
    }).catch((error) => {
      alert(error.code)
    });
}




Submitbtn.addEventListener('click', handleProfile)
