import { auth } from "./config.js";
import { updatePassword } from "https://www.gstatic.com/firebasejs/10.3.1/firebase-auth.js";

const changeBtn = document.getElementById("change-btn")
const newInput = document.getElementById("new-password")




const handleChangePassword = () => {
    const user = auth.currentUser;
updatePassword(user, newInput.value).then(() => {
    alert("Password changing success!")
  }).catch((error) => {
    alert(error.code)
  });
}

changeBtn.addEventListener('click', handleChangePassword)