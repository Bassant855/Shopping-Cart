
let productsDom = document.querySelector('.products');
let cartsProductDiv = document.querySelector('.carts-products div');
let cartsProduct = document.querySelector('.carts-products ');
let badge = document.querySelector('.badge');
let shoppingCartIcon = document.querySelector(".shoppingCart");
let products = JSON.parse( localStorage.getItem('products'));


console.log(products)
// Display Products in Ui
function showProducts(products) {

    let productsUi = products.map((product) => {
        return `
        <div class="product-item">
            <img src="${product.imgUrl}" class="product-img" alt="product">

            <div class="product-item-desc">
                <a onclick="saveItemData(${product.id})">${product.title}</a>
                <p>${product.description}</p>
                <span>size: ${product.size}</span>
            </div>

            <div class="product-item-actions">
                <button class="add-to-cart" onclick="addToCart(${product.id})">Add To Cart</button>
                <i class="fa-solid fa-heart" style="color:${product.like === true ? "red" : ''}" onclick="addToFavorite(${product.id})" id="heartIcon"></i>

            </div>
        </div>
        `
    })
    productsDom.innerHTML = productsUi.join('');
}
showProducts(products);

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

// add to cart

function addToCart(id) {
    if(localStorage.getItem('username') ){
        let product = products.find((item) => item.id === id );
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
// get id 
function getUniqArr(arr , filterType) {
    let unique = arr.map(item => item[filterType])
    .map((item, index, finalArr) => finalArr.indexOf(item) === index && index)
    .filter(item => arr[item])
    .map(item => arr[item])

    return unique
}
//Open Cart Menu
shoppingCartIcon.addEventListener('click', function() {
    if(cartsProductDiv.innerHTML !== '') {
        if(cartsProduct.style.display == "block") {
            cartsProduct.style.display = "none"
        } else {
            cartsProduct.style.display = "block"
        }
    }
    
})


function saveItemData(id) {
    localStorage.setItem('productId', id);
    window.location = "cartDetails.html"
}

//search 
let searchInput = document.getElementById('search')
searchInput.addEventListener('keyup', (e) => {
    search(e.target.value, JSON.parse(localStorage.getItem('products')))
    // when there is no value in search input
    if(e.target.value.trim() === "") {
        showProducts(JSON.parse(localStorage.getItem('products')))
    }
})

function search(title, myArray) {
    let arr = myArray.filter(item => item.title.indexOf(title) !== -1)
    // to show the element that we are searching for
    showProducts(arr);
}

// add to Favorite
//Check if there is a products in LocalStorage
let favoriteItem = localStorage.getItem("productsFav")
? JSON.parse(localStorage.getItem("productsFav"))
: [];

function addToFavorite(id) {
    if(localStorage.getItem('username') ){
        let choosenProduct = products.find((product) => product.id === id );
        choosenProduct.like = true;
        favoriteItem = [...favoriteItem, choosenProduct]
        let uniqueProducts = getUniqArr( favoriteItem, "id")
        localStorage.setItem('productsFav', JSON.stringify(uniqueProducts))
        products.map(item => {
            if(item.id === choosenProduct.id) {
                item.like = true;
            }
        } )
        localStorage.setItem('products', JSON.stringify(products))
        showProducts(products)
    } else {
        window.location = "login.html"
    }
}