import {db} from './config.js';
import {orderBy, collection, query, getDocs, addDoc, serverTimestamp, onSnapshot} from "https://www.gstatic.com/firebasejs/10.3.1/firebase-firestore.js"
let messageList = []
const ref = collection(db, "messages")
const q = query(ref, orderBy("createdAt"))






//them tin nhan dung firebase
const inputMessage = document.getElementById('input-message')
const sendBtn = document.getElementById('send-btn')
const addMessage = async() => {
    const message = inputMessage.value;
    await addDoc(ref, {
        content: message,
        sender: 'me',
        createdAt: serverTimestamp()
      });
      
}

sendBtn.addEventListener('click', addMessage)




const wrapperMessage = document.getElementById('messages-list')
//render data
const renderMessage = () => {
  wrapperMessage.innerHTML="";
  messageList.forEach((message) =>{
    const msgElm = document.createElement('p');
    msgElm.textContent = message.content;
    wrapperMessage.appendChild(msgElm)
  })
}

//Lang nghe thay doi data tu firebase
onSnapshot(q, (querySnapshot) => {
  messageList =[]
  querySnapshot.forEach((doc) => {
    messageList.push(doc.data())
    

  });
  console.log(messageList)
  renderMessage();

});

