//Bai 1:
let arr1 = [1,2,4,5,6];
let arr2 = [1,6,8,9,0];
let arr3 = [];
let i = 0;
let q = 5;
const positiveNum = arr1.filter((item) => {
    while(i < q){
        if (item === arr2[i]){
            arr3.push(item);
            i = 5;
        }
        i = i+1;
    }
    i = 0;
});
console.log(arr3);

//bai 2:
//Sử dụng map() với arr = [1,54,6,7] để tạo ra một newArr có newArr[i] = arr[i] + 5.
let arr = [1,54,6,7];
const arr4 = arr.map((item) =>
    item+5
)
console.log(arr4);

//bai 3:
let m = [1,2,4,5,6,7];
let n = [3,5,675,8,96];
let t = [];
const num = m.filter((item) => {
    if (item != 1 && item != 8 && item != 10 && item != 96 && item != 7){
        t.push(item);
    }
});
const num1 = n.filter((item) => {
    if (item != 1 && item != 8 && item != 10 && item != 96 && item != 7){
        t.push(item);
    }
});
console.log(t);

//bai 4:
players = [
    { id: 11, name: 'Messi', age: 33 },         
    { id: 12, name: 'Ronaldo', age: 34 },      
    { id: 13, name: 'Young', age: 35 },        
    { id: 14, name: 'Mane', age: 21 },          
    { id: 15, name: 'Salah', age: 24 },
]
    