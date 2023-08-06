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
const filterthing1 = products.filter((item) => item.id!=3).map((item) => item.name);
console.log(filterthing)
console.log(filterthing1)
// let check = 0;
// let fr = 0;
// const checkProduct = (productName) => {
//     products.forEach((item) => {
//         fr = fr+1;
//         if(item.name == productName){
//             console.log("Co Ton Tai")
//             check = 1
//             fr = 0;
//         }
//         else if(item.name !== productName && fr > 3){
//             console.log("Khong ton tai")
//         }
//     });
// }

const checkProduct = (productName) => {
    const filterProduct = products.filter(product => product.name === productName);
    if (filterProduct.length === 0){
        console.log('Khong ton tai');
    }
    else{
        console.log('ton tai');
    }
}

const checkProduct2 = (productName) => {
    const findProduct = products.find((product) => product.name === productName);
    if (findProduct){
        console.log('ton tai')
    } else{
        console.log('khong ton tai')
    }
}

const checkProduct3 = (productName) => {
    const productIndex = products.findIndex((product) => product.name === productName);
    if(productIndex > -1){
        console.log('ton tai')
    }
    else{
        console.log('khong ton tai')
    }
}
checkProduct3('s');