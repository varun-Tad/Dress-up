const SignInBtn = document.querySelector(".sign-in-btn");
const shopNowBtn = document.querySelector(".main-btn");
const wishlistBtn = document.querySelector(".fa-heart-o")
const cartBtn = document.querySelector(".fa-cart-shopping");

SignInBtn.addEventListener('click',()=>location.href="Pages/Login-page/login.html");
shopNowBtn.addEventListener('click',()=>location.href="Pages/prod-listing/prod-list.html");

wishlistBtn.addEventListener('click',()=>location.href="Pages/Wishlist-page/wishlist.html");
cartBtn.addEventListener('click',()=>location.href="Pages/Cart-page/cart.html");