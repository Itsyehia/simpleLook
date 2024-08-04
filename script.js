function getProduct(){
    const products = [
        {
            "image": "https://basiclook.com/cdn/shop/files/BOO07117.jpg?v=1721597286&width=1440",
            "title": "Swim Shorts 1",
            "price": "$19.99",
            "description": "Super slim and comfy."
        },
        {
            "image": "https://basiclook.com/cdn/shop/files/BOO07117.jpg?v=1721597286&width=1440",
            "title": "Swim Shorts 2",
            "price": "$29.99",
            "description": "Super slim and comfy."
        },
        {
            "image": "https://basiclook.com/cdn/shop/files/BOO07100.jpg?v=1721597527&width=1440",
            "title": "Swim Shorts 3",
            "price": "$39.99",
            "description": "Super slim and comfy."
        },
        {
            "image": "https://basiclook.com/cdn/shop/files/BOO07078.jpg?v=1721597166&width=1440",
            "title": "Swim Shorts 4",
            "price": "$49.99",
            "description": "Super slim and comfy."
        },
        {
            "image": "https://basiclook.com/cdn/shop/files/BOO07117.jpg?v=1721597286&width=1440",
            "title": "Swim Shorts 5",
            "price": "$59.99",
            "description": "Super slim and comfy."
        }
    ];



    
    const productContainer = document.getElementById('products');
    
    
    if (productContainer) {
        products.forEach(product => {
            const productCard = `
                
    
                        <div class="card">
                            <img src="${product.image}" alt="${product.title}" style="width:100%">
                            <h1>${product.title}</h1>
                            <p class="price">${product.price}</p>
                            <p>${product.description}</p>
                            <p><button class="add-to-cart">Add to Cart</button></p>
                        </div>
                    
                
            `;
            productContainer.innerHTML += productCard;
        });
    } else {
        console.error('Product container element not found.');
    }
};

getProduct();



// java script for the burger menu when small page 

const header = document.querySelector("header");

window.addEventListener("scroll", function(){
    header.classList.toggle("sticky" , this.window.scrollY > 0 );
})

let menu = document.querySelector('#menu-icon');
let navmenu = document.querySelector('.navmenu');

menu.onclick = () =>{
    menu.classList.toggle('bx-x');
    navmenu.classList.toggle('open');
}

document.addEventListener('DOMContentLoaded', () => {
    ready();
});

function ready() {
    var addToCartButtons = document.querySelectorAll('.add-to-cart');
    addToCartButtons.forEach(button => {
        button.addEventListener('click', addToCartClicked);
    });
}

function addToCartClicked(event) {
    var button = event.target;
    var shopItem = button.parentElement.parentElement;
    var title = shopItem.getElementsByTagName('h1')[0].innerText;
    var price = shopItem.getElementsByClassName('price')[0].innerText;
    var imageSrc = shopItem.getElementsByTagName('img')[0].src;
    addItemToCart(title, price, imageSrc);
    window.location.href = 'cart.html';
}

function addItemToCart(title, price, imageSrc) {
    let cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    cartItems.push({ title, price, imageSrc });
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
}

