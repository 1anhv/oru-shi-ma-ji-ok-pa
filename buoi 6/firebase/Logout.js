import { auth } from "./config.js";
import { signOut } from "https://www.gstatic.com/firebasejs/10.3.1/firebase-auth.js";

const logoutbtn = document.getElementById("Logout")

const logOut = () =>{
    signOut(auth).then(() => {
    alert("log out succesful")
    window.location = './login.html'

    }).catch((error) => {
    alert("An error occured")
    });
}
logoutbtn.addEventListener("click", logOut)