const productsEL = document.querySelector(".wrapper")

function renderProducts(){
    products.forEach( (product) => {
        productsEL.innerHTML += `
            <div class="product-box" id="product-box-1">

                    <div class="product-image-box">

                        <img class="product-image" id="product-image-1"
                        src="images/peripherals-item-1.png">

                    </div>

                    <div class="product-description">

                        <p class="product-name-text"> CommonTech G230 Super Pro </p>
                        <p class="product-price-text"> $100 </p>

                    </div>

                    <button class="cart-button"> Add to cart </button>

                </div>
        `;
    });
}
renderProducts();