// const p = document.querySelectorAll(".button") //if class
// console.log(p)
// const p1 = document.querySelector("#title1")//id
// console.log(p1)
// const h1 = document.querySelector("h1") //no class
// console.log(h1)
// const th1 = document.querySelector("h1") //no class
// console.log(th1)

// th1.textContent="hoc ve DOM" //chinh sua noi dung

// //lay ra the

// const button1 = document.querySelector(".dangKy")
// button1.textContent="Dang Ky"


//css cho the button
// const button = document.querySelector(".dangKy")
// button.classList.add("button1")
// button.classList.remove("button1")

// const h2 = document.querySelector("h2")
// const p = document.querySelector("p")
// h2.classList.add("title")
// p.classList.remove("sub-title")

// //function
// function student(name,age,school){
//     console.log("Name: " + a)
//     console.log("Age: " + b)
//     console.log("School: " + c)
// }
// function triple(x){
//     console.log(x*3)
// }

// var animals=['Monkey', 'Tiger', 'Elephant']
// let i = 0;
// function phantucuoicung(array){
//     let a = array[array.length-1]
//     console.log(a)
// }
// function phantudautien(array){
//     let b = array[0]
//     console.log(b)
// }
// phantucuoicung(animals)
// phantudautien(animals)

// const button = document.querySelector(".dangKy")
// function aler(){
//     alert("Xin chao cac ban")
//     h1.classList.add("red")
// }
// button.addEventListener("click", aler)

const p = document.querySelector("p")
const button = document.querySelector(".add")
const button1 = document.querySelector(".remove")

const myDIV = document.querySelector("#myDIV")
function addmyDIV(){
    myDIV.classList.add("myStyle")
}
function removemyDIV(){
    myDIV.classList.remove("myStyle")
}
button.addEventListener("click", addmyDIV)
button1.addEventListener("click", removemyDIV)
