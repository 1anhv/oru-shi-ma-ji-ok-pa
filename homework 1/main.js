//Bài 1
const arr1 = [1, 'a', 5, '2', true];
console.log(arr1.filter(item => typeof item === 'number'));
// In ra những phần tử là number trong arr1 [1, 5]
// Gợi ý: sử dụng forEach hoặc filter (tự tìm hiểu trước)

//Bài 2
let Tong_tien_4_san_pham = 0
const products = [
	{ name: 'Iphone 13', price: 1000, quantity: 10 },
	{ name: 'Macbook pro M2', price: 2000, quantity: 5 },
	{ name: 'Màn hình Samsung 23 inch', price: 1500, quantity: 2 },
	{ name: 'Airpod 2', price: 100, quantity: 20 },
]
/* console.log ra màn hình theo định dạng như sau:
	1000 chiếc Iphone 13 giá 10000$
	...
	100 Airpod 2 giá 2000$
	=> Tổng hoá đơn: Tổng_tiền_4_sản_phẩm
*/
const product = products.map((item) => {
    Tong_tien_4_san_pham = Tong_tien_4_san_pham + item.quantity*item.price
    console.log(item.quantity + " " + item.name + " " + "giá" + " " + item.quantity*item.price + "$")
})
console.log("Tổng hóa đơn: " + Tong_tien_4_san_pham + "$")

//Bài 3
let students = [
	{ name: 'Alex', score: 6 },
	{ name: 'John', score: 8 },
	{ name: 'Peter', score: 4 },
];
let arr2 = [];
let Bigname = 'a';
score = 0;
oldscore = 0;
// Sử dụng forEach để in ra màn hình tên của người được điểm cao nhất
// John
students.forEach((item) =>{
    score = item.score
    if(score > oldscore){
        Bigname = item.name
        oldscore = score
    }
})
console.log(Bigname);
