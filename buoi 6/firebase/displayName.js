import { auth } from "./config.js";
import { onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.3.1/firebase-auth.js";

const welcomeText = document.getElementById("welcome-text")
onAuthStateChanged(auth, (user) => {
    if (user) {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/auth.user
      const uid = user.uid;
      console.log(user.email)
        welcomeText.textContent = "welcome" + " " + user.email;
    } else {
        window.location = './login.html'
    }
  });