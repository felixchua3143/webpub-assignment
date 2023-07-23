const productsEL = document.querySelector(".wrapper")

function renderProducts(){
    products.forEach( (product) => {
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

                </div>
        `;
    });
}
renderProducts();