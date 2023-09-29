// Function to handle "Add To Bag" button click
function addToCart() {
    alert("Item added to the cart!");
    // You can add logic here to update the shopping cart or perform other actions.
}

// Function to handle "Buy Now" button click
function buyNow() {
    alert("Thank you for your purchase!");
    // You can implement a checkout process here.
}

// Attach click event handlers to buttons
document.querySelector('.cart').addEventListener('click', addToCart);
document.querySelector('.buy').addEventListener('click', buyNow);
<center>
    <input class="cart" type="button" name="" value="Add To Bag" /><br /><br /><br />
</center>
<center>
    <input class="buy" type="button" name="" value="Buy Now" /><br /><br /><br />
</center>