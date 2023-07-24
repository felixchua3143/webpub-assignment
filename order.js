const cartItemsEl = document.querySelector(".cart-items");

// cart array
let cart = []
updateCart();


// add to cart
function addToCart(id) {

    // check if product already exists

    if (cart.some((item) => item.id === id)) {
        alert("Product");
    }
    else {
        const item = products.find((product) => product.id === id);

        cart.push({
            ...item,
            numberOfUnits: 1,
        });
    }

    updateCart();
}

// update cart
function updateCart() {
    renderCartItems();
    renderSubtotal();
    localStorage.setItem("CART", JSON.stringify(cart));
}

// render cart items
function renderCartItems() {
    cart.forEach(() => {
        cartItemsEl.innerHTML += `
            <div class="cart-item">

                        <div class="cart-item-info">

                            <img src="./images/peripherals-item-1.png">

                            <p style="text-align: center;"> CommonTech G230 Super Pro </p>

                            <p style="text-align: center;"> $100 </p>

                        </div>

                        <div class="units">

                            <button class="minus"> - </button>
                            <div class="number"> 1 </div>
                            <button class="plus"> + </button>

                        </div>

                    </div>
        `
    });
}