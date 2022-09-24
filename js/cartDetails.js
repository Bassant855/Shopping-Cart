let products = JSON.parse(localStorage.getItem('products'));
console.log(products)
let productId = localStorage.getItem('productId')
console.log(productId)

let productsDetails = products.find((product) => product.id == productId)
console.log(productsDetails)

let itemDetails = document.querySelector('.itemDetails');

itemDetails.innerHTML = `
    <img src="${productsDetails.imgUrl}" alt="oil">
    <h2>${productsDetails.title}</h2>
    <p>Lorem ipsum dolor sit amet.</p>
    <span>Size: ${productsDetails.size}</span><br>
    <span>Quantity: ${productsDetails.qty}</span>

`