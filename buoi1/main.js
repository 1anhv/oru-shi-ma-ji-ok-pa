function log(name){
    console.log(name);
}

log('s');

//arrow function

let name1 = 'quang';
const name2 = 'quang';
const arr1=[1,2,3,4];
const student = {
    name: 'Hung',
    age: 15,
}
student.gender = 'male';
arr1.push(5);
console.log(arr1);
console.log(student);

const log1 = name => {
    console.log(name);
}

log1("Minh Quang");

function sum(a, b){
    return a*b;
}
//console.log(sum(2,3));

const sum1 = (a,b) => a*b;
console.log(sum1(2,3))

const logName = () => (
        {
            name: 'QTM'
        }
    )
console.log(logName());

// Spread Operator
const Numberlist2 = [6,7,8,9,19]
const numberList = [1,2,3,4,5];
const cloneNumberList = [...numberList,... Numberlist2];
cloneNumberList.push(7);

const student1 = {
    name: 'Quang',
    age: '18'
}


const student2 = {...student1};
student2.gender = 'male';
console.log(student1, student2);

//map
const arrMap1 = [1,2,3,4,5];
const arrMap2 = [];
arrMap1.forEach((item) =>{
    arrMap2.push(item*2)
})

const arrMap3 = arrMap1.map((item) =>
    item*2
)

const arrMap4 = [
    { firstName: "tran", lastName: "quang"},
    {firstName : "Vu", lastName: "Anh"}
]

const arrMap5 = arrMap4.map((item) => {
    return (item.firstName+ " " + item.lastName)
})
console.log(arrMap3);

console.log(arrMap5);

console.log(arrMap2);