let products = [];

const boxElm = document.getElementById('box')

const renderTodoList = () => {
    boxElm.innerHTML = "";
    products.forEach((todo) =>{
    const boxElm1 = document.createElement('div');
    boxElm1.classList.add('boxStyle');

    const imgElm = document.createElement('img');
    imgElm.src = todo.image;


    const h3Elm = document.createElement('h3');
    h3Elm.textContent = todo.title;

    const pElm = document.createElement('h3');
    pElm.textContent = todo.price + "VND";

    boxElm1.appendChild(imgElm);
    boxElm1.appendChild(h3Elm);
    boxElm1.appendChild(pElm);
    boxElm.appendChild(boxElm1);
})
}


const getproducts = () => {
    fetch("https://fakestoreapi.com/products").then((response) => {
      return response.json();
    }).then((data) => {
      console.log("able to connect!")
      console.log(data);
      products = data;
      renderTodoList();
    })
  }
getproducts();