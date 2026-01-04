// 1. Dynamic Greeting and Date
const greetingMsg = document.getElementById('greeting');
const dateDisplay = document.getElementById('current-date');
const hour = new Date().getHours();

if (hour < 12) greetingMsg.textContent = "Good Morning!";
else if (hour < 18) greetingMsg.textContent = "Good Afternoon!";
else greetingMsg.textContent = "Good Evening!";

dateDisplay.textContent = `Today is ${new Date().toLocaleDateString()}`;

// 2. Shopping Cart Logic
let count = 0;
const cartDisplay = document.getElementById('cart-count');
const addButtons = document.querySelectorAll('.add-to-cart');

addButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        count++;
        cartDisplay.textContent = count;
        alert("Item added to cart!");
    });
});

// 3. Theme Toggle (Dark/Light Mode)
const themeBtn = document.getElementById('theme-toggle');
themeBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
});

// 4. Basic Form Validation (For the Contact Page)
function validateForm(event) {
    const email = document.getElementById('email').value;
    if (!email.includes("@")) {
        alert("Please enter a valid email address.");
        event.preventDefault();
    }
}