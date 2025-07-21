//map() – tạo mảng mới từ mảng ban đầu với giá trị đã biến đổi=
const numbers = [1, 2, 3];
const doubled = numbers.map(num => num * 2); 
console.log(doubled); // [2, 4, 6]


//filter() – lọc phần tử thỏa điều kiện.
const ages = [15, 20, 25, 30];
const adults = ages.filter(age => age >= 18);
console.log(adults); // [20, 25, 30]

//reduce() – gom mảng thành 1 giá trị
const numbers2 = [1, 2, 3, 4];
const sum = numbers2.reduce((accumulator, current) => accumulator + current, 0);
console.log(sum); // 10

//find() – trả về phần tử đầu tiên thỏa điều kiện.
const products = [
  { id: 1, name: 'Product A', price: 100 },
  { id: 2, name: 'Product B', price: 200 },
];
const foundProduct = products.find(product => product.id === 2);
console.log(foundProduct); // { id: 2, name: 'Product B', price: 200 }

//findIndex() – giống find nhưng trả về vị trí (index).
const names = ['Alice', 'Bob', 'Charlie'];
const index = names.findIndex(name => name === 'Bob');
console.log(index); // 1

//some() – trả về true nếu ít nhất một phần tử thỏa điều kiện.
const ages = [15, 18, 20];
const hasAdult = ages.some(age => age >= 18);
console.log(hasAdult); // true

//every() – trả về true nếu tất cả phần tử thỏa điều kiện.
flatMap() – kết hợp map() và flat().

//flat() – làm phẳng mảng nhiều cấp thành mảng 1 cấp.
const nested = [1, [2, [3, 4]]];
console.log(nested.flat(1)); // [1, 2, [3, 4]]
console.log(nested.flat(2)); // [1, 2, 3, 4]

//flatMap() – kết hợp map() và flat().
const phrases = ['hello world', 'hi there'];
const words = phrases.flatMap(phrase => phrase.split(' '));
console.log(words); // ['hello', 'world', 'hi', 'there']


