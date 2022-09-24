let productName = document.getElementById('productName');
let productDisc = document.getElementById('productDisc');
let productSize = document.getElementById('productSize');
let createBtn = document.getElementById('create');
let productsDom = document.getElementById('products')
let cartsProduct = document.querySelector('.carts-products ');
let badge = document.querySelector('.badge');
let shoppingCartIcon = document.querySelector(".shoppingCart");
let cartsProductDiv = document.querySelector('.carts-products div');

let myProducts;
if(localStorage.getItem('favProducts') !== null) {
    myProducts = JSON.parse(localStorage.getItem('favProducts') )
} else {
    myProducts = [];
}
createBtn.addEventListener('click', function(e) {
    e.preventDefault();
    let newProducts = {
        productName: productName.value,
        productDisc: productDisc.value,
        productSize: productSize.value,
        
    }
    if(productName.value !== '' && productSize.value !== '' ) {
        myProducts.push(newProducts);
    } else {
        alert('please fill all data')
    }
    
    console.log(myProducts)
    localStorage.setItem('favProducts', JSON.stringify(myProducts))
    showData(myProducts)
    clearData()   
})

function showData(myProducts) {
    let ourData = myProducts.map(product => {
        return `
        <div class="product-item">
            <img src="images/Hair-Oils.jpg" class="product-img" alt="product">

            <div class="product-item-desc">
                <a onclick="saveItemData(${product.id})">${product.productName}</a>
                <p>Lorem, ipsum dolor sit amet consectetur</p>
                <span>size: ${product.size}</span>
            </div>

            <div class="product-item-actions">
                <button class="add-to-cart" onclick="addToCart(${product.id})">Add To Cart</button>
                <i class="fa-solid fa-heart" style="color:${product.like === true ? "red" : ''}" onclick="addToFavorite(${product.id})" id="heartIcon"></i>

            </div>
        </div>
        `
    })
    productsDom.innerHTML = ourData.join('');
}

showData(myProducts)

//Check if there is a products in LocalStorage
let addedItem = localStorage.getItem("productsInCart")
? JSON.parse(localStorage.getItem("productsInCart"))
: [];

if(addedItem) {
    addedItem.map((item) => {
        cartsProductDiv.innerHTML += `<p>${item.title} ${item.qty}</p>`
    })
    badge.style.display = "block";
    badge.innerHTML = addedItem.length;
}

function addToCart(id) {
    if(localStorage.getItem('username') ){
        let product = myProducts.find((item) => item.id === id );
        let isProductInCart = addedItem.some(i => i.id === product.id);

        if(isProductInCart) {
           addedItem = addedItem.map(p => {
            if(p.id === product.id) p.qty += 1;
            return p;
           })
        } else {
            addedItem.push(product);
        }

        cartsProductDiv.innerHTML = "";
        addedItem.forEach(item => {
            cartsProductDiv.innerHTML += `<p>${item.title} ${item.qty}</p>`
        })
      
        let cartItems = document.querySelectorAll('.carts-products div p');
        //add choosen item in localstorage
    

        // let uniqueProducts = getUniqArr( addedItem, "id")
        localStorage.setItem('productsInCart', JSON.stringify(addedItem))

        badge.style.display = "block";
        badge.innerHTML = cartItems.length;
        
    } else {
        window.location = "login.html"
    }
}



function clearData() {
    productName.value = '';
    productDisc.value = '';
}

