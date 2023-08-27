// Cho array sau:
let todoList = [
  [
    {
      "userId": 1,
      "id": 1,
      "title": "delectus aut autem",
      "completed": false
    },
    {
      "userId": 1,
      "id": 2,
      "title": "quis ut nam facilis et officia qui",
      "completed": false
    },
    {
      "userId": 1,
      "id": 3,
      "title": "fugiat veniam minus",
      "completed": false
    },
    {
      "userId": 1,
      "id": 4,
      "title": "et porro tempora",
      "completed": true
    },
    {
      "userId": 1,
      "id": 5,
      "title": "laboriosam mollitia et enim quasi adipisci quia provident illum",
      "completed": false
    },
    {
      "userId": 1,
      "id": 6,
      "title": "qui ullam ratione quibusdam voluptatem quia omnis",
      "completed": false
    },
    {
      "userId": 1,
      "id": 7,
      "title": "illo expedita consequatur quia in",
      "completed": false
    },
    {
      "userId": 1,
      "id": 8,
      "title": "quo adipisci enim quam ut ab",
      "completed": true
    },
    {
      "userId": 1,
      "id": 9,
      "title": "molestiae perspiciatis ipsa",
      "completed": false
    },
    {
      "userId": 1,
      "id": 10,
      "title": "illo est ratione doloremque quia maiores aut",
      "completed": true
    },
    {
      "userId": 1,
      "id": 11,
      "title": "vero rerum temporibus dolor",
      "completed": true
    },
    {
      "userId": 1,
      "id": 12,
      "title": "ipsa repellendus fugit nisi",
      "completed": true
    },
    {
      "userId": 1,
      "id": 13,
      "title": "et doloremque nulla",
      "completed": false
    },
    {
      "userId": 1,
      "id": 14,
      "title": "repellendus sunt dolores architecto voluptatum",
      "completed": true
    },
    {
      "userId": 1,
      "id": 15,
      "title": "ab voluptatum amet voluptas",
      "completed": true
    },
    {
      "userId": 1,
      "id": 16,
      "title": "accusamus eos facilis sint et aut voluptatem",
      "completed": true
    },
    {
      "userId": 1,
      "id": 17,
      "title": "quo laboriosam deleniti aut qui",
      "completed": true
    },
    {
      "userId": 1,
      "id": 18,
      "title": "dolorum est consequatur ea mollitia in culpa",
      "completed": false
    },
    {
      "userId": 1,
      "id": 19,
      "title": "molestiae ipsa aut voluptatibus pariatur dolor nihil",
      "completed": true
    },
    {
      "userId": 1,
      "id": 20,
      "title": "ullam nobis libero sapiente ad optio sint",
      "completed": true
    }
  ]
  ]
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
    todoList.push({
      id: Math.floor(Math.random()*1000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000),
      title: inputTodoElm.value,
      completed: false,
    })
    renderTodoList();
    inputTodoElm.value = "";
    saveLocalStorage()

  }
}

const saveLocalStorage = () => {
  localStorage.setItem('todos', JSON.stringify(todoList));
}

const getLocalStorage = () => {
  const todoListLocal = JSON.parse(localStorage.getItem('todos'));
  if(todoListLocal){
    todoList = todoListLocal;
  }
  renderTodoList();
}
addBtn.addEventListener('click', handleAddTodo);

getLocalStorage();