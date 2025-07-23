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
const ages2 = [15, 18, 20];
const hasAdult = ages2.some(age => age >= 18);
console.log(hasAdult); // true

//every() – trả về true nếu tất cả phần tử thỏa điều kiện.
// flatMap() – kết hợp map() và flat().

//flat() – làm phẳng mảng nhiều cấp thành mảng 1 cấp.
const nested = [1, [2, [3, 4]]];
console.log(nested.flat(1)); // [1, 2, [3, 4]]
console.log(nested.flat(2)); // [1, 2, 3, 4]

//flatMap() – kết hợp map() và flat().
const phrases = ['hello world', 'hi there'];
const words = phrases.flatMap(phrase => phrase.split(' '));
console.log(words); // ['hello', 'world', 'hi', 'there']

//includes() – kiểm tra phần tử có trong mảng hay không.
const fruits = ['apple', 'banana', 'orange'];
console.log(fruits.includes('banana')); // true
console.log(fruits.includes('grape')); // false

//indexOf() – tìm vị trí của phần tử trong mảng.
const colors = ['red', 'green', 'blue'];
console.log(colors.indexOf('green')); // 1
console.log(colors.indexOf('yellow')); // -1 (không tìm thấy)

//lastIndexOf() – tìm vị trí cuối cùng của phần tử trong mảng.
console.log(colors.lastIndexOf('blue')); // 2 
console.log(colors.lastIndexOf('yellow')); // -1 (không tìm thấy)

//join() – nối các phần tử mảng thành chuỗi.
const items = ['apple', 'banana', 'orange'];
console.log(items.join(', ')); // 'apple, banana, orange'

//slice() – cắt mảng từ vị trí bắt đầu đến kết thúc (không bao gồm kết thúc).
const numbers3 = [1, 2, 3, 4, 5];
console.log(numbers3.slice(1, 4)); // [2, 3, 4] (cắt từ index 1 đến index 4)

//splice() – thêm hoặc xóa phần tử tại vị trí nhất định.
const numbers4 = [1, 2, 3, 4, 5];
numbers4.splice(2, 1, 6, 7); // Xóa 1 phần tử tại index 2 và thêm 6, 7
console.log(numbers4); // [1, 2, 6, 7, 4, 5]

//sort() – sắp xếp mảng theo thứ tự tăng dần hoặc giảm dần.
const numbers5 = [5, 3, 8, 1];
numbers5.sort((a, b) => a - b); // Sắp xếp tăng
console.log(numbers5); // [1, 3, 5, 8]
numbers5.sort((a, b) => b - a); // Sắp xếp giảm
console.log(numbers5); // [8, 5, 3, 1]

//reverse() – đảo ngược thứ tự các phần tử trong mảng.
const numbers6 = [1, 2, 3, 4, 5];
numbers6.reverse();
console.log(numbers6); // [5, 4, 3, 2, 1]

//fill() – điền giá trị vào mảng từ vị trí bắt đầu đến kết thúc.
const numbers7 = [1, 2, 3, 4, 5];
numbers7.fill(0, 1, 4); // Điền 0 từ index 1 đến index 4
console.log(numbers7); // [1, 0, 0, 0, 5]

//copyWithin() – sao chép phần tử trong mảng đến vị trí khác.
const numbers8 = [1, 2, 3, 4, 5];
numbers8.copyWithin(0, 3); // Sao chép phần tử từ index 3 đến index 0
console.log(numbers8); // [4, 5, 3, 4, 5]

//toString() – chuyển mảng thành chuỗi.
const numbers9 = [1, 2, 3];
console.log(numbers9.toString()); // '1,2,3'

//toLocaleString() – chuyển mảng thành chuỗi theo định dạng địa phương.
const numbers10 = [1, 2, 3];
console.log(numbers10.toLocaleString()); // '1,2,3' (định dạng địa phương có thể khác nhau)

//concat() – nối hai hoặc nhiều mảng lại với nhau.
const array1 = [1, 2];
const array2 = [3, 4];
const array3 = array1.concat(array2);
console.log(array3); // [1, 2, 3, 4]



