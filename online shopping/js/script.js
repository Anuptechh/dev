
let searchform = document.querySelector('.search-form');

document.querySelector('#search-btn').onclick = () =>
{
    searchform.classList.toggle('active');
    shoppingcart.classList.remove('active');
    loginform.classList.remove('active');
    navbar.classList.remove('active');
};

let shoppingcart = document.querySelector('.shopping-cart');

document.querySelector('#cart-btn').onclick = () =>
{
    shoppingcart.classList.toggle('active');
    searchform.classList.remove('active');
    loginform.classList.remove('active');
    navbar.classList.remove('active');
};

let loginform = document.querySelector('.login-form');

document.querySelector('#login-btn').onclick = () =>
{
    loginform.classList.toggle('active');
    searchform.classList.remove('active');
    shoppingcart.classList.remove('active');
    navbar.classList.remove('active');
};

let navbar = document.querySelector('.navbar');

document.querySelector('#menu-btn').onclick = () =>
{
    navbar.classList.toggle('active');
    searchform.classList.remove('active');
    shoppingcart.classList.remove('active');
    loginform.classList.remove('active');
    
}


window.onscroll = () =>
    {
        searchform.classList.remove('active');
        shoppingcart.classList.remove('active');
        loginform.classList.remove('active');
        navbar.classList.remove('active');
    };



// Select all images and arrows
let productImages = document.querySelectorAll('.product-img');
let prevArrow = document.querySelector('.prev-arrow');
let nextArrow = document.querySelector('.next-arrow');

// Track the currently displayed image index
let currentIndex = 0;

// Function to update image visibility
function updateImageDisplay() {
    productImages.forEach((img, index) => {
        img.style.display = index === currentIndex ? 'block' : 'none';
    });
}

// Event listener for the "next" arrow
nextArrow.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % productImages.length; // Cycle forward
    updateImageDisplay();
});

// Event listener for the "previous" arrow
prevArrow.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + productImages.length) % productImages.length; // Cycle backward
    updateImageDisplay();
});

// Initialize the display
updateImageDisplay();
