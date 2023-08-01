const productsElements = document.querySelector("products");

function renderProducts() {
    Prodcuts.forEach((product) => {
        productElements.innerHTML += '

        <div class="product-box" id="product-box-1">

            <div class="product-image-box">

                <img class="product-box" src="images/peripherals-item-1.png"> </img>

            </div>

            <div class="product-description">

                <p class="product-name-text"> CommonTech G230 Super Pro </p>
                <p class="product-price-text"> $100 </p>

            </div>

        </div> '

    });
}

renderProducts()