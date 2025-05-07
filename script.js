console.log("Website loaded!");

// Example add to cart button (if using on other pages)
const addToCart = document.getElementById('add-to-cart');
if (addToCart) {
  addToCart.onclick = () => alert("Added to cart!");
}
