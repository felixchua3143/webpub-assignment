const cartItemsEl = document.querySelector(".cart-items");

const KeyName = "CART";

// declares an empty array
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

    // iterates through each item in the cart
    cart.forEach((item) => {
        // check if the numbers of orders for that item is undefined
        if (item.orders === undefined) {
            // defaults the number of orders to 1
            item.orders = 1;
        }
    })

    console.log(cart);

    renderCartItems();
    renderSubtotal();
    // localStorage.setItem(KeyName, JSON.stringify(cart));z`x
}

// render cart items
function renderCartItems() {
    // clears the HTML of the cart
    cartItemsEl.innerHTML = "";

    // iterates through each item in the cart, with the index of each item
    cart.forEach((product, index) => {
        cartItemsEl.innerHTML += `

        <div class="cart-item">

            <div class="cart-item-info">

                <div class="cart-image" onclick="removeItemFromCart(${index})">
                    <img src="${product.imgSrc}">
                </div>

                    <p style="text-align: center;"> ${product.name} </p>
                    <p style="text-align: center;"> $${product.price} </p>

            </div>

            <div class="units">

                <button class="minus" onclick="decreaseByOne('count-${index}', ${index})"> - </button>
                <div id="count-${index}" class="number"> ${product.orders} </div>
                <button class="plus" onclick="increaseByOne('count-${index}', ${index})"> + </button>

            </div>

        </div>
        `
    });
}

function renderSubtotal() {
    // declares two variables
    let totalPrice = 0, totalItems = 0;

    // iterates through each item in the cart, with the index of each item
    cart.forEach((item, index) => {
        // gets the element by its ID and gets its inner HTML
        const rawValue = document.getElementById(`count-${index}`).innerHTML;

        // converts the raw value into a number
        let itemCount = Number(rawValue);

        // this is a failsafe, just in case if the value is not a number
        if (isNaN(itemCount)) {
            // defaults the item count to 1
            itemCount = 1;
        }

        // calculate the price of the item by the amount of items ordered
        // and add it to the total price
        totalPrice += item.price * itemCount;
    });

    // sets the inner HTML of the element with the ID to the total price
    document.getElementById("subtotal").innerHTML = `$${totalPrice}`;
}

function increaseByOne(elementId, index) {
    // gets the element by its ID
    const element = document.getElementById(elementId);

    // converts the inner HTML into a number
    let value = Number(element.innerHTML);

    // increases value by 1
    value = value + 1;

    // sets the number of orders for that item to the value
    cart[index].orders = value;

    // Set the inner HTML to the value
    element.innerHTML = value;

    insertNewCartDataIntoLocalStorage();

    // rerender the subtotal again
    renderSubtotal();
}

function decreaseByOne(elementId, index) {
    // gets the element by its ID
    const element = document.getElementById(elementId);

    // converts the inner HTML into a number
    let value = Number(element.innerHTML);

    // decreases value by 1
    value = value - 1;

    // checks if the value is 0
    if(value === 0) {
        // checks with the customer if they want to remove the item from the cart
        const didCustomerSayYes = confirm("Are you sure you want to remove this item from your cart?");
        if (didCustomerSayYes) {
            // removes the item from the cart
            cart.splice(
                index, // the index of the item inside the cart array
                1 // amount of items to be removed
            );

            // rerender the cart items
            renderCartItems();

            insertNewCartDataIntoLocalStorage();
        }
        else {
            value = 1;
        }
    }

    // sets the number of orders for that item to the value
    cart[index].orders = value;

    // decreases the value by 1 and then sets the inner HTML to the value
    element.innerHTML = value;

    insertNewCartDataIntoLocalStorage();

    // rerender the subtotal again
    renderSubtotal();
}

function insertNewCartDataIntoLocalStorage() {
    // convert the set of cart items to a string
    const cartItemsRaw = JSON.stringify(cart);

    // save the cart items to the browser's local storage
    localStorage.setItem(KeyName, cartItemsRaw);
}

function clearCart() {
    // sets the cart to an empty array
    cart = [];

    // sets the cart key in the browser's local storage to an empty array
    localStorage.setItem(KeyName, "[]");

    // reloads the cart data
    updateCart();
}