let noItems = document.querySelector('.noItems');
function showFavProduct(allProducts = []) {
    if(JSON.parse((localStorage.getItem('productsFav'))).length === 0) {
        noItems.innerHTML = "There Is No Favorite Items In Your Catr";
        noItems.style.display = "block";
    }

    let products = JSON.parse(localStorage.getItem('productsFav')) || allProducts;
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
                <button class="add-to-cart" onclick="removeFromFav(${product.id})" ">Remove From Favorite</button>
            </div>
        </div>
        `
    })
    document.querySelector(".products").innerHTML = productsUi.join('');
}
showFavProduct()
function removeFromFav(id) {
    if(localStorage.getItem("productsFav")) {
        let items = JSON.parse(localStorage.getItem("productsFav"))
        let filtredItems = items.filter((item) => item.id !== id);
        localStorage.setItem('productsFav', JSON.stringify(filtredItems))
        showFavProduct(filtredItems);
    }
}