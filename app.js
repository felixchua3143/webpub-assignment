const productsEL = document.querySelector(".wrapper")

function renderProducts() {
    products.forEach((product) => {
        productsEL.innerHTML += `
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

let cart = [];

function addToCart(id) {

    if (cart.some((item) => item.id === id)) {

        alert("Product")

    }
    else {

        const item = products.find((product) => product.id === id)

        cart.push({
            ...item,
            numberOfUnits: 1,
        });

    }

    updateCart();
}

const cartItemsEL = document.querySelector(".cart-items")

function updateCart() {
    renderCartItems();
    renderSubtotal();
}

function renderCartItems() {
    cart.forEach(() => {
        cartItemsEL.innerHTML += `
            <div class="cart-item">

                    <div class="cart-item-info">

                        <img src="./images/peripherals-item-1.png" alt="CommonTech G230 Super Pro">

                        <p> CommonTech G230 Super Pro </p>

                    </div>

                    <div class="cart-item-price">

                        <p> $100 </p>

                    </div>

                    <div class="units">

                        <div class="btn-minus"> - </div>
                        <div class="number"> 1 </div>
                        <div class="btn-plus"> + </div>

                    </div>

                </div>
        `
    })
}