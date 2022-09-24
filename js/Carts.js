let noItems = document.querySelector('.noItems');
function showCartProduct(allProducts = []) {
    if(JSON.parse((localStorage.getItem('productsInCart'))).length === 0) {
        noItems.innerHTML = "There Is No Items In Your Catr";
        noItems.style.display = "block";
    }

    let products = JSON.parse(localStorage.getItem('productsInCart')) || allProducts;
    let productsUi = products.map((product) => {
        return `
        <div class="product-item">
            <img src="${product.imgUrl}" class="product-img" alt="product">

            <div class="product-item-desc">
                <h2>${product.title}</h2>
                <p>${product.description}</p>
                <span>size: ${product.size}</span><br>
                <span> Quantity: ${product.qty}</span>
            </div>

            <div class="product-item-actions">
                <button class="add-to-cart" onclick="removeFromCart(${product.id})">Remove From Cart</button>
            </div>
        </div>
        `
    })
    document.querySelector(".products").innerHTML = productsUi.join("");
}
showCartProduct()
function removeFromCart(id) {
    if(localStorage.getItem("productsInCart")) {
        let items = JSON.parse(localStorage.getItem("productsInCart"))
        let filtredItems = items.filter((item) => item.id !== id);
        localStorage.setItem('productsInCart', JSON.stringify(filtredItems))
        showCartProduct(filtredItems);
    }
}