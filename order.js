const cartItemsEl = document.querySelector(".cart-items");

const KeyName = "CART";

// cart array
let cart = []
updateCart();

// update cart
function updateCart() {
    // gets cart items from the browser's local storage
    const cartItemsRaw = localStorage.getItem(KeyName);

    // check if there are cart items in the browser's local storage
    if (cartItemsRaw) {
      // convert the cart items from a string to a set of cart items
        cart = JSON.parse(cartItemsRaw);
    }

    renderCartItems();
    renderSubtotal();
    // localStorage.setItem(KeyName, JSON.stringify(cart));
}

function increaseByOne(elementId) {
    const element = document.getElementById(elementId);
    const value = Number(element.innerHTML);
    element.innerHTML = value + 1;
}

function decreaseByOne(elementId) {
    const element = document.getElementById(elementId);
    const value = Number(element.innerHTML);

    if(value === 1){
        return; // END FUNCTION
    }

    element.innerHTML = value - 1;
}

function clearCart() {
    cart = [];
    localStorage.setItem(KeyName, "[]");
    updateCart();
}

// render cart items
function renderCartItems() {
    cartItemsEl.innerHTML = "";
    cart.forEach((product, index) => {
        cartItemsEl.innerHTML += `
            <div class="cart-item">

                        <div class="cart-item-info">

                            <img src="${product.imgSrc}">

                            <p style="text-align: center;"> ${product.name} </p>

                            <p style="text-align: center;"> ${product.price} </p>

                        </div>

                        <div class="units">

                            <button class="minus" onclick="decreaseByOne('count-${index}')"> - </button>
                            <div id="count-${index}" class="number"> 1 </div>
                            <button class="plus" onclick="increaseByOne('count-${index}')"> + </button>

                        </div>

                    </div>
        `
    });
}