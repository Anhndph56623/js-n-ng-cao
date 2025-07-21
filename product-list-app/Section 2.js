const arr = [1, 2, 3];
const [a, b, c] = arr;
console.log(a); // 1



// trích xuất mảng gà vbawns gái trị
const numbers = [10, 20, 30, 40, 50];
const [first, , third, ...rest] = numbers;
console.log('first:', first);   // 10
console.log('third:', third);   // 30
console.log('rest:', rest);     // [40, 50]

//toán tử Spread mở rộng các phần tử của một mảng
const arr1 = [1, 2];
const arr2 = [3, 4];
const combined = [...arr1, ...arr2];
console.log('combined:', combined); // [1, 2, 3, 4]

// Rest pattern thu thập các phần tử còn lại vào một biến
function sumAll(...numbers) {
  return numbers.reduce((a, b) => a + b, 0);
}
console.log(sumAll(1, 2, 3, 4)); // 10

// Toán tử || (OR) và && (AND) sử dụng short-circuiting để trả về giá trị dựa trên điều kiện.
let points = 0;
const displayPoints = points || 'No points';
console.log(displayPoints); // 'No points'

// Toán tử ?? trả về giá trị bên phải nếu giá trị bên trái là null hoặc undefined
let userName = '';
const displayName = userName ?? 'Guest';
console.log(displayName); // ''


// Toán tử gán hợp nhất (Logical Assignment Operators) trong JavaScript
// Cho phép kết hợp các toán tử logic với gán biến một cách ngắn gọn.
let e = 0;
let d = 'Hello';
let f;
a ||= 'Fallback'; // Nếu a là falsy, gán 'Fallback'
b &&= 'Updated';  // Nếu b là truthy, gán 'Updated'
c ??= 'Default';  // Nếu c là null/undefined, gán 'Default'
console.log('e:', e); // 'Fallback'
console.log('d:', d); // 'Updated'
console.log('f:', f); // 'Default'


// Toán tử Optional Chaining (?.) cho phép truy cập vào thuộc tính của một đối tượng mà
const user = {
  name: 'Dat',
  contact: {
    email: 'dat@gmail.com'
  }
};
console.log(user.contact?.email);  // 'dat@gmail.com'
console.log(user.profile?.age);    // undefined



// Destructuring là một cú pháp trong JavaScript cho phép trích xuất giá trị từ mảng hoặc đối tượng
// và gán chúng vào các biến một cách ngắn gọn và dễ đọc.
const student = {
  name: 'Linh',
  age: 21,
  scores: {
    math: 9,
    english: 8
  }
};
const { name, scores: { math: diemToan, english: diemAnh } } = student;
console.log(name);       // Linh
console.log(diemToan);   // 9
console.log(diemAnh);    // 8


// Section 3: Bài 2 - Cấu Trúc Dữ Liệu và Hàm
// Destructuring trong hàm cho phép trích xuất các tham số từ đối tượng hoặc mảng
function displayStudent({ name, age }) {
  console.log(`Name: ${name}, Age: ${age}`);
}

// Làm Việc Với Strings
const str = 'Hello, World!';
const [firstChar, secondChar, ...restChars] = str;
console.log(firstChar); // 'H'
console.log(secondChar); // 'e'
console.log(restChars.join('')); // 'llo, World!'

// Tham số mặc định cho phép gán giá trị mặc định cho tham số hàm nếu không được truyền vào.
function greet(name = 'Guest') {
  console.log(`Hello, ${name}!`);
}
greet(); // 'Hello, Guest!'
greet('Alice'); // 'Hello, Alice!'

// Value vs. Reference
// Trong JavaScript, các kiểu dữ liệu nguyên thủy (primitive types) như số, chuỗi, boolean được truyền theo giá trị,
// trong khi các kiểu dữ liệu tham chiếu (reference types) như đối tượng, mảng được truyền theo tham chiếu.
let x = 10; 
let y = x; // x được sao chép
console.log(y); // 10
x = 20; // Thay đổi x không ảnh hưởng đến y
console.log(y); // 10
let obj1 = { a: 1 };
let obj2 = obj1; // obj1 được tham
// chiếu
console.log(obj2.a); // 1
obj1.a = 2; // Thay đổi obj1 cũng ảnh hưởng đến obj2
console.log(obj2.a); // 2   


//Higher-Order Functions
// Hàm là công dân bậc nhất trong JavaScript, có thể được truyền vào như tham số hoặc trả về từ hàm khác.
function add(x, y) {
  return x + y;
}
function applyOperation(a, b, operation) {
  return operation(a, b);
}
console.log(applyOperation(5, 3, add)); // 8





