// =========================
// 1. Bubbling & Capturing
// =========================
document.querySelector('.grandparent').addEventListener('click', function () {
  console.log('Grandparent clicked (bubbling)');
});

document.querySelector('.parent').addEventListener('click', function () {
  console.log('Parent clicked (bubbling)');
});

document.querySelector('.child').addEventListener('click', function (e) {
  console.log('Child clicked');
  // e.stopPropagation(); // Bỏ chú thích để chặn nổi bọt
});

// Capturing
document.querySelector('.grandparent').addEventListener('click', function () {
  console.log('Grandparent (capturing)');
}, true);

// =========================
// 2. Page Navigation
// =========================
document.getElementById('scrollBtn').addEventListener('click', () => {
  document.getElementById('scrollTarget').scrollIntoView({ behavior: 'smooth' });
});

// =========================
// 3. DOM Traversing
// =========================
const h2 = document.querySelector('.title');
console.log('Parent:', h2.parentElement);
console.log('Next sibling:', h2.nextElementSibling);
console.log('Closest section:', h2.closest('section')); // sẽ là null
const p = document.querySelector('.content');
console.log('Closest div:', p.closest('div'));

// =========================
// 4. Passing Arguments
// =========================
const handleBuy = (productName) => {
  console.log(`Mua sản phẩm: ${productName}`);
};

// Arrow function
document.getElementById('buyBtn').addEventListener('click', () => {
  handleBuy('Laptop ASUS');
});

// Hoặc dùng bind nếu muốn:
// document.getElementById('buyBtn').addEventListener('click', handleBuy.bind(null, 'Laptop ASUS'));
