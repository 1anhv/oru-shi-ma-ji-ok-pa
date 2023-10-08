import {db} from './config.js';
import {collection, query, getDocs, addDoc, serverTimestamp} from "https://www.gstatic.com/firebasejs/10.3.1/firebase-firestore.js"

const ref = collection(db, "messages")
const q = query(ref);

const querySnapshot = await getDocs(q);
querySnapshot.forEach((doc) => {
  // doc.data() is never undefined for query doc snapshots
  console.log(doc.data());
});

const inputMessage = document.getElementById('input-message')
const sendBtn = document.getElementById('send-btn')
const addMessage = async() => {
    const message = inputMessage.value;
    await addDoc(ref(db, "messages"), {
        content: message,
        sender: 'me',
        createdAt: serverTimestamp()
      });
      
}

sendBtn.addEventListener('click', addMessage)