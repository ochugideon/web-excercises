import {cart, addToCart, showAddedIndicator} from '../script/cart.js';
import { products } from '../data/products.js';

let html = '';

products.forEach((product)=>{
  html += `<div class="product-container">
        <img src="${product.image}" alt="" class="product-img">
        <div class="product-info">
          <p class="product-name">${product.name}</p>
        <div class="ratings">
          <img src="/amazon project/images/ratings-img/star-rating-${product.ratings.star * 10}.JPG" alt="" class="stars">
          <p class="rating">${product.ratings.points}</p>
        </div>
        <div class="price">$${product.price}</div>
        <select name="qty" class="quantity js-quantity-selector${product.id}">
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
          <option value="7">7</option>
          <option value="8">8</option>
          <option value="9">9</option>
          <option value="10">10</option>
        </select>
        <div class="added-indicator">added!${product.name}</div>
        </div>
        <button class="add-btn js-add-to-cart" data-product-id="${product.id}">Add to cart</button>
      </div>`
})

document.querySelector('.products-grid').innerHTML = html;

document.querySelectorAll('.js-add-to-cart').forEach((button) => {
  button.addEventListener('click', () => {
    const productId = button.dataset.productId;

    const selectedQuantity = Number(document.querySelector(`.js-quantity-selector${productId}`).value)

    console.log(selectedQuantity)


    // const approvalSign = button.previousElementSibling;

    // approvalSign.style.display = 'block'

    // console.log(approvalSign.innerHTML)

    
   
    
    
    addToCart(productId, selectedQuantity)
    
  //  document.querySelector('.added-indicator').classList.add('.show-added-indicator')
    let cartQuantity = 0;
    cart.forEach((item)=> {
      // item.quanity = selectedQuantity;
      cartQuantity += item.quantity
    })
    document.querySelector('.js-cart-quantity').innerHTML = cartQuantity
    console.log(cart)
        
  })
});


