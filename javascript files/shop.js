const productsEl = document.querySelector(".wrapper");

const KeyName = "CART";

function addToCart(id) {
    // gets cart items from the browser's local storage
    let cartItemsRaw = localStorage.getItem(KeyName);

    // creates a variable to an empty set of cart items
    let cartItems = [];

    // check if there are cart items in the browser's local storage
    if (cartItemsRaw) {
      // convert the cart items from a string to a set of cart items
        cartItems = JSON.parse(cartItemsRaw);
    }

    // check if the cart items already contains the product
    const productExists = cartItems.find((p) => p.id === id);
    if (productExists) {
        alert("Product is already in cart!");
        return;
    }

    // add a new cart item to the set of cart items
    const product = products.find((p) => p.id === id);
    cartItems.push(product);

    // convert the set of cart items to a string
    cartItemsRaw = JSON.stringify(cartItems);

    // save the cart items to the browser's local storage
    localStorage.setItem(KeyName, cartItemsRaw);
}

function renderProducts() {

    products.forEach((product) => {

        productsEl.innerHTML += `

            <div class="product-box" id="product-box-1">

                    <div class="product-image-box">

                        <img class="product-image" id="product-image-1"
                        src="${product.imgSrc}" alt="${product.name}">

                    </div>

                    <div class="product-description">

                        <p class="product-name-text"> ${product.name} </p>

                        <br/>

                        <p class="product-price-text"> $${product.price} </p>

                    </div>

                    <button class="cart-button" onclick="addToCart(${product.id})"> Add to cart </button>

                </div>

        `;

    });

}

renderProducts();