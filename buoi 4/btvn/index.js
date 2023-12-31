// Cho array sau:
let todoList = []
let completedlist = []
let uncompletedlist = []
const todoListElm = document.getElementById('todolist');
const inputTodoElm = document.getElementById("inputTodo")
const addBtn = document.getElementById("add-btn")

const handleDeleteTodo = (deleteid) => {
  const deleteIndex = todoList.findIndex((todo) => todo.id === deleteid);
  todoList.splice(deleteIndex, 1);
  renderTodoList();
  saveLocalStorage();
}

const handleChnageStatus = (id) => {
  const index = todoList.findIndex((todo) => todo.id === id);
  todoList[index].completed =!todoList[index].completed
  saveLocalStorage()
}

const renderTodoList = () => {
    todoListElm.innerHTML = "";
    todoList.forEach((todo) =>{
    const todoElm = document.createElement('div');
    todoElm.classList.add('todo');

    const inputElm = document.createElement('input');
    inputElm.setAttribute('type', 'checkbox');
    inputElm.checked = todo.completed;
    inputElm.addEventListener('change', () => handleChnageStatus(todo.id));

    const spanElm = document.createElement('span');
    spanElm.textContent = todo.title;

    const iconElm = document.createElement('i');
    iconElm.classList.add("bi", "bi-trash3-fill");
    iconElm.addEventListener('click', () => handleDeleteTodo(todo.id))
    todoElm.appendChild(inputElm);
    todoElm.appendChild(spanElm);
    todoElm.appendChild(iconElm);
    todoListElm.appendChild(todoElm);
})
}

const handleAddTodo = () => {
  if(inputTodoElm.value == ""){
    alert("Write something down")
  }
  else{
    todoList.unshift({
      id: Math.floor(Math.random()*1000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000),
      title: inputTodoElm.value,
      completed: false,
    })
    renderTodoList();
    inputTodoElm.value = "";
    saveLocalStorage()

  }
}

// const saveLocalStorage = () => {
//   localStorage.setItem('todos', JSON.stringify(todoList));
// }

// const getLocalStorage = () => {
//   const todoListLocal = JSON.parse(localStorage.getItem('todos'));
//   if(todoListLocal){
//     todoList = todoListLocal;
//   }
//   renderTodoList();
// }
addBtn.addEventListener('click', handleAddTodo);

// getLocalStorage();

const getTodoList = () => {
  fetch("https://jsonplaceholder.typicode.com/todos?userId=1").then((response) => {
    return response.json();
  }).then((data) => {
    console.log(data);
    todoList = data;
    renderTodoList();
  })
}

getTodoList();

const allbtn = document.getElementById('all');
const completedbtn = document.getElementById("completed")
const uncompletedBtn = document.getElementById("uncompleted")

const all = () => {
  getTodoList();
}

const completed = () => {
  const completed1 = getTodoList.forEach((item) => {
  });((item) => {
    if (item.completed){
      completed.push(item)
    }
    
  });
}

allbtn.addEventListener(click, all())
completedbtn.addEventListener(click, completed())
uncompletedBtn.addEventListener(click, )