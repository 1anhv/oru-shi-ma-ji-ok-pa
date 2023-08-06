const arrNum = [5,3,0,-1,2,-5];
// const positiveNum = []; // [5,3,2]

// arrNum.forEach(() => {
//     if (item>0){
//         positiveNum.push(item)
//     }
// })

const positiveNum = arrNum.filter((item) => item>0);
console.log(positiveNum);

const products = [
	{id: 1, name: 'Iphone 13', price: 1000, quantity: 10 },
	{id: 2, name: 'Macbook pro M2', price: 2000, quantity: 5 },
	{id: 3, name: 'Màn hình Samsung 23 inch', price: 1500, quantity: 2 },
	{id: 4, name: 'Airpod 2', price: 100, quantity: 20 },
]

const filterthing = products.filter((item) => item.quantity > 9);
const filterthing1 = products.filter((item) => item.id!=3);
const filterthingy = filterthing1.map((item) => item.name)
console.log(filterthing)
console.log(filterthingy)